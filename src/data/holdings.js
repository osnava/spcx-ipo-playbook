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
               waves, never chase strength. Sat at the $135 IPO price in Jul. */
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
      "Structural signal, not noise — real revenue behind it. But crowded (heavily bought), and it bled on the NDX reweight, then again <b>Jul 7</b>: Samsung's AI-capex worries plus a Reuters report that <b>DeepSeek is building its own AI chip</b> (a risk to Nvidia-reliance) hit semis on SPCX's fade day (its first day drifting lower in the index). <b>Trim only</b> (sell part, not all) — don't liquidate. <b>One SMH put spread hedges SMH + EWY</b> (a put spread = buy a put, sell a cheaper one to cap the insurance cost); if it isn't on, VIX ~15.7 is the window.",
      "Señal estructural, no ruido — hay revenue real detrás. Pero crowded (muy comprado), y sangró con el reweight del NDX, luego otra vez el <b>7 jul</b>: las dudas del capex de IA de Samsung más un reporte de Reuters de que <b>DeepSeek construye su propio chip de IA</b> (un riesgo para la dependencia de Nvidia) golpearon a los semis el día del fade de SPCX (su primer día derivando a la baja en el índice). <b>Solo trim</b> (vende una parte, no todo) — no liquides. <b>Un put spread de SMH cubre SMH + EWY</b> (un put spread = compras un put, vendes uno más barato para topar el costo del seguro); si no está puesto, VIX ~15,7 es la ventana."
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
    summary: t("Global-liquidity asset, not an AI bet. Reclaimed its 200-week average (~$64k vs ~$62k) and is diverging from the SPCX fade (its drift lower since inclusion). Re-arm the sell only on a weekly close back below.", "Activo de liquidez global, no apuesta IA. Recuperó su media de 200 semanas (~$64k vs ~$62k) y diverge del fade de SPCX (su deriva a la baja desde la inclusión). Re-arma la venta solo con un cierre semanal de vuelta debajo."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. The round trip vindicated the rule: BTC wicked to <b>~$58k (a 652-day low)</b>, was bought back above $60k, and by <b>Jul 7 reclaimed the 200-week average at ~$64k (+6.3% on the week)</b> — helped by the soft June jobs report (57k added) trimming rate-hike odds. By Jul 11–12 it was back above $64k. Glassnode had shown <b>long-term holders back to net accumulation</b> through the low. Selling the wick would have been the error; the rule stands: act only on a <b>confirmed weekly close</b> below the 200-week average on rising volume. Note the divergence — BTC rallying while SPCX fades (drifts lower) means this is an SPCX/AI-supply story, not a broad liquidity break.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. El viaje redondo validó la regla: BTC mechó a <b>~$58k (mínimo en 652 días)</b>, se compró de vuelta sobre $60k y para el <b>7 jul recuperó la media de 200 semanas en ~$64k (+6,3% en la semana)</b> — ayudado por el flojo empleo de junio (57k) que recortó las probabilidades de subida de tasas. Al 11–12 jul volvió a estar sobre $64k. Glassnode ya mostraba a los <b>holders de largo plazo en acumulación neta</b> durante el mínimo. Vender la mecha habría sido el error; la regla sigue: actúa solo con <b>cierre semanal confirmado</b> bajo la media de 200 semanas con volumen creciente. Nota la divergencia — BTC subiendo mientras SPCX se desvanece (deriva a la baja) indica una historia de oferta SPCX/IA, no una ruptura amplia de liquidez."
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
      "<b>When to buy — the lockup IS the calendar:</b> a <i>lockup</i> is the post-IPO window when insiders can't sell; as it expires in waves, those insiders become forced sellers and the stock tends to weaken. Each unlock is therefore a <b>staged entry point</b>. First scale: the <b>20% base unlock</b>, the 2nd trading day after Q2 results (~Aug 6–11; SpaceX will release results only via its website &amp; X, bypassing the wires). Second scale: the <b>Aug 21 / Sep 10 / Sep 25 / Oct 10 / Oct 25</b> time tranches (7% each — the Sep 10 / Oct 25 cluster is the dense one). Final, largest scale: the <b>180-day full unlock ~Dec 9</b>.<br><br>" +
      "<b>Entry discipline:</b> favor weakness <b>at or below the $135 IPO</b> into each wave — that's roughly where it sat in July (~$138, with the low pressing toward $135). Don't chase above <b>~$175</b> (the dead +30% line) unless the thesis materially re-rates. Stagger the buys — never one entry. <i>Read with SUPPLY — same ladder, the buy side.</i>",
      "<b>Por qué tenerlo:</b> SpaceX es la única megacap pure-play del espacio — Starship (cohete pesado reutilizable), la rampa de ingresos de Starlink y la <b>opción de $60B en acciones para comprar Cursor (Anysphere)</b>, que cierra en el 3T. Sé claro: está <b>pre-rentable</b> (−$4,3B de pérdida neta solo en el 1T 2026; $41,3B de déficit acumulado), así que es una tenencia por tesis sobre la rampa de ingresos y la opcionalidad, no por múltiplo de ganancias.<br><br>" +
      "<b>Cuándo comprar — el lockup ES el calendario:</b> un <i>lockup</i> es la ventana post-IPO en la que los insiders no pueden vender; al vencer por oleadas, esos insiders se vuelven vendedores forzados y la acción tiende a debilitarse. Cada unlock es entonces un <b>punto de entrada escalonado</b>. Primer tramo: el <b>desbloqueo base del 20%</b>, el 2º día de cotización tras los resultados del 2T (~6–11 ago; SpaceX publicará los resultados solo vía su web y X, sin pasar por las agencias). Segundo tramo: los tramos de tiempo del <b>21 ago / 10 sep / 25 sep / 10 oct / 25 oct</b> (7% c/u — el cluster 10 sep / 25 oct es el denso). Tramo final, el mayor: el <b>vencimiento total a 180 días ~9 dic</b>.<br><br>" +
      "<b>Disciplina de entrada:</b> favorece la debilidad <b>en o bajo la OPV de $135</b> en cada ola — más o menos donde estuvo en julio (~$138, con el mínimo presionando hacia $135). No persigas sobre <b>~$175</b> (la línea muerta del +30%) salvo que la tesis se revalore materialmente. Escalona las compras — nunca una sola entrada. <i>Léelo con OFERTA — misma escalera, lado compra.</i>"
    ),
  },
];
