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
export const TAPE_SNAPSHOT = t("SNAPSHOT · 22 JUN '26", "INSTANTÁNEA · 22 JUN '26");

/* Snapshot = Jun 22 2026 close (SPCX's −16% crash day). SPCX peaked at $225.64
   on Jun 16, then rolled over for 3 straight sessions (−5%, −3.6%, −16.4%) —
   now only ~+14% above the $135 IPO price. VIX/indices are Jun 22-23 prints
   (VIX estimated ~24 — risk-off elevated); the live quotes.json overrides these
   during market hours, so precision here is for the fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "154.60", chg: -16.43, tag: t("SLUMP · JUN 22", "CAÍDA · 22 JUN") },
  { sym: "SPY",     q: "SPY",   chg: -0.91 },
  { sym: "QQQ",     q: "QQQ",   chg: -2.45 },
  { sym: "VIX",     q: "^VIX",  price: "24.00", chg: 5.20, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,426.60", chg: -0.91 },
  { sym: "NASDAQ",  q: "^IXIC", price: "25,520.00", chg: -1.90 },
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
