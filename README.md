# SPCX IPO Playbook

Interactive, bilingual (EN/ES) dashboard of phase-based hold/sell rules for a
portfolio (ISAC, SMH, ARKQ, EWY, ROBO, URA, BTCUSDT, XAUUSD) around the SpaceX IPO
and its index-inclusion timeline.

> **Not financial advice.** A decision-framework tool. The reversal is a scenario,
> not a certainty. You set the triggers and sizing.

## Run

Uses ES modules — serve over HTTP (not `file://`):

```bash
npm start          # → python3 -m http.server 8000, open http://localhost:8000
# or any static host: GitHub Pages, Netlify, Vercel (serve the folder root)
```

## Structure

```
spacex-ipo-playbook/
├── index.html              # minimal markup; mounts the app
├── package.json            # dev-server scripts
└── src/
    ├── app.js              # rendering + phase/language interactions
    ├── styles/
    │   └── styles.css      # all styling (mission-control theme)
    └── data/               # CONTENT LIVES HERE (bilingual)
        ├── index.js        # barrel — single import surface
        ├── i18n.js         # t(en, es) helper
        ├── ui.js           # chrome strings, catalysts, footer
        ├── phases.js       # the 4 phases + reversal checklist
        └── holdings.js     # the 8 positions + per-phase state
```

**Separation of concerns:** markup (`index.html`) · behavior (`src/app.js`) ·
presentation (`src/styles`) · content (`src/data`). `app.js` never hard-codes text.

## Editing

- **Wording / translations** → the relevant file in `src/data/`. Every string is
  `t("English", "Español")`. Add a language by extending those calls + the `lang`
  logic in `app.js`.
- **Restyle** → `src/styles/styles.css`. Per-phase accent driven by `--c` (set via
  `tone-ice|go|warn|hot`).
- **Add a phase / holding** → push an object into `PHASES` / `HOLDINGS`; the UI
  renders it automatically. No markup edits.

## The four phases

| Phase | Window | Posture |
|-------|--------|---------|
| 00 · Shakeout Watch | Jun 8 & Jun 16–17 | Pre-IPO flush risk (S&P rule + first Warsh FOMC) |
| 01 · Build-Up | now → ~Jun 12 | Hold; hype lifts the book; set put insurance |
| 02 · Inclusion Window | ~Jun 12 → ~Jul 7 | Hold + watch; modest index-buying support, short-seasoning froth risk |
| 03 · Post-Inclusion | ~Jul 7 onward | The trigger; trim in priority order if it rolls over |

Dates/mechanics reflect reporting as of late May 2026. The S&P 500 MegaCap
profitability-waiver (consultation MR4292) was **proposed, not confirmed** (watch
June 8). The Nasdaq-100 fast-entry rule (top-40, ~15 trading days) **is adopted**
(effective May 1, 2026). The classic broad "index effect" has largely faded, so
index-buying support is **modest**, not a guaranteed pop; the "strong-hands flush"
thesis is discretionary analysis with no supporting evidence found.

See [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md) for the fact-checked, cited
breakdown of every claim (✅ fact · 🟡 overstated · ⚠️ contingent · ❌ wrong).
