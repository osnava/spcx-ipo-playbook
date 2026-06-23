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
        ├── market.js       # top "tape" config — symbols + snapshot fallbacks
        ├── quotes.js       # live-quote fetch layer (Yahoo + Coinbase, cached/polled)
        ├── phases.js       # the 4 phases + reversal checklist
        └── holdings.js     # the 8 positions + per-phase state
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

Dates/mechanics updated as of **June 23, 2026**. SPCX debuted **Jun 12 at $135** (~$1.77T,
$75B base raise / **$85.7B with greenshoe**), closed +19.2% at $160.95, then ran to a
**$225.64 peak on Jun 16** — and has since **rolled over for three straight sessions
(−16.4% Mon Jun 22 to $154.60)**, dipping below $149 premarket Jun 23 (only ~+10% over IPO).
The reversal is the story, and it arrived **before** the inclusion window closed:

- **Warsh's first FOMC (Jun 16–17) — RESOLVED hawkish.** Held 3.5–3.75%, **removed forward
  guidance**, filed no dot; the SEP now shows **9/18 members seeing a hike in 2026**. This
  was the catalyst that started the rollover.
- **Capital-structure shocks.** Jun 16: **$60B all-stock deal for Anysphere (Cursor)**
  (drove the $225 peak, now a dilution overhang). Jun 22: inaugural **$20B senior unsecured
  notes** (refinancing the xAI bridge) triggered the −16% day. Balance sheet: **$100.8B cash
  vs ~$29B debt**.
- **Lockup — the +10% price-gated bonus is now AT RISK.** SPCX cleared ≥$175.50 easily Jun
  14–17 (peaked $225) but crashed back below; the formal test is the 10 trading days ending
  on Q2 earnings (~late Jul/early Aug). Base 20% + 7% time tranches still land regardless
  (**Aug 21 · Sep 10 · Sep 25 · Oct 10 · Oct 25**).
- **Index flows.** **Russell 1000/3000 + CRSP already added SPCX after Jun 18** (5-day rule).
  **Nasdaq-100 rebalance still Jul 6** (the last big forced-buy wave this summer). **S&P 500
  still off** (MR4292 rejected Jun 4; mid-2027 earliest).

Macro: **S&P 7,427 / Nasdaq 100 −2.4% / VIX ~24** (S&P below the 7,500 trigger, VIX above
the 20–22 band). BTC holding **~$64k just above its 200W (~$62k)**, Extreme Fear. The
classic "index effect" has largely faded, so the remaining Jul 6 forced-buy support is
**modest and single-print** — and now competes with a growing supply wall. See the dated
UPDATE block in [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md).

See [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md) for the fact-checked, cited
breakdown of every claim (✅ fact · 🟡 overstated · ⚠️ contingent · ❌ wrong).
