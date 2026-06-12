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
        label: t("S&P decision — REJECTED (Jun 4)", "Decisión S&P — RECHAZADA (4 jun)"),
        text: t(
          "<b>Resolved: S&P DJI rejected the MegaCap waiver</b> (MR4292) on Jun 4 — no change to the profitability, seasoning, or float rules, \"not granted solely based on market cap.\" So <b>the S&P 500 leg of the forced-buying thesis is dead</b> until SpaceX is GAAP-profitable (it lost ~$4.9B in 2025). Only the Nasdaq-100 fast-entry (a separate, adopted rule) survives.",
          "<b>Resuelto: S&P DJI rechazó la exención MegaCap</b> (MR4292) el 4 jun — sin cambios a las reglas de rentabilidad, maduración o float, \"no se concede solo por capitalización\". Así que <b>la pata S&P 500 de la tesis de compra forzada está muerta</b> hasta que SpaceX sea rentable GAAP (perdió ~$4.9B en 2025). Solo sobrevive la entrada rápida del Nasdaq-100 (una regla aparte, ya adoptada)."
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
        label: t("Flush already underway · Jun '26", "Purga ya en curso · jun '26"),
        text: t(
          "A semi-led selloff hit Jun 5 (Nasdaq −4.2%, worst since Apr '25) on Broadcom's weak AI-chip outlook + a hot jobs print flipping the Fed to hike-risk; Iran tension piled on. By Jun 9: <b>S&P 7,387, Nasdaq 25,679, VIX 20.9</b> — S&P already <b>below the 7,500 trigger</b>. Note vs Cava's map (S&P ~7,000 / Nasdaq ~27,000): <b>Nasdaq has overshot below 27k while S&P holds above 7k</b>. This is a macro/semi flush, not the post-inclusion unwind — don't fire the Phase-03 sell sequence on it.",
          "Un selloff liderado por semis golpeó el 5 jun (Nasdaq −4.2%, peor desde abr '25) por el flojo pronóstico de chips IA de Broadcom + un dato de empleo fuerte que pasó a la Fed a riesgo de subida; la tensión con Irán sumó. Al 9 jun: <b>S&P 7.387, Nasdaq 25.679, VIX 20,9</b> — S&P ya <b>bajo el disparador de 7.500</b>. Ojo vs el mapa de Cava (S&P ~7.000 / Nasdaq ~27.000): <b>el Nasdaq ya sobrepasó por debajo de 27k mientras el S&P aguanta sobre 7k</b>. Es una purga macro/semis, no el desarme post-inclusión — no dispares la secuencia de venta de la Fase 03 con esto."
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
        label: t("The calendar · priced", "El calendario · fijado"),
        text: t(
          "<b>Priced $135/sh, full $75B raise, ~$1.77T</b> (555.6M shares) — at the target, institutions did <b>not</b> balk on the deal. Nasdaq debut <b>Jun 12</b>, ticker SPCX. ~7% float = expect violent two-way moves.",
          "<b>Fijado $135/acc, recauda los $75B completos, ~$1,77B</b> (555,6M acciones) — en el objetivo, los institucionales <b>no</b> dudaron del deal. Debut en Nasdaq <b>12 jun</b>, ticker SPCX. Float ~7% = espera movimientos violentos en ambos sentidos."
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
        label: t("Add-back gate: NOT met yet", "Puerta para sumar: AÚN no cumplida"),
        text: t(
          "<b>Status (Jun 10): the brake is ON.</b> Jun 8 did not pass clean (semi-led flush already running) and the Jun 16–17 FOMC is still ahead — so <b>do not add yet</b>. The gate opens only if the flush settles, the FOMC passes without a new leg down, and price breaks out cleanly. Then add to <b>quality (SMH/ISAC), not froth (ARKQ/ROBO)</b>, in tranches, light into the ~Jul 7 reversal zone — not funded by selling gold, not expecting a mechanical index pop (~0–1%).",
          "<b>Estado (10 jun): el freno está PUESTO.</b> El 8 jun no pasó limpio (ya corre una purga liderada por semis) y el FOMC del 16–17 sigue por delante — así que <b>no sumes aún</b>. La puerta abre solo si la purga se calma, el FOMC pasa sin una nueva pata bajista, y el precio rompe al alza con claridad. Entonces suma a <b>calidad (SMH/ISAC), no a la espuma (ARKQ/ROBO)</b>, en tramos, ligero hacia la zona de reversión del ~7 jul — sin financiarlo vendiendo oro, sin esperar un salto mecánico por inclusión (~0–1%)."
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
        "Estimación: debut 12 jun + ~15 días de cotización. El aviso oficial de Nasdaq (~29–30 jun) fija la fecha exacta — actualiza <code>target</code> en <code>phases.js</code> entonces."
      ),
      done: t(
        "Auction window reached — forced demand is exhausting. Phase 03 is live.",
        "Ventana de subasta alcanzada — la demanda forzada se agota. La Fase 03 está activa."
      ),
    },
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
        label: t("Timeline math · the buy is ONE auction", "Cuentas · la compra es UNA subasta"),
        text: t(
          "Debut Jun 12 + ~15 trading days → effective <b>~Jul 7</b> (holidays Jun 19 & Jul 3 push it to the back of the Jul 2–7 range). Funds don't buy on the effective day — they buy in a <b>single closing auction the session before</b> (the index only holds SPCX from the effective open). So the forced bid is <b>one print, not a multi-day tailwind</b>: effective Mon → buy the Fri before; effective Tue Jul 7 → buy Mon Jul 6 close.",
          "Debut 12 jun + ~15 días de cotización → efectivo <b>~7 jul</b> (los feriados 19 jun y 3 jul lo empujan al final del rango 2–7 jul). Los fondos no compran el día efectivo — compran en <b>una sola subasta de cierre la sesión anterior</b> (el índice solo tiene SPCX desde la apertura efectiva). Así que el bid forzado es <b>un único print, no un viento de cola de varios días</b>: efectivo lun → compra el vie previo; efectivo mar 7 jul → compra en el cierre del lun 6 jul."
        ),
      },
      {
        label: t("Nasdaq-100 only · S&P leg dead", "Solo Nasdaq-100 · pata S&P muerta"),
        text: t(
          "Only the Nasdaq-100 is fast. <b>S&P 500 is now off the table</b>: the MegaCap waiver was rejected (Jun 4), so SpaceX can't enter until it posts GAAP profits (lost ~$4.9B in 2025) — likely 2027+. <b>Russell 1000</b> waits for the Sep or Dec 2026 reconstitution. So the forced flow is QQQ-trackers only — smaller than if S&P had joined.",
          "Solo el Nasdaq-100 es rápido. <b>El S&P 500 queda fuera</b>: la exención MegaCap fue rechazada (4 jun), así que SpaceX no puede entrar hasta dar utilidades GAAP (perdió ~$4.9B en 2025) — probablemente 2027+. <b>Russell 1000</b> espera a la reconstitución de sep o dic 2026. Así que el flujo forzado es solo de trackers de QQQ — menor que si el S&P hubiera entrado."
        ),
      },
      {
        label: t("Sizing the flow · float-capped", "Dimensionando el flujo · topado por float"),
        text: t(
          "Forced buying is <b>QQQ-trackers only</b> now (the S&P leg was rejected) — roughly <b>$15–30B conservative</b>. And SPCX floats only ~7%, so the <b>3× float cap limits its index weight</b> → the auction bid is size-capped. Real, but a single capped print: don't bank on a large index-driven lift.",
          "La compra forzada es ahora <b>solo de trackers de QQQ</b> (la pata S&P fue rechazada) — ~<b>$15–30B conservador</b>. Y SPCX flota solo ~7%, así que el <b>tope de float 3× limita su peso en el índice</b> → el bid de la subasta queda topado. Real, pero un único print acotado: no cuentes con un gran empujón por inclusión."
        ),
      },
    ],
    action: t(
      "Get the real hedge ready, but mind the instrument: a <b>3× leveraged ETF (SOXS) bleeds to daily-reset decay</b> if you carry it 5+ weeks from June. Prefer a <b>SMH put spread (Jul/Aug)</b> — fixed cost, no decay, and one position covers SMH + EWY. Keep SOXS as a Phase-03 execution tool, not passive insurance. Decide exact sell levels now.",
      "Prepara la cobertura real, pero cuida el instrumento: un <b>ETF apalancado 3× (SOXS) sangra por decay de reseteo diario</b> si lo cargas 5+ semanas desde junio. Prefiere un <b>put spread de SMH (jul/ago)</b> — costo fijo, sin decay, y una posición cubre SMH + EWY. Deja SOXS como herramienta de ejecución en Fase 03, no como seguro pasivo. Define los niveles exactos de venta ahora."
    ),
    watch: t(
      "Don't short the pop or panic-sell here. The trigger is Nasdaq's official inclusion notice — it lands <b>~Jun 29–30 (≥5 trading days ahead)</b> and names the exact effective date. Forced demand peaks in the <b>auction the session before</b> it and exhausts at that close; Phase 03 opens the very next session.",
      "No te pongas corto en el pico ni vendas por pánico aquí. El disparador es el aviso oficial de inclusión de Nasdaq — llega <b>~29–30 jun (≥5 días de cotización antes)</b> y nombra la fecha efectiva exacta. La demanda forzada hace pico en la <b>subasta de la sesión anterior</b> y se agota en ese cierre; la Fase 03 abre la sesión siguiente."
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
  t("VIX pushes above <b>~20–22</b> (already ~21 on Jun 9 — at the lower edge)",
    "El VIX sube por encima de <b>~20–22</b> (ya ~21 el 9 jun — en el borde inferior)"),
  t("<b>Cleaner cross-confirmation:</b> BTC leading down + VIX &gt;20–22 + URA/EWY breaking — clearer than waiting for SMH to make lower lows alone",
    "<b>Confirmación cruzada más limpia:</b> BTC liderando a la baja + VIX &gt;20–22 + URA/EWY rompiendo — más nítido que esperar a que SMH haga mínimos más bajos sola"),
  t("These triggers are <b>lagging</b> — the hedge covers the initial gap, so the <b>instrument and size of the cover matter more</b> than the exact trigger level",
    "Estos disparadores son <b>rezagados</b> — la cobertura cubre el gap inicial, así que <b>el instrumento y el tamaño de la cobertura importan más</b> que el nivel exacto del disparador"),
  t("Context: the <b>Jun 16–17 FOMC</b> is the vol catalyst between debut and inclusion",
    "Contexto: el <b>FOMC del 16–17 jun</b> es el catalizador de volatilidad entre el debut y la inclusión"),
];
