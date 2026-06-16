/* index.js — single import surface for all content.
   app.js imports from here; the actual data lives in the sibling modules. */
export { UI } from "./ui.js";
export { PHASES, TRIGGERS } from "./phases.js";
export { LOCKUP } from "./lockup.js";
export { HOLDINGS } from "./holdings.js";
export { FRAMEWORK, CLASSIFICATION, CLOSING } from "./narrative.js";
export { MARKET, TAPE_LIVE, TAPE_SNAPSHOT } from "./market.js";
export { startTape } from "./quotes.js";
