/* lockup.js — the SUPPLY-side mirror of the playbook, now two-sided.
   The demand story (forced index buying) exhausted at ~Jul 7 → Phase 03. The
   lockup is the supply story: a "lockup" is the post-IPO window when insiders
   can't sell; the S-1 frees that stock in waves after the debut. To a holder,
   each wave is downside risk. To a buyer, the SAME wave is a staged entry
   point (forced insider selling → weakness → accumulation window). One tranche
   is PRICE-conditioned — the +30%/$175.50 mechanic is explained ONCE, in
   status.note (the canonical home); the other fields reference it. app.js
   renders a LIVE status pill off the SPCX tape quote. Terms pinned to the $135
   IPO and the Jun 12 2026 debut. */
import { t } from "./i18n.js";

export const LOCKUP = {
  sym: "SPCX",
  ipoPrice: 135,         // S-1 IPO price
  triggerPct: 30,        // bonus tranche needs ≥ +30% over IPO …
  triggerPrice: 175.5,   // … i.e. ≥ $175.50

  /* shown on the 5th phase-row tile */
  tile: {
    num: t("SUPPLY", "OFERTA"),
    name: t("Lockup", "Lockup"),
  },

  concept: t(
    "Your book traded the <b>demand</b> side (forced buying — exhausted at the Jul 6 auction print). The lockup is the <b>supply</b> side: a tiered schedule freeing insider stock in waves after debut. To a holder it <b>amplifies the downside</b> of the reversal. To a buyer of the long-term thesis, the SAME ladder is a <b>staged accumulation calendar</b> — each wave is weakness to buy into, not just risk to fear.",
    "Tu cartera operó el lado de la <b>demanda</b> (compra forzada — agotada en el print de la subasta del 6 jul). El lockup es el lado de la <b>oferta</b>: un calendario escalonado que libera acciones de insiders en oleadas tras el debut. Para un tenedor <b>amplifica el lado bajista</b> de la reversión. Para un comprador de la tesis de largo plazo, la MISMA escalera es un <b>calendario de acumulación escalonado</b> — cada ola es debilidad para comprar, no solo riesgo a temer."
  ),

  status: {
    title: t("Price-conditioned bonus tranche · live", "Tramo bonus condicionado al precio · en vivo"),
    armed: t("IN THE MONEY", "EN DINERO"),
    below: t("BELOW TRIGGER", "BAJO EL DISPARADOR"),
    threshold: t("Bonus trigger", "Disparador bonus"),
    snapshot: t("snapshot", "instantánea"),
    vsIpo: t("vs IPO", "vs OPV"),
    armedNote: t(
      "SPCX is above +30%. Bonus needs <b>5 of the 10 days into Q2 earnings</b> ≥$175.50 — necessary, not yet sufficient.",
      "SPCX sobre +30%. El bonus necesita <b>5 de 10 días hacia resultados del 2T</b> ≥$175,50 — necesario, aún no suficiente."
    ),
    needs: t("Needs", "Necesita"),
    toArm: t("to arm the +10% bonus tranche.", "para armar el tramo bonus del +10%."),
    note: t(
      "<b>Status (Jul 12): bonus dead.</b> The +30% trigger ($175.50) is gone — SPCX broke to <b>~$138, near the $135 IPO price</b>, a fresh low under the Jun 23 $147.11 floor. It never reclaimed the $160.95 debut close, so the 10% <b>rolls into the time tranches</b>. The base 20% + time tranches land regardless. That same weakness is the accumulation window — see the SPCX row in the book.",
      "<b>Estado (12 jul): bonus muerto.</b> El disparador de +30% ($175,50) se fue — SPCX rompió a <b>~$138, cerca de la OPV de $135</b>, un nuevo mínimo bajo el suelo de $147,11 del 23 jun. Nunca recuperó el cierre de debut de $160,95, así que el 10% <b>pasa a los tramos de tiempo</b>. El 20% base + los tramos de tiempo igual aterrizan. Esa misma debilidad es la ventana de acumulación — mira la fila SPCX en la cartera."
    ),
  },

  /* type drives the row accent: earn (earnings-gated) · price (conditional) · time (clockwork) · full */
  tranches: [
    {
      when: t("Q2 earnings · ~Aug 6–11", "Resultados 2T · ~6–11 ago"),
      pct: "20%", type: "earn",
      text: t(
        "Unconditional — 2nd trading day after Q2 results. SpaceX will release earnings only via its website &amp; X (not the wires), so watch for the drop. <b>First accumulation scale.</b>",
        "Incondicional — 2º día de cotización tras los resultados del 2T. SpaceX publicará los resultados solo vía su web y X (no las agencias), así que atento al drop. <b>Primer tramo de acumulación.</b>"
      ),
    },
    {
      when: t("Q2 earnings · price-gated", "Resultados 2T · por precio"),
      pct: "+10%", type: "price",
      text: t(
        "Needed ≥$175.50 on 5 of 10 days into Q2 earnings. <b>Dead</b> — SPCX broke to ~$138 (at the $135 IPO), miles below the line. The 10% rolls into the time tranches below.",
        "Necesitaba ≥$175,50 en 5 de 10 días hacia resultados del 2T. <b>Muerto</b> — SPCX rompió a ~$138 (en la OPV de $135), muy por debajo de la línea. El 10% pasa a los tramos de tiempo de abajo."
      ),
    },
    {
      when: t("Aug 21 · Sep 10 · Sep 25 · Oct 10 · Oct 25", "21 ago · 10 sep · 25 sep · 10 oct · 25 oct"),
      pct: "7% ×5", type: "time",
      text: t(
        "Day 70/90/105/120/135, <b>7% each = 35%</b>, regardless of price. Sep 10 / Oct 25 can cluster with the Q3 +28% cliff. <b>Second accumulation scale.</b>",
        "Día 70/90/105/120/135, <b>7% c/u = 35%</b>, sin importar el precio. El 10 sep / 25 oct pueden agruparse con el abismo de +28% del 3T. <b>Segundo tramo de acumulación.</b>"
      ),
    },
    {
      when: t("Q3 earnings · ~Nov", "Resultados 3T · ~nov"),
      pct: "+28%", type: "earn",
      text: t(
        "After Q3 results (quarter ends Sep 30) — biggest single unlock before full expiry.",
        "Tras resultados del 3T (trimestre cierra 30 sep) — el mayor desbloqueo antes del vencimiento total."
      ),
    },
    {
      when: t("180 days · ~Dec 9", "180 días · ~9 dic"),
      pct: "100%", type: "full",
      text: t(
        "Standard 180-day expiry — the classic 'lockup unlock' supply cliff. <b>The largest, final accumulation window.</b>",
        "Vencimiento estándar a 180 días — el clásico acantilado de oferta del 'unlock'. <b>La mayor ventana final de acumulación.</b>"
      ),
    },
    {
      when: t("Musk · separate", "Musk · aparte"),
      pct: "—", type: "time",
      text: t(
        "<b>Excluded</b> from the ladder — separate 366-day lockup (~Jun 12, 2027).",
        "<b>Excluido</b> de la escalera — lockup aparte de 366 días (~12 jun, 2027)."
      ),
    },
  ],

  footnote: t(
    "Perverse: a <b>stronger SPCX unlocks more supply</b> to meet the rally. <b>The flip side:</b> each wave is also a staged entry point — buy the thesis into the weakness, don't chase strength. Read with the SPCX row in the book and with Phase 03. <i>S-1 terms; not financial advice.</i>",
    "Perverso: un <b>SPCX más fuerte libera más oferta</b> para encontrarse con el rally. <b>El reverso:</b> cada ola es también un punto de entrada escalonado — compra la tesis en la debilidad, no persigas la fuerza. Léelo con la fila SPCX en la cartera y con la Fase 03. <i>Términos del S-1; no es asesoría financiera.</i>"
  ),
};
