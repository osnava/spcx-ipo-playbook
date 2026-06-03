/* holdings.js — the eight positions and their per-phase state.
   states[phaseId] = { label, tone }  where tone ∈ hold|watch|sell|keep
   Sell order (Phase 03): BTC → ARKQ → EWY (noise, cut for real)
                          → SMH → ROBO → URA (structural signal, trim only)
                          → keep ISAC → stagger into gold. */
import { t } from "./i18n.js";

const hold  = (l) => ({ label: l || t("HOLD", "MANTENER"), tone: "hold" });
const watch = (l) => ({ label: l, tone: "watch" });
const sell  = (l) => ({ label: l, tone: "sell" });
const keep  = (l) => ({ label: l, tone: "keep" });
const trim  = (l) => ({ label: l, tone: "watch" });

const FLUSH = t("FLUSH RISK", "RIESGO PURGA");
const WATCH = t("WATCH", "VIGILAR");

export const HOLDINGS = [
  {
    rank: "1", ticker: "BTCUSDT",
    role: t("Global liquidity gauge · not AI", "Termómetro de liquidez global · no IA"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 1st", "VENDER 1º")) },
    detail: t(
      "A gauge of <b>global liquidity, not the AI narrative</b>. It falls first and hardest in any drain. <b>Sell it first</b> at/after the inclusion peak — and use it as an <b>early signal</b> that the reversal has begun.",
      "Un termómetro de <b>liquidez global, no de la narrativa IA</b>. Cae primero y más fuerte en cualquier drenaje. <b>Véndelo primero</b> en/tras el pico de inclusión — y úsalo como <b>señal adelantada</b> de que la reversión empezó."
    ),
  },
  {
    rank: "2", ticker: "ARKQ",
    role: t("Noise/story · pre-profit duration", "Ruido/relato · duración pre-rentable"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 2nd", "VENDER 2º")) },
    detail: t(
      "Pure story: <b>pre-profit names, all duration</b>, and it <b>barely holds SpaceX</b> so there's no direct IPO upside. Cut aggressively if the thesis breaks — this is noise, not signal.",
      "Puro relato: <b>nombres pre-rentables, pura duración</b>, y <b>apenas tiene SpaceX</b> así que no hay alza directa de la IPO. Recorte agresivo si rompe la tesis — esto es ruido, no señal."
    ),
  },
  {
    rank: "3", ticker: "EWY",
    role: t("Memory/semis + FX + EM beta", "Memoria/semis + FX + beta EM"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 3rd", "VENDER 3º")) },
    detail: t(
      "A memory/semis proxy (Samsung / SK Hynix) carrying <b>won FX risk + EM beta</b> on top — and EM liquidity flees first. Essentially the <b>same semi bet as SMH</b> with extra fragility. Sell early.",
      "Un proxy de memoria/semis (Samsung / SK Hynix) que carga además <b>riesgo FX del won + beta EM</b> — y la liquidez EM huye primero. Esencialmente la <b>misma apuesta de semis que SMH</b> con fragilidad extra. Vende temprano."
    ),
  },
  {
    rank: "4", ticker: "SMH",
    role: t("AI infrastructure · real revenue", "Infraestructura IA · revenue real"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    detail: t(
      "The AI <b>infrastructure layer with real revenue</b> (NVDA/AVGO/TSM) — structural signal, not noise. <b>Trim only</b> (it's crowded and bleeds on the NDX reweight), don't liquidate. One SMH put spread hedges SMH + EWY at once.",
      "La <b>capa de infraestructura IA con revenue real</b> (NVDA/AVGO/TSM) — señal estructural, no ruido. <b>Solo trim</b> (está crowded y sangra con el reweight del NDX), no liquidar. Un put spread de SMH cubre SMH + EWY a la vez."
    ),
  },
  {
    rank: "5", ticker: "ROBO",
    role: t("Industrial robotics · diversified", "Robótica industrial · diversificado"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    detail: t(
      "Industrial automation/robotics — <b>more diversified and a lower multiple than ARKQ</b>, so more resilient. Structural signal: trim after the noise names, don't liquidate.",
      "Automación/robótica industrial — <b>más diversificado y de múltiplo más bajo que ARKQ</b>, por lo que más resiliente. Señal estructural: recorta después de los nombres ruido, no liquides."
    ),
  },
  {
    rank: "6", ticker: "URA",
    role: t("Power for AI · physical backing", "Energía para la IA · respaldo físico"),
    states: { ph0: hold(t("RESILIENT", "RESISTENTE")), ph1: hold(), ph2: hold(), ph3: trim(t("TRIM", "RECORTAR")) },
    detail: t(
      "'Power for AI' (datacenters → nuclear): a <b>structural narrative with physical backing</b> (uranium supply/demand), but illiquid and high-beta. Trim, don't liquidate — and watch it break alongside EWY as a cross-confirmation.",
      "'Energía para la IA' (datacenters → nuclear): una <b>narrativa estructural con respaldo físico</b> (oferta/demanda de uranio), pero ilíquida y de beta alta. Recorta, no liquides — y vigílala romper junto con EWY como confirmación cruzada."
    ),
  },
  {
    rank: "★", ticker: "ISAC",
    role: t("Regime-agnostic global core", "Núcleo global agnóstico al régimen"),
    states: { ph0: keep(t("HEDGE IT", "CUBRIRLO")), ph1: hold(), ph2: hold(), ph3: keep(t("KEEP", "CONSERVAR")) },
    detail: t(
      "Your <b>regime-agnostic global core</b> — don't event-trade it. <b>Hedge with the SMH/QQQ put spread</b> instead of selling; this is the anchor that cover protects. Do not sell.",
      "Tu <b>núcleo global agnóstico al régimen</b> — no lo operes por el evento. <b>Cúbrelo con el put spread de SMH/QQQ</b> en vez de venderlo; es el ancla que protege esa cobertura. No vender."
    ),
  },
  {
    rank: "◆", ticker: "XAUUSD",
    role: t("The only real counterweight", "El único contrapeso real"),
    states: { ph0: keep(t("HAVEN", "REFUGIO")), ph1: hold(), ph2: hold(), ph3: keep(t("STAGGER IN", "ESCALONAR")) },
    detail: t(
      "The <b>only real counterweight</b> to a book that is otherwise all risk-on. Rotation destination on a confirmed reversal, but <b>staggered</b>: in the initial liquidation gold gets sold for margin calls and recovers after — not all on day 1. It's panic liquidity, then conviction.",
      "El <b>único contrapeso real</b> de una cartera que por lo demás es toda risk-on. Destino de rotación en una reversión confirmada, pero <b>escalonado</b>: en la liquidación inicial el oro se vende por margin calls y recupera después — no todo el día 1. Es liquidez de pánico, luego convicción."
    ),
  },
];
