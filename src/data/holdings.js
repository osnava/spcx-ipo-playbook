/* holdings.js — the eight positions and their per-phase state.
   states[phaseId] = { label, tone }  where tone ∈ hold|watch|sell|keep
   summary: one-line thesis, always visible in the table
   detail : fuller reasoning + news notes, shown when the row is expanded
   Sell order (Phase 03): ARKQ → EWY (noise, cut for real)
                          → SMH → ROBO → URA (structural signal, trim only).
   Holds (not sold): BTC (capitulated at its 200W SMA, sell only on a confirmed
                     weekly break) · ISAC (anchor) · gold (stagger in). */
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
    rank: "1", ticker: "ARKQ",
    role: t("Noise/story · pre-profit duration", "Ruido/relato · duración pre-rentable"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 1st", "VENDER 1º")) },
    summary: t("Pre-profit, all duration, barely holds SpaceX. Cut first.", "Pre-rentable, pura duración, casi no tiene SpaceX. Vende primero."),
    detail: t(
      "Noise, not signal — cut aggressively if the thesis breaks. <b>ARK bought 210,121 SPCX (~$32.5M)</b> across 4 ETFs on Jun 22's crash — a contrarian tell on this theme.",
      "Ruido, no señal — recorta agresivo si rompe la tesis. <b>ARK compró 210.121 SPCX (~$32,5M)</b> en 4 ETFs en el desplome del 22 jun — una señal contrarian de este tema."
    ),
  },
  {
    rank: "2", ticker: "EWY",
    role: t("Memory/semis + FX + EM beta", "Memoria/semis + FX + beta EM"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 2nd", "VENDER 2º")) },
    summary: t("Memory/semis proxy (Samsung/SK Hynix) + won FX + EM beta. Sell early.", "Proxy de memoria/semis (Samsung/SK Hynix) + FX won + beta EM. Vende temprano."),
    detail: t(
      "Essentially the <b>same semi bet as SMH</b> with extra fragility — EM liquidity flees first.",
      "Esencialmente la <b>misma apuesta de semis que SMH</b> con fragilidad extra — la liquidez EM huye primero."
    ),
  },
  {
    rank: "3", ticker: "SMH",
    role: t("AI infrastructure · real revenue", "Infraestructura IA · revenue real"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("AI infra with real revenue (NVDA/AVGO/TSM). Trim only.", "Infra IA con revenue real (NVDA/AVGO/TSM). Solo trim."),
    detail: t(
      "Structural signal, not noise. Crowded; bleeds on the NDX reweight — don't liquidate. <b>One SMH put spread hedges SMH + EWY</b>.",
      "Señal estructural, no ruido. Crowded; sangra con el reweight del NDX — no liquides. <b>Un put spread de SMH cubre SMH + EWY</b>."
    ),
  },
  {
    rank: "4", ticker: "ROBO",
    role: t("Industrial robotics · diversified", "Robótica industrial · diversificado"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("Industrial robotics, diversified, lower multiple than ARKQ. Trim after noise.", "Robótica industrial, diversificado, múltiplo más bajo que ARKQ. Trim tras el ruido."),
    detail: t(
      "Structural signal — more resilient than ARKQ. Trim, don't liquidate.",
      "Señal estructural — más resiliente que ARKQ. Recorta, no liquides."
    ),
  },
  {
    rank: "5", ticker: "URA",
    role: t("Power for AI · physical backing", "Energía para la IA · respaldo físico"),
    states: { ph0: hold(t("RESILIENT", "RESISTENTE")), ph1: hold(), ph2: hold(), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("'Power for AI' (datacenters→nuclear), physical backing. Trim, don't liquidate.", "'Energía para IA' (datacenters→nuclear), respaldo físico. Trim, no liquides."),
    detail: t(
      "Structural narrative (uranium S/D) but illiquid + high-beta. Watch it break alongside EWY as cross-confirmation.",
      "Narrativa estructural (S/D uranio) pero ilíquida + beta alta. Vígila que rompa junto con EWY como confirmación cruzada."
    ),
  },
  {
    rank: "₿", ticker: "BTCUSDT",
    role: t("Global liquidity asset · 200W wick bought", "Activo de liquidez global · mecha 200s comprada"),
    states: { ph0: watch(t("200W TEST", "PRUEBA 200s")), ph1: hold(), ph2: watch(t("200W TEST", "PRUEBA 200s")), ph3: hold(t("HOLD · 200W", "MANTENER · 200s")) },
    summary: t("Global-liquidity asset, not an AI bet. Wicked to ~$58k (652-day low) then bounced back above $60k — still under the 200W (~$62k). Sell only on a confirmed weekly close below, not the wick.", "Activo de liquidez global, no apuesta IA. Mechó a ~$58k (mínimo en 652 días) y rebotó sobre $60k — aún bajo la 200s (~$62k). Vende solo con cierre semanal confirmado debajo, no la mecha."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. Early this week BTC hit <b>~$58k — its lowest in 652 days</b> — then <b>recovered back above $60k</b>, still below the 200W SMA (~$62k) but the panic wick was bought (was ~$64k <i>above</i> the 200W on Jun 23). On-chain turned constructive: Glassnode shows <b>long-term holders (155d+) back to net accumulation (~50–100k BTC)</b>, small/mid wallets leading the dip-buying, whales still neutral — 'too early to call a full regime.' Vindicates the rule: sell only on a <b>confirmed weekly close</b> below the 200W on rising volume, <b>not the intraweek wick</b>.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. A inicios de esta semana BTC tocó <b>~$58k — su mínimo en 652 días</b> — y luego <b>recuperó sobre $60k</b>, aún bajo la SMA 200s (~$62k) pero la mecha de pánico se compró (era ~$64k <i>sobre</i> la 200s el 23 jun). El on-chain se volvió constructivo: Glassnode muestra <b>holders de largo plazo (155d+) de vuelta en acumulación neta (~50–100k BTC)</b>, con billeteras pequeñas/medianas liderando la compra en la caída y las ballenas aún neutrales — 'muy pronto para un régimen pleno.' Valida la regla: vende solo con <b>cierre semanal confirmado</b> bajo la 200s con volumen creciente, <b>no la mecha intrasemana</b>."
    ),
  },
  {
    rank: "★", ticker: "ISAC",
    role: t("Regime-agnostic global core", "Núcleo global agnóstico al régimen"),
    states: { ph0: keep(t("HEDGE IT", "CUBRIRLO")), ph1: hold(), ph2: hold(), ph3: keep(t("KEEP", "CONSERVAR")) },
    summary: t("Regime-agnostic global core. Don't sell — hedge it.", "Núcleo global agnóstico al régimen. No vender — cúbrelo."),
    detail: t(
      "Don't event-trade the anchor. <b>Hedge with the SMH/QQQ put spread</b> instead of selling.",
      "No operes el ancla por el evento. <b>Cúbrelo con el put spread de SMH/QQQ</b> en vez de vender."
    ),
  },
  {
    rank: "◆", ticker: "XAUUSD",
    role: t("The only real counterweight", "El único contrapeso real"),
    states: { ph0: keep(t("HAVEN", "REFUGIO")), ph1: hold(), ph2: hold(), ph3: keep(t("STAGGER IN", "ESCALONAR")) },
    summary: t("The only real counterweight. Stagger in on a confirmed reversal.", "El único contrapeso real. Escalona en una reversión confirmada."),
    detail: t(
      "Rotation destination, but <b>staggered</b>: gold gets sold for margin calls day 1, recovers after — panic liquidity, then conviction. Not all at once.",
      "Destino de rotación, pero <b>escalonado</b>: el oro se vende por margin calls el día 1, recupera después — liquidez de pánico, luego convicción. No todo de golpe."
    ),
  },
];
