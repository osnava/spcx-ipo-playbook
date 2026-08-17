/* lockup.js — the SUPPLY-side mirror of the playbook, two-sided.
   The demand story (forced index buying) exhausted ~Jul 7 → Phase 03. The
   lockup is the supply story: a "lockup" = the post-IPO window when insiders
   can't sell; the S-1 frees that stock in waves after debut. To a holder,
   each wave is downside risk. To a buyer, the SAME wave is a staged entry
   point (forced insider selling → weakness → accumulation window). One tranche
   is PRICE-conditioned — the +30%/$175.50 mechanic is explained ONCE, in
   status.note (the canonical home); other fields reference it. app.js renders
   a LIVE status pill off the SPCX tape quote. Terms pinned to the $135 IPO
   and the Jun 12 2026 debut. Style: see AGENTS.md. */
import { t } from "./i18n.js";

export const LOCKUP = {
  sym: "SPCX",
  ipoPrice: 135,         // S-1 IPO price
  triggerPct: 30,        // bonus tranche needs ≥ +30% over IPO …
  triggerPrice: 175.5,   // … i.e. ≥ $175.50

  /* shown on the 5th phase-row tile */
  tile: {
    num: t("SUPPLY", "OFERTA"),
    name: t("Lockup", "Lockup"),
  },

  concept: t(
    "Your book traded the <b>demand</b> side (forced buying — exhausted at the Jul 6 auction print). The lockup is the <b>supply</b> side: a tiered schedule freeing insider stock in waves. To a holder it <b>amplifies the downside</b>; to a buyer of the long-term thesis, the SAME ladder is a <b>staged accumulation calendar</b> — each wave is weakness to buy into, not just risk to fear.",
    "Tu cartera operó el lado de la <b>demanda</b> (compra forzada — agotada en el print de la subasta del 6 jul). El lockup es el lado de la <b>oferta</b>: un calendario escalonado que libera acciones de insiders en oleadas. Para un tenedor <b>amplifica el lado bajista</b>; para un comprador de la tesis de largo plazo, la MISMA escalera es un <b>calendario de acumulación escalonado</b> — cada ola es debilidad para comprar, no solo riesgo a temer."
  ),

  status: {
    title: t("Price-conditioned bonus tranche · resolved DEAD", "Tramo bonus condicionado al precio · resuelto MUERTO"),
    armed: t("TRANCHE DEAD", "TRAMO MUERTO"),
    below: t("TRANCHE DEAD", "TRAMO MUERTO"),
    threshold: t("Bonus trigger", "Disparador bonus"),
    snapshot: t("snapshot", "instantánea"),
    vsIpo: t("vs IPO", "vs OPV"),
    armedNote: t(
      "Above the +30% line — but the 10-day window into Q2 earnings closed Aug 4: the tranche is dead and the +10% rolls into the time tranches.",
      "Sobre la línea de +30% — pero la ventana de 10 días hacia resultados del 2T cerró el 4 ago: el tramo está muerto y el +10% pasa a los tramos de tiempo."
    ),
    needs: t("Window closed at Q2 earnings — dead; the +10% rolls into the time tranches. (Would still need", "Ventana cerrada en resultados del 2T — muerto; el +10% pasa a los tramos de tiempo. (Aún requeriría"),
    toArm: t("to touch the $175.50 line, which now unlocks nothing.)", "para tocar la línea de $175,50, que ya no libera nada.)"),
    note: t(
      "<b>Status (Aug 17): wave 1 unlocked Aug 6 — and ABSORBED.</b> +6% on day 1 in heavy volume; the 13Fs show who met it (PIF +154M, Harvard $2.2B, Blackstone, Atreides; Nvidia disclosed $20.97B Aug 17). A squeeze (shorts 34% → 11% of float, S3) then drove SPCX from the record low <b>$104.83 (Aug 3) to ~$148</b> — +41%, back above the $135 IPO, cap ~$1.9T. Still <b>~2.4× Morningstar FV ($62)</b>. The bonus is dead as ever: the +30% trigger ($175.50) was never reached; that 10% <b>rolls into the time tranches</b>. <b>Next rung: up to 319M shares on Aug 20</b> (&gt;3× daily volume), then ~700M Sep / ~700M Oct, the +28% Q3-earnings cliff (~Nov), and the 180-day full unlock <b>~Dec 9</b> (float → ~40%). Insiders can now sell into a squeezed, above-IPO price — the Dec window, nearer fair value, stays where accumulation sizing gets interesting. Musk (48.4%, filed Aug 16) sits to mid-2027.",
      "<b>Estado (17 ago): la ola 1 se liberó el 6 ago — y fue ABSORBIDA.</b> +6% el día 1 con volumen pesado; los 13F muestran quién la compró (PIF +154M, Harvard $2,2B, Blackstone, Atreides; Nvidia reveló $20,97B el 17 ago). Un squeeze (cortos 34% → 11% del float, S3) llevó luego a SPCX del mínimo récord de <b>$104,83 (3 ago) a ~$148</b> — +41%, de nuevo sobre la OPV de $135, cap ~$1,9B. Aún <b>~2,4× VR de Morningstar ($62)</b>. El bonus sigue muerto: el disparador de +30% ($175,50) nunca se alcanzó; ese 10% <b>pasa a los tramos de tiempo</b>. <b>Próximo peldaño: hasta 319M acciones el 20 ago</b> (&gt;3× el volumen diario), luego ~700M sep / ~700M oct, el abismo de +28% con resultados del 3T (~nov) y el unlock total a 180 días <b>~9 dic</b> (float → ~40%). Los insiders ahora pueden vender a un precio purgado al alza, sobre la OPV — la ventana de dic, más cerca del valor razonable, sigue siendo donde el dimensionamiento se vuelve interesante. Musk (48,4%, presentado 16 ago) queda hasta mediados de 2027."
    ),
  },

  /* type drives the row accent: earn (earnings-gated) · price (conditional) · time (clockwork) · full */
  tranches: [
    {
      when: t("Q2 earnings DONE · unlock DONE Aug 6 — ABSORBED", "Resultados 2T HECHOS · unlock HECHO 6 ago — ABSORBIDO"),
      pct: "20%", type: "earn",
      text: t(
        "Unconditional — 2nd trading day after Q2 results (beat printed Aug 4). <b>911.5M shares (~7% of shares out, more than the entire 639M IPO float) unlocked Aug 6 — the stock ROSE 6% on day 1 in heavy volume</b>: absorption, not distribution. The 13Fs show the buyers (PIF +154M, Harvard $2.2B, Blackstone, Atreides). Float: ~639M → ~1.55B (~12% of shares out). Wave 1 of the ladder — done, and bought.",
        "Incondicional — 2º día tras los resultados del 2T (beat impreso el 4 ago). <b>911,5M acciones (~7% de las acciones, más que todo el float de la OPV de 639M) se liberaron el 6 ago — y la acción SUBIÓ 6% el día 1 con volumen pesado</b>: absorción, no distribución. Los 13F muestran a los compradores (PIF +154M, Harvard $2,2B, Blackstone, Atreides). Float: ~639M → ~1.550M (~12% de las acciones). Ola 1 de la escalera — hecha, y comprada."
      ),
    },
    {
      when: t("Q2 earnings · price-gated", "Resultados 2T · por precio"),
      pct: "+10%", type: "price",
      text: t(
        "Needed ≥$175.50 on 5 of 10 days into Q2 earnings. <b>Dead</b> — the stock never came close (record low $104.83 Aug 3; ~$148 now, still below the trigger). 455.8M shares (~$62B) roll into the time tranches below.",
        "Necesitaba ≥$175,50 en 5 de 10 días hacia resultados del 2T. <b>Muerto</b> — la acción nunca se acercó (mínimo récord $104,83 el 3 ago; ~$148 ahora, aún bajo el disparador). 455,8M acciones (~$62B) pasan a los tramos de tiempo de abajo."
      ),
    },
    {
      when: t("Aug 20 · ~Sep 10 · ~Sep 25 · ~Oct 10 · ~Oct 25", "20 ago · ~10 sep · ~25 sep · ~10 oct · ~25 oct"),
      pct: "7% ×5", type: "time",
      text: t(
        "Day 70/90/105/120/135, <b>7% each = 35%</b>, regardless of price — ~319M shares per rung (~700M/mo in Sep and Oct per the prospectus). <b>Aug 20 is absorption test #2</b>: &gt;3× daily volume, and insiders can now sell into a squeezed, above-IPO price. Sep / Oct can cluster with the Q3 +28% cliff. <b>Second accumulation scale.</b>",
        "Día 70/90/105/120/135, <b>7% c/u = 35%</b>, sin importar el precio — ~319M acciones por peldaño (~700M/mes en sep y oct según el prospecto). <b>El 20 ago es la prueba de absorción #2</b>: &gt;3× el volumen diario, y los insiders ya pueden vender a un precio purgado al alza, sobre la OPV. Sep / oct pueden agruparse con el abismo de +28% del 3T. <b>Segundo tramo de acumulación.</b>"
      ),
    },
    {
      when: t("Q3 earnings · ~Nov", "Resultados 3T · ~nov"),
      pct: "+28%", type: "earn",
      text: t(
        "After Q3 results (quarter ends Sep 30) — biggest single unlock before full expiry.",
        "Tras resultados del 3T (trimestre cierra 30 sep) — el mayor desbloqueo antes del vencimiento total."
      ),
    },
    {
      when: t("180 days · ~Dec 9", "180 días · ~9 dic"),
      pct: "100%", type: "full",
      text: t(
        "Standard 180-day expiry — the classic 'lockup unlock' supply cliff. <b>The largest, final accumulation window.</b>",
        "Vencimiento estándar a 180 días — el clásico acantilado de oferta del 'unlock'. <b>La mayor ventana final de acumulación.</b>"
      ),
    },
    {
      when: t("Musk · separate", "Musk · aparte"),
      pct: "—", type: "time",
      text: t(
        "<b>Excluded</b> from the ladder — separate 366-day lockup (~Jun 12, 2027).",
        "<b>Excluido</b> de la escalera — lockup aparte de 366 días (~12 jun, 2027)."
      ),
    },
  ],

  footnote: t(
    "Perverse: a <b>stronger SPCX unlocks more supply</b> to meet the rally. <b>Flip side:</b> each wave is also a staged entry — buy the thesis into the weakness, don't chase strength. Read with the SPCX row + Phase 03. <i>S-1 terms; not financial advice.</i>",
    "Perverso: un <b>SPCX más fuerte libera más oferta</b> para encontrarse con el rally. <b>Reverso:</b> cada ola es también una entrada escalonada — compra la tesis en la debilidad, no persigas la fuerza. Léelo con la fila SPCX + Fase 03. <i>Términos del S-1; no es asesoría financiera.</i>"
  ),
};
