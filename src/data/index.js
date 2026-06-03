/* index.js — single import surface for all content.
   app.js imports from here; the actual data lives in the sibling modules. */
export { UI } from "./ui.js";
export { PHASES, TRIGGERS } from "./phases.js";
export { HOLDINGS } from "./holdings.js";
export { FRAMEWORK, CLASSIFICATION, CLOSING } from "./narrative.js";
