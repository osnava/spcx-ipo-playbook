/* narrative.js — the regime/AI layer that frames the whole playbook.
   FRAMEWORK     : now a short list of operating principles (was lead + cards)
   CLASSIFICATION: signal vs noise grouping of the book + concentration note
   CLOSING       : one-line sign-off */
import { t } from "./i18n.js";

export const FRAMEWORK = {
  principles: [
    t(
      "<b>Heed the narrative</b> when cash flow or adoption validates it; ignore pure multiple expansion.",
      "<b>Haz caso a la narrativa</b> cuando haya flujo de caja o adopción que la valide; ignora la pura expansión de múltiplo."
    ),
    t(
      "<b>Forced demand always exhausts</b> — and the unwind doesn't have to wait for it (it didn't, Jun '26).",
      "<b>Toda demanda forzada se agota</b> — y el desarme no tiene que esperarla (no la esperó, jun '26)."
    ),
    t(
      "<b>Separate structural signal</b> (real revenue, compounding) <b>from liquidity noise</b> (story with no cash).",
      "<b>Separa la señal estructural</b> (revenue real, compuesto) <b>del ruido de liquidez</b> (relato sin caja)."
    ),
  ],
};

export const CLASSIFICATION = {
  groups: [
    {
      tone: "sell",
      label: t("Noise / liquidity", "Ruido / liquidez"),
      names: "ARKQ · EWY",
      note: t("Sell for real if the thesis breaks.", "Vender de verdad si rompe la tesis."),
    },
    {
      tone: "watch",
      label: t("Structural / technical signal", "Señal estructural / técnica"),
      names: "SMH · ROBO · URA · BTC",
      note: t("Trim only; rebuy on a technical correction. BTC: hold the 200W, sell only on a confirmed break.", "Solo trim; recompra en corrección técnica. BTC: mantén la 200s, vende solo con ruptura confirmada."),
    },
    {
      tone: "keep",
      label: t("Anchor / haven", "Ancla / refugio"),
      names: "ISAC · XAUUSD",
      note: t("Hold through the regime.", "Conservar a través del régimen."),
    },
  ],
  concentration: t(
    "All eight are <b>risk-on, correlated to tech/AI</b> (SMH + EWY overlap in semis); BTC + URA widen the factor but stay risk-on. <b>The only real counterweight is gold.</b>",
    "Las ocho son <b>risk-on, correlacionadas al tech/IA</b> (SMH + EWY se solapan en semis); BTC + URA amplían el factor pero siguen risk-on. <b>El único contrapeso real es el oro.</b>"
  ),
};

export const CLOSING = [
  t(
    "Not a directional bet — an exercise in separating signal from noise.",
    "No es una apuesta direccional — un ejercicio de separar señal de ruido."
  ),
];
