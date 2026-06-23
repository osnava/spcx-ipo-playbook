/* phases.js — the four phases and the Phase-03 reversal checklist.
   tone   : accent color key (ice | go | warn | hot)
   concept: one-sentence mental model
   drivers: [{ label, text }] rendered as cards
   action / watch: single labeled callout rows */
import { t } from "./i18n.js";

export const PHASES = [
  {
    id: "ph0", tone: "ice", icon: "⚠",
    num: "PHASE 00",
    name: t("Shakeout Watch", "Vigilancia de Sacudida"),
    date: "JUN 8 & JUN 16–17",
    headline: t("Don't assume the run-up is safe.", "No asumas que el tramo previo es seguro."),
    concept: t(
      "Two scheduled events could flush the market lower before the hype starts — and the shakeout came first, not after.",
      "Dos eventos en calendario podrían purgar el mercado antes de la euforia — y la sacudida vino primero, no después."
    ),
    drivers: [
      {
        label: t("S&P decision — REJECTED (Jun 4)", "Decisión S&P — RECHAZADA (4 jun)"),
        text: t(
          "<b>S&P DJI rejected the MegaCap waiver</b> (MR4292, Jun 4) — no rule changes. <b>S&P 500 leg is dead</b> until SpaceX is GAAP-profitable (−$4.9B in 2025). Only the Nasdaq-100 fast-entry survives.",
          "<b>S&P DJI rechazó la exención MegaCap</b> (MR4292, 4 jun) — sin cambios de reglas. <b>La pata S&P 500 está muerta</b> hasta que SpaceX sea rentable GAAP (−$4.9B en 2025). Solo sobrevive la entrada rápida del Nasdaq-100."
        ),
      },
      {
        label: t("Jun 16–17 FOMC — RESOLVED · hawkish", "FOMC 16–17 jun — RESUELTO · hawkish"),
        text: t(
          "<b>RESOLVED hawkish.</b> Held 3.5–3.75%, removed <b>forward guidance</b>, filed <b>no dot</b>; SEP now shows <b>9/18 seeing a 2026 hike</b>. The rollover catalyst — SPCX peaked $225.64 Jun 16, down every session since.",
          "<b>RESUELTO hawkish.</b> Mantuvo 3.5–3.75%, eliminó la <b>guía adelantada</b>, <b>sin punto</b>; el SEP ahora muestra <b>9/18 esperando una subida en 2026</b>. El catalizador de la reversión — SPCX picó $225,64 el 16 jun, cayendo en cada sesión desde."
        ),
      },
      {
        label: t("Shakeout extended into the debut", "Sacudida extendida al debut"),
        text: t(
          "The Jun 5 semi flush (Nasdaq −4.2%) <b>didn't settle</b> — it rolled into the post-debut window and merged with SPCX-specific selling (Cursor, the $20B bond, hawkish Fed). <b>Jun 22: S&amp;P 7,427, NDX −2.4%, VIX ~24</b> — still below the 7,500 trigger. <b>Not</b> the post-inclusion unwind.",
          "La purga de semis del 5 jun (Nasdaq −4.2%) <b>no se asentó</b> — se extendió al post-debut y se sumó a la venta de SPCX (Cursor, el bono de $20B, Fed hawkish). <b>22 jun: S&amp;P 7.427, NDX −2,4%, VIX ~24</b> — aún bajo el disparador de 7.500. <b>No es</b> el desarme post-inclusión."
        ),
      },
    ],
    action: t(
      "Your September SPY/QQQ puts double as flush cover. Don't add risk into these dates.",
      "Tus puts SPY/QQQ a septiembre sirven también como cobertura ante la purga. No agregues riesgo en estas fechas."
    ),
    watch: t(
      "S&P &lt; ~7,500, or Nasdaq breaking Mar-2026 lows = shakeout is starting.",
      "S&amp;P &lt; ~7.500, o el Nasdaq rompiendo los mínimos de mar-2026 = la sacudida está empezando."
    ),
  },
  {
    id: "ph1", tone: "go", icon: "↑",
    num: "PHASE 01",
    name: t("Build-Up", "Acumulación"),
    date: t("PRE-IPO → JUN 12", "PRE-OPV → 12 JUN"),
    headline: t("Hold everything. Don't sell into strength.", "Mantén todo. No vendas en la fuerza."),
    concept: t(
      "Anticipation lifts the whole space/tech/AI theme — your book is long it. Ride the easy leg.",
      "La anticipación impulsa todo el tema espacio/tech/IA — tu cartera está larga. Aprovéchalo."
    ),
    drivers: [
      {
        label: t("The calendar · priced", "El calendario · fijado"),
        text: t(
          "<b>$135/sh · $75B raise · ~$1.77T</b> (555.6M shares; $85.7B with greenshoe). Institutions didn't balk. Debut <b>Jun 12</b>, ticker SPCX. ~7% float → violent two-way moves.",
          "<b>$135/acc · $75B recaudado · ~$1,77B</b> (555,6M acciones; $85,7B con greenshoe). Los institucionales no dudaron. Debut <b>12 jun</b>, ticker SPCX. Float ~7% → movimientos violentos."
        ),
      },
      {
        label: t("Correlated upside", "Subida correlacionada"),
        text: t(
          "Your risk-on sleeve rises together on the hype (gold is the counterweight). Selling early leaves gains on the table and risks whipsaw.",
          "Tu bloque risk-on sube junto con la euforia (el oro es el contrapeso). Vender temprano deja ganancias y arriesga latigazos."
        ),
      },
      {
        label: t("Add-back gate · never opened", "Puerta para sumar · nunca abrió"),
        text: t(
          "<b>Brake was ON.</b> The gate (add only if the flush settles + FOMC passes clean + price breaks out) <b>never opened</b>. If it had: add <b>quality (SMH/ISAC), not froth (ARKQ/ROBO)</b>, in tranches — not funded by selling gold, not expecting a mechanical pop (~0–1%).",
          "<b>El freno estuvo PUESTO.</b> La puerta (sumar solo si la purga cede + el FOMC pasa limpio + el precio rompe) <b>nunca abrió</b>. Si lo hubiera hecho: suma <b>calidad (SMH/ISAC), no espuma (ARKQ/ROBO)</b>, en tramos — sin financiarlo vendiendo oro, sin esperar un salto mecánico (~0–1%)."
        ),
      },
    ],
    action: t(
      "Nothing to sell. Set September SPY/QQQ put insurance and write down your reversal levels while it's calm.",
      "Nada que vender. Coloca el seguro de puts SPY/QQQ a septiembre y anota tus niveles de reversión mientras hay calma."
    ),
    watch: t(
      "Pricing at/above ~$1.8T = momentum continues. Well below = institutions balked → go defensive early.",
      "Fijación en/sobre ~$1.8B = el momentum sigue. Muy por debajo = los institucionales dudaron → ponte defensivo."
    ),
  },
  {
    id: "ph2", tone: "warn", icon: "~",
    num: "PHASE 02",
    name: t("Inclusion Window", "Ventana de Inclusión"),
    date: "~JUN 12 → ~JUL 7",
    headline: t("Hold, but watch. Forced buying still supports the tape.", "Mantén, pero vigila. La compra forzada aún sostiene el mercado."),
    /* Live countdown to the NDX forced-buy auction. ESTIMATE only:
       debut Jun 12 + ~15 trading days → effective ~Jul 7, so the buy auction is
       the session before (~Jul 6 close, ET). Nasdaq's official notice (~Jun 29–30)
       will name the exact effective date — when it lands, update `target` below. */
    countdown: {
      target: "2026-07-06T16:00:00-04:00", // ~Jul 6, 16:00 ET (EDT, -04:00)
      title: t("NDX inclusion — est. countdown", "Inclusión NDX — cuenta atrás est."),
      label: t(
        "to the forced-buy closing auction (≈Jul 6, 16:00 ET). Effective ~Jul 7; Phase 03 opens the next session.",
        "hasta la subasta de cierre de compra forzada (≈6 jul, 16:00 ET). Efectivo ~7 jul; la Fase 03 abre la sesión siguiente."
      ),
      note: t(
        "Estimate: debut Jun 12 + ~15 trading days. Nasdaq's official notice (~Jun 29–30) fixes the exact date — update <code>target</code> in <code>phases.js</code> then.",
        "Estimación: debut 12 jun + ~15 días de cotización. El aviso oficial de Nasdaq (~29–30 jun) fija la fecha — actualiza <code>target</code> en <code>phases.js</code> entonces."
      ),
      done: t(
        "Auction window reached — forced demand is exhausting. Phase 03 is live.",
        "Ventana de subasta alcanzada — la demanda forzada se agota. La Fase 03 está activa."
      ),
    },
    concept: t(
      "The Nasdaq rule is a <b>symptom of the new regime</b>: a private megacap scales to ~$1.75T and skips years of public seasoning. The classic 'index pop' has faded (addition returns ~0–1% in 2010–2020) — the edge is the short-seasoning setup: forced buyers pay up near inclusion, prices unwind when that demand exhausts.",
      "La regla de Nasdaq es un <b>síntoma del nuevo régimen</b>: una megacap privada escala a ~$1.75B y salta años de maduración pública. El clásico 'salto por inclusión' se desvaneció (retornos ~0–1% en 2010–2020) — el edge es la maduración corta: los compradores forzados pagan caro cerca de la inclusión, el precio se deshace cuando esa demanda se agota."
    ),
    drivers: [
      {
        label: t("Nasdaq-100 Fast Entry · one auction", "Nasdaq-100 Entrada Rápida · una subasta"),
        text: t(
          "A top-40 newcomer joins ~<b>15 trading days</b> after debut (no seasoning, no 10% float min). SPCX qualifies easily. Effective <b>~Jul 7</b>; funds buy in <b>one closing auction the session before</b> (~Jul 6) — a single print, not a multi-day tailwind.",
          "Un recién llegado top-40 entra ~<b>15 días de cotización</b> tras el debut (sin maduración, sin mínimo de float del 10%). SPCX califica fácil. Efectivo <b>~7 jul</b>; los fondos compran en <b>una sola subasta de cierre la sesión previa</b> (~6 jul) — un único print, no un viento de cola de varios días."
        ),
      },
      {
        label: t("S&P dead · Russell/CRSP already in", "S&P muerta · Russell/CRSP ya entraron"),
        text: t(
          "<b>S&P 500 off</b> (MR4292 rejected; −$4.9B in 2025 → 2027+). <b>Russell 1000/3000 + CRSP added SPCX Jun 18</b> (5-day rule). The <b>Jul 6 NDX print is the last big forced-buy wave</b> this summer; S&P's ~$11.8T base waits until 2027.",
          "<b>S&P 500 fuera</b> (MR4292 rechazado; −$4.9B en 2025 → 2027+). <b>Russell 1000/3000 + CRSP añadieron SPCX el 18 jun</b> (regla de 5 días). El <b>print del NDX del 6 jul es la última gran ola de compra forzada</b> del verano; la base de ~$11,8T del S&P espera hasta 2027."
        ),
      },
      {
        label: t("Sizing · float-capped", "Tamaño · topado por float"),
        text: t(
          "Forced buy is QQQ-trackers only — ~<b>$15–30B</b> for Jul 6. ~7% float → the <b>3× cap limits index weight</b>. One capped print against a growing supply wall — don't bank on a large lift.",
          "La compra forzada es solo trackers de QQQ — ~<b>$15–30B</b> para el 6 jul. Float ~7% → el <b>tope 3× limita el peso</b>. Un print acotado contra una pared de oferta creciente — no cuentes con un gran empujón."
        ),
      },
      {
        label: t("Cursor · $60B all-stock (Jun 16)", "Cursor · $60B en acciones (16 jun)"),
        text: t(
          "Six days post-IPO SpaceX signed the <b>$60B all-stock Cursor (Anysphere) deal</b> — closing Q3, paid in Class A at 7-day VWAP. Drove the <b>$225.64 peak</b>, then a <b>dilution overhang</b>. First read on how a freshly-public mega-cap prices AI capex.",
          "Seis días tras la IPO SpaceX firmó el <b>deal de Cursor (Anysphere) por $60B en acciones</b> — cierra en el 3T, pagado en Clase A a VWAP de 7 días. Llevó al <b>pico de $225,64</b>, luego un <b>lastre de dilución</b>. Primera lectura de cómo una megacap recién salida cotiza el capex de IA."
        ),
      },
      {
        label: t("$20B bond + $100.8B cash (Jun 22)", "Bono $20B + $100,8B caja (22 jun)"),
        text: t(
          "Monday's <b>−16.4% crash</b> was triggered by SpaceX's inaugural <b>$20B notes</b> (refinancing the xAI bridge). <b>$100.8B cash vs ~$29B debt</b>, but the market read it as <b>capital-intensity signalling</b> — 'why debt so soon?'",
          "El <b>desplome del −16,4% del lunes</b> lo gatilló la primera emisión de <b>bonos de $20B</b> de SpaceX (refinanciando el puente de xAI). <b>$100,8B de caja vs ~$29B de deuda</b>, pero el mercado lo leyó como <b>señal de intensidad de capital</b> — '¿deuda tan pronto?'"
        ),
      },
    ],
    action: t(
      "Protect with puts: a <b>SMH put spread (Jul/Aug)</b> floors your semis (one position covers SMH + EWY). <b>Sep SPY/QQQ puts</b> are broad cover. Size to the gap down to your trigger, not the whole book. Pick strikes now.",
      "Protege con puts: un <b>put spread de SMH (jul/ago)</b> pave tus semis (una posición cubre SMH + EWY). Los <b>puts SPY/QQQ a septiembre</b> son cobertura amplia. Dimensiona al gap hasta tu disparador, no a toda la cartera. Elige strikes ahora."
    ),
    watch: t(
      "Don't short the pop. The trigger is Nasdaq's inclusion notice (<b>~Jun 29–30</b>) naming the effective date. Demand peaks in the <b>auction the session before</b>, exhausts at that close; Phase 03 opens next session.",
      "No te pongas corto en el pico. El disparador es el aviso de inclusión de Nasdaq (<b>~29–30 jun</b>) con la fecha efectiva. La demanda pica en la <b>subasta de la sesión previa</b>, se agota en ese cierre; la Fase 03 abre la sesión siguiente."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("~JUL 7 ONWARD", "~7 JUL EN ADELANTE"),
    headline: t("The trigger. If it rolls over, trim in priority order.", "El disparador. Si se da la vuelta, recorta en orden de prioridad."),
    concept: t(
      "Forced demand is spent; real price discovery takes over. <b>Forced demand always exhausts</b> — then real price discovery rules.",
      "La demanda forzada se agotó; toma el control el descubrimiento de precio real. <b>Toda demanda forzada se agota</b> — entonces manda el precio real."
    ),
    drivers: [
      {
        label: t("Correction vs thesis break", "Corrección vs ruptura de tesis"),
        text: t(
          "Distinguish a <b>technical correction</b> (buy the dip) from a <b>thesis break</b> (revenue no longer validates the multiple → exit). Technical triggers measure only the first.",
          "Distingue una <b>corrección técnica</b> (compra la caída) de una <b>ruptura de tesis</b> (el revenue ya no valida el múltiplo → sal). Los disparadores técnicos solo miden lo primero."
        ),
      },
      {
        label: t("SMH ↔ SPCX", "SMH ↔ SPCX"),
        text: t(
          "<b>Mechanical:</b> Fast Entry (no removal) forces NDX funds to buy SPCX, trimming every constituent — NVDA/AVGO/AMD sit in NDX <i>and</i> atop SMH → hits SMH. <b>Sentiment:</b> same AI narrative.",
          "<b>Mecánico:</b> la Entrada Rápida (sin remoción) obliga a los fondos NDX a comprar SPCX, recortando a cada constituyente — NVDA/AVGO/AMD están en NDX <i>y</i> al tope de SMH → golpea SMH. <b>Sentimiento:</b> misma narrativa IA."
        ),
      },
    ],
    action: t(
      "Confirmed reversal → sell in order: <b>ARKQ → EWY</b> (noise) → <b>SMH → ROBO → URA</b> (trim only). <b>Hold BTC</b> (sell only on a weekly close &lt; 200W ~$62k, rising volume). Keep ISAC. <b>Stagger into gold</b> — it's panic liquidity (sold for margin calls day 1, recovers after), not conviction. Still rising → do nothing.",
      "Reversión confirmada → vende en orden: <b>ARKQ → EWY</b> (ruido) → <b>SMH → ROBO → URA</b> (solo trim). <b>Mantén BTC</b> (vende solo con cierre semanal &lt; 200s ~$62k, volumen creciente). Conserva ISAC. <b>Escalona hacia el oro</b> — es liquidez de pánico (se vende por margin calls el día 1, recupera después), no convicción. Sigue subiendo → no hagas nada."
    ),
    watch: t(
      "You're hedging <b>timing risk</b> (temporary reversal), not the thesis. Confirm before acting; don't front-run.",
      "Estás cubriendo el <b>riesgo de timing</b> (reversión temporal), no la tesis. Confirma antes de actuar; no te adelantes."
    ),
  },
];

export const TRIGGERS = [
  t("<b>TRIGGERED:</b> SPCX broke its debut close ($160.95), dipped under $150 premarket Jun 23 (~$149) — only ~+14% over the $135 IPO. <b>Rising volume</b> (3 down sessions, −16.4% Mon).",
    "<b>DISPARADO:</b> SPCX rompió su cierre de debut ($160,95), picó bajo $150 en premarket el 23 jun (~$149) — solo ~+14% sobre la OPV de $135. <b>Volumen creciente</b> (3 sesiones bajistas, −16,4% el lun)."),
  t("VIX <b>~24</b> (was ~21 Jun 9) — above the 20–22 band, climbing on the SPCX crash + hawkish Fed.",
    "VIX <b>~24</b> (era ~21 el 9 jun) — sobre la banda 20–22, subiendo con el desplome de SPCX + la Fed hawkish."),
  t("<b>Cross-confirmation:</b> BTC losing its 200W (~$62k) + VIX &gt;20–22 + URA/EWY breaking. BTC <b>holding ~$64k just above the 200W</b> (F&amp;G 23) — not broken, watch it.",
    "<b>Confirmación cruzada:</b> BTC perdiendo la 200s (~$62k) + VIX &gt;20–22 + URA/EWY rompiendo. BTC <b>aguantando ~$64k sobre la 200s</b> (F&amp;G 23) — no roto, vigílalo."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. First trigger's live: <b>confirm cover now</b>.",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. El primero ya está activo: <b>confirma la cobertura ahora</b>."),
];
