/* lockup.js — the SUPPLY-side mirror of the playbook.
   The demand story (forced index buying) exhausts at ~Jul 7 → Phase 03. The
   lockup is the supply story: a tiered early-release schedule from the S-1 that
   frees insider stock in waves after the debut. One tranche is PRICE-conditioned
   — the +30%/$175.50 mechanic is explained ONCE, in status.note (the canonical
   home); the other fields reference it. app.js renders a LIVE status pill off
   the SPCX tape quote. Terms pinned to the $135 IPO and the Jun 12 2026 debut. */
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
    "Your book trades the <b>demand</b> side (forced buying that exhausts ~Jul 7). The lockup is the <b>supply</b> side: a tiered schedule freeing insider stock in waves after debut. It <b>amplifies the downside</b> of the reversal.",
    "Tu cartera opera el lado de la <b>demanda</b> (compra forzada que se agota ~7 jul). El lockup es el lado de la <b>oferta</b>: un calendario escalonado que libera acciones de insiders en oleadas tras el debut. <b>Amplifica el lado bajista</b> de la reversión."
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
      "<b>Status (Jul 2): bonus at risk.</b> SPCX spiked above +30% Jun 14–17 (peaked $225.64) but the test is <b>5 of the 10 trading days ending on Q2 earnings</b> (~late Jul/early Aug) closing ≥$175.50 — not the post-debut days. It has recovered to <b>~$162 (~+20%, still below the trigger)</b>; unless it runs another ~8% into earnings, the 10% <b>rolls into the time tranches</b>. The base 20% + time tranches land regardless.",
      "<b>Estado (2 jul): bonus en riesgo.</b> SPCX picó sobre +30% del 14–17 jun (máximo $225,64) pero la prueba son <b>5 de los 10 días que terminan en resultados del 2T</b> (~fines jul/inicio ago) cerrando ≥$175,50 — no los días post-debut. Recuperó a <b>~$162 (~+20%, aún bajo el disparador)</b>; salvo que suba otro ~8% hacia los resultados, el 10% <b>pasa a los tramos de tiempo</b>. El 20% base + los tramos de tiempo igual aterrizan."
    ),
  },

  /* type drives the row accent: earn (earnings-gated) · price (conditional) · time (clockwork) · full */
  tranches: [
    {
      when: t("Q2 earnings · ~late Jul/Aug", "Resultados 2T · ~fines jul/ago"),
      pct: "20%", type: "earn",
      text: t(
        "Unconditional — 2nd trading day after Q2 results (quarter ends Jun 30).",
        "Incondicional — 2º día de cotización tras resultados del 2T (trimestre cierra 30 jun)."
      ),
    },
    {
      when: t("Q2 earnings · price-gated", "Resultados 2T · por precio"),
      pct: "+10%", type: "price",
      text: t(
        "Needs ≥$175.50 on 5 of 10 days into Q2 earnings. <b>At risk</b> — cleared Jun 14–17 (peaked $225), now back to ~$162 (below). Miss → rolls into the time tranches.",
        "Necesita ≥$175,50 en 5 de 10 días hacia resultados del 2T. <b>En riesgo</b> — se cumplió 14–17 jun (pico $225), ahora de vuelta en ~$162 (debajo). Si falla → pasa a los tramos de tiempo."
      ),
    },
    {
      when: t("Aug 21 · Sep 10 · Sep 25 · Oct 10 · Oct 25", "21 ago · 10 sep · 25 sep · 10 oct · 25 oct"),
      pct: "7% ×5", type: "time",
      text: t(
        "Day 70/90/105/120/135, <b>7% each = 35%</b>, regardless of price. Sep 10 / Oct 25 can cluster with the Q3 +28% cliff.",
        "Día 70/90/105/120/135, <b>7% c/u = 35%</b>, sin importar el precio. El 10 sep / 25 oct pueden agruparse con el abismo de +28% del 3T."
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
        "Standard 180-day expiry — the classic 'lockup unlock' supply cliff.",
        "Vencimiento estándar a 180 días — el clásico acantilado de oferta del 'unlock'."
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
    "Perverse: a <b>stronger SPCX unlocks more supply</b> to meet the rally. Read with Phase 03. <i>S-1 terms; not financial advice.</i>",
    "Perverso: un <b>SPCX más fuerte libera más oferta</b> para encontrarse con el rally. Léelo con la Fase 03. <i>Términos del S-1; no es asesoría financiera.</i>"
  ),
};
