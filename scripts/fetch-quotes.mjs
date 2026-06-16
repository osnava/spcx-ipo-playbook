/* fetch-quotes.mjs — runs in CI (GitHub Action), NOT in the browser.
   Fetches one batched Yahoo `spark` request for all equities/indices + Coinbase
   for BTC, then writes quotes.json. This is the single shared fetch that backs
   the tape for every visitor, so the browser never calls a market API and the
   number of users is irrelevant. Merges over the currently-published file so a
   partial failure (e.g. a Yahoo 429 on the runner) keeps the last-good values. */
import { writeFileSync } from "node:fs";
import { MARKET, BOOK_Q } from "../src/data/market.js";

const REPO = process.env.GITHUB_REPOSITORY || "osnava/spcx-ipo-playbook";
const DATA_BRANCH = "quotes-data";
const PUBLISHED_URL = `https://raw.githubusercontent.com/${REPO}/${DATA_BRANCH}/quotes.json`;
const TIMEOUT_MS = 10_000;

async function getJSON(url) {
  const ctrl = new AbortController();
  const to = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": "Mozilla/5.0 (spcx-quotes-bot)" },
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(to);
  }
}

// Yahoo `spark` — price + previous close for many symbols in one request.
async function yahooBatch(symbols) {
  const qs = symbols.map(encodeURIComponent).join(",");
  const url = `https://query1.finance.yahoo.com/v8/finance/spark?symbols=${qs}&range=2d&interval=1d`;
  const d = await getJSON(url);
  const out = {};
  for (const r of d?.spark?.result ?? []) {
    const node = r?.response?.[0];
    const meta = node?.meta;
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

async function coinbaseBTC() {
  const now = await getJSON("https://api.coinbase.com/v2/prices/BTC-USD/spot");
  const price = parseFloat(now?.data?.amount);
  if (!price) throw new Error("no price");
  let chg = null;
  try {
    const ymd = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    const p = await getJSON(`https://api.coinbase.com/v2/prices/BTC-USD/spot?date=${ymd}`);
    const prev = parseFloat(p?.data?.amount);
    if (prev) chg = (price / prev - 1) * 100;
  } catch { /* price-only is fine */ }
  return { price, chg, live: true };
}

// map every Yahoo symbol to the tape key the app expects (market sym / book ticker)
const ymap = new Map();
for (const m of MARKET) if (m.q) ymap.set(m.q, m.sym);
for (const [tk, cfg] of Object.entries(BOOK_Q)) if (cfg.q) ymap.set(cfg.q, tk);

const fresh = {};
try {
  const res = await yahooBatch([...ymap.keys()]);
  for (const [ysym, q] of Object.entries(res)) {
    const key = ymap.get(ysym);
    if (key) fresh[key] = q;
  }
  console.log(`yahoo: ${Object.keys(res).length}/${ymap.size} symbols`);
} catch (e) {
  console.error("yahoo batch failed:", e.message);
}

for (const [tk, cfg] of Object.entries(BOOK_Q)) {
  if (cfg.src === "cb") {
    try { fresh[tk] = await coinbaseBTC(); console.log("btc: ok"); }
    catch (e) { console.error("btc failed:", e.message); }
  }
}

// merge over the last published file so a partial failure keeps last-good values
let prev = {};
try {
  const cur = await getJSON(PUBLISHED_URL);
  prev = cur?.quotes ?? {};
} catch { /* first run / branch not created yet */ }

const merged = { ...prev, ...fresh };
if (Object.keys(merged).length === 0) {
  console.error("no quotes available — not writing an empty file");
  process.exit(0);
}

writeFileSync(
  "quotes.json",
  JSON.stringify({ updated: new Date().toISOString(), quotes: merged }, null, 2) + "\n"
);
console.log(`wrote quotes.json with ${Object.keys(merged).length} symbols (${Object.keys(fresh).length} fresh)`);
