/* ui.js — top-level interface strings (chrome, labels, footer). */
import { t } from "./i18n.js";

export const UI = {
  subtitle: t(
    "Phase-based hold / sell rules · keyed to the index-inclusion timeline",
    "Reglas de mantener / vender por fases · alineadas al calendario de inclusión en índices"
  ),
  langToggle: t("Español", "English"),
  catalysts: [
    { label: t("S&P RULE", "REGLA S&P"), date: "JUN 8" },
    { label: t("DEBUT", "DEBUT"), date: "~JUN 12" },
    { label: t("FOMC", "FOMC"), date: "JUN 16–17" },
    { label: t("FAST-ENTRY", "ENTRADA RÁPIDA"), date: "~JUL 3–7" },
  ],
  sectionConcept: t("The idea", "La idea"),
  sectionDrivers: t("What's happening", "Qué está pasando"),
  sectionAction: t("Do this", "Haz esto"),
  sectionWatch: t("Watch for", "Vigila"),
  holdingsLabel: t("Holdings · sell priority order", "Posiciones · orden de prioridad de venta"),
  triggerTitle: t(
    'Reversal confirmation — define "rolls over" before July',
    'Confirmación de reversión — define "darse la vuelta" antes de julio'
  ),
  footer: t(
    "Not financial advice. The reversal is a scenario, not a certainty — if SPCX keeps ripping, holding everything is the right call. The discipline is deciding triggers <b>now</b> so emotion doesn't decide later.",
    "No es asesoría financiera. La reversión es un escenario, no una certeza — si SPCX sigue subiendo, mantener todo es lo correcto. La disciplina es decidir los disparadores <b>ahora</b> para que la emoción no decida después."
  ),
};
