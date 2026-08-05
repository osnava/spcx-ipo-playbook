/* lockup.js — the SUPPLY-side mirror of the playbook, two-sided.
   The demand story (forced index buying) exhausted ~Jul 7 → Phase 03. The
   lockup is the supply story: a "lockup" = the post-IPO window when insiders
   can't sell; the S-1 frees that stock in waves after debut. To a holder,
   each wave is downside risk. To a buyer, the SAME wave is a staged entry
   point (forced insider selling → weakness → accumulation window). One tranche
   is PRICE-conditioned — the +30%/$175.50 mechanic is explained ONCE, in
   status.note (the canonical home); other fields reference it. app.js renders
   a LIVE status pill off the SPCX tape quote. Terms pinned to the $135 IPO
   and the Jun 12 2026 debut. Style: see AGENTS.md. */
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
    "Your book traded the <b>demand</b> side (forced buying — exhausted at the Jul 6 auction print). The lockup is the <b>supply</b> side: a tiered schedule freeing insider stock in waves. To a holder it <b>amplifies the downside</b>; to a buyer of the long-term thesis, the SAME ladder is a <b>staged accumulation calendar</b> — each wave is weakness to buy into, not just risk to fear.",
    "Tu cartera operó el lado de la <b>demanda</b> (compra forzada — agotada en el print de la subasta del 6 jul). El lockup es el lado de la <b>oferta</b>: un calendario escalonado que libera acciones de insiders en oleadas. Para un tenedor <b>amplifica el lado bajista</b>; para un comprador de la tesis de largo plazo, la MISMA escalera es un <b>calendario de acumulación escalonado</b> — cada ola es debilidad para comprar, no solo riesgo a temer."
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
      "<b>Status (Aug 5): fresh 52-wk low $104.83 (~$115.81)</b>, ~49% off the $225.64 peak — <b>even after Flight 13 succeeded Jul 24 and Q2 earnings beat Aug 4</b> (revenue +92%, AI +250%). <b>Valuation anchor: Morningstar fair value $62/share</b>, so at ~$116 SPCX is still <b>~1.9× FV</b> (down from 3.2× at the peak) — more downside is plausible. The bonus is long dead: the +30% trigger ($175.50) is gone; it never reclaimed the $160.95 debut close, so the 10% <b>rolls into the time tranches</b>. Base 20% (911.5M shares, ~$105B — ~140% of the ~639M IPO float) unlocks <b>TOMORROW, Aug 6</b> (2nd trading day after the Aug-4 beat); +455.8M (~$62B) price-gated and dead. <b>Aug 6 is wave 1, not the climax</b> — the ladder runs to the 180-day full unlock <b>~Dec 9</b> (float → ~40%); that Dec window, nearer fair value, is where accumulation sizing gets interesting. Musk sits to mid-2027.",
      "<b>Estado (5 ago): nuevo mínimo a 52 sem $104,83 (~$115,81)</b>, ~49% por debajo del pico de $225,64 — <b>incluso tras el éxito del vuelo 13 el 24 jul y el beat del 2T el 4 ago</b> (revenue +92%, IA +250%). <b>Ancla de valoración: valor razonable de Morningstar $62/acción</b>, así que a ~$116 SPCX sigue a <b>~1,9× VR</b> (bajó de 3,2× en el pico) — más caída es plausible. El bonus lleva tiempo muerto: el disparador de +30% ($175,50) se fue; nunca recuperó el cierre de debut de $160,95, así que el 10% <b>pasa a los tramos de tiempo</b>. El 20% base (911,5M acciones, ~$105B — ~140% del float de la OPV de ~639M) se libera <b>MAÑANA, 6 ago</b> (2º día tras el beat del 4 ago); +455,8M (~$62B) condicionado al precio y muerto. <b>El 6 ago es la ola 1, no el clímax</b> — la escalera llega al unlock total a 180 días <b>~9 dic</b> (float → ~40%); esa ventana de dic, más cerca del valor razonable, es donde el dimensionamiento de la acumulación se vuelve interesante. Musk queda hasta mediados de 2027."
    ),
  },

  /* type drives the row accent: earn (earnings-gated) · price (conditional) · time (clockwork) · full */
  tranches: [
    {
      when: t("Q2 earnings DONE · unlock TOMORROW Aug 6", "Resultados 2T HECHOS · unlock MAÑANA 6 ago"),
      pct: "20%", type: "earn",
      text: t(
        "Unconditional — 2nd trading day after Q2 results. <b>Earnings beat printed Aug 4 (revenue +92%, AI +250%) → unlock TOMORROW, Aug 6.</b> 911.5M shares, ~$105B (~140% of the ~639M IPO float). The stock made a fresh low <i>despite</i> the beat — pure supply. <b>Wave 1 of the ladder, not the climax</b> — weight accumulation toward the Dec 9 (180-day) exhaustion window nearer fair value ($62).",
        "Incondicional — 2º día tras los resultados del 2T. <b>El beat se imprimió el 4 ago (revenue +92%, IA +250%) → unlock MAÑANA, 6 ago.</b> 911,5M acciones, ~$105B (~140% del float de la OPV de ~639M). La acción marcó un nuevo mínimo <i>a pesar del</i> beat — pura oferta. <b>Ola 1 de la escalera, no el clímax</b> — pondera la acumulación hacia la ventana de agotamiento del 9 dic (180 días), más cerca del valor razonable ($62)."
      ),
    },
    {
      when: t("Q2 earnings · price-gated", "Resultados 2T · por precio"),
      pct: "+10%", type: "price",
      text: t(
        "Needed ≥$175.50 on 5 of 10 days into Q2 earnings. <b>Dead</b> — SPCX at a fresh 52-wk low Aug 5 ($104.83; ~$115.81), miles below the $135 IPO. 455.8M shares (~$62B) roll into the time tranches below.",
        "Necesitaba ≥$175,50 en 5 de 10 días hacia resultados del 2T. <b>Muerto</b> — SPCX en un nuevo mínimo a 52 semanas el 5 ago ($104,83; ~$115,81), muy por debajo de la OPV de $135. 455,8M acciones (~$62B) pasan a los tramos de tiempo de abajo."
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
    "Perverse: a <b>stronger SPCX unlocks more supply</b> to meet the rally. <b>Flip side:</b> each wave is also a staged entry — buy the thesis into the weakness, don't chase strength. Read with the SPCX row + Phase 03. <i>S-1 terms; not financial advice.</i>",
    "Perverso: un <b>SPCX más fuerte libera más oferta</b> para encontrarse con el rally. <b>Reverso:</b> cada ola es también una entrada escalonada — compra la tesis en la debilidad, no persigas la fuerza. Léelo con la fila SPCX + Fase 03. <i>Términos del S-1; no es asesoría financiera.</i>"
  ),
};
