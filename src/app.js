/* app.js — renders the playbook from the data layer and wires interactions.
   State: current phase (ph0..ph3) + current language (en|es). */
import { UI, PHASES, TRIGGERS, HOLDINGS, FRAMEWORK, CLASSIFICATION, CLOSING,
         MARKET, TAPE_LIVE, TAPE_SNAPSHOT, startTape } from "./data/index.js";

let lang = "en";
let activePhase = "ph2"; // Build-Up closed on the Jun 12 debut; Inclusion Window is now live
let QUOTES = {}; // sym → { price:Number, chg:Number, live:true }, filled by startTape
let countdownTimer = null; // ticking handle for the Phase-02 inclusion countdown

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
/* plain strings (e.g. monolingual dates) pass through unchanged; t() objects resolve by lang */
const tr = (field) =>
  typeof field === "string" ? field : field && field[lang] != null ? field[lang] : field?.en ?? "";

const STATE_CLASS = { hold: "st-hold", watch: "st-watch", sell: "st-sell", keep: "st-keep" };

const fmtPct = (n) => `${n > 0 ? "+" : ""}${n.toFixed(2)}%`;
const fmtNum = (v) =>
  typeof v === "number"
    ? v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : v; // snapshot strings pass through unchanged
const chgSpan = (chg, invert) => {
  if (chg == null) return "";
  const up = invert ? chg < 0 : chg >= 0;
  return `<span class="tchg ${up ? "up" : "down"}">${chg >= 0 ? "▲" : "▼"} ${fmtPct(chg)}</span>`;
};

let lastCellsHTML = ""; // guards against needless track repaints

/* Build the tape once (tag + track), then on every later call only patch the
   tag and the track's children. Replacing host.innerHTML would recreate the
   .tape-track element and restart its scroll animation — that was the ~1/min
   flicker. Keeping the same track element lets the animation run uninterrupted. */
function renderTape() {
  const host = $("#tape");
  if (!host) return;
  let live = 0;
  const total = MARKET.length + HOLDINGS.length;

  const market = MARKET.map((m) => {
    const q = QUOTES[m.sym];
    if (q) live++;
    const priceVal = q?.price ?? m.price;
    const chgVal = q ? q.chg : m.chg;
    const price = priceVal != null ? `<span class="tprice">${fmtNum(priceVal)}</span>` : "";
    const chg = chgVal != null
      ? chgSpan(chgVal, m.invert)
      : (m.tag ? `<span class="tchg new">${tr(m.tag)}</span>` : "");
    return `<span class="tcell"><span class="tsym">${m.sym}</span>${price}${chg}</span>`;
  }).join("");

  const book = HOLDINGS.map((h) => {
    const s = h.states[activePhase];
    const q = QUOTES[h.ticker];
    let px = "";
    if (q?.price != null) {
      live++;
      px = `<span class="tprice">${fmtNum(q.price)}</span>${chgSpan(q.chg)}`;
    }
    return `<span class="tcell"><span class="tsym">${h.ticker}</span>${px}` +
      `<span class="tchip ${STATE_CLASS[s.tone]}">${tr(s.label)}</span></span>`;
  }).join("");

  if (!host.querySelector(".tape-track")) {
    host.innerHTML = `<div class="tape-tag"></div><div class="tape-track"></div>`;
    lastCellsHTML = "";
  }

  host.querySelector(".tape-tag").innerHTML = live > 0
    ? `<span class="tlive"></span>${tr(TAPE_LIVE)} ${live}/${total} · ${new Date().toLocaleTimeString("en-GB")}`
    : tr(TAPE_SNAPSHOT);

  const cells = market + book;
  if (cells !== lastCellsHTML) {           // only touch the track when content actually changed
    host.querySelector(".tape-track").innerHTML = cells + cells;
    lastCellsHTML = cells;
  }
}

function renderHeader() {
  $("#sub").innerHTML = tr(UI.subtitle);
  $("#langLabel").textContent = tr(UI.langToggle);
}

function renderPhaseCards() {
  const host = $("#phases");
  host.innerHTML = "";
  PHASES.forEach((p) => {
    const card = el("button", `phase tone-${p.tone}${p.id === activePhase ? " active" : ""}`);
    card.dataset.phase = p.id;
    card.innerHTML = `
      <div class="pnum">${p.num}</div>
      <div class="pname">${tr(p.name)}</div>
      <div class="pdate mono">${tr(p.date)}</div>
      <div class="bar"></div>`;
    card.addEventListener("click", () => setPhase(p.id));
    host.appendChild(card);
  });
}

function renderDirective() {
  const p = PHASES.find((x) => x.id === activePhase);
  const host = $("#directive");
  host.className = `directive tone-${p.tone}`;

  const drivers = p.drivers
    .map(
      (d) => `
      <div class="driver">
        <div class="dl">${tr(d.label)}</div>
        <div class="dt">${tr(d.text)}</div>
      </div>`
    )
    .join("");

  host.innerHTML = `
    <div class="dir-icon">${p.icon}</div>
    <div class="dir-body">
      <div class="dir-eyebrow">${p.num} · ${tr(p.name)} <span class="dir-date mono">${tr(p.date)}</span></div>
      <div class="dir-headline">${tr(p.headline)}</div>

      <div class="block">
        <div class="block-label">${tr(UI.sectionConcept)}</div>
        <div class="block-text">${tr(p.concept)}</div>
      </div>

      <div class="block">
        <div class="block-label">${tr(UI.sectionDrivers)}</div>
        <div class="drivers">${drivers}</div>
      </div>

      <div class="block">
        <div class="callout"><span class="ci">▶ ${tr(UI.sectionAction)}</span><span class="block-text">${tr(p.action)}</span></div>
        <div class="callout"><span class="ci">◉ ${tr(UI.sectionWatch)}</span><span class="block-text">${tr(p.watch)}</span></div>
      </div>
    </div>`;
}

function renderTrigger() {
  const show = activePhase === "ph3";
  const host = $("#trigger");
  host.style.display = show ? "block" : "none";
  if (!show) return;
  host.innerHTML = `
    <h4>⚙ ${tr(UI.triggerTitle)}</h4>
    <ul class="trig-list">
      ${TRIGGERS.map((x) => `<li><span>${tr(x)}</span></li>`).join("")}
    </ul>`;
}

/* Live countdown to the NDX forced-buy auction. Pinned to the top of the page,
   always visible regardless of the selected phase — it reads off whichever phase
   owns a `countdown` field (Phase 02). A single setInterval is recreated on every
   render (phase/lang switch) so we never stack timers. */
function renderCountdown() {
  const host = $("#countdown");
  if (!host) return;
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }

  const p = PHASES.find((x) => x.countdown);
  const cd = p?.countdown;
  if (!cd) { host.style.display = "none"; host.innerHTML = ""; return; }

  host.style.display = "block";
  host.className = `countdown tone-${p.tone}`;

  const cell = (v, l) =>
    `<span class="cd-unit"><b>${String(v).padStart(2, "0")}</b><i>${l}</i></span>`;

  const paint = () => {
    const ms = new Date(cd.target).getTime() - Date.now();
    if (ms <= 0) {
      host.innerHTML =
        `<div class="cd-title">${tr(cd.title)}</div><div class="cd-done">${tr(cd.done)}</div>`;
      if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
      return;
    }
    const s = Math.floor(ms / 1000);
    const clock = cell(Math.floor(s / 86400), tr(UI.cdDays)) +
      cell(Math.floor((s % 86400) / 3600), tr(UI.cdHours)) +
      cell(Math.floor((s % 3600) / 60), tr(UI.cdMins)) +
      cell(s % 60, tr(UI.cdSecs));
    host.innerHTML =
      `<div class="cd-title">${tr(cd.title)}</div>` +
      `<div class="cd-clock mono">${clock}</div>` +
      `<div class="cd-label">${tr(cd.label)}</div>` +
      `<div class="cd-note">${tr(cd.note)}</div>`;
  };

  paint();
  countdownTimer = setInterval(paint, 1000);
}

function renderFramework() {
  $("#frameworkLabel").innerHTML = tr(UI.frameworkLabel);
  const cards = FRAMEWORK.cards
    .map(
      (c) => `
      <div class="fw-card">
        <div class="fw-cl">${tr(c.label)}</div>
        <div class="fw-ct">${tr(c.text)}</div>
      </div>`
    )
    .join("");
  $("#framework").innerHTML = `
    <div class="fw-lead">${tr(FRAMEWORK.lead)}</div>
    <div class="fw-cards">${cards}</div>`;
}

function renderClassification() {
  const groups = CLASSIFICATION.groups
    .map(
      (g) => `
      <div class="cls-card ${STATE_CLASS[g.tone]}">
        <div class="cls-label">${tr(g.label)}</div>
        <div class="cls-names mono">${g.names}</div>
        <div class="cls-note">${tr(g.note)}</div>
      </div>`
    )
    .join("");
  $("#classification").innerHTML = `
    <div class="cls-grid">${groups}</div>
    <div class="cls-conc">${tr(CLASSIFICATION.concentration)}</div>`;
}

function renderClosing() {
  $("#closingLabel").innerHTML = tr(UI.closingLabel);
  $("#closing").innerHTML = CLOSING.map((p) => `<p>${tr(p)}</p>`).join("");
}

function renderHoldings() {
  $("#holdingsLabel").innerHTML = tr(UI.holdingsLabel);
  const host = $("#holdings");
  host.innerHTML = "";
  HOLDINGS.forEach((h) => {
    const s = h.states[activePhase];
    const row = el("div", "hold");
    row.innerHTML = `
      <div class="hold-head">
        <div class="rank">${h.rank}</div>
        <div class="htick">${h.ticker}</div>
        <div class="hrole">${tr(h.role)}</div>
        <span class="hstate ${STATE_CLASS[s.tone]}">${tr(s.label)}</span>
        <span class="chev">▶</span>
      </div>
      <div class="hold-detail"><div class="hold-detail-inner">${tr(h.detail)}</div></div>`;
    row.querySelector(".hold-head").addEventListener("click", () => row.classList.toggle("open"));
    host.appendChild(row);
  });
}

function renderFooter() {
  $("#footerText").innerHTML = tr(UI.footer);
}

function setPhase(id) {
  activePhase = id;
  document.querySelectorAll(".phase").forEach((c) =>
    c.classList.toggle("active", c.dataset.phase === id)
  );
  renderDirective();
  renderTrigger();
  renderHoldings();
  renderTape();
}

function toggleLang() {
  lang = lang === "en" ? "es" : "en";
  document.documentElement.lang = lang;
  renderAll();
}

function renderAll() {
  renderTape();
  renderHeader();
  renderPhaseCards();
  renderDirective();
  renderTrigger();
  renderCountdown();
  renderFramework();
  renderHoldings();
  renderClassification();
  renderClosing();
  renderFooter();
}

document.addEventListener("DOMContentLoaded", () => {
  $("#langBtn").addEventListener("click", toggleLang);
  renderAll();
  startTape((quotes) => { QUOTES = quotes; renderTape(); });
});
