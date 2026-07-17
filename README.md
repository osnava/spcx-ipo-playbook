# SPCX IPO Playbook

Interactive, bilingual (EN/ES) dashboard of phase-based hold/sell rules for a
portfolio (ISAC, SMH, ARKQ, EWY, ROBO, URA, BTCUSDT, XAUUSD) around the SpaceX IPO
and its index-inclusion timeline — **plus SPCX itself as a long-term accumulate
target** (buy the thesis into the lockup-driven weakness waves, not strength).

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
        ├── market.js       # top "tape" config — symbols + snapshot fallbacks
        ├── quotes.js       # live-quote fetch layer (Yahoo + Coinbase, cached/polled)
        ├── phases.js       # the 4 phases + reversal checklist
        ├── holdings.js     # the 8 positions + per-phase state
        ├── lockup.js       # supply-side tranche schedule + live price-gated bonus tracker
        └── narrative.js    # regime framing — principles, signal/noise classification, sign-off
```

**Separation of concerns:** markup (`index.html`) · behavior (`src/app.js`) ·
presentation (`src/styles`) · content (`src/data`). `app.js` never hard-codes text.

**Live tape:** the scrolling ticker pulls real quotes from keyless, CORS-enabled
endpoints — Yahoo Finance's chart API for stocks/indices, Coinbase for BTC — polled
once a minute with a localStorage cache, throttled concurrency, and tab-visibility
pausing. No API key (so nothing leaks in a public repo). Any symbol that can't be
fetched (CORS blocked, pre-IPO SPCX, off-hours) falls back to the snapshot baked into
`market.js`, and the tag shows how many cells are live (`LIVE 7/14`).

## Editing

- **Writing style** → see [`AGENTS.md`](./AGENTS.md): telegraphic prose + Feynman inline
  glosses on rare jargon. Read it before editing any string.
- **Wording / translations** → the relevant file in `src/data/`. Every string is
  `t("English", "Español")`. Add a language by extending those calls + the `lang`
  logic in `app.js`.
- **Restyle** → `src/styles/styles.css`. Per-phase accent driven by `--c` (set via
  `tone-ice|go|warn|hot`).
- **Add a phase / holding** → push an object into `PHASES` / `HOLDINGS`; the UI
  renders it automatically. No markup edits.

## The dashboard renders itself

The phase table, the SPCX price narrative, the analyst coverage wave, the lockup
ladder, and the macro read are all **rendered from `src/data/*.js`** — so the
dashboard is always the source of truth for current posture. This README deliberately
does **not** duplicate that content (it drifted on every refresh). For the fact-checked,
cited timeline of the IPO and the current deployment read, see
[`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md).

