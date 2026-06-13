/* narrative.js — the regime/AI layer that frames the whole playbook.
   FRAMEWORK     : the narrative-discrimination thesis (central section)
   CLASSIFICATION: signal vs noise grouping of the book + concentration note
   CLOSING       : "how to read this" sign-off */
import { t } from "./i18n.js";

export const FRAMEWORK = {
  lead: t(
    "The classic valuation books (DCF, P/E mean-reversion, 'high multiples = bubble') were written for a regime of expensive capital and linear growth. AI is rewriting unit economics — productivity, capital intensity, margins, and the speed of scaling.",
    "Los libros clásicos de valuación (DCF, reversión a la media de P/E, 'múltiplos altos = burbuja') se escribieron para un régimen de capital caro y crecimiento lineal. La IA está reescribiendo la economía unitaria — productividad, intensidad de capital, márgenes y velocidad de escalamiento."
  ),
  cards: [
    {
      label: t("But not everything expensive is justified", "Pero no todo lo caro está justificado"),
      text: t(
        "The skill isn't 'everything is a bubble' nor 'this time is different' — it's to <b>discriminate</b>: is the high valuation backed by real structural change (compounding revenue, a defensible moat, measurable productivity), or is it pure story + liquidity (no path to profit, forced demand, hype)?",
        "La habilidad no es 'todo es burbuja' ni 'esta vez es diferente' — es <b>discriminar</b>: ¿la valuación alta está respaldada por cambio estructural real (revenue compuesto, foso defendible, productividad medible), o es puro relato + liquidez (sin camino a rentabilidad, demanda forzada, hype)?"
      ),
    },
    {
      label: t("Decision rule", "Regla de decisión"),
      text: t(
        "You <b>heed the narrative when cash flow or adoption validates it</b>; you <b>ignore it when there's only multiple expansion with no fundamentals</b>. That single test is what this whole book is sorted by.",
        "A la narrativa <b>le haces caso cuando hay flujo de caja o adopción que la valida</b>; la <b>ignoras cuando solo hay expansión de múltiplo sin fundamento</b>. Esa única prueba es como está ordenada toda esta cartera."
      ),
    },
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
    "Concentration check: all eight positions are <b>risk-on, correlated to the tech/AI cycle</b> (SMH and EWY overlap in semis); BTC and URA widen the factor (global liquidity + energy) but stay risk-on. <b>The only real counterweight is gold.</b>",
    "Nota de concentración: las ocho posiciones son <b>risk-on, correlacionadas al ciclo tech/IA</b> (SMH y EWY se solapan en semis); BTC y URA amplían el factor (liquidez global + energía) pero siguen siendo risk-on. <b>El único contrapeso real es el oro.</b>"
  ),
};

export const CLOSING = [
  t(
    "Adapt to the new narratives without forgetting the past. The <b>past</b> teaches that forced demand and hype always revert; the <b>present</b> teaches that the economic regime has changed and the old multiples mislead in both directions.",
    "Adaptarse a las nuevas narrativas sin olvidar el pasado. El <b>pasado</b> enseña que la demanda forzada y el hype siempre revierten; el <b>presente</b> enseña que el régimen económico cambió y los múltiplos viejos engañan en ambas direcciones."
  ),
  t(
    "In a market where 'everything is a bubble' is consensus, the edge is separating <b>structural signal</b> (real AI productivity, compounding revenue) from <b>liquidity noise</b> (story with no cash). This playbook is an exercise in that discrimination — not a directional bet.",
    "En un mercado donde 'todo es burbuja' es consenso, el edge está en separar <b>señal estructural</b> (productividad IA real, revenue compuesto) de <b>ruido de liquidez</b> (relato sin caja). Este playbook es un ejercicio de esa discriminación — no una apuesta direccional."
  ),
];
