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
    'Reversal confirmation — new lows even after Flight 13 succeeded (Jul 24) and Q2 earnings beat (Aug 4); fresh 52-week low $104.83 Aug 5, ~49% off the peak',
    'Confirmación de reversión — mínimos nuevos aun tras el éxito del vuelo 13 (24 jul) y el beat de resultados del 2T (4 ago); nuevo mínimo a 52 semanas $104,83 el 5 ago, ~49% por debajo del pico'
  ),
  footer: t(
    "Not financial advice. The reversal is a scenario, not a certainty — if SPCX keeps ripping, holding everything is the right call. The discipline is deciding triggers <b>now</b> so emotion doesn't decide later.",
    "No es asesoría financiera. La reversión es un escenario, no una certeza — si SPCX sigue subiendo, mantener todo es lo correcto. La disciplina es decidir los disparadores <b>ahora</b> para que la emoción no decida después."
  ),
};
