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
export const TAPE_SNAPSHOT = t("SNAPSHOT · 24 JUL '26", "INSTANTÁNEA · 24 JUL '26");

/* Snapshot = Jul 24 2026 (intraday ~13:00 ET). The slide kept going: SPCX
   broke the $135 IPO *close* on Jul 16 ($131.11, -3.08%), then kept setting
   52-week lows — now ~$112.69 (intraday low $110.85), cap ~$1.57T, down
   ~50% from the $225.64 peak. The sentiment floor — Starship Flight 13 —
   ABORTED at T-0 on Jul 16 (Raptors failed to ignite); the 3rd attempt is
   retargeted today, Jul 24. The "SPCX-only" read broke Jul 17 when SOX
   entered a BEAR MARKET (-3% day, -13% / 30d); it has deepened — Iran-war
   oil spiked further (Brent hit $100 on Houthi tanker attacks, Jul 23),
   Nikkei -2%+ on AI-capex doubts. The AI-capex trade is de-risking broadly
   — directly hitting the SMH/EWY sleeve. BTC faded to ~$63.9k, still near
   its 200W (~$62k), narrowing the divergence. The 27-of-33-Buy analyst wave
   (median PT ~$226, range to Raymond James $800; Morningstar dissenter
   FV ~$780B) still can't hold it; short sellers now +$15.5B since IPO
   (Ortex, Jul 23). Earnings confirmed Aug 4 → base 20% unlock ~Aug 6.
   The live quotes.json overrides these during market hours, fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "112.69", chg: -4.69, tag: t("BELOW IPO", "BAJO OPV") },
  { sym: "SPY",     q: "SPY",   chg: 0.47 },
  { sym: "QQQ",     q: "QQQ",   chg: -0.35 },
  { sym: "VIX",     q: "^VIX",  chg: -4.97, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,440.54", chg: 0.44 },
  { sym: "NASDAQ",  q: "^IXIC", price: "25,130", chg: -0.03 },
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
