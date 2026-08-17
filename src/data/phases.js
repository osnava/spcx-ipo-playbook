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
      "<b>Closed Jul 7.</b> The pop never came — the Jul 6 auction absorbed the bid at $160.42, day 1 faded −5.2%, and the slide ran to a record low <b>$104.83 Aug 3</b> before the Aug-6 unlock itself marked the bottom (Phase 03).",
      "<b>Cerrada el 7 jul.</b> El salto nunca llegó — la subasta del 6 jul absorbió la puja en $160,42, el día 1 se desvaneció −5,2%, y el deslizamiento corrió hasta un mínimo récord de <b>$104,83 el 3 ago</b> antes de que el propio unlock del 6 ago marcara el piso (Fase 03)."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("JUL 7 ONWARD · LIVE", "7 JUL EN ADELANTE · ACTIVA"),
    headline: t("Wave 1 absorbed, shorts flushed — the supply ladder runs on to Dec.", "Ola 1 absorbida, cortos purgados — la escalera de oferta sigue hasta dic."),
    concept: t(
      "Supply dominated until the supply itself marked the bottom: the 911.5M-share unlock was <b>absorbed day 1</b> (+6%, heavy volume) and a squeeze (short interest 34% → 11%, S3) took SPCX <b>+41% off the $104.83 Aug-3 low to ~$148</b> — above the $135 IPO again, cap ~$1.9T, still ~2.4× Morningstar FV ($62). The ladder (a <i>lockup</i> = the post-IPO window when insiders can't sell) now lets insiders sell into a squeezed price.",
      "La oferta dominó hasta que la propia oferta marcó el piso: el unlock de 911,5M acciones fue <b>absorbido el día 1</b> (+6%, volumen pesado) y un squeeze (cortos 34% → 11%, S3) llevó a SPCX <b>+41% desde el mínimo de $104,83 (3 ago) a ~$148</b> — de nuevo sobre la OPV de $135, cap ~$1,9B, aún ~2,4× el VR de Morningstar ($62). La escalera (un <i>lockup</i> = la ventana post-OPV en la que los insiders no pueden vender) ahora deja a los insiders vender a un precio purgado al alza."
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
        label: t("RESOLVED · the unlock was the bottom — absorption + squeeze", "RESUELTO · el unlock fue el piso — absorción + squeeze"),
        text: t(
          "From <b>~$152 (Jul 7)</b> to the record low <b>$104.83 (Aug 3, −53% off the $225.64 peak)</b> despite Flight 13 success (Jul 24) and the Q2 beat (Aug 4; bear hook: capex &gt;2× revenue). Then the reversal — <b>Aug 6 unlock absorbed DAY 1</b> (+6%, heavy volume), <b>Aug 12 +11% to ~$148</b> as short interest collapsed <b>34% → 11% of float</b> (S3: \"shorts are out of bullets\"). Who bought the wave (13Fs): <b>PIF +154M shares · Harvard $2.2B (its largest stock holding) · Blackstone · Atreides</b>; <b>Nvidia disclosed a $20.97B stake Aug 17</b>. A correction, not a thesis break — confirmed.",
          "Desde <b>~$152 (7 jul)</b> hasta el mínimo récord de <b>$104,83 (3 ago, −53% bajo el pico de $225,64)</b> pese al éxito del vuelo 13 (24 jul) y al beat del 2T (4 ago; gancho bajista: capex &gt;2× el revenue). Luego la reversión — <b>el unlock del 6 ago se absorbió el DÍA 1</b> (+6%, volumen pesado), <b>el 12 ago +11% a ~$148</b> al colapsar el cortismo <b>34% → 11% del float</b> (S3: \"a los cortos se les acabaron las balas\"). Quién compró la ola (13F): <b>PIF +154M acciones · Harvard $2,2B (su mayor posición) · Blackstone · Atreides</b>; <b>Nvidia reveló una participación de $20,97B el 17 ago</b>. Corrección, no ruptura de tesis — confirmado."
        ),
      },
      {
        label: t("Coverage FULL · 27 of 33 Buys; shorts squeezed 34% → 11%", "Cobertura COMPLETA · 27 de 33 Compras; cortos purgados 34% → 11%"),
        text: t(
          "<b>27 of 33 analysts rate Buy (median PT ~$226)</b>: Morgan Stanley $300, Deutsche $255, Macquarie $250, <b>UBS $210 (new — AI/tokenization demand)</b>, Raymond James $800 street-high. Dissent: <b>Morningstar FV $62</b> (~$780B), Phillip Securities Sell. The <b>quiet period</b> (the SEC window after an IPO when underwriters can't publish research) is long over — and the <b>219.3M-share short crowd (34% of float, &gt; Tesla's dollar short) got squeezed out: ~11% by Aug 12 (S3)</b>. Squeeze fuel spent; what's left is one of the widest price/target gaps on record.",
          "<b>27 de 33 analistas califican Compra (objetivo mediano ~$226)</b>: Morgan Stanley $300, Deutsche $255, Macquarie $250, <b>UBS $210 (nuevo — demanda de IA/tokenización)</b>, Raymond James $800 máximo del Street. Disidencia: <b>VR de Morningstar $62</b> (~$780B), Phillip Securities en Venta. El <b>quiet period</b> (la ventana de la SEC tras una OPV en la que los colocadores no pueden publicar investigación) ya expiró — y la <b>multitud corta de 219,3M acciones (34% del float, &gt; que el cortismo en dólares de Tesla) quedó purgada: ~11% al 12 ago (S3)</b>. Combustible del squeeze agotado; queda uno de los gaps precio/objetivo más amplios registrados."
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
        label: t("The supply ladder · Aug 6 ABSORBED → next up to 319M Aug 20", "La escalera de oferta · 6 ago ABSORBIDO → próximos hasta 319M el 20 ago"),
        text: t(
          "Wave 1 is done: <b>911.5M shares unlocked Aug 6 — absorbed</b> (+6% day 1; float 639M → ~1.55B, ~12% of shares out). <b>Up to 319M more unlock Aug 20</b> (&gt;3× daily volume), then <b>~700M in Sep and ~700M in Oct</b> (7% rungs), the <b>+28% earnings-gated cliff at Q3 (~Nov)</b>, and the 180-day full unlock <b>~Dec 9</b> (float → ~40%); Musk (48.4%, per his Aug-16 filing) sits to Jun '27. The difference now: insiders can sell into a <b>squeezed, above-IPO price</b> — same ladder, read as the accumulation calendar: no chasing; entries at the waves.",
          "La ola 1 está hecha: <b>911,5M acciones liberadas el 6 ago — absorbidas</b> (+6% el día 1; float 639M → ~1.550M, ~12% de las acciones). <b>Hasta 319M más se liberan el 20 ago</b> (&gt;3× el volumen diario), luego <b>~700M en sep y ~700M en oct</b> (tramos de 7%), el <b>abismo de +28% condicionado a resultados del 3T (~nov)</b> y el unlock total a 180 días <b>~9 dic</b> (float → ~40%); Musk (48,4%, según su presentación del 16 ago) queda hasta jun '27. La diferencia ahora: los insiders pueden vender a un <b>precio purgado al alza, sobre la OPV</b> — misma escalera, leída como calendario de acumulación: no perseguir; entradas en las olas."
        ),
      },
    ],
    action: t(
      "<b>Decoupled — proven twice:</b> SPCX fell alone into the unlock, then squeezed +41% alone while the sleeve sat at records. <b>SMH / ROBO / URA → HOLD</b> (S&amp;P at records; SOX still ~20% under its Jun-22 high — keep the SMH hedge while it lags). <b>ARKQ / EWY → opportunistic sells</b>, only to fund SPCX adds. <b>Hold BTC</b> (a weekly close &lt; ~$62k is the sell); <b>stagger into gold</b> (~$4,470, +10%/month — keep the pace slow). <b>SPCX: first scale filled at wave 1; NO adds here</b> — ~$148 is ~10% above the $135 IPO and ~2.4× FV ($62). Next scales: the <b>Aug 20 / Sep / Oct waves</b>, weighted toward <b>Dec 9</b>. See the SPCX row + SUPPLY.",
      "<b>Desacoplado — probado dos veces:</b> SPCX cayó solo hacia el unlock, luego subió +41% solo en squeeze mientras el bloque estaba en máximos. <b>SMH / ROBO / URA → MANTENER</b> (S&amp;P en récords; SOX aún ~20% bajo su máximo del 22 jun — conserva el cobro de SMH mientras rezaga). <b>ARKQ / EWY → ventas oportunistas</b>, solo para financiar sumas a SPCX. <b>Mantén BTC</b> (un cierre semanal &lt; ~$62k es la venta); <b>escalona hacia el oro</b> (~$4.470, +10%/mes — mantén el ritmo lento). <b>SPCX: primer tramo llenado en la ola 1; SIN sumas aquí</b> — ~$148 está ~10% sobre la OPV de $135 y a ~2,4× VR ($62). Próximos tramos: las <b>olas 20 ago / sep / oct</b>, ponderando hacia el <b>9 dic</b>. Mira la fila SPCX + OFERTA."
    ),
    watch: t(
      "Three live threads. <b>Aug 20 (Thu): up to 319M shares</b> — absorption test #2; heavy volume <i>beyond</i> day-1 = genuine absorption. <b>Insider pace into Sep/Oct</b> — supply now meets a squeezed price. <b>Flight 14 NET Aug</b> (Shotwell: monthly cadence; possibly the first orbital Starship) — the next binary. Macro: the Iran ceasefire <b>expired Aug 16</b> (Brent ~$90); re-arm the sleeve trim only if the S&amp;P loses its record (~7,799) / SOX re-cracks. Jackson Hole (Warsh) this week.",
      "Tres hilos vivos. <b>20 ago (jue): hasta 319M acciones</b> — prueba de absorpción #2; volumen pesado <i>más allá</i> del día-1 = absorción real. <b>Ritmo interno hacia sep/oct</b> — la oferta ahora encuentra un precio purgado al alza. <b>Vuelo 14 NET ago</b> (Shotwell: cadencia mensual; posiblemente el primer Starship orbital) — el próximo binario. Macro: el cese al fuego con Irán <b>expiró el 16 ago</b> (Brent ~$90); re-arma el trim del bloque solo si el S&amp;P pierde su récord (~7.799) / el SOX se rompe de nuevo. Jackson Hole (Warsh) esta semana."
    ),
  },
];

export const TRIGGERS = [
  t("<b>CONFIRMED — then V-BOTTOMED on the unlock itself:</b> record low <b>$104.83 Aug 3</b>, the 911.5M-share wave <b>absorbed day 1</b> (Aug 6, +6%), squeeze (shorts 34% → 11%, S3) to <b>~$148 — +41%, back above the $135 IPO</b>, cap ~$1.9T, still <b>~2.4× Morningstar FV ($62)</b>. Correction, not break — confirmed by the tape. The discipline now binds: <b>no chasing above $135</b>; the ladder's waves (Aug 20, Sep, Oct, Dec 9) are the entries.",
    "<b>CONFIRMADA — luego PISO EN V sobre el propio unlock:</b> mínimo récord <b>$104,83 el 3 ago</b>, la ola de 911,5M <b>absorbida el día 1</b> (6 ago, +6%), squeeze (cortos 34% → 11%, S3) hasta <b>~$148 — +41%, de nuevo sobre la OPV de $135</b>, cap ~$1,9B, aún <b>~2,4× VR de Morningstar ($62)</b>. Corrección, no ruptura — confirmado por el mercado. La disciplina ahora ata: <b>no perseguir sobre $135</b>; las olas de la escalera (20 ago, sep, oct, 9 dic) son las entradas."),
  t("<b>OFF (but Hormuz is hot again):</b> cool CPI/PPI cut Sept rate-hike odds to ~33% and the S&amp;P sits at records (~7,799 Aug 14) — yet the Iran ceasefire <b>expired Aug 16</b> (Brent back to ~$89–91). Keep the SMH hedge + Sep SPY/QQQ puts while the strait is contested — SOX still ~20% under its Jun-22 high.",
    "<b>APAGADO (pero Ormuz arde de nuevo):</b> el CPI/PPI frío bajó las probabilidades de subida en sep a ~33% y el S&amp;P está en récords (~7.799 el 14 ago) — pero el cese al fuego con Irán <b>expiró el 16 ago</b> (Brent de vuelta a ~$89–91). Conserva el cobro de SMH + los puts SPY/QQQ a septiembre mientras el estrecho esté en disputa — el SOX aún ~20% bajo su máximo del 22 jun."),
  t("<b>PINNED AT THE 200-WEEK (watch):</b> BTC has hugged <b>~$64k</b> for two weeks straight while SPCX squeezed — the 200-week average (~$62k) is the line. Gauge still <b>OFF</b> (no weekly break). Act only on a <b>weekly close</b> &lt; ~$62k on rising volume.",
    "<b>CLAVADO EN LA MEDIA DE 200 SEMANAS (vigilar):</b> BTC ha rondado <b>~$64k</b> dos semanas seguidas mientras SPCX hizo su squeeze — la media de 200 semanas (~$62k) es la línea. Medidor aún <b>APAGADO</b> (sin ruptura semanal). Actúa solo con <b>cierre semanal</b> &lt; ~$62k con volumen creciente."),
  t("Triggers lag — the hedge covers the gap, so <b>instrument + size &gt; exact level</b>. <b>The binary risk is gone; the calendar isn't:</b> <b>Aug 20 — up to 319M shares</b> (&gt;3× daily volume), ~700M each in Sep/Oct, <b>+28% at Q3 earnings (~Nov)</b>, full 180-day unlock <b>Dec 9</b> (float → ~40%). Wave 1 proved real buyers exist (PIF, Harvard, Nvidia) — but the shorts are flushed (11%) and insiders now sell into strength. <b>Same ladder = accumulation calendar:</b> entries at the waves, sizing weighted toward the Dec window near FV ($62).",
    "Los disparadores rezagan — la cobertura cubre el gap, así que <b>instrumento + tamaño &gt; nivel exacto</b>. <b>El riesgo binario se fue; el calendario no:</b> <b>20 ago — hasta 319M acciones</b> (&gt;3× el volumen diario), ~700M c/u en sep/oct, <b>+28% en resultados del 3T (~nov)</b>, unlock total a 180 días <b>9 dic</b> (float → ~40%). La ola 1 probó que hay compradores reales (PIF, Harvard, Nvidia) — pero los cortos quedaron purgados (11%) y los insiders ahora venden en la fuerza. <b>Misma escalera = calendario de acumulación:</b> entradas en las olas, dimensionando hacia la ventana de dic cerca del VR ($62)."),
];
