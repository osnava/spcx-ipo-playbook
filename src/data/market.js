/* market.js — config for the top "tape" (Wall-Street-style scrolling ticker).
   Live values come from a SHARED quotes.json refreshed by a GitHub Action
   (scripts/fetch-quotes.mjs) — Yahoo `spark` for stocks/indices, Coinbase for
   BTC — which the browser reads via quotes.js. No browser ever calls a market
   API, so the user count is irrelevant. Each cell falls back to the SNAPSHOT
   values below (Jun 9 2026 close) until/unless the shared file resolves, so the
   strip always renders.

   The `q` / `src` fields below are consumed by the CI fetch script (not the
   browser) to know which symbols to pull.

   q   = Yahoo symbol (^ = index).  src "cb" = Coinbase.
   price/chg = fallback snapshot shown until/unless a live quote arrives.
   chg = same-day % (arrow/colour from its sign; VIX inverts — a rise is risk-off). */
import { t } from "./i18n.js";

export const REFRESH_MS = 600_000; // browser re-reads the shared quotes.json every 10 min (see quotes.js)

export const TAPE_LIVE     = t("LIVE", "EN VIVO");
export const TAPE_SNAPSHOT = t("SNAPSHOT · 7 JUL '26", "INSTANTÁNEA · 7 JUL '26");

/* Snapshot = Jul 7 2026 (NDX inclusion day). The Jul 6 forced-buy auction gave
   no pop — SPCX swung $155–168 and closed $160.42 while the Dow set a record
   (53,055.91). Day 1 IN the index it faded −5.2% to ~$152, breaking the $160.95
   debut close, even as the quiet period ended and six underwriters initiated at
   buy (GS $205, MS $300). The tape turned with it: Samsung AI-capex worries +
   a Reuters report that DeepSeek is building its own AI chip hit semis; Nasdaq
   led the decline. BTC is the diverger — reclaimed its 200W (~$64k vs ~$62k)
   on soft June jobs. The live quotes.json overrides these during market hours,
   so precision here is for the fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "152.14", chg: -5.16, tag: t("NDX DAY 1 · FADE", "DÍA 1 NDX · FADE") },
  { sym: "SPY",     q: "SPY",   chg: -0.24 },
  { sym: "QQQ",     q: "QQQ",   chg: -0.62 },
  { sym: "VIX",     q: "^VIX",  price: "15.65", chg: 0.51, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,519.44", chg: -0.24 },
  { sym: "NASDAQ",  q: "^IXIC", price: "25,960.45", chg: -0.62 },
];

/* book tickers → quote symbol, so each holding cell can show a live price
   alongside its phase-state chip. Symbols that can't resolve just stay
   chip-only — no fabricated numbers. */
export const BOOK_Q = {
  BTCUSDT: { src: "cb" },
  ARKQ:    { q: "ARKQ" },
  EWY:     { q: "EWY" },
  SMH:     { q: "SMH" },
  ROBO:    { q: "ROBO" },
  URA:     { q: "URA" },
  ISAC:    { q: "ISAC.L" },   // iShares Core MSCI ACWI UCITS (LSE, USD)
  XAUUSD:  { q: "GC=F" },     // COMEX gold front-month, a clean spot proxy
};
