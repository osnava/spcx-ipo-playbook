/* market.js — config for the top "tape" (Wall-Street-style scrolling ticker).
   The tape is LIVE where the browser can reach a free, keyless, CORS-enabled
   quote source (see quotes.js): Yahoo Finance's chart endpoint for stocks /
   indices, Coinbase for BTC. Each cell falls back to the SNAPSHOT values below
   (Jun 9 2026 close) when a fetch fails — so the strip always renders, and the
   tag honestly reports how many cells are actually live.

   Why no API key: this is a public static repo, so embedding a key would leak
   it. Keyless endpoints + caching + a slow poll keep us well inside rate limits.

   q   = Yahoo symbol (^ = index).  src "cb" = Coinbase.
   price/chg = fallback snapshot shown until/unless a live quote arrives.
   chg = same-day % (arrow/colour from its sign; VIX inverts — a rise is risk-off). */
import { t } from "./i18n.js";

export const REFRESH_MS   = 60_000; // poll once a minute — ample for a playbook, gentle on the API
export const CACHE_TTL_MS = 55_000; // serve cached quotes within this window (avoids redundant calls)
export const FETCH_POOL   = 4;      // max concurrent requests (don't burst the endpoint)

export const TAPE_LIVE     = t("LIVE", "EN VIVO");
export const TAPE_SNAPSHOT = t("SNAPSHOT · 9 JUN '26", "INSTANTÁNEA · 9 JUN '26");

export const MARKET = [
  { sym: "SPCX",    q: "SPCX",  price: "135.00", tag: t("IPO JUN 12", "OPV 12 JUN") },
  { sym: "SPY",     q: "SPY",   chg: -0.26 },
  { sym: "QQQ",     q: "QQQ",   chg: -0.97 },
  { sym: "VIX",     q: "^VIX",  price: "20.88", chg: 5.08, invert: true },
  { sym: "S&P 500", q: "^GSPC", price: "7,386.65", chg: -0.26 },
  { sym: "NASDAQ",  q: "^IXIC", price: "25,678.82", chg: -0.97 },
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
