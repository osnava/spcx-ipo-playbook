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
export const TAPE_SNAPSHOT = t("SNAPSHOT · 17 AGO '26", "INSTANTÁNEA · 17 AGO '26");

/* Snapshot = Aug 17 2026 (intraday). The Aug 6 unlock (911.5M shares) was
   ABSORBED on day 1 — +6% in heavy volume — then a short squeeze (short
   interest 34% → ~11% of float, S3 Aug 12) carried SPCX from the $104.83
   record low (Aug 3) to ~$148: +41%, back ABOVE the $135 IPO, cap ~$1.9T.
   Who met the wave (13F season): PIF +154M shares, Harvard $2.2B, Blackstone,
   Atreides; Nvidia disclosed a $20.97B stake Aug 17; Musk filed 48.4%
   (locked to Jun '27); UBS set $210 on AI/tokenization demand. The supply
   ladder runs on: up to 319M shares Aug 20, ~700M Sep, ~700M Oct, +28% at
   Q3 earnings (~Nov), 180-day full Dec 9 — insiders can now sell into a
   squeezed price. Macro: S&P at records (~7,799 Aug 14) on cool CPI/PPI
   (Sept hike odds ~33%); Iran ceasefire EXPIRED Aug 16 — Brent back to
   ~$89–91, gold ~$4,470, VIX ~15. BTC ~$64k, pinned to its 200-wk ~$62k.
   The live quotes.json overrides these during market hours, fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "147.93", chg: 5.66, tag: t("ABOVE IPO", "SOBRE OPV") },
  { sym: "SPY",     q: "SPY",   chg: -0.36 },
  { sym: "QQQ",     q: "QQQ",   chg: -0.08 },
  { sym: "VIX",     q: "^VIX",  chg: 8.07, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,756.42", chg: -0.38 },
  { sym: "NASDAQ",  q: "^IXIC", price: "26,664.27", chg: -0.24 },
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
