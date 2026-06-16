/* ui.js — top-level interface strings (chrome, labels, footer). */
import { t } from "./i18n.js";

export const UI = {
  subtitle: t(
    "Phase-based hold / sell rules · keyed to the index-inclusion timeline",
    "Reglas de mantener / vender por fases · alineadas al calendario de inclusión en índices"
  ),
  langToggle: t("Español", "English"),
  cdDays: t("DAYS", "DÍAS"),
  cdHours: t("HRS", "HRS"),
  cdMins: t("MIN", "MIN"),
  cdSecs: t("SEC", "SEG"),
  sectionConcept: t("The idea", "La idea"),
  sectionDrivers: t("What's happening", "Qué está pasando"),
  sectionAction: t("Do this", "Haz esto"),
  sectionWatch: t("Watch for", "Vigila"),
  lockupLabel: t("Lockup supply schedule · the other side of the trade", "Calendario de oferta del lockup · el otro lado del trade"),
  frameworkLabel: t("Narrative discrimination framework", "Marco de discriminación de narrativas"),
  holdingsLabel: t("My real book · sell priority order", "Mi cartera real · orden de prioridad de venta"),
  closingLabel: t("How to read this", "Cómo leer esto"),
  triggerTitle: t(
    'Reversal confirmation — define "rolls over" before July',
    'Confirmación de reversión — define "darse la vuelta" antes de julio'
  ),
  footer: t(
    "Not financial advice. The reversal is a scenario, not a certainty — if SPCX keeps ripping, holding everything is the right call. The discipline is deciding triggers <b>now</b> so emotion doesn't decide later.",
    "No es asesoría financiera. La reversión es un escenario, no una certeza — si SPCX sigue subiendo, mantener todo es lo correcto. La disciplina es decidir los disparadores <b>ahora</b> para que la emoción no decida después."
  ),
};
