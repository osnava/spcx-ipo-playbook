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
               waves, never chase strength. New low ~$125.80 Jul 17 (intraday
               $122.12); Flight 13 retries Jul 20; earnings Aug 6 → base 20%
               unlock ~Aug 10. Style: see AGENTS.md. */
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
      "ARKQ is <b>story, not signal</b> — cut aggressively if the thesis cracks. (A \"story\" stock bets on a narrative; a \"signal\" stock has cash behind it.) Tell: on Jun 22's crash <b>ARK bought 210,121 SPCX (~$32.5M)</b> across 4 ETFs — a contrarian bet on this very theme.",
      "ARKQ es <b>relato, no señal</b> — recorta agresivo si la tesis se quiebra. (Una acción de \"relato\" apuesta a una narrativa; una de \"señal\" tiene caja detrás.) Señal: en el desplome del 22 jun <b>ARK compró 210.121 SPCX (~$32,5M)</b> en 4 ETFs — apuesta contrarian a este mismo tema."
    ),
  },
  {
    rank: "2", ticker: "EWY",
    role: t("Memory/semis + FX + EM beta", "Memoria/semis + FX + beta EM"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: sell(t("SELL 2nd", "VENDER 2º")) },
    summary: t("Korea ETF: memory/semis (Samsung/SK Hynix) + won FX + EM beta. Sell early.", "ETF de Corea: memoria/semis (Samsung/SK Hynix) + FX won + beta EM. Vende temprano."),
    detail: t(
      "Essentially the <b>same semi bet as SMH</b>, with extra fragility: a country fund, so EM liquidity flees first. Case in point: <b>Samsung (its top holding) printed a record Q2 Jul 7 and still sold off</b> on AI-spending doubts — good numbers no longer protect the theme.",
      "Esencialmente la <b>misma apuesta en semis que SMH</b>, con fragilidad extra: un fondo país, así que la liquidez EM huye primero. Caso: <b>Samsung (su mayor posición) reportó un 2T récord el 7 jul y aun así cayó</b> por dudas de gasto en IA — los buenos números ya no protegen al tema."
    ),
  },
  {
    rank: "3", ticker: "SMH",
    role: t("AI infrastructure · real revenue", "Infraestructura IA · revenue real"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("AI infra with real revenue (NVDA/AVGO/TSM). Trim, don't liquidate.", "Infra IA con revenue real (NVDA/AVGO/TSM). Recorta, no liquides."),
    detail: t(
      "Structural signal, real revenue — but crowded, and the selling stopped being SPCX-only: <b>Jul 17 SOX entered a BEAR MARKET (−3% day, −13% / 30d)</b> on Kimi K3 (China's open AI model), hyperscaler-capex doubts, Netflix −7%. Apple briefly overtook Nvidia on the rotation. <b>This is now a genuine AI-capex correction</b>, not just SPCX correlation. <b>Trim only</b> — BofA still sees capex sustainable into 2027. <b>One SMH put spread hedges SMH + EWY</b> (a put spread = buy a put, sell a cheaper one to cap cost); if not on, SOX vol is climbing — set it now.",
      "Señal estructural, revenue real — pero crowded, y la venta dejó de ser solo SPCX: <b>el 17 jul el SOX entró en MERCADO BAJISTA (−3% el día, −13% / 30d)</b> por Kimi K3 (modelo abierto de China), dudas de capex de hiperscalers, Netflix −7%. Apple superó brevemente a Nvidia en la rotación. <b>Esto es ya una corrección real de capex de IA</b>, no solo correlación con SPCX. <b>Solo trim</b> — BofA aún ve el capex sostenible hacia 2027. <b>Un put spread de SMH cubre SMH + EWY</b> (un put spread = compras un put, vendes uno más barato para topar el costo); si no está, la vol del SOX sube — colócalo ahora."
    ),
  },
  {
    rank: "4", ticker: "ROBO",
    role: t("Industrial robotics · diversified", "Robótica industrial · diversificado"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("Industrial robotics, diversified, lower multiple than ARKQ. Trim after noise.", "Robótica industrial, diversificado, múltiplo más bajo que ARKQ. Recorta tras el ruido."),
    detail: t(
      "Structural signal — more resilient than ARKQ (real industrial revenue, less hype). Trim, don't liquidate.",
      "Señal estructural — más resiliente que ARKQ (revenue industrial real, menos hype). Recorta, no liquides."
    ),
  },
  {
    rank: "5", ticker: "URA",
    role: t("Power for AI · physical backing", "Energía para la IA · respaldo físico"),
    states: { ph0: hold(t("RESILIENT", "RESISTENTE")), ph1: hold(), ph2: hold(), ph3: trim(t("TRIM", "RECORTAR")) },
    summary: t("'Power for AI' (datacenters→nuclear), uranium physical backing. Trim, don't liquidate.", "'Energía para IA' (datacenters→nuclear), respaldo físico en uranio. Recorta, no liquides."),
    detail: t(
      "Structural narrative (uranium supply/demand) but illiquid and high-beta, so it swings hard. Watch it break alongside EWY as cross-confirmation.",
      "Narrativa estructural (oferta/demanda de uranio) pero ilíquida y de beta alta, así que oscila fuerte. Vígala romper junto con EWY como confirmación cruzada."
    ),
  },
  {
    rank: "₿", ticker: "BTCUSDT",
    role: t("Global liquidity asset · 200-week average reclaimed", "Activo de liquidez global · media de 200 semanas recuperada"),
    states: { ph0: watch(t("200W TEST", "PRUEBA 200s")), ph1: hold(), ph2: watch(t("200W TEST", "PRUEBA 200s")), ph3: hold(t("HOLD · >200W", "MANTENER · >200s")) },
    summary: t("Global-liquidity asset, not an AI bet. Faded to ~$62.7k Jul 17 (back near its 200-week average, ~$62k); the extreme SPCX divergence narrowed. Gauge still OFF (no weekly break), but the 'SPCX-only' isolation is gone now that SOX is in a bear market.", "Activo de liquidez global, no apuesta IA. Retrocedió a ~$62,7k el 17 jul (de vuelta cerca de su media de 200 semanas, ~$62k); la divergencia extrema con SPCX se estrechó. Medidor aún APAGADO (sin ruptura semanal), pero el aislamiento 'solo SPCX' se fue ahora que el SOX está en mercado bajista."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. The round trip vindicated the rule: BTC wicked to <b>~$58k (a 652-day low)</b>, was bought back above $60k, reclaimed the 200-week average at ~$64k Jul 7, peaked at a 3-week high ~$65k Jul 15 — then <b>faded to ~$62.7k Jul 17 (−1.5%)</b> as the broad AI/semi de-risking (SOX bear, Kimi K3, Iran oil) caught up. Glassnode showed long-term holders in net accumulation through the low. Rule stands: act only on a <b>confirmed weekly close</b> below the 200-week average on rising volume. <b>The Jul-15 'BTC up while SPCX falls = SPCX-only story' isolation broke Jul 17</b> (SOX bear market) — watch the weekly close more closely now.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. El viaje redondo validó la regla: BTC mechó a <b>~$58k (mínimo en 652 días)</b>, se compró sobre $60k, recuperó la media de 200 semanas en ~$64k el 7 jul, picó en máximo de 3 semanas ~$65k el 15 jul — luego <b>retrocedió a ~$62,7k el 17 jul (−1,5%)</b> cuando el des-arriesgo amplio de IA/semis (SOX bajista, Kimi K3, petróleo Irán) alcanzó. Glassnode mostró holders de largo plazo en acumulación neta durante el mínimo. La regla sigue: actúa solo con <b>cierre semanal confirmado</b> bajo la media de 200 semanas con volumen creciente. <b>El aislamiento del 15 jul 'BTC sube mientras SPCX cae = historia solo SPCX' se rompió el 17 jul</b> (SOX en mercado bajista) — vigila el cierre semanal más de cerca ahora."
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
      "Rotation destination, but <b>staggered</b>. Gold gets sold for margin calls on day 1 (a margin call = forced selling when a borrowed-money position loses value), then recovers — panic liquidity first, conviction later. Iran-war oil (Brent &gt;$86) is a fresh bid. Not all at once.",
      "Destino de rotación, pero <b>escalonado</b>. El oro se vende por margin calls el día 1 (un margin call = venta forzada cuando una posición con dinero prestado pierde valor), luego recupera — primero liquidez de pánico, luego convicción. El petróleo de la guerra de Irán (Brent &gt;$86) es un nuevo impulso. No todo de golpe."
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
      "<b>Why own it:</b> the only pure-play megacap in space — Starship (reusable heavy-lift), the Starlink revenue ramp, and the <b>$60B all-stock option to buy Cursor (Anysphere)</b>, closing Q3. <b>Pre-profit</b> (−$4.3B net loss Q1 2026; $41.3B accumulated deficit) — a thesis hold on the revenue ramp and optionality, not an earnings multiple.<br><br>" +
      "<b>When to buy — the lockup IS the calendar:</b> a <i>lockup</i> = the post-IPO window when insiders can't sell; as it expires in waves they become forced sellers and the stock tends to weaken, so each unlock is a <b>staged entry point</b>. <b>Aug 10</b> base 20% (earnings confirmed <b>Aug 6</b>); then <b>Aug 21 / Sep 10 / Sep 25 / Oct 10 / Oct 25</b> time tranches (7% each); <b>180-day full unlock ~Dec 9</b>. (Full ladder in SUPPLY.)<br><br>" +
      "<b>Entry discipline:</b> favor weakness <b>≤ $135 IPO</b> into each wave — live and cheapening (Jul 16 broke the IPO <i>close</i> $131.11; Jul 17 new low ~$125.80). <b>Flight 13 retries Jul 20 = binary</b> (scrubbed at T-0 Jul 16) — size the first scale small to add into Aug 10 regardless. Don't chase <b>&gt; ~$175</b> (the dead +30% line) unless the thesis re-rates. Stagger — never one entry.",
      "<b>Por qué tenerlo:</b> la única megacap pure-play del espacio — Starship (cohete pesado reutilizable), la rampa de Starlink y la <b>opción de $60B en acciones para comprar Cursor (Anysphere)</b>, cierra en el 3T. <b>Pre-rentable</b> (−$4,3B de pérdida neta en el 1T 2026; $41,3B de déficit acumulado) — tenencia por tesis sobre la rampa y la opcionalidad, no por múltiplo de ganancias.<br><br>" +
      "<b>Cuándo comprar — el lockup ES el calendario:</b> un <i>lockup</i> = la ventana post-IPO en la que los insiders no pueden vender; al vencer por oleadas se vuelven vendedores forzados y la acción tiende a debilitarse, así que cada unlock es un <b>punto de entrada escalonado</b>. <b>10 ago</b> base 20% (resultados confirmados <b>6 ago</b>); luego los tramos de tiempo del <b>21 ago / 10 sep / 25 sep / 10 oct / 25 oct</b> (7% c/u); <b>vencimiento total a 180 días ~9 dic</b>. (Escalera completa en OFERTA.)<br><br>" +
      "<b>Disciplina de entrada:</b> favorece la debilidad <b>≤ OPV $135</b> en cada ola — activo y abaratándose (el 16 jul rompió la OPV al <i>cierre</i> $131,11; el 17 jul nuevo mínimo ~$125,80). <b>El vuelo 13 reintenta el 20 jul = binario</b> (abortado en T-0 el 16 jul) — dimensiona el primer tramo pequeño para sumar al 10 ago independientemente. No persigas <b>&gt; ~$175</b> (la línea muerta del +30%) salvo que la tesis se revalore. Escalona — nunca una sola entrada."
    ),
  },
];
