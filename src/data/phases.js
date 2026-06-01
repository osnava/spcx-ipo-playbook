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
      "Index funds do buy SPCX, but the classic 'index pop' has largely faded (addition returns ~0–1% in 2010–2020) — active investors supply the shares. The real edge is the short-seasoning setup: forced buyers pay up near inclusion and prices can unwind after. Reversal risk concentrates once this buying exhausts.",
      "Los fondos indexados sí compran SPCX, pero el clásico 'salto por inclusión' casi desapareció (retornos de adición ~0–1% en 2010–2020) — los activos aportan las acciones. La verdadera ventaja es la maduración corta: los compradores forzados pagan caro cerca de la inclusión y el precio puede deshacerse después. El riesgo de reversión se concentra cuando esa compra se agota."
    ),
    drivers: [
      {
        label: t("Fast-entry rule · adopted", "Regla de entrada rápida · adoptada"),
        text: t(
          "<b>Live since May 1, 2026:</b> a top-40-by-size newcomer joins the Nasdaq-100 ~15 trading days after debut (5 days' notice, 3× float cap). Names outside the top-40 still wait the 3-month seasoning. SPCX would clearly qualify by size.",
          "<b>Vigente desde el 1 may 2026:</b> un recién llegado del top-40 por tamaño entra al Nasdaq-100 ~15 días hábiles tras el debut (aviso de 5 días, tope de 3× float). Los de fuera del top-40 siguen esperando la maduración de 3 meses. SPCX calificaría con holgura por tamaño."
        ),
      },
      {
        label: t("Low-float amplifier", "Amplificador de bajo float"),
        text: t(
          "A low float + weighting multiplier concentrates forced demand on SPCX itself. The spillover that supports your broad book (QQQ/tech) is real but <b>modest</b> — don't bank on a large index-driven lift.",
          "Un float bajo + multiplicador de ponderación concentra la demanda forzada en el propio SPCX. El derrame que sostiene tu cartera amplia (QQQ/tech) es real pero <b>modesto</b> — no cuentes con un gran empujón por inclusión."
        ),
      },
    ],
    action: t(
      "Get the real hedge live: SMH puts (cover SMH + EWY at once) and a VIX call spread for the sentiment tail. Decide exact sell levels now.",
      "Activa la cobertura real: puts de SMH (cubren SMH + EWY de una vez) y un call spread de VIX para la cola de sentimiento. Define los niveles exactos de venta ahora."
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
      "Forced demand is spent and real price discovery takes over. This is where the VinFast collapse template lives.",
      "La demanda forzada se agotó y toma el control el descubrimiento de precio real. Aquí vive el patrón de colapso de VinFast."
    ),
    drivers: [
      {
        label: t("The VinFast precedent", "El precedente VinFast"),
        text: t(
          "An ultra-low-float name pumped by inclusion buying ran ~700% to ~$200B, then collapsed from ~$17 to ~$3.",
          "Un nombre de float ultra-bajo inflado por compra de inclusión subió ~700% hasta ~$200B, luego colapsó de ~$17 a ~$3."
        ),
      },
      {
        label: t("Two paths", "Dos rutas"),
        text: t(
          "Still rising → do nothing, let the hedge ride as insurance. Confirmed reversal → execute the sell sequence below.",
          "Sigue subiendo → no hagas nada, deja que la cobertura corra como seguro. Reversión confirmada → ejecuta la secuencia de venta de abajo."
        ),
      },
    ],
    action: t(
      "Sell order: BTC → EWY → SMH → ARKQ/ROBO → URA. Keep ISAC (hedged) and rotate proceeds into gold (XAUUSD) as the haven. Trim in tranches, not all at once.",
      "Orden de venta: BTC → EWY → SMH → ARKQ/ROBO → URA. Conserva ISAC (cubierto) y rota el efectivo a oro (XAUUSD) como refugio. Recorta en tramos, no todo de golpe."
    ),
    watch: t(
      "The link to your book is sentiment-driven, not mechanical. Confirm the move before acting rather than front-running it.",
      "El vínculo con tu cartera es por sentimiento, no mecánico. Confirma el movimiento antes de actuar en vez de adelantarte."
    ),
  },
];

export const TRIGGERS = [
  t("SPCX breaks below its debut / inclusion-week price on <b>rising volume</b>",
    "SPCX rompe por debajo de su precio de debut / semana de inclusión con <b>volumen creciente</b>"),
  t("VIX pushes above <b>~20–22</b> (from ~17 now)",
    "El VIX sube por encima de <b>~20–22</b> (desde ~17 ahora)"),
  t("Your own names (SMH, BTC) making <b>lower lows</b> while SPCX falls",
    "Tus propios nombres (SMH, BTC) marcando <b>mínimos más bajos</b> mientras SPCX cae"),
];
