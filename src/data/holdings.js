/* holdings.js — the eight positions and their per-phase state, plus SPCX itself
   as the single-name accumulate target.
   states[phaseId] = { label, tone }  where tone ∈ hold|watch|sell|keep|accum
   summary: one-line thesis, always visible in the table
   detail : fuller reasoning + news notes, shown when the row is expanded

   THESIS REVISION (Aug 5): the SPCX sell-trim thesis has DECOUPLED. The Jul
   contagion (SOX bear) that justified trimming the sleeve has unwound — broad
   tape back at ATH, SPCX now falls ALONE on idiosyncratic lockup supply. So:
     Sleeve (SMH/ROBO/URA): reverted HOLD (was trim).
     ARKQ/EWY: OPPORTUNISTIC sells (was forced) — only to fund SPCX adds.
     Holds: BTC (200-wk) · ISAC (anchor) · gold (stagger in).
     SPCX: accumulate SLOWLY into the lockup ladder — honest that Morningstar
           FV is $62 (~1.9× FV at ~$116), so more downside is plausible into
           the Dec 9 (180-day) exhaustion window. Fresh 52-wk low $104.83 Aug 5
           DESPITE Flight 13 success Jul 24 + Q2 beat Aug 4. Style: AGENTS.md. */
import { t } from "./i18n.js";

const hold  = (l) => ({ label: l || t("HOLD", "MANTENER"), tone: "hold" });
const watch = (l) => ({ label: l, tone: "watch" });
const keep  = (l) => ({ label: l, tone: "keep" });
const accum = (l) => ({ label: l, tone: "accum" });

const FLUSH = t("FLUSH RISK", "RIESGO PURGA");
const WATCH = t("WATCH", "VIGILAR");

export const HOLDINGS = [
  {
    rank: "1", ticker: "ARKQ",
    role: t("Noise/story · pre-profit duration", "Ruido/relato · duración pre-rentable"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: watch(t("OPP. SELL", "VENTA OPORT.")) },
    summary: t("Pre-profit, all duration, barely holds SpaceX. Opportunistic sell to fund SPCX.", "Pre-rentable, pura duración, casi no tiene SpaceX. Venta oportunística para financiar SPCX."),
    detail: t(
      "ARKQ is <b>story, not signal</b> — cut aggressively if the thesis cracks. (A \"story\" stock bets on a narrative; a \"signal\" stock has cash behind it.) Tell: on Jun 22's crash <b>ARK bought 210,121 SPCX (~$32.5M)</b> across 4 ETFs — a contrarian bet on this very theme.",
      "ARKQ es <b>relato, no señal</b> — recorta agresivo si la tesis se quiebra. (Una acción de \"relato\" apuesta a una narrativa; una de \"señal\" tiene caja detrás.) Señal: en el desplome del 22 jun <b>ARK compró 210.121 SPCX (~$32,5M)</b> en 4 ETFs — apuesta contrarian a este mismo tema."
    ),
  },
  {
    rank: "2", ticker: "EWY",
    role: t("Memory/semis + FX + EM beta", "Memoria/semis + FX + beta EM"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: watch(t("OPP. SELL", "VENTA OPORT.")) },
    summary: t("Korea ETF: memory/semis (Samsung/SK Hynix) + won FX + EM beta. Opportunistic sell to fund SPCX.", "ETF de Corea: memoria/semis (Samsung/SK Hynix) + FX won + beta EM. Venta oportunística para financiar SPCX."),
    detail: t(
      "Essentially the <b>same semi bet as SMH</b>, with extra fragility: a country fund, so EM liquidity flees first. Case in point: <b>Samsung (its top holding) printed a record Q2 Jul 7 and still sold off</b> on AI-spending doubts — good numbers no longer protect the theme.",
      "Esencialmente la <b>misma apuesta en semis que SMH</b>, con fragilidad extra: un fondo país, así que la liquidez EM huye primero. Caso: <b>Samsung (su mayor posición) reportó un 2T récord el 7 jul y aun así cayó</b> por dudas de gasto en IA — los buenos números ya no protegen al tema."
    ),
  },
  {
    rank: "3", ticker: "SMH",
    role: t("AI infrastructure · real revenue", "Infraestructura IA · revenue real"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: hold() },
    summary: t("AI infra with real revenue (NVDA/AVGO/TSM). HOLD — contagion unwound, broad tape at ATH.", "Infra IA con revenue real (NVDA/AVGO/TSM). MANTENER — la contagio se deshizo, mercado amplio en máximos."),
    detail: t(
      "Structural signal, real revenue — the Jul contagion (SOX bear Jul 17, −13% / 30d) <b>has unwound</b>: the broad tape rebounded to ATH (S&amp;P ~7,747) as Iran-oil cooled, and SPCX now falls <b>alone</b> on lockup supply. <b>That decoupling is the tell</b> — SMH tracks the recovered broad tape, not SPCX idiosyncrasy, so the trim thesis is stale. <b>HOLD</b>; trim only re-arms on a fresh broad-market break. BofA still sees capex sustainable into 2027. <b>One SMH put spread hedges SMH + EWY</b> (a put spread = buy a put, sell a cheaper one to cap cost) — keep it as insurance while SOX still lags the rebound.",
      "Señal estructural, revenue real — la contagio de julio (SOX bajista 17 jul, −13% / 30d) <b>se deshizo</b>: el mercado amplio rebotó a máximos (S&amp;P ~7.747) al enfriarse el petróleo-Irán, y SPCX ahora cae <b>solo</b> por la oferta del lockup. <b>Esa desconexión es la señal</b> — SMH sigue al mercado amplio recuperado, no a la idiosincrasia de SPCX, así que la tesis de trim es obsoleta. <b>MANTENER</b>; el trim solo se re-arma con una nueva ruptura del mercado amplio. BofA aún ve el capex sostenible hacia 2027. <b>Un put spread de SMH cubre SMH + EWY</b> (un put spread = compras un put, vendes uno más barato para topar el costo) — consérvalo como seguro mientras el SOX aún rezaga el rebote."
    ),
  },
  {
    rank: "4", ticker: "ROBO",
    role: t("Industrial robotics · diversified", "Robótica industrial · diversificado"),
    states: { ph0: watch(FLUSH), ph1: hold(), ph2: watch(WATCH), ph3: hold() },
    summary: t("Industrial robotics, diversified, lower multiple than ARKQ. HOLD — contagion unwound.", "Robótica industrial, diversificado, múltiplo más bajo que ARKQ. MANTENER — la contagio se deshizo."),
    detail: t(
      "Structural signal — more resilient than ARKQ (real industrial revenue, less hype). Trim, don't liquidate.",
      "Señal estructural — más resiliente que ARKQ (revenue industrial real, menos hype). Recorta, no liquides."
    ),
  },
  {
    rank: "5", ticker: "URA",
    role: t("Power for AI · physical backing", "Energía para la IA · respaldo físico"),
    states: { ph0: hold(t("RESILIENT", "RESISTENTE")), ph1: hold(), ph2: hold(), ph3: hold() },
    summary: t("'Power for AI' (datacenters→nuclear), uranium physical backing. HOLD — contagion unwound.", "'Energía para IA' (datacenters→nuclear), respaldo físico en uranio. MANTENER — la contagio se deshizo."),
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
      "<b>Entry discipline (slow it down):</b> accumulate into lockup weakness, but <b>honest about the anchor</b> — Morningstar fair value is <b>$62/share</b>, so at ~$116 SPCX is still <b>~1.9× FV</b> (down from 3.2× at the $225 peak, but not cheap). The slide is pure supply (both binaries resolved well — Flight 13 succeeded Jul 24; Q2 beat Aug 4 — yet it fell), so it's a <b>correction, not a thesis break</b> → keep buying. But the supply <b>ladder runs to Dec 9</b> (180-day full unlock, float → ~40%): Aug 6 is wave 1, not the climax. <b>Front-load smaller scales into the Aug/Oct waves; weight toward the Dec 9 exhaustion window.</b> Don't chase <b>&gt; ~$135 IPO</b> unless the thesis re-rates; a move toward $62 FV is where sizing gets interesting. Stagger — never one entry.",
      "<b>Por qué tenerlo:</b> la única megacap pure-play del espacio — Starship (cohete pesado reutilizable), la rampa de Starlink y la <b>opción de $60B en acciones para comprar Cursor (Anysphere)</b>, cierra en el 3T. <b>Pre-rentable</b> (−$4,3B de pérdida neta en el 1T 2026; $41,3B de déficit acumulado) — tenencia por tesis sobre la rampa y la opcionalidad, no por múltiplo de ganancias.<br><br>" +
      "<b>Cuándo comprar — el lockup ES el calendario:</b> un <i>lockup</i> = la ventana post-IPO en la que los insiders no pueden vender; al vencer por oleadas se vuelven vendedores forzados y la acción tiende a debilitarse, así que cada unlock es un <b>punto de entrada escalonado</b>. <b>6 ago</b> base 20% (resultados confirmados <b>4 ago</b>); luego los tramos de tiempo del <b>21 ago / 10 sep / 25 sep / 10 oct / 25 oct</b> (7% c/u); <b>vencimiento total a 180 días ~9 dic</b>. (Escalera completa en OFERTA.)<br><br>" +
      "<b>Disciplina de entrada (despacio):</b> acumula en la debilidad del lockup, pero <b>honesto con el ancla</b> — el valor razonable de Morningstar es <b>$62/acción</b>, así que a ~$116 SPCX sigue a <b>~1,9× VR</b> (bajó de 3,2× en el pico de $225, pero no es barato). La caída es pura oferta (ambos binarios resolvieron bien — el vuelo 13 triunfó el 24 jul; el 2T superó el 4 ago — y aun así cayó), así que es una <b>corrección, no ruptura de tesis</b> → sigue comprando. Pero la <b>escalera de oferta llega al 9 dic</b> (unlock total a 180 días, float → ~40%): el 6 ago es la ola 1, no el clímax. <b>Carga tramos más pequeños en las olas ago/oct; pondera hacia la ventana de agotamiento del 9 dic.</b> No persigas <b>&gt; ~OPV $135</b> salvo que la tesis se revalore; un movimiento hacia el VR de $62 es donde el dimensionamiento se vuelve interesante. Escalona — nunca una sola entrada."
    ),
  },
];
