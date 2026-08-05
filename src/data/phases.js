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
      "<b>Closed Jul 7.</b> The pop never came — the Jul 6 auction absorbed the bid at $160.42, day 1 faded −5.2%, and the slide never stopped (broke the IPO <i>close</i> Jul 16, fresh 52-wk low $104.83 Aug 5). <b>Both later catalysts resolved well</b> — Flight 13 <b>succeeded Jul 24</b>, Q2 earnings <b>beat Aug 4</b> — yet the stock kept falling: proof the slide was always supply, not sentiment. History; the playbook runs on Phase 03.",
      "<b>Cerrada el 7 jul.</b> El salto nunca llegó — la subasta del 6 jul absorbió la puja en $160,42, el día 1 se desvaneció −5,2%, y el deslizamiento nunca se detuvo (rompió la OPV al <i>cierre</i> el 16 jul, nuevo mínimo a 52 sem $104,83 el 5 ago). <b>Ambos catalizadores posteriores resolvieron bien</b> — el vuelo 13 <b>triunfó el 24 jul</b>, el 2T <b>superó el 4 ago</b> — y aun así la acción siguió cayendo: prueba de que la caída fue siempre oferta, no sentimiento. Historia; el playbook corre en la Fase 03."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("JUL 7 ONWARD · LIVE", "7 JUL EN ADELANTE · ACTIVA"),
    headline: t("SPCX is falling alone on supply — the sleeve has decoupled.", "SPCX cae solo por oferta — el bloque se desacopló."),
    concept: t(
      "Forced demand spent; supply now dominates even good news. Both binary catalysts resolved <b>well</b> — Flight 13 <b>succeeded Jul 24</b> (20 Starlink V3 deployed, ship intact after splashdown), Q2 earnings <b>beat Aug 4</b> (revenue $7.8B, +92% YoY; loss narrowed to $541M; AI +250%; CFO targets $100B ARR by year-end) — yet SPCX gapped to a <b>fresh 52-wk low $104.83</b> (~$115.81, cap ~$1.5T, <b>~49% off the $225.64 peak</b>). Proof the 911.5M-share unlock (tomorrow, <b>Aug 6</b>) now sets the price, not fundamentals.",
      "Demanda forzada agotada; la oferta domina incluso las buenas noticias. Ambos catalizadores binarios resolvieron <b>bien</b> — el vuelo 13 <b>triunfó el 24 jul</b> (20 Starlink V3 desplegados, nave intacta tras amerizar), resultados 2T <b>superaron el 4 ago</b> (revenue $7,8B, +92% interanual; pérdida reducida a $541M; IA +250%; el CFO apunta a $100B de ARR a fin de año) — aun así SPCX gap-eó a un <b>nuevo mínimo a 52 sem $104,83</b> (~$115,81, cap ~$1,5B, <b>~49% por debajo del pico de $225,64</b>). Prueba de que el unlock de 911,5M acciones (mañana, <b>6 ago</b>) fija el precio, no los fundamentos."
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
        label: t("CONFIRMED · fresh low DESPITE the earnings beat; supply rules", "CONFIRMADA · nuevo mínimo A PESAR del beat; manda la oferta"),
        text: t(
          "From <b>~$152 (Jul 7)</b>: through the $135 IPO intraday Jul 15, the <i>close</i> Jul 16 ($131.11), to a <b>fresh 52-wk low $104.83 Aug 5</b> (~$115.81, cap ~$1.5T, <b>~49% off the $225.64 peak</b>), ~$1.1T+ erased. <b>Both catalysts resolved well — and it still fell</b>: Flight 13 <b>succeeded Jul 24</b> (20 Starlink V3 deployed, ship intact after splashdown); Q2 <b>beat Aug 4</b> (revenue $7.8B +92%, loss narrowed to $541M, AI +250%, CFO targets $100B ARR). The stock <b>+9.4% intraday then −7.5% after-hours</b>. <b>This is the signal</b>: a clean earnings beat making new lows means the 911.5M-share unlock (tomorrow, Aug 6) now sets price, not fundamentals → treat as a <b>correction (buy), not a thesis break (exit)</b>. <b>SPCX is falling ALONE now</b> — the broad market recovered to near-ATH as Iran-oil eased (Trump stood down Aug 3; S&P ~7,747); only chips lag (SOX still ~−13% / 30d).",
          "Desde <b>~$152 (7 jul)</b>: a través de la OPV de $135 intradía el 15 jul, el <i>cierre</i> el 16 jul ($131,11), hasta un <b>nuevo mínimo a 52 sem $104,83 el 5 ago</b> (~$115,81, cap ~$1,5B, <b>~49% por debajo del pico de $225,64</b>), ~$1,1B+ borrados. <b>Ambos catalizadores resolvieron bien — y aun así cayó</b>: el vuelo 13 <b>triunfó el 24 jul</b> (20 Starlink V3 desplegados, nave intacta); el 2T <b>superó el 4 ago</b> (revenue $7,8B +92%, pérdida a $541M, IA +250%, CFO apunta a $100B ARR). La acción <b>+9,4% intradía luego −7,5% post-cierre</b>. <b>Esta es la señal</b>: un beat limpio marcando nuevos mínimos significa que el unlock de 911,5M (mañana, 6 ago) fija el precio, no los fundamentos → trátalo como <b>corrección (compra), no ruptura de tesis (salida)</b>. <b>SPCX cae SOLO ahora</b> — el mercado amplio recuperó hacia máximos al aflojar el petróleo-Irán (Trump se sentó el 3 ago; S&P ~7.747); solo los chips rebotan menos (SOX aún ~−13% / 30d)."
        ),
      },
      {
        label: t("Coverage wave FULL · 27 of 33 Buys; shorts 34% of float", "Ola de cobertura COMPLETA · 27 de 33 Compras; cortos 34% del float"),
        text: t(
          "The 25-day underwriter <b>quiet period</b> (the SEC window after an IPO when underwriters can't publish research) expired; <b>27 of 33 analysts rate Buy/Strong Buy (5 hold, 1 sell), median PT ~$226</b>: Morgan Stanley $300 (reiterated into the Aug 6 unlock), <b>Deutsche $255</b>, <b>Macquarie $250</b>, Oppenheimer/Needham $250, <b>Bernstein $239</b>, <b>BofA $235</b>, JPMorgan/RBC $225, Goldman $205, UBS $210, Mizuho $200, Evercore Outperform, <b>Raymond James $800</b> (Street high, implies ~$10.5T cap). <b>Morningstar dissenter: FV ≈ $780B</b> vs ~$1.5T. <b>Shorts crowded in hard — 219.3M shares / ~$24.6B, 34% of float (> Tesla's dollar short, S3 Jul 29)</b> → a squeeze risk if insider selling is light. <b>Narrative support ≠ forced-buy support</b> — the price/target gap is one of the widest on record.",
          "El <b>quiet period</b> de 25 días de los colocadores (la ventana de la SEC tras una IPO en la que los colocadores no pueden publicar investigación) expiró; <b>27 de 33 analistas califican Compra/Compra Fuerte (5 hold, 1 venta), objetivo mediano ~$226</b>: Morgan Stanley $300 (reiterado hacia el unlock del 6 ago), <b>Deutsche $255</b>, <b>Macquarie $250</b>, Oppenheimer/Needham $250, <b>Bernstein $239</b>, <b>BofA $235</b>, JPMorgan/RBC $225, Goldman $205, UBS $210, Mizuho $200, Evercore Outperform, <b>Raymond James $800</b> (máximo del Street, implica cap ~$10,5B). <b>Morningstar disidente: VJ ≈ $780B</b> vs ~$1,5B. <b>Los cortos se aglomeraron fuerte — 219,3M acciones / ~$24,6B, 34% del float (> que el cortismo en dólares de Tesla, S3 29 jul)</b> → riesgo de squeeze si la venta interna es ligera. <b>Apoyo narrativo ≠ apoyo de compra forzada</b> — el gap precio/objetivo es uno de los más amplios registrados."
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
        label: t("The supply wall · earnings DONE → 911.5M unlock TOMORROW Aug 6", "La pared de oferta · resultados HECHOS → unlock 911,5M MAÑANA 6 ago"),
        text: t(
          "The forced buy (~$4.3B, one print) is dwarfed by what follows: <b>base 20% (911.5M shares, ~$105B) unlock the 2nd trading day after Q2 earnings — TOMORROW, Aug 6</b> (earnings beat printed Aug 4). That's <b>~140% of the ~639M IPO float</b>. Would have risen to 30% if SPCX had closed <b>≥$175.50</b> on 5 of 10 days into earnings — <b>dead</b> at ~$116, so the 10% rolls into the time tranches. <b>Lockups through Dec 8 raise the float to ~40%</b>; the rest (incl. Musk) sits to mid-2027. Every major post-IPO lockup in the last decade produced at least temporary weakness. (SpaceX releases results only via its website &amp; X, not the wires.) <b>The flip side is the SPCX accumulation calendar</b> — same ladder, buy side.",
          "La compra forzada (~$4,3B, un print) queda empequeñecida por lo que sigue: <b>el 20% base (911,5M acciones, ~$105B) se libera el 2º día tras los resultados del 2T — MAÑANA, 6 ago</b> (el beat se imprimió el 4 ago). Es <b>~140% del float de la OPV (~639M)</b>. Habría subido a 30% si SPCX hubiera cerrado <b>≥$175,50</b> en 5 de 10 días hacia los resultados — <b>muerto</b> a ~$116, así que el 10% pasa a los tramos de tiempo. <b>Los lockups hasta el 8 dic elevan el float a ~40%</b>; el resto (incl. Musk) queda hasta mediados de 2027. Cada gran lockup post-IPO de la última década produjo al menos debilidad temporal. (SpaceX publica resultados solo vía su web y X, no las agencias.) <b>El reverso es el calendario de acumulación de SPCX</b> — misma escalera, lado compra."
        ),
      },
    ],
    action: t(
      "<b>Decoupled:</b> the sleeve trim is stale. The Jul contagion (SOX bear) unwound — broad tape at ATH, SPCX falls alone on lockup supply. <b>SMH / ROBO / URA → HOLD</b> (they track the recovered tape, not SPCX idiosyncrasy). <b>ARKQ / EWY → opportunistic sells only</b>, and only to fund SPCX adds. <b>Hold BTC</b> (sell only on a <b>weekly close</b> &lt; ~$62k); keep ISAC; <b>stagger into gold</b> (~$4,071). <b>SPCX: accumulate SLOWLY</b> — honest that Morningstar FV is $62 (~1.9× at ~$116), so the supply ladder running to <b>Dec 9</b> (180-day unlock) is where sizing gets interesting. Front-load smaller scales into the Aug/Oct waves. See the SPCX row + SUPPLY.",
      "<b>Desacoplado:</b> el trim del bloque es obsoleto. La contagio de julio (SOX bajista) se deshizo — mercado amplio en máximos, SPCX cae solo por la oferta del lockup. <b>SMH / ROBO / URA → MANTENER</b> (siguen al mercado recuperado, no a la idiosincrasia de SPCX). <b>ARKQ / EWY → ventas oportunistas solo</b>, y solo para financiar sumas a SPCX. <b>Mantén BTC</b> (vende solo con <b>cierre semanal</b> &lt; ~$62k); conserva ISAC; <b>escalona hacia el oro</b> (~$4.071). <b>SPCX: acumula DESPACIO</b> — honesto de que el VR de Morningstar es $62 (~1,9× a ~$116), así que la escalera de oferta que llega al <b>9 dic</b> (unlock 180 días) es donde el dimensionamiento se vuelve interesante. Carga tramos pequeños en las olas ago/oct. Mira la fila SPCX + OFERTA."
    ),
    watch: t(
      "The binary catalysts resolved <b>well</b> (Flight 13 success Jul 24; Q2 beat Aug 4) — yet SPCX keeps making lows. <b>That's supply, not a broken thesis</b> (a correction, not a break). No bottom call: Morningstar FV is <b>$62</b> vs ~$116 today, and the supply ladder runs through <b>Dec 9</b> — so more downside is plausible. <b>Monitor, don't predict:</b> watch unlock <b>volume</b> (heavy volume beyond day-1 = genuine absorption), and a sustained move vs the $135 IPO line / $62 FV. Re-arm the sleeve trim only on a fresh broad-market break (S&amp;P losing ATH, SOX re-cracking).",
      "Los catalizadores binarios resolvieron <b>bien</b> (éxito del vuelo 13 el 24 jul; beat del 2T el 4 ago) — y aun así SPCX sigue marcando mínimos. <b>Eso es oferta, no una tesis rota</b> (corrección, no ruptura). Sin llamado de piso: el VR de Morningstar es <b>$62</b> vs ~$116 hoy, y la escalera de oferta llega al <b>9 dic</b> — así que más caída es plausible. <b>Vigila, no predigas:</b> observa el <b>volumen</b> del unlock (volumen pesado más allá del día-1 = absorción real), y un movimiento sostenido vs la línea de OPV $135 / VR $62. Re-arma el trim del bloque solo con una nueva ruptura del mercado amplio (S&amp;P perdiendo máximos, SOX rompiéndose de nuevo)."
    ),
  },
];

export const TRIGGERS = [
  t("<b>CONFIRMED — and now ISOLATED to supply:</b> fresh 52-wk low <b>$104.83 Aug 5</b> (~$115.81) <i>despite</i> Flight 13 success (Jul 24) and a Q2 earnings beat (Aug 4: revenue $7.8B +92%, AI +250%). <b>~49% off the $225.64 peak</b>, cap ~$1.5T, still <b>~1.9× Morningstar FV ($62)</b>. Shorts 219.3M / ~$24.6B (34% of float, S3 Jul 29). The beat proves a <b>correction, not a thesis break</b> → keep accumulating SPCX, but <b>slowly</b> — the supply ladder runs to Dec 9.",
    "<b>CONFIRMADA — y ahora AISLADA a la oferta:</b> nuevo mínimo a 52 sem <b>$104,83 el 5 ago</b> (~$115,81) <i>a pesar de</i> el éxito del vuelo 13 (24 jul) y un beat del 2T (4 ago: revenue $7,8B +92%, IA +250%). <b>~49% por debajo del pico de $225,64</b>, cap ~$1,5B, aún <b>~1,9× VR de Morningstar ($62)</b>. Cortos 219,3M / ~$24,6B (34% del float, S3 29 jul). El beat demuestra una <b>corrección, no ruptura de tesis</b> → sigue acumulando SPCX, pero <b>despacio</b> — la escalera de oferta llega al 9 dic."),
  t("<b>OFF (broad vol eased; SPCX-only):</b> cheap-insurance window reopening as Iran-oil cooled (Brent ~$84) and the S&amp;P rebounded toward ATH. SPCX idiosyncratic vol still high into Aug 6. If the SMH put spread + Sep SPY/QQQ puts aren't on, set them now — SMH/EWY lag the rebound (SOX ~−13% / 30d) so puts are still worth having.",
    "<b>APAGADO (vol amplia cedió; solo SPCX):</b> reabriendo la ventana de seguro barato al enfriarse el petróleo-Irán (Brent ~$84) y rebotar el S&amp;P hacia máximos. La vol idiosincrática de SPCX sigue alta hacia el 6 ago. Si el put spread de SMH + los puts SPY/QQQ a septiembre no están, colócalos ahora — SMH/EWY rezagan el rebote (SOX ~−13% / 30d) así que los puts aún valen la pena."),
  t("<b>DIVERGENCE NARROWING (watch):</b> BTC back to <b>~$64k Aug 5</b>, hovering its 200-week average (~$62k) — the SPCX isolation is now TOTAL (broad market up, SPCX down). Gauge still <b>OFF</b> (no weekly break). Re-arm the broad-risk sell only on a <b>weekly close</b> &lt; ~$62k on rising volume.",
    "<b>DIVERGENCIA ESTRECHÁNDOSE (vigilar):</b> BTC de vuelta a <b>~$64k el 5 ago</b>, rondando su media de 200 semanas (~$62k) — el aislamiento de SPCX es ahora TOTAL (mercado amplio arriba, SPCX abajo). Medidor aún <b>APAGADO</b> (sin ruptura semanal). Re-arma la venta de riesgo amplio solo con <b>cierre semanal</b> &lt; ~$62k con volumen creciente."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. <b>The binary risk is gone</b> (Flight 13 + earnings both passed well); the sleeve trim is stale (SPCX now decoupled, falling alone on supply). Ahead: <b>Aug 6 — 911.5M-share base-20% unlock</b> (~140% of the IPO float) is wave 1, not the climax — the ladder runs to <b>Dec 9</b> (180-day, float ~40%). <b>Same ladder = SPCX accumulation calendar</b> — weight sizing toward the Dec window nearer FV ($62).",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. <b>El riesgo binario se fue</b> (vuelo 13 + resultados pasaron bien); el trim del bloque es obsoleto (SPCX ahora desacoplado, cayendo solo por oferta). Adelante: <b>6 ago — unlock base 20% de 911,5M acciones</b> (~140% del float de la OPV) es la ola 1, no el clímax — la escalera llega al <b>9 dic</b> (180 días, float ~40%). <b>Misma escalera = calendario de acumulación SPCX</b> — pondera el dimensionamiento hacia la ventana de dic, más cerca del VR ($62)."),
];
