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
        label: t("Shakeout → RESOLVED (unwound by Jul 1)", "Sacudida → RESUELTA (revertida al 1 jul)"),
        text: t(
          "The Jun 5 semi flush + SPCX-specific selling (Cursor, the bond, hawkish Fed) bottomed on <b>Jun 23 ($147.11)</b>, then <b>fully unwound</b>. <b>Jul 1: S&amp;P 7,483, Nasdaq 26,040, VIX ~16.6</b> — near records, Q2 the strongest quarter since 2020. It was a shakeout, <b>not</b> the post-inclusion unwind — and it's now behind us.",
          "La purga de semis del 5 jun + la venta de SPCX (Cursor, el bono, Fed hawkish) tocó fondo el <b>23 jun ($147,11)</b>, y luego <b>se revirtió por completo</b>. <b>1 jul: S&amp;P 7.483, Nasdaq 26.040, VIX ~16,6</b> — cerca de récords, el 2T el trimestre más fuerte desde 2020. Fue una sacudida, <b>no</b> el desarme post-inclusión — y ya quedó atrás."
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
    /* Live countdown to the NDX forced-buy auction. CONFIRMED: Nasdaq announced
       Jun 26 that SPCX joins the Nasdaq-100 effective Jul 7 (first stock to use
       the 15-day fast-track rule). Index funds buy the Jul 6 closing auction; the
       index holds SPCX from the Jul 7 open. Target is the Jul 6, 16:00 ET close. */
    countdown: {
      target: "2026-07-06T16:00:00-04:00", // Jul 6, 16:00 ET (EDT, -04:00) — confirmed
      title: t("NDX inclusion — CONFIRMED Jul 7", "Inclusión NDX — CONFIRMADA 7 jul"),
      label: t(
        "to the forced-buy closing auction (Jul 6, 16:00 ET). Effective Jul 7; Phase 03 opens the next session.",
        "hasta la subasta de cierre de compra forzada (6 jul, 16:00 ET). Efectivo 7 jul; la Fase 03 abre la sesión siguiente."
      ),
      note: t(
        "Confirmed Jun 26: SPCX joins the Nasdaq-100 effective Jul 7 — the first 15-day fast-track entry. Funds buy the Jul 6 close: ~$4.3B forced Nasdaq-100 demand (~1% weight, ~$450B tracking QQQ &amp; peers), plus ~$3B of Russell reweighting already done.",
        "Confirmado el 26 jun: SPCX entra al Nasdaq-100 efectivo el 7 jul — la primera entrada rápida de 15 días. Los fondos compran el cierre del 6 jul: ~$4,3B de demanda forzada Nasdaq-100 (~1% del peso, ~$450B siguiendo QQQ y pares), más ~$3B de reponderación Russell ya hecha."
      ),
      done: t(
        "Auction window reached — forced demand is exhausting. Phase 03 is live.",
        "Ventana de subasta alcanzada — la demanda forzada se agota. La Fase 03 está activa."
      ),
    },
    concept: t(
      "The Nasdaq rule is a <b>symptom of the new regime</b>: a private megacap scales to ~$2.1T and skips years of public seasoning. The classic 'index pop' has faded (addition returns ~0–1% in 2010–2020) — and history just re-confirmed it: <b>Palantir, Strategy &amp; Axon all fell in the 10 days after joining the NDX</b> (2024). The edge is the short-seasoning setup: forced buyers pay up near inclusion, prices unwind when that demand exhausts.",
      "La regla de Nasdaq es un <b>síntoma del nuevo régimen</b>: una megacap privada escala a ~$2,1B y salta años de maduración pública. El clásico 'salto por inclusión' se desvaneció (retornos ~0–1% en 2010–2020) — y la historia lo reconfirmó: <b>Palantir, Strategy y Axon cayeron en los 10 días tras entrar al NDX</b> (2024). El edge es la maduración corta: los compradores forzados pagan caro cerca de la inclusión, el precio se deshace cuando esa demanda se agota."
    ),
    drivers: [
      {
        label: t("Nasdaq-100 Fast Entry · CONFIRMED Jul 7", "Nasdaq-100 Entrada Rápida · CONFIRMADA 7 jul"),
        text: t(
          "<b>Confirmed Jun 26</b> — SPCX is the <b>first stock to use the 15-day fast-track</b> (top-40, no seasoning, no 10% float min). Effective <b>Jul 7</b>; funds buy in <b>one closing auction the session before (Jul 6)</b> — a single print, not a multi-day tailwind. Phase 03 opens Jul 7.",
          "<b>Confirmado el 26 jun</b> — SPCX es la <b>primera acción en usar la entrada rápida de 15 días</b> (top-40, sin maduración, sin mínimo de float del 10%). Efectivo <b>7 jul</b>; los fondos compran en <b>una sola subasta de cierre la sesión previa (6 jul)</b> — un único print, no un viento de cola de varios días. La Fase 03 abre el 7 jul."
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
        label: t("Sizing · smaller than it sounds", "Tamaño · menor de lo que suena"),
        text: t(
          "The confirmed forced buy is ~<b>$4.3B</b> (Jul 6 close), not the tens of billions some assumed — ~1% index weight, ~$450B tracking QQQ &amp; peers. ~7% float caps the weight. <b>One ~$4.3B print against a growing supply wall</b> (Aug lockup) — don't bank on a large lift.",
          "La compra forzada confirmada es ~<b>$4,3B</b> (cierre del 6 jul), no las decenas de miles de millones que algunos suponían — ~1% del peso, ~$450B siguiendo QQQ y pares. El float ~7% topa el peso. <b>Un print de ~$4,3B contra una pared de oferta creciente</b> (lockup de agosto) — no cuentes con un gran empujón."
        ),
      },
      {
        label: t("Cursor · $60B option (Jun 16)", "Cursor · opción de $60B (16 jun)"),
        text: t(
          "Six days post-IPO SpaceX took an <b>option to buy Cursor (Anysphere) for $60B all-stock</b> (Class A at 7-day VWAP, closing Q3) — or pay a <b>$10B breakup fee</b> to walk. Drove the <b>$225.64 peak</b>, then a dilution overhang; Oppenheimer since set a <b>$250 target</b> citing Cursor revenue visibility. The bull/bear tension on AI capex, in one deal.",
          "Seis días tras la IPO SpaceX tomó una <b>opción para comprar Cursor (Anysphere) por $60B en acciones</b> (Clase A a VWAP de 7 días, cierra el 3T) — o pagar <b>$10B de ruptura</b> para salir. Llevó al <b>pico de $225,64</b>, luego un lastre de dilución; Oppenheimer fijó desde entonces un <b>objetivo de $250</b> citando visibilidad de ingresos de Cursor. La tensión alcista/bajista sobre el capex de IA, en un solo deal."
        ),
      },
      {
        label: t("$25B bond · 3.5× oversubscribed (Jun 23)", "Bono $25B · 3,5× sobresuscrito (23 jun)"),
        text: t(
          "The <b>−16.4% Jun 22 crash</b> came on news of the debut bond sale (+ risk-off). But the deal <b>priced at $25B</b> (up from $20B) with <b>~$90B of orders — 3.5× oversubscribed</b>, among the biggest IG order books ever (5 tranches 2031–2056, 5.35–6.65%; refinancing the xAI bridge). That demand <b>helped SPCX recover</b> off the $147 low — a bullish credit tell, not just capital-intensity.",
          "El <b>desplome del −16,4% del 22 jun</b> vino con la noticia de la emisión debut (+ risk-off). Pero el deal <b>se fijó en $25B</b> (desde $20B) con <b>~$90B de órdenes — 3,5× sobresuscrito</b>, entre los mayores libros IG de la historia (5 tramos 2031–2056, 5,35–6,65%; refinancia el puente de xAI). Esa demanda <b>ayudó a SPCX a recuperar</b> desde el mínimo de $147 — una señal de crédito alcista, no solo intensidad de capital."
        ),
      },
    ],
    action: t(
      "<b>Vol has collapsed (VIX ~16.6) → insurance is cheap again.</b> This is the window to set it before Jul 7 + the Aug lockup: a <b>SMH put spread (Jul/Aug)</b> floors your semis (one position covers SMH + EWY); <b>Sep SPY/QQQ puts</b> are broad cover. Size to the gap down to your trigger, not the whole book. Pick strikes now.",
      "<b>La vol se desplomó (VIX ~16,6) → el seguro vuelve a estar barato.</b> Esta es la ventana para colocarlo antes del 7 jul + el lockup de agosto: un <b>put spread de SMH (jul/ago)</b> pave tus semis (una posición cubre SMH + EWY); los <b>puts SPY/QQQ a septiembre</b> son cobertura amplia. Dimensiona al gap hasta tu disparador, no a toda la cartera. Elige strikes ahora."
    ),
    watch: t(
      "Don't chase the pop — the notice is in (<b>Jun 26, effective Jul 7</b>) and history says post-inclusion names <i>fade</i> (Palantir/Strategy/Axon). Demand peaks in the <b>Jul 6 closing auction</b>, exhausts at that close; Phase 03 opens Jul 7.",
      "No persigas el pico — el aviso ya está (<b>26 jun, efectivo 7 jul</b>) y la historia dice que los nombres post-inclusión se <i>desvanecen</i> (Palantir/Strategy/Axon). La demanda pica en la <b>subasta de cierre del 6 jul</b>, se agota en ese cierre; la Fase 03 abre el 7 jul."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("JUL 7 ONWARD", "7 JUL EN ADELANTE"),
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
      {
        label: t("The supply wall · Aug lockup", "La pared de oferta · lockup de agosto"),
        text: t(
          "The forced buy (~$4.3B, one print) is dwarfed by what follows: <b>base 20% of insider shares unlock the 2nd trading day after Q2 earnings</b> (late Jul/early Aug), rising to 30% if SPCX closes <b>≥$175.50</b> (30% over IPO) on 5 of the 10 days into earnings. <b>~$800B of stock is eligible by October.</b> Every major post-IPO lockup in the last decade produced at least temporary weakness.",
          "La compra forzada (~$4,3B, un print) queda empequeñecida por lo que sigue: <b>el 20% base de acciones de insiders se libera el 2º día tras los resultados del 2T</b> (fin jul/inicio ago), subiendo a 30% si SPCX cierra <b>≥$175,50</b> (30% sobre la IPO) en 5 de los 10 días hacia los resultados. <b>~$800B de acciones elegibles para octubre.</b> Cada gran lockup post-IPO de la última década produjo al menos debilidad temporal."
        ),
      },
    ],
    action: t(
      "Confirmed reversal → sell in order: <b>ARKQ → EWY</b> (noise) → <b>SMH → ROBO → URA</b> (trim only). <b>Hold BTC</b> — the ~$58k wick (652-day low) was <i>already bought back above $60k</i> with on-chain holders re-accumulating; the sell signal is a <b>weekly close</b> &lt; ~$62k on rising volume, not the wick. Keep ISAC. <b>Stagger into gold</b> — it's panic liquidity (sold for margin calls day 1, recovers after), not conviction. Still rising → do nothing.",
      "Reversión confirmada → vende en orden: <b>ARKQ → EWY</b> (ruido) → <b>SMH → ROBO → URA</b> (solo trim). <b>Mantén BTC</b> — <i>ya</i> está bajo la 200s intrasemana (~$58k); la señal de venta es un <b>cierre semanal</b> &lt; ~$62k con volumen creciente, no la mecha intrasemana. Conserva ISAC. <b>Escalona hacia el oro</b> — es liquidez de pánico (se vende por margin calls el día 1, recupera después), no convicción. Sigue subiendo → no hagas nada."
    ),
    watch: t(
      "You're hedging <b>timing risk</b> (temporary reversal), not the thesis. Confirm before acting; don't front-run.",
      "Estás cubriendo el <b>riesgo de timing</b> (reversión temporal), no la tesis. Confirma antes de actuar; no te adelantes."
    ),
  },
];

export const TRIGGERS = [
  t("<b>RE-ARMED:</b> SPCX <b>recovered above its $160.95 debut close to ~$162</b> (Jul 1), off the $147.11 Jun 23 low — it's going <i>into</i> inclusion strong. The trigger re-fires if it breaks the debut close on rising volume <b>after</b> the Jul 6 auction.",
    "<b>RE-ARMADO:</b> SPCX <b>recuperó sobre su cierre de debut de $160,95 a ~$162</b> (1 jul), desde el mínimo de $147,11 del 23 jun — entra <i>fuerte</i> a la inclusión. El disparador vuelve a activarse si rompe el cierre de debut con volumen creciente <b>tras</b> la subasta del 6 jul."),
  t("<b>OFF:</b> VIX <b>~16.6</b> (was ~24 Jun 22) — collapsed <i>below</i> the 20–22 band as risk-off unwound. Equity insurance is <b>cheap again</b> — the reason to set the hedge now, not the reason to fear.",
    "<b>APAGADO:</b> VIX <b>~16,6</b> (era ~24 el 22 jun) — se desplomó <i>bajo</i> la banda 20–22 al revertirse el risk-off. El seguro de acciones vuelve a estar <b>barato</b> — la razón para colocar la cobertura ahora, no para temer."),
  t("<b>TESTING (unconfirmed):</b> BTC <b>wicked to ~$58k</b> (652-day low) then <b>recovered above $60k</b> — still under the 200W (~$62k), but the panic low was bought and Glassnode shows long-term holders back to <b>net accumulation</b>. The <b>weekly close</b> is the confirm, not the wick.",
    "<b>EN PRUEBA (sin confirmar):</b> BTC <b>mechó a ~$58k</b> (mínimo en 652 días) y luego <b>recuperó sobre $60k</b> — aún bajo la 200s (~$62k), pero el mínimo de pánico se compró y Glassnode muestra a los holders de largo plazo de vuelta en <b>acumulación neta</b>. El <b>cierre semanal</b> es la confirmación, no la mecha."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. With vol cheap and Jul 7 + the Aug lockup ahead: <b>set/confirm cover now</b>, while it's cheap.",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. Con la vol barata y el 7 jul + el lockup de agosto por delante: <b>coloca/confirma la cobertura ahora</b>, mientras está barata."),
];
