/* holdings.js — the eight positions and their per-phase state, plus SPCX itself
   as the single-name accumulate target.
   states[phaseId] = { label, tone }  where tone ∈ hold|watch|sell|keep|accum
   summary: one-line thesis, always visible in the table
   detail : fuller reasoning + news notes, shown when the row is expanded

   THESIS UPDATE (Aug 17): wave 1 of the lockup (911.5M shares, Aug 6) was
   ABSORBED day 1 (+6%, heavy volume) — the 13Fs show the buyers (PIF +154M,
   Harvard $2.2B, Blackstone, Atreides; Nvidia disclosed $20.97B Aug 17).
   A squeeze (shorts 34% → 11% of float, S3) drove SPCX +41% off the Aug-3
   record low ($104.83) to ~$148 — BACK ABOVE the $135 IPO, ~2.4× Morningstar
   FV ($62). So:
     Sleeve (SMH/ROBO/URA): HOLD stands (S&P at records; SOX still ~20% under
     its Jun-22 high — keep the SMH hedge while it lags).
     ARKQ/EWY: OPPORTUNISTIC sells — only to fund SPCX adds.
     Holds: BTC (200-wk) · ISAC (anchor) · gold (stagger in; now ~$4,470,
           +10%/month on cool CPI + central-bank buying + the expired Iran
           ceasefire — keep the pace slow).
     SPCX: first scale filled at wave 1 ($105–116 zone). NO adds above the
           $135 IPO — the line is live at ~$148. Next scales: the Aug 20 /
           Sep / Oct waves, weighted toward the Dec 9 (180-day) window nearer
           FV. Shorts are flushed (11%) — the squeeze fuel is spent. Style: AGENTS.md. */
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
    summary: t("AI infra with real revenue (NVDA/AVGO/TSM). HOLD — broad tape at records; SOX still lags.", "Infra IA con revenue real (NVDA/AVGO/TSM). MANTENER — mercado amplio en récords; el SOX aún rezaga."),
    detail: t(
      "Structural signal, real revenue — the Jul contagion (SOX bear) <b>has unwound</b>: the S&amp;P sits at records (~7,799 Aug 14) while <b>SOX still trades ~20% under its Jun-22 high</b>, so chips lag the tape even now. SMH tracks the broad tape, not SPCX idiosyncrasy — <b>HOLD</b>; trim only re-arms on a fresh broad-market break (Iran ceasefire expired Aug 16; watch Brent ~$90). BofA still sees capex sustainable into 2027. <b>One SMH put spread hedges SMH + EWY</b> (a put spread = buy a put, sell a cheaper one to cap cost) — keep it while SOX lags.",
      "Señal estructural, revenue real — el contagio de julio <b>se deshizo</b>: el S&amp;P está en récords (~7.799 el 14 ago) mientras el <b>SOX aún cotiza ~20% bajo su máximo del 22 jun</b>, así que los chips rezagan el mercado incluso ahora. SMH sigue al mercado amplio, no a la idiosincrasia de SPCX — <b>MANTENER</b>; el trim solo se re-arma con una nueva ruptura del mercado amplio (el cese al fuego con Irán expiró el 16 ago; mira el Brent ~$90). BofA aún ve el capex sostenible hacia 2027. <b>Un put spread de SMH cubre SMH + EWY</b> (un put spread = compras un put, vendes uno más barato para topar el costo) — consérvalo mientras el SOX rezaga."
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
    summary: t("Global-liquidity asset, not an AI bet. Two weeks pinned at ~$64k, hugging its 200-week average (~$62k) — through the SPCX crash AND the squeeze. Gauge OFF (no weekly break).", "Activo de liquidez global, no apuesta IA. Dos semanas clavado en ~$64k, abrazando su media de 200 semanas (~$62k) — durante el desplome de SPCX Y el squeeze. Medidor APAGADO (sin ruptura semanal)."),
    detail: t(
      "Institutions hold <b>&gt;12% of supply</b>. The round trip vindicated the rule: BTC wicked to <b>~$58k (a 652-day low)</b>, was bought back above $60k, reclaimed the 200-week average at ~$64k Jul 7 — and has sat on it ever since (~$64k Aug 17, unmoved by either the SPCX crash or the +41% squeeze). Glassnode showed long-term holders in net accumulation through the low. Rule stands: act only on a <b>confirmed weekly close</b> below the 200-week average on rising volume — that would be a genuine liquidity event, not an SPCX story.",
      "Las instituciones tienen <b>&gt;12% del suministro</b>. El viaje redondo validó la regla: BTC mechó a <b>~$58k (mínimo en 652 días)</b>, se compró sobre $60k, recuperó la media de 200 semanas en ~$64k el 7 jul — y ahí se ha quedado (~$64k el 17 ago, sin moverse ni con el desplome de SPCX ni con el squeeze de +41%). Glassnode mostró holders de largo plazo en acumulación neta durante el mínimo. La regla sigue: actúa solo con <b>cierre semanal confirmado</b> bajo la media de 200 semanas con volumen creciente — eso sería un evento de liquidez real, no una historia de SPCX."
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
      "Rotation destination, but <b>staggered</b>. Gold gets sold for margin calls on day 1 (a margin call = forced selling when a borrowed-money position loses value), then recovers — panic liquidity first, conviction later. Now <b>~$4,470 (Aug 17), +10% on the month</b>: cool CPI/PPI, central-bank buying (China's 21st straight month) and the expired Iran ceasefire (Brent ~$90) — the bid is broader than one war. It has already run $400 in two weeks; don't chase it all at once.",
      "Destino de rotación, pero <b>escalonado</b>. El oro se vende por margin calls el día 1 (un margin call = venta forzada cuando una posición con dinero prestado pierde valor), luego recupera — primero liquidez de pánico, luego convicción. Ahora <b>~$4.470 (17 ago), +10% en el mes</b>: CPI/PPI fríos, compra de bancos centrales (21º mes seguido de China) y el cese al fuego con Irán expirado (Brent ~$90) — el impulso es más amplio que una sola guerra. Ya corrió $400 en dos semanas; no lo persigas todo de golpe."
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
      "<b>When to buy — the lockup IS the calendar:</b> a <i>lockup</i> = the post-IPO window when insiders can't sell; as it expires in waves they become forced sellers and the stock tends to weaken, so each unlock is a <b>staged entry point</b>. <b>Wave 1 (Aug 6, 911.5M shares) is DONE — absorbed day 1</b> (+6%, heavy volume): it filled the first scale, in the $105–116 zone. Next rungs: <b>Aug 20</b> (up to 319M, &gt;3× daily volume), the <b>Sep / Oct</b> time tranches (7% each), <b>180-day full unlock ~Dec 9</b>. (Full ladder in SUPPLY.)<br><br>" +
      "<b>Entry discipline (the $135 line is now LIVE):</b> the squeeze (shorts 34% → 11% of float, S3) ran SPCX from $104.83 (Aug 3) to ~$148 — +41%, ~10% above the $135 IPO and <b>~2.4× Morningstar FV ($62)</b>. The slide was pure supply and both binaries resolved well → the first scale is <b>held</b>. But <b>don't chase above $135</b>: squeeze fuel is spent (11%), insiders can sell into this strength, and the +28% Q3 cliff (~Nov) plus the <b>Dec 9</b> 180-day unlock (float → ~40%) still lie ahead. <b>Next scales at the Aug 20 / Sep / Oct waves, weighted toward the Dec 9 window nearer FV.</b> A move toward $62 is where sizing gets interesting. Stagger — never one entry.",
      "<b>Por qué tenerlo:</b> la única megacap pure-play del espacio — Starship (cohete pesado reutilizable), la rampa de Starlink y la <b>opción de $60B en acciones para comprar Cursor (Anysphere)</b>, cierra en el 3T. <b>Pre-rentable</b> (−$4,3B de pérdida neta en el 1T 2026; $41,3B de déficit acumulado) — tenencia por tesis sobre la rampa y la opcionalidad, no por múltiplo de ganancias.<br><br>" +
      "<b>Cuándo comprar — el lockup ES el calendario:</b> un <i>lockup</i> = la ventana post-OPV en la que los insiders no pueden vender; al vencer por oleadas se vuelven vendedores forzados y la acción tiende a debilitarse, así que cada unlock es un <b>punto de entrada escalonado</b>. <b>La ola 1 (6 ago, 911,5M acciones) está HECHA — absorbida el día 1</b> (+6%, volumen pesado): llenó el primer tramo, en la zona $105–116. Próximos peldaños: <b>20 ago</b> (hasta 319M, &gt;3× el volumen diario), los tramos de tiempo de <b>sep / oct</b> (7% c/u), <b>vencimiento total a 180 días ~9 dic</b>. (Escalera completa en OFERTA.)<br><br>" +
      "<b>Disciplina de entrada (la línea de $135 ahora está VIVA):</b> el squeeze (cortos 34% → 11% del float, S3) llevó a SPCX de $104,83 (3 ago) a ~$148 — +41%, ~10% sobre la OPV de $135 y <b>~2,4× VR de Morningstar ($62)</b>. La caída fue pura oferta y ambos binarios resolvieron bien → el primer tramo se <b>conserva</b>. Pero <b>no persigas por encima de $135</b>: el combustible del squeeze se agotó (11%), los insiders pueden vender en esta fuerza, y el abismo de +28% del 3T (~nov) más el unlock de 180 días del <b>9 dic</b> (float → ~40%) siguen adelante. <b>Próximos tramos en las olas 20 ago / sep / oct, ponderando hacia la ventana del 9 dic cerca del VR.</b> Un movimiento hacia $62 es donde el dimensionamiento se vuelve interesante. Escalona — nunca una sola entrada."
    ),
  },
];
