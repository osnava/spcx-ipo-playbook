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
    /* Countdown to the NDX forced-buy auction — now PAST (target hit Jul 6,
       16:00 ET), so app.js renders the `done` line instead of the clock. The
       auction printed with no pop (SPCX closed $160.42 on Jul 6); SPCX has been
       in the index since the Jul 7 open and faded −5.2% on day 1. */
    countdown: {
      target: "2026-07-06T16:00:00-04:00", // Jul 6, 16:00 ET (EDT, -04:00) — passed
      title: t("NDX inclusion — DONE (Jul 7)", "Inclusión NDX — HECHA (7 jul)"),
      label: t(
        "to the forced-buy closing auction (Jul 6, 16:00 ET). Effective Jul 7; Phase 03 opens the next session.",
        "hasta la subasta de cierre de compra forzada (6 jul, 16:00 ET). Efectivo 7 jul; la Fase 03 abre la sesión siguiente."
      ),
      note: t(
        "Confirmed Jun 26: SPCX joins the Nasdaq-100 effective Jul 7 — the first 15-day fast-track entry. Funds buy the Jul 6 close: ~$4.3B forced Nasdaq-100 demand (~1% weight, ~$450B tracking QQQ &amp; peers), plus ~$3B of Russell reweighting already done.",
        "Confirmado el 26 jun: SPCX entra al Nasdaq-100 efectivo el 7 jul — la primera entrada rápida de 15 días. Los fondos compran el cierre del 6 jul: ~$4,3B de demanda forzada Nasdaq-100 (~1% del peso, ~$450B siguiendo QQQ y pares), más ~$3B de reponderación Russell ya hecha."
      ),
      done: t(
        "The auction printed Jul 6 with <b>no pop</b> (close $160.42); SPCX joined the index Jul 7 and <b>faded −5.2% to ~$152 on day 1</b>. Forced demand is spent — Phase 03 is live.",
        "La subasta imprimió el 6 jul <b>sin salto</b> (cierre $160,42); SPCX entró al índice el 7 jul y <b>se desvaneció −5,2% a ~$152 el día 1</b>. La demanda forzada se agotó — la Fase 03 está activa."
      ),
    },
    concept: t(
      "The Nasdaq rule is a <b>symptom of the new regime</b>: a private megacap scales to ~$2.1T and skips years of public seasoning. The classic 'index pop' has faded (addition returns ~0–1% in 2010–2020) — and history just re-confirmed it: <b>Palantir, Strategy &amp; Axon all fell in the 10 days after joining the NDX</b> (2024). The edge is the short-seasoning setup: forced buyers pay up near inclusion, prices unwind when that demand exhausts.",
      "La regla de Nasdaq es un <b>síntoma del nuevo régimen</b>: una megacap privada escala a ~$2,1B y salta años de maduración pública. El clásico 'salto por inclusión' se desvaneció (retornos ~0–1% en 2010–2020) — y la historia lo reconfirmó: <b>Palantir, Strategy y Axon cayeron en los 10 días tras entrar al NDX</b> (2024). El edge es la maduración corta: los compradores forzados pagan caro cerca de la inclusión, el precio se deshace cuando esa demanda se agota."
    ),
    drivers: [
      {
        label: t("Nasdaq-100 Fast Entry · DONE Jul 7", "Nasdaq-100 Entrada Rápida · HECHA 7 jul"),
        text: t(
          "<b>It happened as scripted.</b> SPCX — the <b>first 15-day fast-track entry</b> — joined effective <b>Jul 7</b>. The ~$4.3B forced buy printed in the <b>Jul 6 closing auction</b>: a violent $155–168 session that closed <b>$160.42, down ~1%</b> — sellers met the index bid, <b>no pop</b>. Exactly the single-print, no-tailwind outcome this phase predicted.",
          "<b>Ocurrió según el guion.</b> SPCX — la <b>primera entrada rápida de 15 días</b> — se unió efectivo el <b>7 jul</b>. La compra forzada de ~$4,3B imprimió en la <b>subasta de cierre del 6 jul</b>: una sesión violenta de $155–168 que cerró en <b>$160,42, −1%</b> — los vendedores salieron al encuentro de la puja indexada, <b>sin salto</b>. Exactamente el resultado de un solo print, sin viento de cola, que esta fase predijo."
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
      "<b>Closed out Jul 7.</b> The pop never came — the Jul 6 auction absorbed the forced bid at $160.42 and day 1 in the index faded −5.2%, right on the Palantir/Strategy/Axon script. This phase is history; the playbook now runs on Phase 03.",
      "<b>Cerrada el 7 jul.</b> El salto nunca llegó — la subasta del 6 jul absorbió la puja forzada en $160,42 y el día 1 en el índice se desvaneció −5,2%, calcado al guion de Palantir/Strategy/Axon. Esta fase es historia; el playbook ahora corre en la Fase 03."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("JUL 7 ONWARD · LIVE", "7 JUL EN ADELANTE · ACTIVA"),
    headline: t("The trigger — and it tripped on day 1. Confirm, then trim in priority order.", "El disparador — y saltó el día 1. Confirma, luego recorta en orden de prioridad."),
    concept: t(
      "Forced demand is spent; real price discovery takes over. <b>Forced demand always exhausts</b> — then real price discovery rules. Day 1 proved it: −5.2% with the index bid gone.",
      "La demanda forzada se agotó; toma el control el descubrimiento de precio real. <b>Toda demanda forzada se agota</b> — entonces manda el precio real. El día 1 lo probó: −5,2% sin la puja indexada."
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
        label: t("Day 1 · fade + chip rout (Jul 7)", "Día 1 · fade + purga de chips (7 jul)"),
        text: t(
          "SPCX <b>−5.2% to ~$152</b> on its first day in the index — <b>below the $160.95 debut close</b>, the exact reversal line. Not alone: semis sold off after <b>Samsung's record Q2 came with AI-capex worries</b> and Reuters reported <b>DeepSeek is developing its own AI chip</b> (Nvidia-reliance risk) — Nasdaq led the tape lower. The fade and the SMH↔SPCX linkage arrived together.",
          "SPCX <b>−5,2% a ~$152</b> en su primer día en el índice — <b>bajo el cierre de debut de $160,95</b>, la línea exacta de reversión. No fue solo: los semis cayeron tras un <b>2T récord de Samsung empañado por dudas sobre su capex de IA</b> y un reporte de Reuters de que <b>DeepSeek desarrolla su propio chip de IA</b> (riesgo para la dependencia de Nvidia) — el Nasdaq lideró la baja. El fade y el vínculo SMH↔SPCX llegaron juntos."
        ),
      },
      {
        label: t("Quiet period over · six buys, one dissenter (Jul 7)", "Fin del quiet period · seis compras, un disidente (7 jul)"),
        text: t(
          "The 25-day underwriter quiet period expired and the coverage wave hit: <b>buy-equivalents across the syndicate — Goldman Buy $205</b> ('multi-trillion-dollar opportunity'), <b>Morgan Stanley Overweight $300</b> (Adam Jonas, the high outlier), plus RBC/Bernstein/Stifel/Citi; Oppenheimer already at $250. The dissenter: <b>Morningstar pegs fair value near $780B</b> — vs a ~$1.9T cap. Even the wave couldn't hold day 1 — <b>narrative support ≠ forced-buy support</b>.",
          "El quiet period de 25 días de los colocadores expiró y llegó la ola de cobertura: <b>equivalentes a compra en todo el sindicato — Goldman Compra $205</b> ('oportunidad de múltiples billones'), <b>Morgan Stanley Overweight $300</b> (Adam Jonas, el atípico alto), más RBC/Bernstein/Stifel/Citi; Oppenheimer ya en $250. El disidente: <b>Morningstar estima el valor justo cerca de $780B</b> — vs una capitalización de ~$1,9T. Ni la ola sostuvo el día 1 — <b>apoyo narrativo ≠ apoyo de compra forzada</b>."
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
      "Confirmed reversal → sell in order: <b>ARKQ → EWY</b> (noise) → <b>SMH → ROBO → URA</b> (trim only). <b>Hold BTC</b> — it <i>reclaimed</i> the 200W (~$64k vs ~$62k) and is diverging from the SPCX fade; the sell signal is a <b>weekly close</b> back &lt; ~$62k on rising volume. Keep ISAC. <b>Stagger into gold</b> — it's panic liquidity (sold for margin calls day 1, recovers after), not conviction. Day 1 tripped the line — <b>confirm the follow-through before selling</b>.",
      "Reversión confirmada → vende en orden: <b>ARKQ → EWY</b> (ruido) → <b>SMH → ROBO → URA</b> (solo trim). <b>Mantén BTC</b> — <i>recuperó</i> la 200s (~$64k vs ~$62k) y diverge del fade de SPCX; la señal de venta es un <b>cierre semanal</b> de vuelta &lt; ~$62k con volumen creciente. Conserva ISAC. <b>Escalona hacia el oro</b> — es liquidez de pánico (se vende por margin calls el día 1, recupera después), no convicción. El día 1 pisó la línea — <b>confirma el seguimiento antes de vender</b>."
    ),
    watch: t(
      "You're hedging <b>timing risk</b> (temporary reversal), not the thesis. One −5% close ≠ confirmation — <b>a failure to reclaim $160.95, or a lower close, does</b>. Don't front-run, but don't rationalize either.",
      "Estás cubriendo el <b>riesgo de timing</b> (reversión temporal), no la tesis. Un cierre de −5% ≠ confirmación — <b>no recuperar $160,95, o un cierre más bajo, sí lo es</b>. No te adelantes, pero tampoco lo racionalices."
    ),
  },
];

export const TRIGGERS = [
  t("<b>TRIPPED (Jul 7 — confirm the follow-through):</b> SPCX broke <b>below the $160.95 debut close</b> on its first post-auction session, −5.2% to <b>~$152</b> on heavy inclusion-day volume. That is the re-fire condition, met on day 1. Rule: one close is a signal, not a rout — <b>a second lower close / failure to reclaim $160.95 confirms</b>, then the sell order applies (ARKQ → EWY first).",
    "<b>DISPARADO (7 jul — confirma el seguimiento):</b> SPCX rompió <b>bajo el cierre de debut de $160,95</b> en su primera sesión post-subasta, −5,2% a <b>~$152</b> con el volumen pesado del día de inclusión. Esa es la condición de re-disparo, cumplida el día 1. Regla: un cierre es señal, no derrota — <b>un segundo cierre más bajo / no recuperar $160,95 confirma</b>, y entonces aplica el orden de venta (ARKQ → EWY primero)."),
  t("<b>OFF (last cheap window):</b> VIX <b>~15.7</b> even on a red day — insurance is still cheap, but the fade has started. If the hedge (SMH put spread + Sep SPY/QQQ puts) isn't on yet, <b>this is the last calm to set it</b>; it gets expensive the day the break confirms.",
    "<b>APAGADO (última ventana barata):</b> VIX <b>~15,7</b> incluso en un día rojo — el seguro sigue barato, pero el fade ya empezó. Si la cobertura (put spread de SMH + puts SPY/QQQ a septiembre) aún no está puesta, <b>esta es la última calma para colocarla</b>; se encarece el día que la ruptura confirme."),
  t("<b>RECLAIMED (off):</b> BTC is <b>back above its 200W (~$62k) at ~$64k</b>, +6.3% on the week, after the soft June jobs report (57k) trimmed rate-hike odds. The $58k wick → reclaim sequence vindicated the weekly-close rule. <b>BTC is diverging from the SPCX fade</b> — so the cross-asset gauge is NOT confirming a broad risk-off break. Hold; re-arm only on a weekly close back below ~$62k.",
    "<b>RECUPERADA (apagado):</b> BTC está <b>de vuelta sobre su 200s (~$62k) en ~$64k</b>, +6,3% en la semana, tras el flojo empleo de junio (57k) que recortó las probabilidades de subida de tasas. La secuencia mecha a $58k → recuperación validó la regla del cierre semanal. <b>BTC diverge del fade de SPCX</b> — el medidor cruzado NO confirma una ruptura risk-off amplia. Mantén; re-arma solo con un cierre semanal bajo ~$62k."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. The inclusion print is behind you; what's ahead is supply: <b>Q2 earnings in ~2 weeks → the 20% base unlock</b>, then the tranche ladder into October.",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. El print de inclusión quedó atrás; lo que viene es oferta: <b>resultados del 2T en ~2 semanas → el desbloqueo base del 20%</b>, luego la escalera de tramos hasta octubre."),
];
