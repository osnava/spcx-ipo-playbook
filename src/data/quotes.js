/* quotes.js — live-quote fetch layer for the tape.
   Best-practice notes (why each piece exists):
     · keyless sources only (Yahoo + Coinbase) — nothing secret in a public repo
     · ONE batched Yahoo request for every equity/index (the v8 `spark` multi-symbol
       endpoint) instead of one call per ticker — was ~13 calls/min, now 1 call/10min,
       which keeps us well under Yahoo's rate limit (the old per-symbol burst is what
       tripped the 429s and froze the tape)
     · BTC stays on Coinbase (the original source that works for crypto)
     · localStorage cache w/ TTL  → reloads & phase clicks reuse data, no extra calls
     · single 10-min poll          → predictable, minimal request rate
     · pause when tab hidden       → no calls burned in the background
     · per-request AbortController timeout + per-source isolation (one failure can't
       sink the others)
     · any failure simply falls back to the snapshot in market.js — the strip never breaks. */
import { MARKET, BOOK_Q, REFRESH_MS, CACHE_TTL_MS, YAHOO_ENABLED } from "./market.js";

const CACHE_KEY = "spcx_tape_quotes_v1";
const TIMEOUT_MS = 8_000;

let inFlight = false;
let timer = null;
let lastRun = 0; // when we last committed to a fetch — throttles visibility-triggered runs

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

/* Yahoo `spark` — one request returns price + previous close for MANY symbols.
   Returns a map keyed by the Yahoo symbol (e.g. "SPY", "^VIX", "GC=F"). */
async function yahooBatch(symbols) {
  const qs = symbols.map(encodeURIComponent).join(",");
  const url = `https://query1.finance.yahoo.com/v8/finance/spark?symbols=${qs}&range=2d&interval=1d`;
  const d = await getJSON(url);
  const results = d?.spark?.result ?? [];
  const out = {};
  for (const r of results) {
    const node = r?.response?.[0];
    const meta = node?.meta;
    // price: prefer the live meta price, else the last non-null close in the series
    let price = meta?.regularMarketPrice;
    if (typeof price !== "number") {
      const closes = node?.indicators?.quote?.[0]?.close ?? node?.close ?? [];
      for (let i = closes.length - 1; i >= 0; i--) {
        if (typeof closes[i] === "number") { price = closes[i]; break; }
      }
    }
    if (typeof price !== "number") continue;
    const prev = meta?.chartPreviousClose ?? meta?.previousClose ?? null;
    out[r.symbol] = { price, chg: prev ? (price / prev - 1) * 100 : null, live: true };
  }
  return out;
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

/* Map every Yahoo symbol back to the tape key it feeds (market sym or book ticker). */
function yahooSymbolMap() {
  const map = new Map(); // yahooSymbol → tape key
  if (!YAHOO_ENABLED) return map; // ⛔ paused — make no Yahoo requests at all
  for (const m of MARKET) if (m.q) map.set(m.q, m.sym);
  for (const [tk, cfg] of Object.entries(BOOK_Q)) if (cfg.q) map.set(cfg.q, tk);
  return map;
}

/* Returns { quotes, yahooOk }. yahooOk = false on a rate-limit/failure so the
   poller can back off instead of hammering a 429. */
async function fetchAll() {
  const out = {};
  const ymap = yahooSymbolMap();
  let yahooOk = ymap.size === 0; // nothing to fetch counts as "fine"

  const jobs = [];
  if (ymap.size) {
    jobs.push(
      yahooBatch([...ymap.keys()])
        .then((res) => {
          for (const [ysym, quote] of Object.entries(res)) {
            const key = ymap.get(ysym);
            if (key) out[key] = quote;
          }
          yahooOk = true;
        })
        .catch(() => { yahooOk = false; }) // 429 / network → back off, keep snapshot
    );
  }
  for (const [tk, cfg] of Object.entries(BOOK_Q)) {
    if (cfg.src === "cb") {
      jobs.push(coinbaseBTC().then((q) => { out[tk] = q; }).catch(() => { /* snapshot */ }));
    }
  }

  await Promise.all(jobs);
  if (Object.keys(out).length) writeCache(out);
  return { quotes: out, yahooOk };
}

/* Start the tape: paint cached quotes immediately, then self-schedule polls.
   onUpdate(quoteMap) is called whenever fresh quotes arrive. On a Yahoo rate
   limit we don't retry hard — we wait longer each time (10→20→40→80 min) and
   drop back to 10 min once it clears. */
export function startTape(onUpdate) {
  const cached = readCache();
  if (cached) onUpdate(cached);

  let fails = 0; // consecutive Yahoo failures → exponential backoff
  const schedule = (ms) => { if (timer) clearTimeout(timer); timer = setTimeout(tick, ms); };

  async function tick() {
    // skip (and reuse cache) if a fetch is running, the tab is hidden, or we
    // fetched within the cache window — keeps tab-switching from spending calls
    if (!inFlight && document.visibilityState === "visible" && Date.now() - lastRun >= CACHE_TTL_MS) {
      inFlight = true;
      lastRun = Date.now();
      try {
        const { quotes, yahooOk } = await fetchAll();
        if (Object.keys(quotes).length) onUpdate(quotes);
        fails = yahooOk ? 0 : Math.min(fails + 1, 3);
      } catch {
        fails = Math.min(fails + 1, 3);
      } finally {
        inFlight = false;
      }
    }
    schedule(REFRESH_MS * 2 ** fails); // 10 → 20 → 40 → 80 min, then steady
  }

  tick();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") tick();
  });
}
