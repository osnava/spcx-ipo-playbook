/* market.js — config for the top "tape" (Wall-Street-style scrolling ticker).
   Live values come from a SHARED quotes.json refreshed by a GitHub Action
   (scripts/fetch-quotes.mjs) — Yahoo `spark` for stocks/indices, Coinbase for
   BTC — which the browser reads via quotes.js. No browser ever calls a market
   API, so the user count is irrelevant. Each cell falls back to the SNAPSHOT
   values below (the date stamped in TAPE_SNAPSHOT below) until/unless the shared file resolves, so the
   strip always renders.

   The `q` / `src` fields below are consumed by the CI fetch script (not the
   browser) to know which symbols to pull.

   q   = Yahoo symbol (^ = index).  src "cb" = Coinbase.
   price/chg = fallback snapshot shown until/unless a live quote arrives.
   chg = same-day % (arrow/colour from its sign; VIX inverts — a rise is risk-off). */
import { t } from "./i18n.js";

export const REFRESH_MS = 600_000; // browser re-reads the shared quotes.json every 10 min (see quotes.js)

export const TAPE_LIVE     = t("LIVE", "EN VIVO");
export const TAPE_SNAPSHOT = t("SNAPSHOT · 5 AGO '26", "INSTANTÁNEA · 5 AGO '26");

/* Snapshot = Aug 5 2026 (intraday). Both binary catalysts resolved WELL, yet
   SPCX made fresh lows — proof supply now dominates fundamentals. Flight 13
   SUCCEEDED Jul 24 (3rd attempt: 20 Starlink V3 deployed, upper stage intact
   after splashdown — a first). Q2 earnings Aug 4 BEAT: revenue $7.8B (+92%
   YoY), net loss narrowed to $541M (from $1B), Starlink +66%, AI +250%
   (Anthropic/Google compute deals); CFO Johnsen pegged a $100B ARR run-rate
   by year-end. Stock still fell — +9.4% intraday then −7.5% after-hours,
   gapping to a fresh 52-week low $104.83 Aug 5 (~$115.81, cap ~$1.5T, ~49%
   off the $225.64 peak). Cause: the 911.5M-share base-20% unlock lands
   TOMORROW, Aug 6. Shorts crowded to 219.3M shares / ~$24.6B — 34% of float,
   > Tesla's dollar short (S3, Jul 29); Morgan Stanley reiterated $300. The
   broad market RECOVERED as Iran-war oil eased (Trump stood down Aug 3;
   Brent ~$83.77, rebounding >$80 on a Houthi-Saudi attack) — S&P ~7,747
   toward ATH, Nasdaq ~26,585 — yet SPCX fell ALONE (chips/SOX still lag):
   pure idiosyncratic supply, thesis intact. BTC ~$64k (back on its 200-wk
   ~$62k); gold ~$4,071. Earnings beat = a CORRECTION (buy), not a break
   (exit) → Aug 6 = first SPCX accumulation scale. The live quotes.json
   overrides these during market hours, fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "115.81", chg: -7.60, tag: t("BELOW IPO", "BAJO OPV") },
  { sym: "SPY",     q: "SPY",   chg: 1.80 },
  { sym: "QQQ",     q: "QQQ",   chg: 2.50 },
  { sym: "VIX",     q: "^VIX",  chg: -5.00, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,747.47", chg: 1.93 },
  { sym: "NASDAQ",  q: "^IXIC", price: "26,584.99", chg: 2.59 },
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
