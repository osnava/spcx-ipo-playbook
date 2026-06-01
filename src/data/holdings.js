/* holdings.js — the eight positions and their per-phase state.
   states[phaseId] = { label, tone }  where tone ∈ hold|watch|sell|keep */
import { t } from "./i18n.js";

const hold  = (l) => ({ label: l || t("HOLD", "MANTENER"), tone: "hold" });
const watch = (l) => ({ label: l, tone: "watch" });
const sell  = (l) => ({ label: l, tone: "sell" });
const keep  = (l) => ({ label: l, tone: "keep" });

const FLUSH = t("FLUSH RISK", "RIESGO PURGA");
const WATCH = t("WATCH", "VIGILAR");

export const HOLDINGS = [
  {
    rank: "1", ticker: "BTCUSDT",
    role: t("Highest-beta · leads risk-off down", "Beta más alta · lidera la caída risk-off"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 1st", "VENDER 1º")) },
    detail: t(
      "Your most sentiment-driven asset and the first to fall in a risk-off move. <b>Cut or hedge this first</b> at/after the inclusion peak — and the most exposed if a pre-IPO shakeout hits.",
      "Tu activo más sensible al sentimiento y el primero en caer en un movimiento risk-off. <b>Recorta o cubre esto primero</b> en/tras el pico de inclusión — y el más expuesto si llega una sacudida pre-IPO."
    ),
  },
  {
    rank: "2", ticker: "EWY",
    role: t("Semis again (Samsung / SK Hynix)", "Semis otra vez (Samsung / SK Hynix)"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 2nd", "VENDER 2º")) },
    detail: t(
      "Essentially the <b>same semiconductor bet as SMH</b>. Trim this one regardless to remove doubled-up exposure.",
      "Esencialmente la <b>misma apuesta de semiconductores que SMH</b>. Recorta esta de todos modos para eliminar la exposición duplicada."
    ),
  },
  {
    rank: "3", ticker: "SMH",
    role: t("High-beta semiconductors", "Semiconductores de beta alta"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 3rd", "VENDER 3º")) },
    detail: t(
      "Core semis/AI beta. Sell on <b>confirmed reversal</b> post-inclusion. One SMH put can hedge both SMH and EWY at once — and covers a pre-IPO flush too.",
      "Beta núcleo de semis/IA. Vende en <b>reversión confirmada</b> post-inclusión. Un put de SMH puede cubrir SMH y EWY a la vez — y también cubre una purga pre-IPO."
    ),
  },
  {
    rank: "4", ticker: "ARKQ",
    role: t("Speculative growth", "Crecimiento especulativo"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 4th", "VENDER 4º")) },
    detail: t(
      "Pure sentiment beta — <b>barely holds SpaceX</b>, so no direct IPO upside. Trim on risk-off rotation.",
      "Beta de puro sentimiento — <b>apenas tiene SpaceX</b>, así que no hay alza directa de la IPO. Recorta en rotación risk-off."
    ),
  },
  {
    rank: "5", ticker: "ROBO",
    role: t("Thematic robotics growth", "Crecimiento temático de robótica"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 4th", "VENDER 4º")) },
    detail: t(
      "Same profile as ARKQ. Trim alongside it if the speculative-growth complex turns down.",
      "Mismo perfil que ARKQ. Recorta junto con él si el complejo de crecimiento especulativo se da la vuelta."
    ),
  },
  {
    rank: "6", ticker: "URA",
    role: t("Risk-on thematic (uranium)", "Temático risk-on (uranio)"),
    states: { ph0: hold(t("RESILIENT", "RESISTENTE")), ph1: hold(), ph2: hold(), ph3: sell(t("SELL last", "VENDER último")) },
    detail: t(
      "Has its own nuclear story, largely independent of the IPO. <b>Lowest priority to cut</b> — only on broad risk-off.",
      "Tiene su propia historia nuclear, en gran medida independiente de la IPO. <b>Menor prioridad para recortar</b> — solo en risk-off amplio."
    ),
  },
  {
    rank: "★", ticker: "ISAC",
    role: t("Broad beta · your core", "Beta amplia · tu núcleo"),
    states: { ph0: keep(t("HEDGE IT", "CUBRIRLO")), ph1: hold(), ph2: hold(), ph3: keep(t("KEEP", "CONSERVAR")) },
    detail: t(
      "Don't event-trade your core. <b>Hedge with QQQ/SPY puts</b> instead of selling it — those puts are your shakeout cover too.",
      "No operes tu núcleo por el evento. <b>Cúbrelo con puts de QQQ/SPY</b> en vez de venderlo — esos puts son también tu cobertura ante la sacudida."
    ),
  },
  {
    rank: "◆", ticker: "XAUUSD",
    role: t("Spot gold · safe-haven ballast", "Oro spot · lastre refugio"),
    states: { ph0: keep(t("HAVEN", "REFUGIO")), ph1: hold(), ph2: hold(), ph3: keep(t("KEEP / ADD", "CONSERVAR / SUMAR")) },
    detail: t(
      "Your counterweight to the whole book — <b>negatively correlated to risk-off</b>, so it cushions a pre-IPO flush and rises when the rest falls. It's where you rotate proceeds on a confirmed post-inclusion reversal. With Warsh's first FOMC and sticky inflation in view, it doubles as macro insurance. <b>Don't sell it into the trigger — add to it.</b>",
      "Tu contrapeso a toda la cartera — <b>correlación negativa con el risk-off</b>, así que amortigua una purga pre-IPO y sube cuando el resto cae. Es donde rotas el efectivo en una reversión confirmada post-inclusión. Con el primer FOMC de Warsh y la inflación pegajosa en el horizonte, funciona como seguro macro. <b>No lo vendas en el disparador — súmale.</b>"
    ),
  },
];
