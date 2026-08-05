/* narrative.js — the regime/AI layer that frames the whole playbook.
   FRAMEWORK     : now a short list of operating principles (was lead + cards)
   CLASSIFICATION: signal vs noise grouping of the book + concentration note
   CLOSING       : one-line sign-off */
import { t } from "./i18n.js";

export const FRAMEWORK = {
  principles: [
    t(
      "<b>Heed the narrative</b> when cash flow or adoption actually validates it; ignore pure multiple expansion (the price rising with no improvement underneath).",
      "<b>Haz caso a la narrativa</b> cuando haya flujo de caja o adopción que la valide de verdad; ignora la pura expansión de múltiplo (el precio subiendo sin que mejore el negocio por debajo)."
    ),
    t(
      "<b>Forced demand always exhausts</b> — and the unwind doesn't have to wait for it (it didn't, Jun '26).",
      "<b>Toda demanda forzada se agota</b> — y el desarme no tiene que esperarla (no la esperó, jun '26)."
    ),
    t(
      "<b>Separate structural signal</b> (real revenue, compounding) <b>from liquidity noise</b> (a story with no cash behind it).",
      "<b>Separa la señal estructural</b> (revenue real, interés compuesto) <b>del ruido de liquidez</b> (un relato sin caja detrás)."
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
      note: t("HOLD base case — the Jul contagion unwound (broad tape at ATH). Trim only re-arms on a fresh broad-market break. ARKQ/EWY: opportunistic sells to fund SPCX adds. BTC: hold above the 200-week average, sell only on a confirmed break.", "Caso base MANTENER — la contagio de julio se deshizo (mercado amplio en máximos). El trim se re-arma solo con una nueva ruptura del mercado amplio. ARKQ/EWY: ventas oportunistas para financiar sumas a SPCX. BTC: mantén sobre la media de 200 semanas, vende solo con ruptura confirmada."),
    },
    {
      tone: "keep",
      label: t("Anchor / haven", "Ancla / refugio"),
      names: "ISAC · XAUUSD",
      note: t("Hold through the regime.", "Conservar a través del régimen."),
    },
  ],
  concentration: t(
    "All eight are <b>risk-on, correlated to tech/AI</b> (SMH + EWY overlap in semiconductors); BTC + URA widen the factor but stay risk-on. <b>The only real counterweight is gold.</b> <b>SPCX is now fully decoupled</b> — it falls alone on idiosyncratic lockup supply while the sleeve tracks the recovered broad tape. Its entry timing (the lockup waves to Dec) is uncorrelated with the rest of the book, which trades as one correlated tech/AI bloc.",
    "Las ocho son <b>risk-on, correlacionadas al tech/IA</b> (SMH + EWY se solapan en semiconductores); BTC + URA amplían el factor pero siguen risk-on. <b>El único contrapeso real es el oro.</b> <b>SPCX ahora está totalmente desacoplado</b> — cae solo por la oferta idiosincrática del lockup mientras el bloque sigue al mercado amplio recuperado. Su timing de entrada (las olas del lockup hasta dic) está descorrelacionado del resto de la cartera, que opera como un solo bloque tech/IA correlacionado."
  ),
};

export const CLOSING = [
  t(
    "Not a directional bet — an exercise in separating signal from noise. And, for SPCX specifically, of buying a long-term thesis into the weakness the schedule creates, not chasing it.",
    "No es una apuesta direccional — un ejercicio de separar señal de ruido. Y, para SPCX en concreto, de comprar una tesis de largo plazo en la debilidad que el calendario crea, no de perseguirla."
  ),
];
