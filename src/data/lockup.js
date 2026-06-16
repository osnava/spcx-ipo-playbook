/* lockup.js — the SUPPLY-side mirror of the playbook.
   The demand story (forced index buying) exhausts at ~Jul 7 → Phase 03. The
   lockup is the supply story: a tiered early-release schedule from the S-1 that
   lets insiders sell in waves *after* inclusion, layering selling pressure on
   top of the Phase-03 reversal. One tranche is PRICE-conditioned — the harder
   SPCX runs, the more stock unlocks to meet it — so app.js renders a LIVE status
   for it off the SPCX tape quote. Terms verified vs S-1 reporting (Motley Fool /
   Yahoo / Darrow), pinned to the $135 IPO price and the Jun 12 2026 debut. */
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
    "Your book trades the <b>demand</b> side — forced index buying that exhausts at inclusion (~Jul 7) and flips to Phase 03. The lockup is the <b>supply</b> side: a tiered schedule that frees insider stock in waves <i>after</i> the debut. It doesn't replace the reversal thesis — it <b>amplifies the downside</b> of it, and the timing overlaps the post-inclusion window.",
    "Tu cartera opera el lado de la <b>demanda</b> — la compra forzada por índices que se agota en la inclusión (~7 jul) y voltea a la Fase 03. El lockup es el lado de la <b>oferta</b>: un calendario escalonado que libera acciones de insiders en oleadas <i>después</i> del debut. No reemplaza la tesis de reversión — <b>amplifica su lado bajista</b>, y el timing se solapa con la ventana post-inclusión."
  ),

  status: {
    title: t("Price-conditioned bonus tranche · live", "Tramo bonus condicionado al precio · en vivo"),
    armed: t("IN THE MONEY", "EN DINERO"),
    below: t("BELOW TRIGGER", "BAJO EL DISPARADOR"),
    threshold: t("Bonus trigger", "Disparador bonus"),
    snapshot: t("snapshot", "instantánea"),
    vsIpo: t("vs IPO", "vs OPV"),
    armedNote: t(
      "SPCX is above the +30% line. If it closes here on <b>5 of the 10 trading days</b> into the Q2 earnings date, an extra <b>10%</b> of insider stock unlocks on top of the base 20% — extra supply right as Phase 03 opens.",
      "SPCX está sobre la línea de +30%. Si cierra aquí en <b>5 de los 10 días</b> de cotización hasta la fecha de resultados del 2T, se libera un <b>10%</b> extra de acciones de insiders sobre el 20% base — oferta adicional justo cuando abre la Fase 03."
    ),
    needs: t("Needs", "Necesita"),
    toArm: t("to arm the +10% bonus tranche.", "para armar el tramo bonus del +10%."),
    note: t(
      "Not evaluated continuously — the test is <b>5 of the 10 trading days ending on the Q2 earnings date</b> (~Aug). This dial just shows whether the +30% line is in reach today. If it misses, the 10% rolls forward into the later time tranches.",
      "No se evalúa de forma continua — la prueba son <b>5 de los 10 días de cotización que terminan en la fecha de resultados del 2T</b> (~ago). Este indicador solo muestra si la línea de +30% está al alcance hoy. Si falla, el 10% pasa a los tramos de tiempo posteriores."
    ),
  },

  /* type drives the row accent: earn (earnings-gated) · price (conditional) · time (clockwork) · full */
  tranches: [
    {
      when: t("Q2 earnings · ~Aug", "Resultados 2T · ~ago"),
      pct: "20%", type: "earn",
      text: t(
        "First tranche, <b>unconditional</b>. Releases right after the first public quarter (ending Jun 30) is reported.",
        "Primer tramo, <b>incondicional</b>. Se libera justo tras reportar el primer trimestre público (cierre 30 jun)."
      ),
    },
    {
      when: t("Q2 earnings · price-gated", "Resultados 2T · por precio"),
      pct: "+10%", type: "price",
      text: t(
        "<b>The 'market cap' trigger.</b> Only unlocks if SPCX closes <b>≥30% above the $135 IPO (≥$175.50)</b> on 5 of the 10 trading days into the Q2 date. Miss it → rolls into the time tranches below.",
        "<b>El disparador de 'capitalización'.</b> Solo se libera si SPCX cierra <b>≥30% sobre la OPV de $135 (≥$175.50)</b> en 5 de los 10 días de cotización hasta la fecha del 2T. Si falla → pasa a los tramos de tiempo de abajo."
      ),
    },
    {
      when: t("Days 70·90·105·120·135", "Días 70·90·105·120·135"),
      pct: "7% ×5", type: "time",
      text: t(
        "Five equal clockwork steps (~Aug 21 → Oct 25), <b>7% each = 35%</b>, regardless of price. Steady drip of supply through the fall.",
        "Cinco pasos iguales de reloj (~21 ago → 25 oct), <b>7% cada uno = 35%</b>, sin importar el precio. Goteo constante de oferta durante el otoño."
      ),
    },
    {
      when: t("Q3 earnings · ~Nov", "Resultados 3T · ~nov"),
      pct: "+28%", type: "earn",
      text: t(
        "Large step after the quarter ending Sep 30 is reported — the biggest single unconditional unlock before full expiry.",
        "Gran paso tras reportar el trimestre que cierra el 30 sep — el mayor desbloqueo incondicional antes del vencimiento total."
      ),
    },
    {
      when: t("180 days · ~Dec 9", "180 días · ~9 dic"),
      pct: "100%", type: "full",
      text: t(
        "Standard full lockup expiry — the remainder comes off restriction. The classic 'lockup unlock' supply cliff.",
        "Vencimiento estándar del lockup completo — el resto queda libre. El clásico acantilado de oferta del 'unlock'."
      ),
    },
    {
      when: t("Musk · separate", "Musk · aparte"),
      pct: "—", type: "time",
      text: t(
        "Elon Musk is <b>excluded from the early-release ladder</b> and sits under a separate, longer restriction — his stake is not part of these waves.",
        "Elon Musk está <b>excluido de la escalera de liberación anticipada</b> y queda bajo una restricción aparte, más larga — su participación no es parte de estas oleadas."
      ),
    },
  ],

  footnote: t(
    "Why it's perverse: the price-gated tranche means a <b>stronger SPCX unlocks more supply</b> to meet the rally. Read this alongside Phase 03 — the lockup waves are the supply that real price discovery has to absorb once forced demand is gone. <i>Reported S-1 terms; not financial advice.</i>",
    "Por qué es perverso: el tramo por precio implica que un <b>SPCX más fuerte libera más oferta</b> para encontrarse con el rally. Léelo junto a la Fase 03 — las oleadas del lockup son la oferta que el descubrimiento de precio real debe absorber cuando la demanda forzada se va. <i>Términos reportados del S-1; no es asesoría financiera.</i>"
  ),
};
