# How to write this webpage

This file is the style guide for all rendered text in `src/data/*.js`. Read it before
editing any `t("EN", "ES")` string.

## Voice: telegraphic

State the thesis once, then the single most decisive proof. Cut everything else.

- **Kill restatements.** If a point appears in a phase's `concept`, don't repeat it in
  the `action`, `watch`, or a `driver` below. One idea, one home.
- **No meta-narration.** Don't describe what the reader just read ("two days ago the
  read was X — that broke"). Show the fact; let the reader draw the line.
- **Drop on-screen context.** Numbers and dates the dashboard already shows don't need
  re-listing in prose. Keep only the proof a reader can't see.
- **Target length:** long content strings (phase concepts/drivers, holding details,
  lockup notes) ≤ ~1/3 of their natural length. A 1000-char driver → ~350.

## Feynman glosses: define jargon inline

Use the form `(jargon = plain)` or `(jargon — plain words)` the first time a specialist
term appears, so a non-expert can follow.

**Rare jargon — gloss on EVERY occurrence** (readers land anywhere on the page):

> `greenshoe` · `quiet period` · `margin call` · `put spread` · `VWAP` · `lockup` ·
> `forward guidance` · `fast-track`

**Common/simple terms — bare** (define once at most, then use without parenthetical):

> `200-week average` · `fade` · `print` · `tape` · `trim` · `float` · `risk-off` ·
> `hedge` · `put`

A good gloss *defines* the term; a bad one *renames* it.
- ✅ `(a put spread = buy a put, sell a cheaper one to cap the insurance cost)`
- ✅ `(VIX = the market's fear gauge; low VIX means put options cost less)`
- ❌ `(The real unwind came later, in July.)` ← restates, doesn't define

## Bilingual parity

Every `t("EN", "ES")` pair must stay in sync. The ES string mirrors the EN structure,
gloss placement, bold tags, and `<br>` breaks — same facts, same order, same length
profile. When you compress EN, compress ES the same way.

## Facts

Dated claims stay pinned to their date. Numbers stay exact. When the dashboard refreshes,
swap the old figures for the new — don't paraphrase around stale data.
