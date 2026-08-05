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
               waves, never chase strength. Fresh 52-week low $104.83 Aug 5
               (~$115.81) DESPITE Flight 13 success Jul 24 + Q2 earnings beat
               Aug 4 (revenue +92%, AI +250%); the 911.5M-share base-20% unlock
               lands tomorrow, Aug 6. Style: see AGENTS.md. */
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
      "Structural signal, real revenue — but crowded, and the selling stopped being SPCX-only: <b>SOX entered a BEAR MARKET Jul 17 (−13% / 30d)</b> on Kimi K3 + hyperscaler-capex doubts. <b>The broad market has since rebounded</b> (Iran-oil easing, S&amp;P ~7,747 toward ATH), but <b>SOX still lags</b> — the chip correction is real, just no longer acute. <b>Trim only</b> — BofA still sees capex sustainable into 2027. <b>One SMH put spread hedges SMH + EWY</b> (a put spread = buy a put, sell a cheaper one to cap cost); with SOX lagging the rebound the puts are still worth holding.",
      "Señal estructural, revenue real — pero crowded, y la venta dejó de ser solo SPCX: <b>el SOX entró en MERCADO BAJISTA el 17 jul (−13% / 30d)</b> por Kimi K3 + dudas de capex de hiperscalers. <b>El mercado amplio desde entonces rebotó</b> (aflojamiento del petróleo-Irán, S&amp;P ~7.747 hacia máximos), pero <b>el SOX aún rezaga</b> — la corrección de chips es real, solo que ya no aguda. <b>Solo trim</b> — BofA aún ve el capex sostenible hacia 2027. <b>Un put spread de SMH cubre SMH + EWY</b> (un put spread = compras un put, vendes uno más barato para topar el costo); con el SOX rezagando el rebote, los puts aún valen la pena."
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
    summary: t("Global-liquidity asset, not an AI bet. Back to ~$64k Aug 5, hovering its 200-week average (~$62k) — the SPCX isolation is now TOTAL (broad market rebounded toward ATH, SPCX alone falling on unlock supply). Gauge still OFF (no weekly break).", "Activo de liquidez global, no apuesta IA. De vuelta a ~$64k el 5 ago, rondando su media de 200 semanas (~$62k) — el aislamiento de SPCX es ahora TOTAL (el mercado amplio rebotó hacia máximos, SPCX cayendo solo por la oferta del unlock). Medidor aún APAGADO (sin ruptura semanal)."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. The round trip vindicated the rule: BTC wicked to <b>~$58k (a 652-day low)</b>, was bought back above $60k, reclaimed the 200-week average at ~$64k Jul 7 — then faded, and as the broad market rebounded (Iran-oil easing, S&amp;P ~7,747) it stabilized <b>back near ~$64k Aug 5</b>. Glassnode showed long-term holders in net accumulation through the low. Rule stands: act only on a <b>confirmed weekly close</b> below the 200-week average on rising volume. <b>The SPCX isolation is now total</b> — BTC and the broad tape are up while SPCX falls alone on lockup supply; a BTC weekly break would be a genuine liquidity event, not an SPCX story.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. El viaje redondo validó la regla: BTC mechó a <b>~$58k (mínimo en 652 días)</b>, se compró sobre $60k, recuperó la media de 200 semanas en ~$64k el 7 jul — luego retrocedió, y al rebotar el mercado amplio (aflojamiento del petróleo-Irán, S&amp;P ~7.747) se estabilizó <b>de vuelta cerca de ~$64k el 5 ago</b>. Glassnode mostró holders de largo plazo en acumulación neta durante el mínimo. La regla sigue: actúa solo con <b>cierre semanal confirmado</b> bajo la media de 200 semanas con volumen creciente. <b>El aislamiento de SPCX es ahora total</b> — BTC y el mercado amplio suben mientras SPCX cae solo por la oferta del lockup; una ruptura semanal de BTC sería un evento de liquidez real, no una historia de SPCX."
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
      "Rotation destination, but <b>staggered</b>. Gold gets sold for margin calls on day 1 (a margin call = forced selling when a borrowed-money position loses value), then recovers — panic liquidity first, conviction later. Still bid near <b>~$4,071 Aug 5</b> even as Iran-oil cooled (Trump stood down Aug 3) — the bid is broader than one war. Not all at once.",
      "Destino de rotación, pero <b>escalonado</b>. El oro se vende por margin calls el día 1 (un margin call = venta forzada cuando una posición con dinero prestado pierde valor), luego recupera — primero liquidez de pánico, luego convicción. Aún con demanda cerca de <b>~$4.071 el 5 ago</b> pese al enfriamiento del petróleo-Irán (Trump se sentó el 3 ago) — el impulso es más amplio que una sola guerra. No todo de golpe."
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
      "<b>When to buy — the lockup IS the calendar:</b> a <i>lockup</i> = the post-IPO window when insiders can't sell; as it expires in waves they become forced sellers and the stock tends to weaken, so each unlock is a <b>staged entry point</b>. <b>Aug 6</b> base 20% (earnings confirmed <b>Aug 4</b>); then <b>Aug 21 / Sep 10 / Sep 25 / Oct 10 / Oct 25</b> time tranches (7% each); <b>180-day full unlock ~Dec 9</b>. (Full ladder in SUPPLY.)<br><br>" +
      "<b>Entry discipline:</b> favor weakness <b>≤ $135 IPO</b> into each wave — live and cheapening (broke the IPO <i>close</i> Jul 16 $131.11; fresh 52-wk low <b>$104.83 Aug 5</b> ~$115.81). <b>Both binaries resolved well</b> — Flight 13 <b>succeeded Jul 24</b> (20 Starlink V3 deployed, ship intact); Q2 <b>beat Aug 4</b> (revenue +92%, AI +250%, CFO targets $100B ARR) — yet the stock fell: proof the slide is pure supply, not a broken thesis. <b>Aug 6 = first scale</b> (911.5M shares, ~140% of the IPO float); the beat collapses the binary-risk discount, so size it. Don't chase <b>&gt; ~$175</b> (the dead +30% line) unless the thesis re-rates. Stagger — never one entry.",
      "<b>Por qué tenerlo:</b> la única megacap pure-play del espacio — Starship (cohete pesado reutilizable), la rampa de Starlink y la <b>opción de $60B en acciones para comprar Cursor (Anysphere)</b>, cierra en el 3T. <b>Pre-rentable</b> (−$4,3B de pérdida neta en el 1T 2026; $41,3B de déficit acumulado) — tenencia por tesis sobre la rampa y la opcionalidad, no por múltiplo de ganancias.<br><br>" +
      "<b>Cuándo comprar — el lockup ES el calendario:</b> un <i>lockup</i> = la ventana post-IPO en la que los insiders no pueden vender; al vencer por oleadas se vuelven vendedores forzados y la acción tiende a debilitarse, así que cada unlock es un <b>punto de entrada escalonado</b>. <b>6 ago</b> base 20% (resultados confirmados <b>4 ago</b>); luego los tramos de tiempo del <b>21 ago / 10 sep / 25 sep / 10 oct / 25 oct</b> (7% c/u); <b>vencimiento total a 180 días ~9 dic</b>. (Escalera completa en OFERTA.)<br><br>" +
      "<b>Disciplina de entrada:</b> favorece la debilidad <b>≤ OPV $135</b> en cada ola — activo y abaratándose (rompió la OPV al <i>cierre</i> el 16 jul $131,11; nuevo mínimo a 52 sem <b>$104,83 el 5 ago</b> ~$115,81). <b>Ambos binarios resolvieron bien</b> — el vuelo 13 <b>triunfó el 24 jul</b> (20 Starlink V3 desplegados, nave intacta); el 2T <b>superó el 4 ago</b> (revenue +92%, IA +250%, CFO apunta a $100B ARR) — y aun así la acción cayó: prueba de que la caída es pura oferta, no una tesis rota. <b>6 ago = primer tramo</b> (911,5M acciones, ~140% del float de la OPV); el beat colapsa el descuento de riesgo binario, así que dimensiónalo. No persigas <b>&gt; ~$175</b> (la línea muerta del +30%) salvo que la tesis se revalore. Escalona — nunca una sola entrada."
    ),
  },
];
