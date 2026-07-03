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
export const TAPE_SNAPSHOT = t("SNAPSHOT · 1 JUL '26", "INSTANTÁNEA · 1 JUL '26");

/* Snapshot = Jul 1 2026 close. SPCX bottomed at $147.11 on Jun 23 (its all-time
   low), then recovered on a 3.5× oversubscribed $25B bond (~$90B orders) + ARK
   buying + fresh Street coverage — back to ~$162, above its $160.95 debut close,
   heading into the Jul 7 Nasdaq-100 inclusion. Risk-off has UNWOUND: VIX ~16.6
   (was ~24 Jun 22), S&P/Dow near records, Q2 the strongest quarter since 2020.
   The odd one out is BTC: it wicked to a 652-day low (~$58k) then bounced back
   above $60k (still under its 200W ~$62k) as long-term holders re-accumulated.
   The live quotes.json overrides these during market hours, so precision here is
   for the fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "162.00", chg: 2.83, tag: t("REBOUND · PRE-NDX", "REBOTE · PRE-NDX") },
  { sym: "SPY",     q: "SPY",   chg: -0.22 },
  { sym: "QQQ",     q: "QQQ",   chg: -0.66 },
  { sym: "VIX",     q: "^VIX",  price: "16.59", chg: 0.85, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,483.23", chg: -0.22 },
  { sym: "NASDAQ",  q: "^IXIC", price: "26,040.03", chg: -0.66 },
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
