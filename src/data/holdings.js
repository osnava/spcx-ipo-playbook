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
      "Essentially the <b>same semi bet as SMH</b> with extra fragility — EM liquidity flees first. Live case: <b>Samsung (its top holding) printed a record Q2 on Jul 7 and still sold off</b> on AI-spending doubts — good numbers no longer protect the theme.",
      "Esencialmente la <b>misma apuesta de semis que SMH</b> con fragilidad extra — la liquidez EM huye primero. Caso en vivo: <b>Samsung (su mayor posición) reportó un 2T récord el 7 jul y aun así cayó</b> por dudas sobre su gasto en IA — los buenos números ya no protegen al tema."
    ),
  },
  {
    rank: "3", ticker: "SMH",
    role: t("AI infrastructure · real revenue", "Infraestructura IA · revenue real"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("AI infra with real revenue (NVDA/AVGO/TSM). Trim only.", "Infra IA con revenue real (NVDA/AVGO/TSM). Solo trim."),
    detail: t(
      "Structural signal, not noise. Crowded; bled on the NDX reweight and again <b>Jul 7</b>, when Samsung's AI-capex worries + the <b>DeepSeek own-chip report</b> (Nvidia-reliance risk) hit semis on SPCX's fade day. Trim only — don't liquidate. <b>One SMH put spread hedges SMH + EWY</b>; if it isn't on, VIX ~15.7 is the window.",
      "Señal estructural, no ruido. Crowded; sangró con el reweight del NDX y de nuevo el <b>7 jul</b>, cuando las dudas del capex de IA de Samsung + el <b>reporte del chip propio de DeepSeek</b> (riesgo para la dependencia de Nvidia) golpearon a los semis el día del fade de SPCX. Solo trim — no liquides. <b>Un put spread de SMH cubre SMH + EWY</b>; si no está puesto, VIX ~15,7 es la ventana."
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
    role: t("Global liquidity asset · 200W reclaimed", "Activo de liquidez global · 200s recuperada"),
    states: { ph0: watch(t("200W TEST", "PRUEBA 200s")), ph1: hold(), ph2: watch(t("200W TEST", "PRUEBA 200s")), ph3: hold(t("HOLD · >200W", "MANTENER · >200s")) },
    summary: t("Global-liquidity asset, not an AI bet. Reclaimed the 200W (~$64k vs ~$62k, +6.3% wk) after the $58k wick — diverging from the SPCX fade. Re-arm the sell only on a weekly close back below.", "Activo de liquidez global, no apuesta IA. Recuperó la 200s (~$64k vs ~$62k, +6,3% sem) tras la mecha a $58k — diverge del fade de SPCX. Re-arma la venta solo con cierre semanal de vuelta debajo."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. The round trip vindicated the rule: BTC wicked to <b>~$58k (652-day low)</b>, was bought back above $60k, and by <b>Jul 7 reclaimed the 200W SMA at ~$64k (+6.3% on the week)</b> — helped by the soft June jobs report (57k added) trimming rate-hike odds. Glassnode had shown <b>long-term holders back to net accumulation</b> through the low. Selling the wick would have been the error; the rule stands: act only on a <b>confirmed weekly close</b> below the 200W on rising volume. Note the divergence — BTC rallying while SPCX fades means this is an SPCX/AI-supply story, not a broad liquidity break.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. El viaje redondo validó la regla: BTC mechó a <b>~$58k (mínimo en 652 días)</b>, se compró de vuelta sobre $60k y para el <b>7 jul recuperó la SMA 200s en ~$64k (+6,3% en la semana)</b> — ayudado por el flojo empleo de junio (57k) que recortó las probabilidades de subida de tasas. Glassnode ya mostraba a los <b>holders de largo plazo en acumulación neta</b> durante el mínimo. Vender la mecha habría sido el error; la regla sigue: actúa solo con <b>cierre semanal confirmado</b> bajo la 200s con volumen creciente. Nota la divergencia — BTC subiendo mientras SPCX se desvanece indica una historia de oferta SPCX/IA, no una ruptura amplia de liquidez."
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
