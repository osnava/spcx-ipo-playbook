/* phases.js — the four phases and the Phase-03 reversal checklist.
   tone   : accent color key (ice | go | warn | hot)
   concept: one-sentence mental model
   drivers: [{ label, text }] rendered as cards
   action / watch: single labeled callout rows

   Style: see AGENTS.md — telegraphic, Feynman inline glosses on rare jargon. */
import { t } from "./i18n.js";

export const PHASES = [
  {
    id: "ph0", tone: "ice", icon: "⚠",
    num: "PHASE 00",
    name: t("Shakeout Watch", "Vigilancia de Sacudida"),
    date: "JUN 8 & JUN 16–17",
    headline: t("Don't assume the run-up is safe.", "No asumas que el tramo previo es seguro."),
    concept: t(
      "Two scheduled events could flush the market before the hype — and the shakeout came first, not after. (A \"shakeout\" = a sharp drop that forces weak hands to sell before the real move.)",
      "Dos eventos en calendario podrían purgar el mercado antes de la euforia — y la sacudida vino primero, no después. (Una \"sacudida\" = una caída brusca que obliga a las manos débiles a vender antes del movimiento real.)"
    ),
    drivers: [
      {
        label: t("S&P decision — REJECTED (Jun 4)", "Decisión S&P — RECHAZADA (4 jun)"),
        text: t(
          "<b>S&amp;P DJI rejected the MegaCap waiver</b> (MR4292, Jun 4). <b>The S&amp;P 500 leg is dead</b> until SpaceX is GAAP-profitable (lost $4.9B in 2025). Only Nasdaq's <b>fast-track</b> survives — a special rule that adds a big new listing to the index in ~15 days instead of waiting for the next rebalance.",
          "<b>S&amp;P DJI rechazó la exención MegaCap</b> (MR4292, 4 jun). <b>La pata S&amp;P 500 está muerta</b> hasta que SpaceX sea rentable bajo GAAP (perdió $4,9B en 2025). Solo sobrevive el <b>fast-track</b> de Nasdaq — una regla especial que añade una cotización grande nueva al índice en ~15 días en vez de esperar al siguiente rebalanceo."
        ),
      },
      {
        label: t("Jun 16–17 FOMC — RESOLVED · hawkish", "FOMC 16–17 jun — RESUELTO · hawkish"),
        text: t(
          "<b>Held 3.5–3.75%, dropped forward guidance</b> (the usual signal about where rates are headed), filed <b>no hike dot</b>. SEP: <b>9 of 18 expect a 2026 hike</b>. That was the rollover catalyst — SPCX peaked $225.64 Jun 16 and fell every session after.",
          "<b>Mantuvo 3,5–3,75%, eliminó la guía adelantada</b> (la señal habitual sobre hacia dónde van las tasas), <b>sin punto de subida</b>. SEP: <b>9 de 18 esperan una subida en 2026</b>. Ese fue el catalizador de la reversión — SPCX picó a $225,64 el 16 jun y cayó en cada sesión después."
        ),
      },
      {
        label: t("Shakeout → RESOLVED (unwound by Jul 1)", "Sacudida → RESUELTA (revertida al 1 jul)"),
        text: t(
          "Bottomed <b>Jun 23 ($147.11)</b>, then <b>fully unwound</b>: by Jul 1, S&amp;P 7,483 / Nasdaq 26,040 / VIX ~16.6 — Q2 the strongest quarter since 2020. It was a shakeout, <b>not</b> the post-inclusion unwind (that came in July).",
          "Tocó fondo el <b>23 jun ($147,11)</b>, luego <b>revertida por completo</b>: al 1 jul, S&amp;P 7.483 / Nasdaq 26.040 / VIX ~16,6 — el 2T el trimestre más fuerte desde 2020. Fue una sacudida, <b>no</b> el desarme post-inclusión (eso vino en julio)."
        ),
      },
    ],
    action: t(
      "September SPY/QQQ puts (a put = the right to sell at a set price) double as flush cover. Don't add risk into these dates.",
      "Los puts SPY/QQQ a septiembre (un put = derecho a vender a un precio fijado) sirven también de cobertura. No agregues riesgo en estas fechas."
    ),
    watch: t(
      "S&amp;P &lt; ~7,500, or Nasdaq breaking Mar-2026 lows = shakeout starting.",
      "S&amp;P &lt; ~7.500, o el Nasdaq rompiendo los mínimos de mar-2026 = la sacudida empieza."
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
          "<b>$135/share · $75B raised · ~$1.77T</b> (555.6M shares; $85.7B incl. the <b>greenshoe</b> = the underwriters' option to sell ~15% extra shares). Debut <b>Jun 12</b>, ticker SPCX. ~7% <b>float</b> (the sliver actually tradeable) → violent two-way moves.",
          "<b>$135/acción · $75B recaudado · ~$1,77B</b> (555,6M acciones; $85,7B incl. el <b>greenshoe</b> = la opción de los colocadores de vender ~15% extra de acciones). Debut <b>12 jun</b>, ticker SPCX. ~7% de <b>float</b> (la fracción realmente operable) → movimientos violentos en ambos sentidos."
        ),
      },
      {
        label: t("Correlated upside", "Subida correlacionada"),
        text: t(
          "The risk-on sleeve rises together on the hype (gold is the counterweight). Selling early leaves gains and risks a whipsaw (a sharp reversal that hits you both ways).",
          "El bloque risk-on sube junto con la euforia (el oro es el contrapeso). Vender temprano deja ganancias y arriesga un latigazo (una reversión brusca que te pega en ambos sentidos)."
        ),
      },
      {
        label: t("Add-back gate · never opened", "Puerta para sumar · nunca abrió"),
        text: t(
          "The brake was ON. The gate (add only if the flush settles + FOMC passes clean + price breaks out) <b>never opened</b>. Had it: add <b>quality (SMH/ISAC), not froth (ARKQ/ROBO)</b> — not funded by selling gold, not expecting a mechanical pop (~0–1%).",
          "El freno estuvo PUESTO. La puerta (sumar solo si la purga cede + el FOMC pasa limpio + el precio rompe) <b>nunca abrió</b>. Si lo hubiera hecho: suma <b>calidad (SMH/ISAC), no espuma (ARKQ/ROBO)</b> — sin financiarlo vendiendo oro, sin esperar un salto mecánico (~0–1%)."
        ),
      },
    ],
    action: t(
      "Nothing to sell. Set the September SPY/QQQ puts and write down your reversal levels while it's calm.",
      "Nada que vender. Coloca los puts SPY/QQQ a septiembre y anota tus niveles de reversión mientras hay calma."
    ),
    watch: t(
      "Pricing at/above ~$1.8T = momentum continues. Well below = institutions balked → defensive early.",
      "Fijación en/sobre ~$1,8B = el momentum sigue. Muy por debajo = los institucionales dudaron → defensivo."
    ),
  },
  {
    id: "ph2", tone: "warn", icon: "~",
    num: "PHASE 02",
    name: t("Inclusion Window", "Ventana de Inclusión"),
    date: "~JUN 12 → ~JUL 7",
    headline: t("Hold, but watch. Forced buying still supports the tape.", "Mantén, pero vigila. La compra forzada aún sostiene el mercado."),
    concept: t(
      "The classic 'index pop' has faded (additions returned only ~0–1% in 2010–2020), and history re-confirmed it: <b>Palantir, Strategy and Axon all fell in the 10 days after joining the NDX</b> (2024). The edge is the short-seasoning setup: forced buyers pay up near inclusion, prices unwind when that demand exhausts.",
      "El clásico 'salto por inclusión' se desvaneció (las adiciones rindieron solo ~0–1% en 2010–2020), y la historia lo reconfirmó: <b>Palantir, Strategy y Axon cayeron en los 10 días tras entrar al NDX</b> (2024). El edge es la maduración corta: los compradores forzados pagan caro cerca de la inclusión, el precio se deshace cuando esa demanda se agota."
    ),
    drivers: [
      {
        label: t("Nasdaq-100 Fast Entry · DONE Jul 7", "Nasdaq-100 Entrada Rápida · HECHA 7 jul"),
        text: t(
          "SPCX — the <b>first-ever use of the 15-day fast-track</b> — joined effective <b>Jul 7</b>. The ~$4.3B forced buy printed in the <b>Jul 6 closing auction</b>: a $155–168 session that closed <b>$160.42, −1% — no pop</b>. Exactly the single-auction, no-tailwind outcome this phase predicted.",
          "SPCX — el <b>primer uso histórico del fast-track de 15 días</b> — se unió efectivo el <b>7 jul</b>. La compra forzada de ~$4,3B se imprimió en la <b>subasta de cierre del 6 jul</b>: una sesión de $155–168 que cerró <b>$160,42, −1% — sin salto</b>. Exactamente el resultado de una sola subasta, sin viento de cola, que esta fase predijo."
        ),
      },
      {
        label: t("S&P dead · Russell/CRSP already in", "S&P muerta · Russell/CRSP ya entraron"),
        text: t(
          "<b>S&amp;P 500 off</b> (MR4292 rejected). <b>Russell 1000/3000 + CRSP added SPCX Jun 18</b>. The <b>Jul 6 NDX print was the last big forced-buy wave</b> this summer; S&amp;P's ~$11.8T base waits until 2027.",
          "<b>S&amp;P 500 fuera</b> (MR4292 rechazado). <b>Russell 1000/3000 + CRSP añadieron SPCX el 18 jun</b>. El <b>print del NDX del 6 jul fue la última gran ola de compra forzada</b> del verano; la base de ~$11,8B del S&amp;P espera hasta 2027."
        ),
      },
      {
        label: t("Sizing · smaller than it sounds", "Tamaño · menor de lo que suena"),
        text: t(
          "Confirmed forced buy ~<b>$4.3B</b> (Jul 6 close), not the tens of billions some assumed — ~1% index weight, ~$450B tracking QQQ/peers. The ~7% float caps the weight. <b>One $4.3B print against a growing supply wall</b> (the Aug lockup) — don't bank on a lift.",
          "Compra forzada confirmada ~<b>$4,3B</b> (cierre 6 jul), no las decenas de miles de millones que algunos suponían — ~1% del peso, ~$450B siguiendo a QQQ/pares. El float ~7% topa el peso. <b>Un print de $4,3B contra una pared de oferta creciente</b> (el lockup de agosto) — no cuentes con un empujón."
        ),
      },
      {
        label: t("Cursor · $60B option (Jun 16)", "Cursor · opción de $60B (16 jun)"),
        text: t(
          "Six days post-IPO: an <b>option to buy Cursor (Anysphere) for $60B all-stock</b> (Class A at 7-day <b>VWAP</b> = the volume-weighted average price; closing Q3) — or a <b>$10B breakup fee</b> to walk. Drove the $225.64 peak, now a dilution overhang; Oppenheimer since set <b>$250 target</b> on Cursor revenue visibility.",
          "Seis días tras la IPO: una <b>opción de comprar Cursor (Anysphere) por $60B en acciones</b> (Clase A al <b>VWAP</b> de 7 días = el precio medio ponderado por volumen; cierra en el 3T) — o una <b>ruptura de $10B</b> para salir. Llevó al pico de $225,64, ahora un lastre de dilución; Oppenheimer fijó <b>objetivo $250</b> por la visibilidad de ingresos de Cursor."
        ),
      },
      {
        label: t("$25B bond · 3.5× oversubscribed (Jun 23)", "Bono $25B · 3,5× sobresuscrito (23 jun)"),
        text: t(
          "The <b>−16.4% Jun 22 crash</b> came on the debut-bond news, but the deal <b>priced $25B</b> (up from $20B) with <b>~$90B of orders — 3.5× oversubscribed</b>, one of the biggest IG books ever (5 tranches 2031–2056, 5.35–6.65%; refinances the xAI bridge). That demand helped SPCX recover off the $147 low — a bullish credit tell, not just capital intensity.",
          "El <b>desplome del −16,4% del 22 jun</b> vino con la noticia del bono debut, pero el deal <b>se fijó en $25B</b> (desde $20B) con <b>~$90B de órdenes — 3,5× sobresuscrito</b>, uno de los mayores libros IG de la historia (5 tramos 2031–2056, 5,35–6,65%; refinancia el puente de xAI). Esa demanda ayudó a SPCX a recuperar desde el mínimo de $147 — señal de crédito alcista, no solo intensidad de capital."
        ),
      },
    ],
    action: t(
      "<b>Vol collapsed (VIX ~16.6) → insurance cheap.</b> (VIX = the market's fear gauge; low VIX = puts cost less.) Window to set it before Jul 7 + the Aug lockup: a <b>SMH put spread (Jul/Aug)</b> floors your semis (one position covers SMH + EWY); <b>Sep SPY/QQQ puts</b> are broad cover. Size to the gap, not the whole book. Pick strikes now.",
      "<b>La vol se desplomó (VIX ~16,6) → seguro barato.</b> (VIX = el medidor de miedo; VIX bajo = puts más baratos.) Ventana para colocarlo antes del 7 jul + el lockup de agosto: un <b>put spread de SMH (jul/ago)</b> pave tus semis (una posición cubre SMH + EWY); los <b>puts SPY/QQQ a septiembre</b> son cobertura amplia. Dimensiona al gap, no a toda la cartera. Elige strikes ahora."
    ),
    watch: t(
      "<b>Closed Jul 7.</b> The pop never came — the Jul 6 auction absorbed the bid at $160.42, day 1 faded −5.2%, and the slide never stopped (broke the IPO <i>close</i> Jul 16, new low Jul 17). Flight 13 then <b>scrubbed at T-0</b>. History; the playbook runs on Phase 03.",
      "<b>Cerrada el 7 jul.</b> El salto nunca llegó — la subasta del 6 jul absorbió la puja en $160,42, el día 1 se desvaneció −5,2%, y el deslizamiento nunca se detuvo (rompió la OPV al <i>cierre</i> el 16 jul, nuevo mínimo el 17 jul). El vuelo 13 luego <b>se abortó en T-0</b>. Historia; el playbook corre en la Fase 03."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("JUL 7 ONWARD · LIVE", "7 JUL EN ADELANTE · ACTIVA"),
    headline: t("The reversal broke the IPO line. Trim in priority order.", "La reversión rompió la línea de OPV. Recorta en orden de prioridad."),
    concept: t(
      "Forced demand spent; real price discovery rules. The slide never stopped: −5.2% day 1, through the Jun 23 $147.11 floor, the $135 IPO intraday Jul 15 ($132.28), the <i>close</i> Jul 16 ($131.11), to a new low Jul 17 (~$125.80; intraday $122.12) — <b>down ~40% from the $225.64 peak</b>, cap ~$1.74T. The sentiment floor (Flight 13) then <b>scrubbed at T-0</b>.",
      "Demanda forzada agotada; manda el precio real. El deslizamiento nunca se detuvo: −5,2% el día 1, a través del suelo de $147,11 del 23 jun, la OPV de $135 intradía el 15 jul ($132,28), el <i>cierre</i> el 16 jul ($131,11), hasta un nuevo mínimo el 17 jul (~$125,80; intradía $122,12) — <b>~40% a la baja desde el pico de $225,64</b>, cap ~$1,74B. El suelo de sentimiento (vuelo 13) luego <b>se abortó en T-0</b>."
    ),
    drivers: [
      {
        label: t("Correction vs thesis break", "Corrección vs ruptura de tesis"),
        text: t(
          "Distinguish a <b>technical correction</b> (price falls, business case intact → buy the dip) from a <b>thesis break</b> (revenue no longer validates the valuation → exit). Technical triggers measure only the first.",
          "Distingue una <b>corrección técnica</b> (el precio cae, el caso del negocio intacto → compra la caída) de una <b>ruptura de tesis</b> (el revenue ya no valida la valoración → sal). Los disparadores técnicos solo miden lo primero."
        ),
      },
      {
        label: t("CONFIRMED · new lows daily (Jul 7→17); Flight 13 scrubbed", "CONFIRMADA · mínimos diarios (7→17 jul); Vuelo 13 abortado"),
        text: t(
          "From <b>~$152 (Jul 7)</b>: through the $135 IPO intraday Jul 15, the <i>close</i> Jul 16 ($131.11), to a new low Jul 17 (~$125.80; intraday $122.12) — cap ~$1.74T, <b>down ~17% since the Jul 7 inclusion, ~40% off the $225.64 peak</b>, ~$900B+ erased. Short sellers +$8.7B since IPO. Flight 13 — the supposed sentiment floor — <b>scrubbed at T-0 Jul 16</b> (retry Jul 20). <b>Critical: the 'SPCX-only' isolation broke Jul 17</b> — <b>SOX entered a bear market</b> (−13% / 30d) on Kimi K3 (China's open AI model) + hyperscaler-capex doubts + Iran oil; the fade is <b>no longer uncorrelated</b> to SMH/EWY.",
          "Desde <b>~$152 (7 jul)</b>: a través de la OPV de $135 intradía el 15 jul, el <i>cierre</i> el 16 jul ($131,11), hasta un nuevo mínimo el 17 jul (~$125,80; intradía $122,12) — cap ~$1,74B, <b>~17% a la baja desde la inclusión del 7 jul, ~40% por debajo del pico de $225,64</b>, ~$900B+ borrados. Cortos +$8,7B desde la OPV. El vuelo 13 — el supuesto suelo de sentimiento — <b>se abortó en T-0 el 16 jul</b> (reintento 20 jul). <b>Crítico: el aislamiento 'solo SPCX' se rompió el 17 jul</b> — el <b>SOX entró en mercado bajista</b> (−13% / 30d) por Kimi K3 (modelo abierto de China) + dudas de capex de hiperscalers + petróleo de Irán; el fade <b>ya no es incorrelado</b> a SMH/EWY."
        ),
      },
      {
        label: t("Coverage wave FULL · 27 of 31 Buys, one dissenter", "Ola de cobertura COMPLETA · 27 de 31 Compras, un disidente"),
        text: t(
          "The 25-day underwriter <b>quiet period</b> (the SEC window after an IPO when underwriters can't publish research) expired; <b>27 of 31 analysts rate Buy/Strong Buy, avg PT ~$242</b>: Morgan Stanley $300, <b>Deutsche $255</b>, <b>Macquarie $250</b>, Oppenheimer/Needham $250, <b>Bernstein $239</b>, <b>BofA $235</b>, JPMorgan/RBC $225, Goldman $205, UBS $210, Mizuho $200, Evercore Outperform, <b>Raymond James $800</b> (Street high, implies ~$10.5T cap). <b>Morningstar dissenter: FV ≈ $780B</b> vs ~$1.7T. ARK bought the dip. <b>Narrative support ≠ forced-buy support</b> — the price/target gap is one of the widest on record.",
          "El <b>quiet period</b> de 25 días de los colocadores (la ventana de la SEC tras una IPO en la que los colocadores no pueden publicar investigación) expiró; <b>27 de 31 analistas califican Compra/Compra Fuerte, objetivo medio ~$242</b>: Morgan Stanley $300, <b>Deutsche $255</b>, <b>Macquarie $250</b>, Oppenheimer/Needham $250, <b>Bernstein $239</b>, <b>BofA $235</b>, JPMorgan/RBC $225, Goldman $205, UBS $210, Mizuho $200, Evercore Outperform, <b>Raymond James $800</b> (máximo del Street, implica cap ~$10,5B). <b>Morningstar disidente: VJ ≈ $780B</b> vs ~$1,7B. ARK compró la caída. <b>Apoyo narrativo ≠ apoyo de compra forzada</b> — el gap precio/objetivo es uno de los más amplios registrados."
        ),
      },
      {
        label: t("SMH ↔ SPCX", "SMH ↔ SPCX"),
        text: t(
          "<b>Mechanical:</b> the fast-track entry forces NDX funds to buy SPCX, trimming every constituent — NVDA/AVGO/AMD sit in NDX <i>and</i> atop SMH → it hits SMH. <b>Sentiment:</b> same AI narrative.",
          "<b>Mecánico:</b> la entrada rápida obliga a los fondos NDX a comprar SPCX, recortando a cada constituyente — NVDA/AVGO/AMD están en NDX <i>y</i> al tope de SMH → golpea SMH. <b>Sentimiento:</b> misma narrativa IA."
        ),
      },
      {
        label: t("The supply wall · Aug 6 earnings → Aug 10 unlock", "La pared de oferta · resultados 6 ago → unlock 10 ago"),
        text: t(
          "The forced buy (~$4.3B, one print) is dwarfed by what follows: <b>base 20% of insider shares unlock the 2nd trading day after Q2 earnings</b> — earnings confirmed <b>Aug 6</b>, so unlock <b>~Aug 10</b>. Would have risen to 30% if SPCX had closed <b>≥$175.50</b> on 5 of 10 days into earnings — <b>dead</b> at ~$126, so the 10% rolls into the time tranches. <b>Insiders could sell ~44% of shares by early September; ~$800B eligible by October.</b> Every major post-IPO lockup in the last decade produced at least temporary weakness. (SpaceX releases results only via its website &amp; X, not the wires.) <b>The flip side is the SPCX accumulation calendar</b> — same ladder, buy side.",
          "La compra forzada (~$4,3B, un print) queda empequeñecida por lo que sigue: <b>el 20% base de acciones de insiders se libera el 2º día tras los resultados del 2T</b> — resultados confirmados <b>6 ago</b>, así que unlock <b>~10 ago</b>. Habría subido a 30% si SPCX hubiera cerrado <b>≥$175,50</b> en 5 de 10 días hacia los resultados — <b>muerto</b> a ~$126, así que el 10% pasa a los tramos de tiempo. <b>Los insiders podrían vender ~44% de las acciones para principios de septiembre; ~$800B elegibles para octubre.</b> Cada gran lockup post-IPO de la última década produjo al menos debilidad temporal. (SpaceX publica resultados solo vía su web y X, no las agencias.) <b>El reverso es el calendario de acumulación de SPCX</b> — misma escalera, lado compra."
        ),
      },
    ],
    action: t(
      "Sell in order: <b>ARKQ → EWY</b> (noise) → <b>SMH → ROBO → URA</b> (trim only). The SMH/EWY trim is now a <b>genuine AI-capex correction</b> (SOX bear market), not just SPCX correlation — raise urgency. <b>Hold BTC</b> (sell only on a <b>weekly close</b> &lt; ~$62k); keep ISAC; <b>stagger into gold</b> (Iran oil &gt;$86 is a fresh bid). <b>SPCX: accumulate into the lockup waves</b> — Flight 13 retries Jul 20 (binary), so size the first scale small. See the SPCX row + SUPPLY.",
      "Vende en orden: <b>ARKQ → EWY</b> (ruido) → <b>SMH → ROBO → URA</b> (solo trim). El trim de SMH/EWY es ahora una <b>corrección real de capex de IA</b> (SOX en mercado bajista), no solo correlación con SPCX — súbele la urgencia. <b>Mantén BTC</b> (vende solo con <b>cierre semanal</b> &lt; ~$62k); conserva ISAC; <b>escalona hacia el oro</b> (petróleo Irán &gt;$86 es un nuevo impulso). <b>SPCX: acumula en las olas del lockup</b> — el vuelo 13 reintenta el 20 jul (binario), dimensiona el primer tramo pequeño. Mira la fila SPCX + OFERTA."
    ),
    watch: t(
      "You're hedging <b>timing risk</b> (a temporary reversal), not the thesis. The reversal stopped being SPCX-only Jul 17 (SOX bear market). <b>Earnings Aug 6 → base 20% unlock ~Aug 10.</b> Don't rationalize a deeper break; don't front-run SPCX accumulation — Flight 13 retries Jul 20 (binary), then stagger into the Aug 10 wave.",
      "Estás cubriendo <b>riesgo de timing</b> (una reversión temporal), no la tesis. La reversión dejó de ser solo SPCX el 17 jul (SOX en mercado bajista). <b>Resultados 6 ago → desbloqueo base 20% ~10 ago.</b> No racionalices una ruptura más profunda; no te adelantes a la acumulación de SPCX — el vuelo 13 reintenta el 20 jul (binario), luego escalona en la ola del 10 ago."
    ),
  },
];

export const TRIGGERS = [
  t("<b>CONFIRMED & DEEPENING (Jul 7→17):</b> new lows daily. IPO line intraday Jul 15 ($132.28), on the <i>close</i> Jul 16 ($131.11), new low Jul 17 (~$125.80; intraday $122.12) — cap ~$1.74T, <b>~40% off the $225.64 peak</b>, ~$900B+ erased. Short sellers +$8.7B. Flight 13 <b>scrubbed at T-0</b> (retry Jul 20). Sell now: ARKQ → EWY first.",
    "<b>CONFIRMADA Y PROFUNDIZÁNDOSE (7→17 jul):</b> mínimos diarios. Línea de OPV intradía el 15 jul ($132,28), al <i>cierre</i> el 16 jul ($131,11), nuevo mínimo el 17 jul (~$125,80; intradía $122,12) — cap ~$1,74B, <b>~40% por debajo del pico de $225,64</b>, ~$900B+ borrados. Cortos +$8,7B. El vuelo 13 <b>se abortó en T-0</b> (reintento 20 jul). Vende ya: ARKQ → EWY primero."),
  t("<b>OFF (vol climbing everywhere):</b> cheap-insurance window closed. SOX bear market Jul 17 (−13% / 30d); SPCX idiosyncratic vol rising. If the hedge (SMH put spread + Sep SPY/QQQ puts) isn't on, set it now — the AI-capex correction makes SMH/EWY puts more valuable daily.",
    "<b>APAGADO (vol sube en todos lados):</b> ventana de seguro barato cerrada. SOX en mercado bajista el 17 jul (−13% / 30d); vol idiosincrática de SPCX subiendo. Si la cobertura (put spread SMH + puts SPY/QQQ sep) no está puesta, colócala ahora — la corrección de capex de IA encarece los puts SMH/EWY cada día."),
  t("<b>DIVERGENCE NARROWING (watch):</b> BTC faded to <b>~$62.7k Jul 17</b>, back near its 200-week average (~$62k) — no longer rallying while SPCX falls. Gauge still <b>OFF</b> (no weekly break below ~$62k), but the 'SPCX-only' isolation is gone (SOX bear). Re-arm the broad-risk sell only on a <b>weekly close</b> &lt; ~$62k on rising volume.",
    "<b>DIVERGENCIA ESTRECHÁNDOSE (vigilar):</b> BTC retrocedió a <b>~$62,7k el 17 jul</b>, de vuelta cerca de su media de 200 semanas (~$62k) — ya no sube mientras SPCX cae. Medidor aún <b>APAGADO</b> (sin ruptura semanal bajo ~$62k), pero el aislamiento 'solo SPCX' se fue (SOX bajista). Re-arma la venta de riesgo amplio solo con <b>cierre semanal</b> &lt; ~$62k con volumen creciente."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. Ahead: <b>Flight 13 retry (Jul 20)</b> (binary), then <b>Q2 results Aug 6 → 20% base unlock ~Aug 10</b>, then the tranche ladder into October (insiders ~44% sellable by early Sep). <b>Same ladder = SPCX accumulation calendar</b>.",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. Adelante: <b>reintento vuelo 13 (20 jul)</b> (binario), luego <b>resultados 2T 6 ago → desbloqueo base 20% ~10 ago</b>, luego la escalera de tramos hasta octubre (insiders ~44% vendibles para principios de sep). <b>Misma escalera = calendario de acumulación SPCX</b>."),
];
