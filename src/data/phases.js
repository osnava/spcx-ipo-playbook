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
      "Two scheduled events could flush the market lower before the hype starts — and the shakeout came first, not after. (A \"shakeout\" is a sharp drop that forces weak hands to sell before the real move.)",
      "Dos eventos en calendario podrían purgar el mercado antes de la euforia — y la sacudida vino primero, no después. (Una \"sacudida\" es una caída brusca que obliga a las manos débiles a vender antes del movimiento real.)"
    ),
    drivers: [
      {
        label: t("S&P decision — REJECTED (Jun 4)", "Decisión S&P — RECHAZADA (4 jun)"),
        text: t(
          "<b>S&amp;P DJI rejected the MegaCap waiver</b> (MR4292, Jun 4) — no rule changes. <b>The S&amp;P 500 leg is dead</b> until SpaceX is GAAP-profitable (it lost $4.9B in 2025). Only Nasdaq's fast-track survives — a special rule that adds a big new listing to the index in ~15 days instead of waiting for the next rebalance.",
          "<b>S&amp;P DJI rechazó la exención MegaCap</b> (MR4292, 4 jun) — sin cambios de reglas. <b>La pata S&amp;P 500 está muerta</b> hasta que SpaceX sea rentable bajo GAAP (perdió $4,9B en 2025). Solo sobrevive el fast-track de Nasdaq — una regla especial que añade una cotización grande nueva al índice en ~15 días en vez de esperar al siguiente rebalanceo."
        ),
      },
      {
        label: t("Jun 16–17 FOMC — RESOLVED · hawkish", "FOMC 16–17 jun — RESUELTO · hawkish"),
        text: t(
          "<b>RESOLVED hawkish</b> (biased toward higher rates). The Fed held rates at 3.5–3.75%, dropped its <b>forward guidance</b> (the usual signal about where rates are headed), and filed <b>no rate-hike dot</b>. Its SEP now shows <b>9 of 18 members expecting a 2026 hike</b>. That was the rollover catalyst — SPCX peaked at $225.64 on Jun 16 and fell every session after.",
          "<b>RESUELTO hawkish</b> (sesgado a tasas más altas). La Fed mantuvo tasas en 3,5–3,75%, eliminó su <b>guía adelantada</b> (la señal habitual sobre hacia dónde van las tasas) y <b>sin punto de subida</b>. Su SEP ahora muestra <b>9 de 18 miembros esperando una subida en 2026</b>. Ese fue el catalizador de la reversión — SPCX picó a $225,64 el 16 jun y cayó en cada sesión después."
        ),
      },
      {
        label: t("Shakeout → RESOLVED (unwound by Jul 1)", "Sacudida → RESUELTA (revertida al 1 jul)"),
        text: t(
          "The Jun 5 semiconductor flush plus SPCX-specific selling (Cursor, the bond, the hawkish Fed) bottomed on <b>Jun 23 ($147.11)</b>, then <b>fully unwound</b>. By <b>Jul 1: S&amp;P 7,483, Nasdaq 26,040, VIX ~16.6</b> — near records, with Q2 the strongest quarter since 2020. It was a shakeout, <b>not</b> the post-inclusion unwind — and it's now behind us. (The real unwind came later, in July.)",
          "La purga de semiconductores del 5 jun más la venta específica de SPCX (Cursor, el bono, la Fed hawkish) tocó fondo el <b>23 jun ($147,11)</b>, y luego <b>se revirtió por completo</b>. Al <b>1 jul: S&amp;P 7.483, Nasdaq 26.040, VIX ~16,6</b> — cerca de récords, con el 2T el trimestre más fuerte desde 2020. Fue una sacudida, <b>no</b> el desarme post-inclusión — y ya quedó atrás. (El desarme real vino después, en julio.)"
        ),
      },
    ],
    action: t(
      "Your September SPY/QQQ puts (a put = the right to sell at a set price) double as flush cover. Don't add risk into these dates.",
      "Tus puts SPY/QQQ a septiembre (un put = derecho a vender a un precio fijado) sirven también como cobertura ante la purga. No agregues riesgo en estas fechas."
    ),
    watch: t(
      "S&amp;P &lt; ~7,500, or Nasdaq breaking its Mar-2026 lows = the shakeout is starting.",
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
          "<b>$135/share · $75B raised · ~$1.77T valuation</b> (555.6M shares; $85.7B including the greenshoe — the underwriters' option to sell ~15% extra shares). Institutions didn't balk. Debut <b>Jun 12</b>, ticker SPCX. Only ~7% of shares are <b>float</b> (the sliver actually available to trade) → violent two-way moves.",
          "<b>$135/acción · $75B recaudado · ~$1,77B de valoración</b> (555,6M acciones; $85,7B incluyendo el greenshoe — la opción de los colocadores de vender ~15% extra de acciones). Los institucionales no dudaron. Debut <b>12 jun</b>, ticker SPCX. Solo ~7% de las acciones son <b>float</b> (la fracción realmente disponible para operar) → movimientos violentos en ambos sentidos."
        ),
      },
      {
        label: t("Correlated upside", "Subida correlacionada"),
        text: t(
          "Your risk-on sleeve rises together on the hype (gold is the counterweight). Selling early leaves gains on the table and risks a whipsaw (a sharp reversal that hits you in both directions).",
          "Tu bloque risk-on sube junto con la euforia (el oro es el contrapeso). Vender temprano deja ganancias y arriesga un latigazo (una reversión brusca que te pega en ambos sentidos)."
        ),
      },
      {
        label: t("Add-back gate · never opened", "Puerta para sumar · nunca abrió"),
        text: t(
          "<b>The brake was ON.</b> The gate (add only if the flush settles + FOMC passes clean + price breaks out) <b>never opened</b>. Had it done so: add <b>quality (SMH/ISAC), not froth (ARKQ/ROBO)</b>, in tranches — not funded by selling gold, not expecting a mechanical pop (~0–1%).",
          "<b>El freno estuvo PUESTO.</b> La puerta (sumar solo si la purga cede + el FOMC pasa limpio + el precio rompe) <b>nunca abrió</b>. Si lo hubiera hecho: suma <b>calidad (SMH/ISAC), no espuma (ARKQ/ROBO)</b>, en tramos — sin financiarlo vendiendo oro, sin esperar un salto mecánico (~0–1%)."
        ),
      },
    ],
    action: t(
      "Nothing to sell. Set the September SPY/QQQ put insurance and write down your reversal levels while it's calm.",
      "Nada que vender. Coloca el seguro de puts SPY/QQQ a septiembre y anota tus niveles de reversión mientras hay calma."
    ),
    watch: t(
      "Pricing at/above ~$1.8T = momentum continues. Well below = institutions balked → go defensive early.",
      "Fijación en/sobre ~$1,8B = el momentum sigue. Muy por debajo = los institucionales dudaron → ponte defensivo."
    ),
  },
  {
    id: "ph2", tone: "warn", icon: "~",
    num: "PHASE 02",
    name: t("Inclusion Window", "Ventana de Inclusión"),
    date: "~JUN 12 → ~JUL 7",
    headline: t("Hold, but watch. Forced buying still supports the tape.", "Mantén, pero vigila. La compra forzada aún sostiene el mercado."),
    concept: t(
      "The Nasdaq rule is a <b>symptom of the new regime</b>: a private megacap scales to ~$2.1T and skips years of public seasoning. The classic 'index pop' has faded (additions returned only ~0–1% in 2010–2020) — and history just re-confirmed it: <b>Palantir, Strategy and Axon all fell in the 10 days after joining the NDX</b> (2024). The edge is the short-seasoning setup: forced buyers pay up near inclusion, prices unwind when that demand exhausts.",
      "La regla de Nasdaq es un <b>síntoma del nuevo régimen</b>: una megacap privada escala a ~$2,1B y salta años de maduración pública. El clásico 'salto por inclusión' se desvaneció (las adiciones rindieron solo ~0–1% en 2010–2020) — y la historia lo reconfirmó: <b>Palantir, Strategy y Axon cayeron en los 10 días tras entrar al NDX</b> (2024). El edge es la maduración corta: los compradores forzados pagan caro cerca de la inclusión, el precio se deshace cuando esa demanda se agota."
    ),
    drivers: [
      {
        label: t("Nasdaq-100 Fast Entry · DONE Jul 7", "Nasdaq-100 Entrada Rápida · HECHA 7 jul"),
        text: t(
          "<b>It happened as scripted.</b> SPCX — the <b>first-ever use of Nasdaq's 15-day fast-track</b> — joined effective <b>Jul 7</b>. The ~$4.3B forced buy was absorbed in the <b>Jul 6 closing auction</b>: a violent $155–168 session that closed <b>$160.42, down ~1%</b> — sellers met the index bid, <b>no pop</b> (no jump). Exactly the single-auction, no-tailwind outcome this phase predicted.",
          "<b>Ocurrió según el guion.</b> SPCX — el <b>primer uso histórico del fast-track de 15 días de Nasdaq</b> — se unió efectivo el <b>7 jul</b>. La compra forzada de ~$4,3B se absorbió en la <b>subasta de cierre del 6 jul</b>: una sesión violenta de $155–168 que cerró en <b>$160,42, −1%</b> — los vendedores salieron al encuentro de la puja indexada, <b>sin salto</b>. Exactamente el resultado de una sola subasta, sin viento de cola, que esta fase predijo."
        ),
      },
      {
        label: t("S&P dead · Russell/CRSP already in", "S&P muerta · Russell/CRSP ya entraron"),
        text: t(
          "<b>S&amp;P 500 off</b> (MR4292 rejected; −$4.9B in 2025 → 2027+). <b>Russell 1000/3000 + CRSP added SPCX Jun 18</b> (5-day rule). The <b>Jul 6 NDX print was the last big forced-buy wave</b> this summer; S&amp;P's ~$11.8T base waits until 2027.",
          "<b>S&amp;P 500 fuera</b> (MR4292 rechazado; −$4,9B en 2025 → 2027+). <b>Russell 1000/3000 + CRSP añadieron SPCX el 18 jun</b> (regla de 5 días). El <b>print del NDX del 6 jul fue la última gran ola de compra forzada</b> del verano; la base de ~$11,8T del S&amp;P espera hasta 2027."
        ),
      },
      {
        label: t("Sizing · smaller than it sounds", "Tamaño · menor de lo que suena"),
        text: t(
          "The confirmed forced buy was ~<b>$4.3B</b> (Jul 6 close), not the tens of billions some assumed — ~1% index weight, ~$450B tracking QQQ and peers. The ~7% float caps the weight. <b>One ~$4.3B print against a growing supply wall</b> (the Aug lockup) — don't bank on a large lift.",
          "La compra forzada confirmada fue ~<b>$4,3B</b> (cierre del 6 jul), no las decenas de miles de millones que algunos suponían — ~1% del peso, ~$450B siguiendo a QQQ y pares. El float ~7% topa el peso. <b>Un print de ~$4,3B contra una pared de oferta creciente</b> (el lockup de agosto) — no cuentes con un gran empujón."
        ),
      },
      {
        label: t("Cursor · $60B option (Jun 16)", "Cursor · opción de $60B (16 jun)"),
        text: t(
          "Six days post-IPO SpaceX took an <b>option to buy Cursor (Anysphere) for $60B all-stock</b> (Class A at 7-day VWAP — the volume-weighted average price; closing Q3) — or pay a <b>$10B breakup fee</b> to walk. It drove the <b>$225.64 peak</b>, then became a dilution overhang; Oppenheimer since set a <b>$250 target</b> citing Cursor revenue visibility. The bull/bear tension on AI capex, in one deal.",
          "Seis días tras la IPO SpaceX tomó una <b>opción para comprar Cursor (Anysphere) por $60B en acciones</b> (Clase A al VWAP de 7 días — el precio medio ponderado por volumen; cierra en el 3T) — o pagar <b>$10B de ruptura</b> para salir. Llevó al <b>pico de $225,64</b>, luego un lastre de dilución; Oppenheimer fijó desde entonces un <b>objetivo de $250</b> citando visibilidad de ingresos de Cursor. La tensión alcista/bajista sobre el capex de IA, en un solo deal."
        ),
      },
      {
        label: t("$25B bond · 3.5× oversubscribed (Jun 23)", "Bono $25B · 3,5× sobresuscrito (23 jun)"),
        text: t(
          "The <b>−16.4% Jun 22 crash</b> came on news of the debut bond sale (plus risk-off). But the deal <b>priced at $25B</b> (up from $20B) with <b>~$90B of orders — 3.5× oversubscribed</b>, among the biggest investment-grade order books ever (5 tranches 2031–2056, 5.35–6.65%; it refinances the xAI bridge). That demand <b>helped SPCX recover</b> off the $147 low — a bullish credit tell, not just capital intensity.",
          "El <b>desplome del −16,4% del 22 jun</b> vino con la noticia de la emisión debut del bono (más risk-off). Pero el deal <b>se fijó en $25B</b> (desde $20B) con <b>~$90B de órdenes — 3,5× sobresuscrito</b>, entre los mayores libros de grado de inversión de la historia (5 tramos 2031–2056, 5,35–6,65%; refinancia el puente de xAI). Esa demanda <b>ayudó a SPCX a recuperar</b> desde el mínimo de $147 — una señal de crédito alcista, no solo intensidad de capital."
        ),
      },
    ],
    action: t(
      "<b>Vol has collapsed (VIX ~16.6) → insurance is cheap again.</b> (VIX = the market's fear gauge; a low VIX means put options cost less.) This is the window to set it before Jul 7 and the Aug lockup: a <b>SMH put spread (Jul/Aug)</b> floors your semis (one position covers SMH + EWY); <b>Sep SPY/QQQ puts</b> are broad cover. Size to the gap down to your trigger, not the whole book. Pick strikes now.",
      "<b>La vol se desplomó (VIX ~16,6) → el seguro vuelve a estar barato.</b> (VIX = el medidor de miedo del mercado; un VIX bajo significa que los puts cuestan menos.) Esta es la ventana para colocarlo antes del 7 jul y el lockup de agosto: un <b>put spread de SMH (jul/ago)</b> pave tus semis (una posición cubre SMH + EWY); los <b>puts SPY/QQQ a septiembre</b> son cobertura amplia. Dimensiona al gap hasta tu disparador, no a toda la cartera. Elige strikes ahora."
    ),
    watch: t(
      "<b>Closed out Jul 7.</b> The pop never came — the Jul 6 auction absorbed the forced bid at $160.42 and day 1 in the index faded −5.2%, right on the Palantir/Strategy/Axon script. By Jul 12 it was ~$138. This phase is history; the playbook now runs on Phase 03.",
      "<b>Cerrada el 7 jul.</b> El salto nunca llegó — la subasta del 6 jul absorbió la puja forzada en $160,42 y el día 1 en el índice se desvaneció −5,2%, calcado al guion de Palantir/Strategy/Axon. Al 12 jul estaba en ~$138. Esta fase es historia; el playbook ahora corre en la Fase 03."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("JUL 7 ONWARD · LIVE", "7 JUL EN ADELANTE · ACTIVA"),
    headline: t("The reversal — and it's now confirmed. Trim in priority order.", "La reversión — y ya está confirmada. Recorta en orden de prioridad."),
    concept: t(
      "Forced demand is spent; real price discovery takes over. <b>Forced demand always exhausts</b> — then real price discovery rules. The proof piled up fast: −5.2% on day 1, then a slide to ~$138 by Jul 12 (a new low under the Jun 23 $147.11 floor), breaking the $160.95 debut close and never reclaiming it.",
      "La demanda forzada se agotó; toma el control el descubrimiento de precio real. <b>Toda demanda forzada se agota</b> — entonces manda el precio real. La prueba se acumuló rápido: −5,2% el día 1, luego un deslizamiento a ~$138 al 12 jul (un nuevo mínimo bajo el suelo de $147,11 del 23 jun), rompiendo el cierre de debut de $160,95 y sin recuperarlo jamás."
    ),
    drivers: [
      {
        label: t("Correction vs thesis break", "Corrección vs ruptura de tesis"),
        text: t(
          "Distinguish a <b>technical correction</b> (the price falls but the business case is intact → buy the dip) from a <b>thesis break</b> (revenue no longer validates the valuation → exit). Technical triggers measure only the first.",
          "Distingue una <b>corrección técnica</b> (el precio cae pero el caso del negocio sigue intacto → compra la caída) de una <b>ruptura de tesis</b> (el revenue ya no valida la valoración → sal). Los disparadores técnicos solo miden lo primero."
        ),
      },
      {
        label: t("CONFIRMED · slide to the IPO price (Jul 7–12)", "CONFIRMADA · deslizamiento a la OPV (7–12 jul)"),
        text: t(
          "It didn't stop on day 1. From <b>~$152 (Jul 7)</b> SPCX slid to <b>~$138 by Jul 12</b> — a fresh low near the <b>$135 IPO price</b>, under the Jun 23 $147.11 floor, never reclaiming the $160.95 debut close. That's the reversal <b>confirmed</b>, not just tripped: ~$400B of market cap erased, >30% off the $225.64 peak. Not alone: semis sold off after <b>Samsung's record Q2 came with AI-capex worries</b> and Reuters reported <b>DeepSeek developing its own AI chip</b> (a risk to Nvidia-reliance) — Nasdaq led the tape (the broader market's direction) lower.",
          "No se detuvo el día 1. Desde <b>~$152 (7 jul)</b> SPCX se deslizó a <b>~$138 al 12 jul</b> — un nuevo mínimo cerca de la <b>OPV de $135</b>, bajo el suelo de $147,11 del 23 jun, sin recuperar jamás el cierre de debut de $160,95. Esa es la reversión <b>confirmada</b>, no solo disparada: ~$400B de capitalización borrados, >30% por debajo del pico de $225,64. No fue solo: los semis cayeron tras un <b>2T récord de Samsung empañado por dudas sobre su capex de IA</b> y un reporte de Reuters de que <b>DeepSeek desarrolla su propio chip de IA</b> (un riesgo para la dependencia de Nvidia) — el Nasdaq lideró la baja del tape (la dirección del mercado en general)."
        ),
      },
      {
        label: t("Quiet period over · 15 Buys, one dissenter (Jul 7)", "Fin del quiet period · 15 compras, un disidente (7 jul)"),
        text: t(
          "The 25-day underwriter <b>quiet period</b> (the SEC window after an IPO when underwriters can't publish research) expired and the coverage wave hit: <b>15 firms, all Buy ratings</b>, price targets from <b>$62 to $800</b>. <b>Morgan Stanley Overweight $300</b> (Adam Jonas), <b>Goldman Buy $205</b>, <b>Raymond James $800</b> (the new Street high), plus RBC/Bernstein/Stifel/Citi; Oppenheimer at $250; consensus <b>~$237</b>. The dissenter: <b>Morningstar pegs fair value near $780B</b> — vs a ~$1.9T cap. Even a 15-bank wave couldn't hold the tape — <b>narrative support ≠ forced-buy support</b>.",
          "El <b>quiet period</b> de 25 días de los colocadores (la ventana de la SEC tras una IPO en la que los colocadores no pueden publicar investigación) expiró y llegó la ola de cobertura: <b>15 firmas, todas con rating de Compra</b>, objetivos de <b>$62 a $800</b>. <b>Morgan Stanley Overweight $300</b> (Adam Jonas), <b>Goldman Compra $205</b>, <b>Raymond James $800</b> (el nuevo máximo del Street), más RBC/Bernstein/Stifel/Citi; Oppenheimer en $250; consenso <b>~$237</b>. El disidente: <b>Morningstar estima el valor justo cerca de $780B</b> — vs una capitalización de ~$1,9T. Ni una ola de 15 bancos sostuvo el mercado — <b>apoyo narrativo ≠ apoyo de compra forzada</b>."
        ),
      },
      {
        label: t("SMH ↔ SPCX", "SMH ↔ SPCX"),
        text: t(
          "<b>Mechanical:</b> the fast-track entry (Nasdaq's special 15-day fast-add for big new listings; no removal clause) forces NDX funds to buy SPCX, trimming every constituent — NVDA/AVGO/AMD sit in NDX <i>and</i> atop SMH → it hits SMH. <b>Sentiment:</b> same AI narrative.",
          "<b>Mecánico:</b> la entrada rápida (el fast-add especial de 15 días de Nasdaq para cotizaciones grandes nuevas; sin cláusula de remoción) obliga a los fondos NDX a comprar SPCX, recortando a cada constituyente — NVDA/AVGO/AMD están en NDX <i>y</i> al tope de SMH → golpea SMH. <b>Sentimiento:</b> misma narrativa IA."
        ),
      },
      {
        label: t("The supply wall · Aug lockup", "La pared de oferta · lockup de agosto"),
        text: t(
          "The forced buy (~$4.3B, one print — a single matching of all that index demand at one closing price) is dwarfed by what follows: the <b>base 20% of insider shares unlock the 2nd trading day after Q2 earnings</b> (window ~Aug 6–11), rising to 30% if SPCX had closed <b>≥$175.50</b> (30% over IPO) on 5 of the 10 days into earnings — but that gate is <b>dead</b> at ~$138, so the 10% rolls into the time tranches. <b>~$800B of stock is eligible by October.</b> Every major post-IPO lockup in the last decade produced at least temporary weakness. (Note: SpaceX will release Q2 results only via its website &amp; X, not the wires — so the unlock date could land with little warning.) <b>The flip side is the SPCX accumulation calendar</b> — same ladder, the buy side.",
          "La compra forzada (~$4,3B, un print — un único cruce de toda esa demanda indexada a un solo precio de cierre) queda empequeñecida por lo que sigue: <b>el 20% base de acciones de insiders se libera el 2º día tras los resultados del 2T</b> (ventana ~6–11 ago), subiendo a 30% si SPCX hubiera cerrado <b>≥$175,50</b> (30% sobre la OPV) en 5 de los 10 días hacia los resultados — pero esa puerta está <b>muerta</b> a ~$138, así que el 10% pasa a los tramos de tiempo. <b>~$800B de acciones elegibles para octubre.</b> Cada gran lockup post-IPO de la última década produjo al menos debilidad temporal. (Nota: SpaceX publicará los resultados del 2T solo vía su web y X, no las agencias — así que la fecha de unlock puede llegar con poco aviso.) <b>El reverso es el calendario de acumulación de SPCX</b> — misma escalera, lado compra."
        ),
      },
    ],
    action: t(
      "Reversal confirmed → sell in order: <b>ARKQ → EWY</b> (noise) → <b>SMH → ROBO → URA</b> (trim only — sell part, not all). <b>Hold BTC</b> — it <i>reclaimed</i> the 200-week average (its ~3.8-year trend line; ~$64k vs ~$62k) and is diverging from the SPCX fade (its steady drift lower since inclusion); the sell signal is a <b>weekly close</b> back &lt; ~$62k on rising volume. Keep ISAC. <b>Stagger into gold</b> — it's panic liquidity (sold for margin calls day 1, recovers after), not conviction. <b>For SPCX itself: accumulate into the lockup waves</b> — see the SPCX row in the book and the SUPPLY section.",
      "Reversión confirmada → vende en orden: <b>ARKQ → EWY</b> (ruido) → <b>SMH → ROBO → URA</b> (solo trim — vende una parte, no todo). <b>Mantén BTC</b> — <i>recuperó</i> la media de 200 semanas (su línea de tendencia de ~3,8 años; ~$64k vs ~$62k) y diverge del fade de SPCX (su deriva steady a la baja desde la inclusión); la señal de venta es un <b>cierre semanal</b> de vuelta &lt; ~$62k con volumen creciente. Conserva ISAC. <b>Escalona hacia el oro</b> — es liquidez de pánico (se vende por margin calls el día 1, recupera después), no convicción. <b>Para el propio SPCX: acumula en las olas del lockup</b> — mira la fila SPCX en la cartera y la sección OFERTA."
    ),
    watch: t(
      "You're hedging <b>timing risk</b> (a temporary reversal), not the thesis. The reversal <b>is now confirmed</b> (new low ~$135, never reclaimed $160.95). For the holds you keep, don't rationalize a deeper break — and don't front-run the SPCX accumulation; stagger into the waves, don't catch a falling knife all at once.",
      "Estás cubriendo el <b>riesgo de timing</b> (una reversión temporal), no la tesis. La reversión <b>ya está confirmada</b> (nuevo mínimo ~$135, sin recuperar $160,95). Para las tenencias que conservas, no racionalices una ruptura más profunda — y no te adelantes a la acumulación de SPCX; escalona en las olas, no atrapes el cuchillo cayendo de golpe."
    ),
  },
];

export const TRIGGERS = [
  t("<b>CONFIRMED (Jul 7–12):</b> the reversal is no longer just tripped — it's confirmed. SPCX never reclaimed the <b>$160.95 debut close</b>, then slid to <b>~$138 by Jul 12</b>, a fresh low that <b>touched the $135 IPO price</b> (under the Jun 23 $147.11 floor). ~$400B of market cap erased. The sell order applies now (ARKQ → EWY first).",
    "<b>CONFIRMADA (7–12 jul):</b> la reversión ya no está solo disparada — está confirmada. SPCX nunca recuperó el <b>cierre de debut de $160,95</b>, luego se deslizó a <b>~$138 al 12 jul</b>, un nuevo mínimo que <b>tocó la OPV de $135</b> (bajo el suelo de $147,11 del 23 jun). ~$400B de capitalización borrados. El orden de venta aplica ya (ARKQ → EWY primero)."),
  t("<b>OFF (cheap window has closed):</b> VIX was ~15.7 on Jul 7; with the slide to ~$138, vol is climbing and insurance gets more expensive by the day. If the hedge (SMH put spread + Sep SPY/QQQ puts) still isn't on, set it now — it only costs more from here.",
    "<b>APAGADO (la ventana barata cerró):</b> el VIX estaba en ~15,7 el 7 jul; con el deslizamiento a ~$138, la vol sube y el seguro se encarece cada día. Si la cobertura (put spread de SMH + puts SPY/QQQ a septiembre) aún no está puesta, colócala ahora — solo cuesta más desde aquí."),
  t("<b>RECLAIMED (off):</b> BTC is <b>back above its 200-week average (~$62k) at ~$64k</b>, and was back above $64k on Jul 11–12, after the soft June jobs report (57k) trimmed rate-hike odds. <b>BTC is diverging from the SPCX fade</b> (its drift lower) — so the cross-asset gauge is NOT confirming a broad risk-off break. Hold; re-arm the sell only on a weekly close back below ~$62k.",
    "<b>RECUPERADA (apagado):</b> BTC está <b>de vuelta sobre su media de 200 semanas (~$62k) en ~$64k</b>, y volvió a estar sobre $64k al 11–12 jul, tras el flojo empleo de junio (57k) que recortó las probabilidades de subida de tasas. <b>BTC diverge del fade de SPCX</b> (su deriva a la baja) — el medidor cruzado NO confirma una ruptura risk-off amplia. Mantén; re-arma la venta solo con un cierre semanal bajo ~$62k."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. The inclusion print is behind you; what's ahead is supply: <b>Q2 earnings ~Aug 6–11 → the 20% base unlock</b> (SpaceX releases results only via its website &amp; X), then the tranche ladder into October. <b>That same ladder is the SPCX accumulation calendar</b>.",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. El print de inclusión quedó atrás; lo que viene es oferta: <b>resultados del 2T ~6–11 ago → el desbloqueo base del 20%</b> (SpaceX publica resultados solo vía su web y X), luego la escalera de tramos hasta octubre. <b>Esa misma escalera es el calendario de acumulación de SPCX</b>."),
];
