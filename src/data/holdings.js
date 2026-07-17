/* holdings.js — the eight positions and their per-phase state, plus SPCX itself
   as the single-name accumulate target.
   states[phaseId] = { label, tone }  where tone ∈ hold|watch|sell|keep|accum
   summary: one-line thesis, always visible in the table
   detail : fuller reasoning + news notes, shown when the row is expanded

   Sell order (Phase 03): ARKQ → EWY (noise, cut for real)
                          → SMH → ROBO → URA (structural signal, trim only).
   Holds (not sold): BTC (capitulated at its 200-week average, sell only on a
                     confirmed weekly break) · ISAC (anchor) · gold (stagger in).
   Accumulate: SPCX — buy the long-term thesis into the lockup-driven weakness
               waves, never chase strength. New all-time low ~$125.80 on Jul 17
               (intraday $122.12); broke the $135 IPO *close* Jul 16 ($131.11).
               Flight 13 retries Jul 20 (scrubbed Jul 16); earnings Aug 6 →
               base 20% unlock ~Aug 10. */
import { t } from "./i18n.js";

const hold  = (l) => ({ label: l || t("HOLD", "MANTENER"), tone: "hold" });
const watch = (l) => ({ label: l, tone: "watch" });
const sell  = (l) => ({ label: l, tone: "sell" });
const keep  = (l) => ({ label: l, tone: "keep" });
const accum = (l) => ({ label: l, tone: "accum" });
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
      "ARKQ is <b>story, not signal</b> — cut it aggressively if the thesis cracks. (A \"story\" stock bets on a narrative; a \"signal\" stock has cash to back it up.) On Jun 22's crash, <b>ARK bought 210,121 SPCX (~$32.5M)</b> across 4 ETFs — a contrarian tell on this very theme.",
      "ARKQ es <b>relato, no señal</b> — recórtalo agresivo si la tesis se quiebra. (Una acción de \"relato\" apuesta a una narrativa; una de \"señal\" tiene flujo de caja que la respalde.) En el desplome del 22 jun, <b>ARK compró 210.121 SPCX (~$32,5M)</b> en 4 ETFs — una señal contrarian de este mismo tema."
    ),
  },
  {
    rank: "2", ticker: "EWY",
    role: t("Memory/semis + FX + EM beta", "Memoria/semis + FX + beta EM"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 2nd", "VENDER 2º")) },
    summary: t("Korea ETF: memory/semis (Samsung/SK Hynix) + won FX + EM beta. Sell early.", "ETF de Corea: memoria/semis (Samsung/SK Hynix) + FX won + beta EM. Vende temprano."),
    detail: t(
      "Essentially the <b>same semiconductor bet as SMH</b>, with extra fragility: it's a country fund, so emerging-market liquidity flees it first. Live case: <b>Samsung (its top holding) printed a record Q2 on Jul 7 and still sold off</b> on AI-spending doubts — good numbers no longer protect the theme.",
      "Esencialmente la <b>misma apuesta en semiconductores que SMH</b>, con fragilidad extra: es un fondo país, así que la liquidez de mercados emergentes huye primero. Caso en vivo: <b>Samsung (su mayor posición) reportó un 2T récord el 7 jul y aun así cayó</b> por dudas sobre su gasto en IA — los buenos números ya no protegen al tema."
    ),
  },
  {
    rank: "3", ticker: "SMH",
    role: t("AI infrastructure · real revenue", "Infraestructura IA · revenue real"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("AI infra with real revenue (NVDA/AVGO/TSM). Trim, don't liquidate.", "Infra IA con revenue real (NVDA/AVGO/TSM). Recorta, no liquides."),
    detail: t(
      "Structural signal, not noise — real revenue behind it. But crowded (heavily bought), and the selling has <b>stopped being SPCX-only</b>: on <b>Jul 17 the PHLX Semiconductor Index (SOX) entered a BEAR MARKET (−3% on the day, −13% over 30 days)</b>, dragged by China's Moonshot releasing <b>Kimi K3</b> (an open AI model reviving the DeepSeek-style threat to Nvidia-reliance), hyperscaler-capex reassessment ahead of Big Tech earnings, and a Netflix −7% guide-miss. Apple briefly overtook Nvidia as the largest company on the rotation. <b>The SMH trim is no longer just mechanical SPCX correlation — it's a genuine AI-capex correction.</b> <b>Trim only</b> (sell part, not all) — don't liquidate; BofA still sees the capex cycle as sustainable into 2027. <b>One SMH put spread hedges SMH + EWY</b> (a put spread = buy a put, sell a cheaper one to cap the insurance cost); if it isn't on yet, SOX vol is climbing — set it now.",
      "Señal estructural, no ruido — hay revenue real detrás. Pero crowded (muy comprado), y la venta <b>dejó de ser solo SPCX</b>: el <b>17 jul el índice de semis (SOX) entró en MERCADO BAJISTA (−3% el día, −13% en 30 días)</b>, arrastrado por el lanzamiento de <b>Kimi K3</b> de Moonshot de China (un modelo abierto de IA que revive la amenaza estilo DeepSeek a la dependencia de Nvidia), revaluación del capex de hiperscalers antes de resultados de Big Tech, y una guía débil de Netflix (−7%). Apple superó brevemente a Nvidia como la mayor empresa en la rotación. <b>El trim de SMH ya no es solo correlación mecánica con SPCX — es una corrección real de capex de IA.</b> <b>Solo trim</b> (vende una parte, no todo) — no liquides; BofA aún ve el ciclo de capex sostenible hacia 2027. <b>Un put spread de SMH cubre SMH + EWY</b> (un put spread = compras un put, vendes uno más barato para topar el costo del seguro); si aún no está puesto, la vol del SOX está subiendo — colócalo ahora."
    ),
  },
  {
    rank: "4", ticker: "ROBO",
    role: t("Industrial robotics · diversified", "Robótica industrial · diversificado"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("Industrial robotics, diversified, lower multiple than ARKQ. Trim after noise.", "Robótica industrial, diversificado, múltiplo más bajo que ARKQ. Recorta tras el ruido."),
    detail: t(
      "Structural signal — more resilient than ARKQ (real industrial revenue, less hype). Trim it, don't liquidate.",
      "Señal estructural — más resiliente que ARKQ (revenue industrial real, menos hype). Recórtalo, no lo liquides."
    ),
  },
  {
    rank: "5", ticker: "URA",
    role: t("Power for AI · physical backing", "Energía para la IA · respaldo físico"),
    states: { ph0: hold(t("RESILIENT", "RESISTENTE")), ph1: hold(), ph2: hold(), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("'Power for AI' (datacenters→nuclear), uranium physical backing. Trim, don't liquidate.", "'Energía para IA' (datacenters→nuclear), respaldo físico en uranio. Recorta, no liquides."),
    detail: t(
      "Structural narrative (uranium supply/demand) but illiquid and high-beta, so it swings hard. Watch it break alongside EWY as cross-confirmation.",
      "Narrativa estructural (oferta/demanda de uranio) pero ilíquida y de beta alta, así que oscila fuerte. Vígila que rompa junto con EWY como confirmación cruzada."
    ),
  },
  {
    rank: "₿", ticker: "BTCUSDT",
    role: t("Global liquidity asset · 200-week average reclaimed", "Activo de liquidez global · media de 200 semanas recuperada"),
    states: { ph0: watch(t("200W TEST", "PRUEBA 200s")), ph1: hold(), ph2: watch(t("200W TEST", "PRUEBA 200s")), ph3: hold(t("HOLD · >200W", "MANTENER · >200s")) },
    summary: t("Global-liquidity asset, not an AI bet. Faded to ~$62.7k on Jul 17 (back near its 200-week average, ~$62k) as the extreme SPCX/BTC divergence unwound — BTC is no longer rallying while SPCX falls. The cross-asset gauge is still OFF (no weekly break below ~$62k), but the 'SPCX-only' isolation is gone now that SOX is in a bear market. Re-arm the sell only on a confirmed weekly close below.",
      "Activo de liquidez global, no apuesta IA. Retrocedió a ~$62,7k el 17 jul (de vuelta cerca de su media de 200 semanas, ~$62k) al deshacerse la divergencia extrema SPCX/BTC — BTC ya no sube mientras SPCX cae. El medidor cruzado sigue APAGADO (sin ruptura semanal bajo ~$62k), pero el aislamiento 'solo SPCX' se fue ahora que el SOX está en mercado bajista. Re-arma la venta solo con un cierre semanal confirmado debajo."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. The round trip vindicated the rule: BTC wicked to <b>~$58k (a 652-day low)</b>, was bought back above $60k, and by <b>Jul 7 reclaimed the 200-week average at ~$64k (+6.3% on the week)</b> — helped by the soft June jobs report (57k added) trimming rate-hike odds. It peaked at a <b>3-week high near $65k on Jul 15</b>, but <b>faded to ~$62.7k by Jul 17 (−1.5%)</b> as the broader AI/semi de-risking (SOX bear market, Kimi K3, Iran oil) caught up — narrowing the extreme divergence with the SPCX fade. Glassnode had shown <b>long-term holders back to net accumulation</b> through the low. Selling the wick would have been the error; the rule stands: act only on a <b>confirmed weekly close</b> below the 200-week average on rising volume. <b>Key shift:</b> two days ago BTC's rally-while-SPCX-falls argued forcefully this was an SPCX-only story; that isolation is now gone (SOX bear market), so watch BTC's weekly close more closely — if it loses ~$62k on the week, the broad-risk-off reading re-arms.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. El viaje redondo validó la regla: BTC mechó a <b>~$58k (mínimo en 652 días)</b>, se compró de vuelta sobre $60k y para el <b>7 jul recuperó la media de 200 semanas en ~$64k (+6,3% en la semana)</b> — ayudado por el flojo empleo de junio (57k) que recortó las probabilidades de subida de tasas. Pico en <b>máximo de 3 semanas cerca de $65k el 15 jul</b>, pero <b>retrocedió a ~$62,7k para el 17 jul (−1,5%)</b> cuando el des-arriesgo amplio de IA/semis (SOX mercado bajista, Kimi K3, petróleo Irán) alcanzó — estrechando la divergencia extrema con el fade de SPCX. Glassnode ya mostraba a los <b>holders de largo plazo en acumulación neta</b> durante el mínimo. Vender la mecha habría sido el error; la regla sigue: actúa solo con <b>cierre semanal confirmado</b> bajo la media de 200 semanas con volumen creciente. <b>Cambio clave:</b> hace dos días la subida de BTC mientras SPCX caía argumentaba con fuerza que era una historia solo SPCX; ese aislamiento ya se fue (SOX en mercado bajista), así que vigila el cierre semanal de BTC más de cerca — si pierde ~$62k en la semana, se rearma la lectura de risk-off amplio."
    ),
  },
  {
    rank: "★", ticker: "ISAC",
    role: t("Regime-agnostic global core", "Núcleo global agnóstico al régimen"),
    states: { ph0: keep(t("HEDGE IT", "CUBRIRLO")), ph1: hold(), ph2: hold(), ph3: keep(t("KEEP", "CONSERVAR")) },
    summary: t("Regime-agnostic global core. Don't sell — hedge it.", "Núcleo global agnóstico al régimen. No vender — cúbrelo."),
    detail: t(
      "Don't event-trade the anchor — it's the all-weather core. <b>Hedge with the SMH/QQQ put spread</b> instead of selling.",
      "No operes el ancla por el evento — es el núcleo todo clima. <b>Cúbrelo con el put spread de SMH/QQQ</b> en vez de vender."
    ),
  },
  {
    rank: "◆", ticker: "XAUUSD",
    role: t("The only real counterweight", "El único contrapeso real"),
    states: { ph0: keep(t("HAVEN", "REFUGIO")), ph1: hold(), ph2: hold(), ph3: keep(t("STAGGER IN", "ESCALONAR")) },
    summary: t("The only real counterweight. Stagger in on a confirmed reversal.", "El único contrapeso real. Escalona en una reversión confirmada."),
    detail: t(
      "Rotation destination — but <b>staggered</b>. Gold gets sold for margin calls on day 1 (a margin call = forced selling when a borrowed-money position loses value), then recovers. So it's panic liquidity first, conviction later. Not all at once.",
      "Destino de rotación — pero <b>escalonado</b>. El oro se vende por margin calls el día 1 (un margin call = venta forzada cuando una posición con dinero prestado pierde valor), luego recupera. Así que es primero liquidez de pánico, luego convicción. No todo de golpe."
    ),
  },
  {
    rank: "＋", ticker: "SPCX",
    role: t("Long-term SpaceX thesis · accumulate on weakness", "Tesis SpaceX de largo plazo · acumular en debilidad"),
    states: {
      ph0: accum(t("WAIT · IPO AHEAD", "ESPERAR · PRE-OPV")),
      ph1: accum(t("WATCH · DEBUT", "VIGILAR · DEBUT")),
      ph2: accum(t("ACCUMULATE · DIPS", "ACUMULAR · CAÍDAS")),
      ph3: accum(t("ACCUMULATE · WAVES", "ACUMULAR · OLAS")),
    },
    summary: t(
      "Long-term SpaceX thesis; buy into the lockup-driven weakness waves — not strength.",
      "Tesis SpaceX de largo plazo; compra en las oleadas de debilidad del lockup — no en la fuerza."
    ),
    detail: t(
      "<b>Why own it:</b> SpaceX is the only pure-play megacap in space — Starship (reusable heavy-lift), the Starlink revenue ramp, and the <b>$60B all-stock option to buy Cursor (Anysphere)</b>, closing Q3. Be clear-eyed: it's <b>pre-profit</b> (−$4.3B net loss in Q1 2026 alone; $41.3B accumulated deficit), so this is a thesis hold on the revenue ramp and optionality, not an earnings-multiple hold.<br><br>" +
      "<b>When to buy — the lockup IS the calendar:</b> a <i>lockup</i> is the post-IPO window when insiders can't sell; as it expires in waves, those insiders become forced sellers and the stock tends to weaken. Each unlock is therefore a <b>staged entry point</b>. First scale: the <b>20% base unlock</b>, the 2nd trading day after Q2 results — earnings are now <b>confirmed for Aug 6</b>, so the unlock lands <b>~Aug 10</b> (SpaceX will release results only via its website &amp; X, bypassing the wires). Second scale: the <b>Aug 21 / Sep 10 / Sep 25 / Oct 10 / Oct 25</b> time tranches (7% each — the Sep 10 / Oct 25 cluster is the dense one). Final, largest scale: the <b>180-day full unlock ~Dec 9</b>.<br><br>" +
      "<b>Entry discipline:</b> favor weakness <b>at or below the $135 IPO</b> into each wave — the slide is deepening (Jul 16 broke the IPO *close* at $131.11; Jul 17 made a fresh all-time low ~$125.80, intraday $122.12), so the first scale is live and getting cheaper. <b>Binary risk into it: Starship Flight 13 retries Jul 20</b> (scrubbed at T-0 Jul 16) — a success is a sentiment lift, a failure is a leg lower; size the first scale small so you can add into the Aug 10 unlock regardless. Don't chase above <b>~$175</b> (the dead +30% line) unless the thesis materially re-rates. Stagger the buys — never one entry. <i>Read with SUPPLY — same ladder, the buy side.</i>",
      "<b>Por qué tenerlo:</b> SpaceX es la única megacap pure-play del espacio — Starship (cohete pesado reutilizable), la rampa de ingresos de Starlink y la <b>opción de $60B en acciones para comprar Cursor (Anysphere)</b>, que cierra en el 3T. Sé claro: está <b>pre-rentable</b> (−$4,3B de pérdida neta solo en el 1T 2026; $41,3B de déficit acumulado), así que es una tenencia por tesis sobre la rampa de ingresos y la opcionalidad, no por múltiplo de ganancias.<br><br>" +
      "<b>Cuándo comprar — el lockup ES el calendario:</b> un <i>lockup</i> es la ventana post-IPO en la que los insiders no pueden vender; al vencer por oleadas, esos insiders se vuelven vendedores forzados y la acción tiende a debilitarse. Cada unlock es entonces un <b>punto de entrada escalonado</b>. Primer tramo: el <b>desbloqueo base del 20%</b>, el 2º día de cotización tras los resultados del 2T — los resultados están ahora <b>confirmados para el 6 ago</b>, así que el unlock cae <b>~10 ago</b> (SpaceX publicará los resultados solo vía su web y X, sin pasar por las agencias). Segundo tramo: los tramos de tiempo del <b>21 ago / 10 sep / 25 sep / 10 oct / 25 oct</b> (7% c/u — el cluster 10 sep / 25 oct es el denso). Tramo final, el mayor: el <b>vencimiento total a 180 días ~9 dic</b>.<br><br>" +
      "<b>Disciplina de entrada:</b> favorece la debilidad <b>en o bajo la OPV de $135</b> en cada ola — el deslizamiento se profundiza (el 16 jul rompió la OPV al *cierre* en $131,11; el 17 jul marcó un nuevo mínimo histórico ~$125,80, intradía $122,12), así que el primer tramo está activo y abaratándose. <b>Riesgo binario hacia ella: el vuelo 13 de Starship reintenta el 20 jul</b> (abortado en T-0 el 16 jul) — un éxito es un impulso de sentimiento, un fallo es un peldaño más abajo; dimensiona el primer tramo pequeño para poder sumar al unlock del 10 ago independientemente. No persigas sobre <b>~$175</b> (la línea muerta del +30%) salvo que la tesis se revalore materialmente. Escalona las compras — nunca una sola entrada. <i>Léelo con OFERTA — misma escalera, lado compra.</i>"
    ),
  },
];
