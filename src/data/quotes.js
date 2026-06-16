/* quotes.js — the tape reads a SHARED, pre-fetched quote file instead of calling
   market APIs from the browser. A GitHub Action refreshes quotes.json on a
   schedule (see .github/workflows/quotes.yml) and publishes it to the
   `quotes-data` branch; raw.githubusercontent serves it with CORS + a CDN cache.
   So every visitor makes ONE request to a static file — never a third-party API —
   and it doesn't matter how many people open the page. The market.js snapshot
   renders first and stays the fallback if the file can't be reached. */
import { REFRESH_MS } from "./market.js";

/* Override at runtime if you fork: window.SPCX_QUOTES_URL = "…". */
const QUOTES_URL =
  (typeof window !== "undefined" && window.SPCX_QUOTES_URL) ||
  "https://raw.githubusercontent.com/osnava/spcx-ipo-playbook/quotes-data/quotes.json";

let timer = null;

/* Start the tape: read the shared file now, then re-read every REFRESH_MS.
   onUpdate(quoteMap) is called whenever fresh quotes arrive. */
export function startTape(onUpdate) {
  const load = async () => {
    if (document.visibilityState === "hidden") return; // don't poll a backgrounded tab
    try {
      const r = await fetch(QUOTES_URL, { cache: "no-store" });
      if (!r.ok) return; // 404 before the first publish → keep snapshot
      const data = await r.json();
      if (data?.quotes && Object.keys(data.quotes).length) onUpdate(data.quotes);
    } catch { /* network/CORS hiccup → keep last good / snapshot */ }
  };

  load();
  if (timer) clearInterval(timer);
  timer = setInterval(load, REFRESH_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") load();
  });
}
