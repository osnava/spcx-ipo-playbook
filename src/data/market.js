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
export const TAPE_SNAPSHOT = t("SNAPSHOT · 17 JUL '26", "INSTANTÁNEA · 17 JUL '26");

/* Snapshot = Jul 17 2026 (intraday ~12:40 ET). The slide accelerated: SPCX
   broke the $135 IPO *close* on Jul 16 ($131.11, -3.08%) — the first close
   below IPO — then made a fresh all-time low on Jul 17 (~$125.80, -4.05%;
   intraday low $122.12), cap ~$1.74T, down ~40% from the $225.64 peak. The
   catalyst that was supposed to floor sentiment — Starship Flight 13 —
   ABORTED at T-0 on Jul 16 (Raptors failed to ignite); retry retargeted
   Mon Jul 20. Two days ago the read was "idiosyncratic SPCX weakness"; that
   broke on Jul 17: SOX entered a BEAR MARKET (-3% day, -13% over 30d),
   Netflix -7% on a weak guide, China's Moonshot dropped Kimi K3 (open AI
   model), Nikkei -4%, and Iran-war oil spiked (Brent >$86). The AI-capex
   trade is de-risking broadly — directly hitting the SMH/EWY sleeve. BTC
   faded to ~$62.7k, back near its 200W (~$62k), narrowing the extreme
   divergence. The full 27/31-Buy analyst wave (avg PT ~$242, range to
   Raymond James $800; Morningstar dissenter FV ~$780B) still can't hold it;
   short sellers +$8.7B since IPO; ARK buying the dip. Earnings confirmed
   Aug 6 → base 20% unlock ~Aug 10. The live quotes.json overrides these
   during market hours, fallback only. */
export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "125.80", chg: -4.05, tag: t("BELOW IPO", "BAJO OPV") },
  { sym: "SPY",     q: "SPY",   chg: -0.66 },
  { sym: "QQQ",     q: "QQQ",   chg: -1.04 },
  { sym: "VIX",     q: "^VIX",  chg: 5.2, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,483.73", chg: -0.66 },
  { sym: "NASDAQ",  q: "^IXIC", price: "25,905", chg: -1.04 },
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
