/* ui.js — top-level interface strings (chrome, labels, footer). */
import { t } from "./i18n.js";

export const UI = {
  subtitle: t(
    "Phase-based hold / sell rules · keyed to the index-inclusion timeline",
    "Reglas de mantener / vender por fases · alineadas al calendario de inclusión en índices"
  ),
  langToggle: t("Español", "English"),
  /* tape freshness — shown next to the live dot; %m/%h are integer placeholders */
  ageLive: t("LIVE", "EN VIVO"),
  ageMin: t("UPDATED %m MIN AGO", "ACTUALIZADO HACE %m MIN"),
  ageHour: t("UPDATED %h HR AGO", "ACTUALIZADO HACE %h H"),
  ageStale: t("STALE", "DESFASADO"),
  sectionConcept: t("The idea", "La idea"),
  sectionDrivers: t("What's happening", "Qué está pasando"),
  sectionAction: t("Do this", "Haz esto"),
  sectionWatch: t("Watch for", "Vigila"),
  lockupLabel: t("Lockup supply schedule · the other side of the trade", "Calendario de oferta del lockup · el otro lado del trade"),
  frameworkLabel: t("Operating principles", "Principios operativos"),
  holdingsLabel: t("My real book · SPCX decoupled from the sleeve  (＋ SPCX: accumulate slowly into the lockup ladder)", "Mi cartera real · SPCX desacoplado del bloque  (＋ SPCX: acumular despacio en la escalera del lockup)"),
  bookCols: {
    asset: t("Asset", "Activo"),
    role: t("Role", "Rol"),
    action: t("Action", "Acción"),
    notes: t("Thesis", "Tesis"),
  },
  classLabel: t("Signal vs noise · concentration", "Señal vs ruido · concentración"),
  closingLabel: t("How to read this", "Cómo leer esto"),
  triggerTitle: t(
    'Reversal check — the Aug-6 unlock was ABSORBED day 1 (+6%); a squeeze (shorts 34% → 11%) drove SPCX +41% off the Aug-3 low back above the $135 IPO. The ladder runs on: next rung Aug 20',
    'Chequeo de reversión — el unlock del 6 ago se ABSORBIÓ el día 1 (+6%); un squeeze (cortos 34% → 11%) llevó a SPCX +41% desde el mínimo del 3 ago, de nuevo sobre la OPV de $135. La escalera sigue: próximo peldaño 20 ago'
  ),
  footer: t(
    "Not financial advice. The reversal is a scenario, not a certainty — if SPCX keeps ripping, holding everything is the right call. The discipline is deciding triggers <b>now</b> so emotion doesn't decide later.",
    "No es asesoría financiera. La reversión es un escenario, no una certeza — si SPCX sigue subiendo, mantener todo es lo correcto. La disciplina es decidir los disparadores <b>ahora</b> para que la emoción no decida después."
  ),
};
