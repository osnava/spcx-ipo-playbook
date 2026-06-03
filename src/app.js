/* app.js — renders the playbook from the data layer and wires interactions.
   State: current phase (ph0..ph3) + current language (en|es). */
import { UI, PHASES, TRIGGERS, HOLDINGS, FRAMEWORK, CLASSIFICATION, CLOSING } from "./data/index.js";

let lang = "en";
let activePhase = "ph1";

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const tr = (field) => (field && field[lang] != null ? field[lang] : field?.en ?? "");

const STATE_CLASS = { hold: "st-hold", watch: "st-watch", sell: "st-sell", keep: "st-keep" };

function renderHeader() {
  $("#sub").innerHTML = tr(UI.subtitle);
  $("#langLabel").textContent = tr(UI.langToggle);
  $("#catalysts").innerHTML = UI.catalysts
    .map((c) => `${tr(c.label)} <b>${c.date}</b>`)
    .join('<span class="sep">·</span>');
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
      <div class="dir-eyebrow">${p.num} · ${tr(p.name)}</div>
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
}

function toggleLang() {
  lang = lang === "en" ? "es" : "en";
  document.documentElement.lang = lang;
  renderAll();
}

function renderAll() {
  renderHeader();
  renderPhaseCards();
  renderDirective();
  renderTrigger();
  renderFramework();
  renderHoldings();
  renderClassification();
  renderClosing();
  renderFooter();
}

document.addEventListener("DOMContentLoaded", () => {
  $("#langBtn").addEventListener("click", toggleLang);
  renderAll();
});
