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
      "Before the hype even starts, two scheduled events could flush the market lower — the shakeout could come first, not after.",
      "Antes de que empiece la euforia, dos eventos en calendario podrían purgar el mercado a la baja — la sacudida podría venir primero, no después."
    ),
    drivers: [
      {
        label: t("Jun 8 — S&P decision", "8 Jun — decisión S&P"),
        text: t(
          "S&P's <b>MegaCap waiver is a proposal</b> (consultation MR4292; comments closed May 28) that <b>may</b> take effect before the Jun 8 open if adopted — it never names SpaceX. If it's rejected or delayed, the forced-buying thesis weakens and froth can unwind.",
          "La <b>exención MegaCap es una propuesta</b> (consulta MR4292; comentarios cerrados el 28 may) que <b>podría</b> entrar en vigor antes de la apertura del 8 jun si se aprueba — no menciona a SpaceX. Si se rechaza o retrasa, la tesis de compra forzada se debilita y la espuma puede deshacerse."
        ),
      },
      {
        label: t("Jun 16–17 — Warsh's first FOMC", "16–17 Jun — primer FOMC de Warsh"),
        text: t(
          "New Fed chairs get 'tested' 1–2 months in. Holding firm on rates with sticky inflation is a credible risk-off catalyst.",
          "A los nuevos presidentes de la Fed el mercado los 'prueba' 1–2 meses después. Mantenerse firme en tasas con inflación pegajosa es un catalizador risk-off creíble."
        ),
      },
      {
        label: t("Cava's flush thesis · unverified", "Tesis de purga de Cava · no verificada"),
        text: t(
          "Argues 'strong hands' flush to the start of the last up-leg: S&P ~7,000–7,050 (−8%), Nasdaq ~27,000 (−10%), then rip higher. <b>Deep research found no supporting evidence</b> — treat as one analyst's scenario, not a forecast.",
          "Sostiene que las 'manos fuertes' purgan hasta el inicio de la última onda alcista: S&P ~7,000–7,050 (−8%), Nasdaq ~27,000 (−10%), y luego suben. <b>La investigación no halló evidencia que lo respalde</b> — tómalo como el escenario de un analista, no un pronóstico."
        ),
      },
    ],
    action: t(
      "Your September SPY/QQQ puts (set in Phase 1) double as flush cover. Don't add new risk into these dates.",
      "Tus puts SPY/QQQ a septiembre (puestos en la Fase 1) sirven también como cobertura ante la purga. No agregues riesgo nuevo en estas fechas."
    ),
    watch: t(
      "S&P 500 below ~7,500, or Nasdaq breaking Mar-2026 lows on the FOMC = the shakeout is starting.",
      "S&P 500 por debajo de ~7,500, o el Nasdaq rompiendo los mínimos de mar-2026 en el FOMC = la sacudida está empezando."
    ),
  },
  {
    id: "ph1", tone: "go", icon: "↑",
    num: "PHASE 01",
    name: t("Build-Up", "Acumulación"),
    date: t("NOW → ~JUN 12", "AHORA → ~12 JUN"),
    headline: t("Hold everything. Don't sell into strength.", "Mantén todo. No vendas en la fuerza."),
    concept: t(
      "Anticipation lifts the whole space/tech/AI theme — exactly what your book is long. This is the easy leg; ride it.",
      "La anticipación impulsa todo el tema espacio/tech/IA — justo en lo que está larga tu cartera. Este es el tramo fácil; aprovéchalo."
    ),
    drivers: [
      {
        label: t("The calendar", "El calendario"),
        text: t(
          "Roadshow ~Jun 4 → pricing ~Jun 11 → Nasdaq debut ~Jun 12 (ticker SPCX).",
          "Roadshow ~4 Jun → fijación de precio ~11 Jun → debut en Nasdaq ~12 Jun (ticker SPCX)."
        ),
      },
      {
        label: t("Correlated upside", "Subida correlacionada"),
        text: t(
          "Your risk-on sleeve drifts up together on the hype (gold is the counterweight). Selling now leaves easy gains on the table and risks whipsaw.",
          "Tu bloque risk-on sube junto con la euforia (el oro es el contrapeso). Vender ahora deja ganancias fáciles sobre la mesa y arriesga latigazos."
        ),
      },
      {
        label: t("If no shakeout → add back", "Si no hay sacudida → vuelve a sumar"),
        text: t(
          "If Jun 8 and the Jun 16–17 FOMC pass with no flush and price breaks out cleanly, the Phase-00 brake is off — you can add. But add to <b>quality (SMH/ISAC), not froth (ARKQ/ROBO)</b>, in tranches, and stay light into the ~Jul 7 reversal zone. Don't fund it by selling your gold ballast, and don't buy expecting a mechanical index pop (~0–1%) — add because the trend confirmed.",
          "Si el 8 jun y el FOMC del 16–17 pasan sin purga y el precio rompe al alza con claridad, el freno de la Fase 00 se suelta — puedes sumar. Pero suma a <b>calidad (SMH/ISAC), no a la espuma (ARKQ/ROBO)</b>, en tramos, y mantente ligero al acercarte a la zona de reversión del ~7 jul. No lo financies vendiendo tu lastre de oro, ni compres esperando un salto mecánico por inclusión (~0–1%) — suma porque la tendencia se confirmó."
        ),
      },
    ],
    action: t(
      "Nothing to sell. Set your September SPY/QQQ put insurance and write down your reversal trigger levels while it's calm.",
      "Nada que vender. Coloca tu seguro de puts SPY/QQQ a septiembre y anota tus niveles de disparo de reversión mientras hay calma."
    ),
    watch: t(
      "Pricing strength: at/above the ~$1.8T target (raise up to ~$75B; trimmed from >$2T in late May) = momentum continues. Priced well below = institutions balked → go defensive early.",
      "Fuerza de la fijación: en/por encima del objetivo de ~$1.8B (recauda hasta ~$75MM; recortado desde >$2B a fines de mayo) = el momentum sigue. Fijado muy por debajo = los institucionales dudaron → ponte defensivo antes."
    ),
  },
  {
    id: "ph2", tone: "warn", icon: "~",
    num: "PHASE 02",
    name: t("Inclusion Window", "Ventana de Inclusión"),
    date: "~JUN 12 → ~JUL 7",
    headline: t("Hold, but watch. Forced buying still supports the market.", "Mantén, pero vigila. La compra forzada aún sostiene al mercado."),
    concept: t(
      "The Nasdaq rule change is a <b>symptom of the new regime</b>: a private megacap can scale to ~$1.75T and skip the years of public seasoning the old manual demanded. Index funds buy SPCX, but the classic 'index pop' has faded (addition returns ~0–1% in 2010–2020) — the real edge is the short-seasoning setup: forced buyers pay up near inclusion and prices can unwind once that demand exhausts.",
      "El cambio de regla de Nasdaq es un <b>síntoma del nuevo régimen</b>: una megacap privada puede escalar a ~$1.75B y saltarse los años de maduración pública que exigía el viejo manual. Los fondos indexados compran SPCX, pero el clásico 'salto por inclusión' se desvaneció (retornos de adición ~0–1% en 2010–2020) — la verdadera ventaja es la maduración corta: los compradores forzados pagan caro cerca de la inclusión y el precio puede deshacerse cuando esa demanda se agota."
    ),
    drivers: [
      {
        label: t("Nasdaq-100 Fast Entry · live May 1, 2026", "Nasdaq-100 Entrada Rápida · vigente 1 may 2026"),
        text: t(
          "A newcomer in the <b>NDX top-40 by size (~$100B+)</b> is evaluated from its 7th trading day and joins ~<b>15 business days</b> after debut — <b>no seasoning, no 10% minimum-float requirement</b>. SPCX qualifies by size with room to spare.",
          "Un recién llegado en el <b>top-40 por tamaño del NDX (~$100B+)</b> se evalúa desde su 7º día de cotización y entra ~<b>15 días hábiles</b> tras el debut — <b>sin maduración, sin mínimo de float del 10%</b>. SPCX califica por tamaño con holgura."
        ),
      },
      {
        label: t("Timeline math", "Cuentas del calendario"),
        text: t(
          "Debut ~Jun 12 + 15 business days ≈ <b>Jul 3–7</b>. That date is the hinge: it sets when forced demand stops and Phase 03 price discovery begins.",
          "Debut ~12 jun + 15 días hábiles ≈ <b>3–7 jul</b>. Esa fecha es la bisagra: marca cuándo se detiene la demanda forzada y empieza el descubrimiento de precio de la Fase 03."
        ),
      },
      {
        label: t("Not immediate elsewhere", "No es inmediato en otros índices"),
        text: t(
          "Only the Nasdaq-100 is fast. <b>S&P 500</b> is ~Q4 2026 / 2027 (needs the ~6-month seasoning waiver + the profitability rule — SpaceX lost ~$4.9B in 2025). <b>Russell 1000</b> waits for the Sep or Dec 2026 reconstitution.",
          "Solo el Nasdaq-100 es rápido. <b>S&P 500</b> es ~Q4 2026 / 2027 (requiere el waiver de maduración ~6 meses + la regla de rentabilidad — SpaceX perdió ~$4.9B en 2025). <b>Russell 1000</b> espera a la reconstitución de sep o dic 2026."
        ),
      },
      {
        label: t("Sizing the mechanical flow", "Dimensionando el flujo mecánico"),
        text: t(
          "Forced buying from QQQ/SPY/Russell trackers is roughly <b>$15–30B conservative</b>, with aggressive scenarios <b>>$200B</b>. Real, but the spillover to your broad book is modest — don't bank on a large index-driven lift.",
          "La compra forzada de los trackers de QQQ/SPY/Russell ronda <b>$15–30B conservador</b>, con escenarios agresivos <b>>$200B</b>. Real, pero el derrame a tu cartera amplia es modesto — no cuentes con un gran empujón por inclusión."
        ),
      },
    ],
    action: t(
      "Get the real hedge ready, but mind the instrument: a <b>3× leveraged ETF (SOXS) bleeds to daily-reset decay</b> if you carry it 5+ weeks from June. Prefer a <b>SMH put spread (Jul/Aug)</b> — fixed cost, no decay, and one position covers SMH + EWY. Keep SOXS as a Phase-03 execution tool, not passive insurance. Decide exact sell levels now.",
      "Prepara la cobertura real, pero cuida el instrumento: un <b>ETF apalancado 3× (SOXS) sangra por decay de reseteo diario</b> si lo cargas 5+ semanas desde junio. Prefiere un <b>put spread de SMH (jul/ago)</b> — costo fijo, sin decay, y una posición cubre SMH + EWY. Deja SOXS como herramienta de ejecución en Fase 03, no como seguro pasivo. Define los niveles exactos de venta ahora."
    ),
    watch: t(
      "Do not short the pop or panic-sell here. Mark ~Jul 7 — the day forced buying exhausts.",
      "No te pongas corto en el pico ni vendas por pánico aquí. Marca el ~7 Jul — el día en que la compra forzada se agota."
    ),
  },
  {
    id: "ph3", tone: "hot", icon: "!",
    num: "PHASE 03",
    name: t("Post-Inclusion", "Post-Inclusión"),
    date: t("~JUL 7 ONWARD", "~7 JUL EN ADELANTE"),
    headline: t("The trigger. If it rolls over, trim in priority order.", "El disparador. Si se da la vuelta, recorta en orden de prioridad."),
    concept: t(
      "Forced demand is spent and real price discovery takes over. The transferable principle from every prior mania: <b>forced demand always exhausts, and then real price discovery rules</b> — no single precedent required.",
      "La demanda forzada se agotó y toma el control el descubrimiento de precio real. El principio transferible de toda manía previa: <b>toda demanda forzada se agota y entonces manda el descubrimiento de precio real</b> — no hace falta un precedente concreto."
    ),
    drivers: [
      {
        label: t("Correction vs thesis break", "Corrección vs ruptura de tesis"),
        text: t(
          "Distinguish a <b>technical correction inside the secular trend</b> (buy the dip) from a <b>thesis break</b> (adoption/revenue no longer validates the multiple → exit). Technical triggers only measure the first; the second needs reading fundamentals.",
          "Distingue una <b>corrección técnica dentro de la tendencia secular</b> (compra la caída) de una <b>ruptura de tesis</b> (la adopción/revenue ya no valida el múltiplo → sal). Los disparadores técnicos solo miden lo primero; lo segundo requiere leer fundamentos."
        ),
      },
      {
        label: t("SMH ↔ SPCX · mechanical + sentiment", "SMH ↔ SPCX · mecánico + sentimiento"),
        text: t(
          "<b>Mechanical:</b> Fast Entry with no removal forces NDX funds to buy SPCX, trimming every constituent proportionally — NVDA/AVGO/AMD sit in NDX <i>and</i> atop SMH → proportional selling hits SMH. <b>Sentiment:</b> same AI narrative (SMH = compute layer, SPCX/Starlink = app/connectivity).",
          "<b>Mecánico:</b> la Entrada Rápida sin remoción obliga a fondos NDX a comprar SPCX, recortando proporcionalmente a cada constituyente — NVDA/AVGO/AMD están en NDX <i>y</i> al tope de SMH → la venta proporcional golpea SMH. <b>Sentimiento:</b> misma narrativa IA (SMH = capa cómputo, SPCX/Starlink = capa app/conectividad)."
        ),
      },
    ],
    action: t(
      "Confirmed reversal → sell in order: <b>BTC → ARKQ → EWY</b> (noise/liquidity, cut for real) → <b>SMH → ROBO → URA</b> (structural signal, trim only). Keep ISAC (hedged). Stagger into gold — <b>gold is panic liquidity, not conviction</b>: it gets sold for margin calls on day 1 and recovers after, so don't rotate all at once. Still rising → do nothing, let the hedge ride.",
      "Reversión confirmada → vende en orden: <b>BTC → ARKQ → EWY</b> (ruido/liquidez, recorta de verdad) → <b>SMH → ROBO → URA</b> (señal estructural, solo trim). Conserva ISAC (cubierto). Escalona hacia el oro — <b>el oro es liquidez de pánico, no convicción</b>: se vende por margin calls el día 1 y recupera después, así que no rotes todo de golpe. Sigue subiendo → no hagas nada, deja correr la cobertura."
    ),
    watch: t(
      "You're hedging the <b>timing risk of the narrative</b> (temporary reversal), not the structural thesis — tactical, temporary insurance, not a short on the secular trend. Confirm the move before acting rather than front-running it.",
      "Estás cubriendo el <b>riesgo de timing de la narrativa</b> (reversión temporal), no la tesis estructural — seguro táctico y temporal, no un corto contra la tendencia secular. Confirma el movimiento antes de actuar en vez de adelantarte."
    ),
  },
];

export const TRIGGERS = [
  t("SPCX breaks below its debut / inclusion-week price on <b>rising volume</b>",
    "SPCX rompe por debajo de su precio de debut / semana de inclusión con <b>volumen creciente</b>"),
  t("VIX pushes above <b>~20–22</b> (from ~17 now)",
    "El VIX sube por encima de <b>~20–22</b> (desde ~17 ahora)"),
  t("<b>Cleaner cross-confirmation:</b> BTC leading down + VIX &gt;20–22 + URA/EWY breaking — clearer than waiting for SMH to make lower lows alone",
    "<b>Confirmación cruzada más limpia:</b> BTC liderando a la baja + VIX &gt;20–22 + URA/EWY rompiendo — más nítido que esperar a que SMH haga mínimos más bajos sola"),
  t("These triggers are <b>lagging</b> — the hedge covers the initial gap, so the <b>instrument and size of the cover matter more</b> than the exact trigger level",
    "Estos disparadores son <b>rezagados</b> — la cobertura cubre el gap inicial, así que <b>el instrumento y el tamaño de la cobertura importan más</b> que el nivel exacto del disparador"),
  t("Context: the <b>Jun 16–17 FOMC</b> is the vol catalyst between debut and inclusion",
    "Contexto: el <b>FOMC del 16–17 jun</b> es el catalizador de volatilidad entre el debut y la inclusión"),
];
