/* quotes.js — live-quote fetch layer for the tape.
   Best-practice notes (why each piece exists):
     · keyless sources only (Yahoo chart + Coinbase) — nothing secret in a public repo
     · localStorage cache w/ TTL  → reloads & phase clicks reuse data, no extra calls
     · single 60s poll            → predictable, low request rate
     · pause when tab hidden      → no calls burned in the background
     · throttled concurrency pool → never burst the endpoint
     · per-request AbortController timeout + Promise-isolated failures (allSettled-style)
     · any failure simply falls back to the snapshot in market.js — the strip never breaks. */
import { MARKET, BOOK_Q, REFRESH_MS, CACHE_TTL_MS, FETCH_POOL } from "./market.js";

const CACHE_KEY = "spcx_tape_quotes_v1";
const TIMEOUT_MS = 8_000;

let inFlight = false;
let timer = null;

async function getJSON(url) {
  const ctrl = new AbortController();
  const to = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(url, { signal: ctrl.signal, cache: "no-store" });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(to);
  }
}

// Yahoo Finance chart endpoint — same data yfinance reads, reachable without a key.
async function yahoo(sym) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=2d`;
  const d = await getJSON(url);
  const m = d?.chart?.result?.[0]?.meta;
  const price = m?.regularMarketPrice;
  if (typeof price !== "number") throw new Error("no price");
  const prev = m.chartPreviousClose ?? m.previousClose ?? null;
  return { price, chg: prev ? (price / prev - 1) * 100 : null, live: true };
}

// Coinbase spot — fully CORS-enabled & keyless; second call gets yesterday for the % move.
async function coinbaseBTC() {
  const now = await getJSON("https://api.coinbase.com/v2/prices/BTC-USD/spot");
  const price = parseFloat(now?.data?.amount);
  if (!price) throw new Error("no price");
  let chg = null;
  try {
    const ymd = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    const prevd = await getJSON(`https://api.coinbase.com/v2/prices/BTC-USD/spot?date=${ymd}`);
    const prev = parseFloat(prevd?.data?.amount);
    if (prev) chg = (price / prev - 1) * 100;
  } catch { /* price-only is fine */ }
  return { price, chg, live: true };
}

// Run async task factories `n` at a time; returns a sym→quote map of the successes.
async function runPool(tasks, n) {
  const out = {};
  let i = 0;
  const worker = async () => {
    while (i < tasks.length) {
      const { key, fn } = tasks[i++];
      try { out[key] = await fn(); } catch { /* leave to snapshot fallback */ }
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, tasks.length) }, worker));
  return out;
}

function readCache() {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (c && Date.now() - c.t < CACHE_TTL_MS) return c.q;
  } catch { /* ignore */ }
  return null;
}
function writeCache(q) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), q })); } catch { /* ignore */ }
}

function buildTasks() {
  const tasks = [];
  for (const m of MARKET) if (m.q) tasks.push({ key: m.sym, fn: () => yahoo(m.q) });
  for (const [tk, cfg] of Object.entries(BOOK_Q)) {
    if (cfg.src === "cb") tasks.push({ key: tk, fn: () => coinbaseBTC() });
    else if (cfg.q) tasks.push({ key: tk, fn: () => yahoo(cfg.q) });
  }
  return tasks;
}

async function fetchAll() {
  const q = await runPool(buildTasks(), FETCH_POOL);
  if (Object.keys(q).length) writeCache(q);
  return q;
}

/* Start the tape: paint cached quotes immediately, then poll.
   onUpdate(quoteMap) is called whenever fresh quotes arrive. */
export function startTape(onUpdate) {
  const cached = readCache();
  if (cached) onUpdate(cached);

  const run = async () => {
    if (inFlight || document.visibilityState !== "visible") return;
    inFlight = true;
    try {
      const q = await fetchAll();
      if (Object.keys(q).length) onUpdate(q);
    } catch { /* keep last good / snapshot */ }
    finally { inFlight = false; }
  };

  run();
  if (timer) clearInterval(timer);
  timer = setInterval(run, REFRESH_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") run();
  });
}
