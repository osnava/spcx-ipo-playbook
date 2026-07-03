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
| 03 · Post-Inclusion | Jul 7 onward | The trigger; trim in priority order if it rolls over |

Dates/mechanics updated as of **July 2, 2026**. SPCX debuted **Jun 12 at $135** (~$1.77T,
$75B base raise / **$85.7B with greenshoe**), closed +19.2% at $160.95, ran to a **$225.64
peak Jun 16**, then **crashed to a $147.11 low on Jun 23** — and has since **recovered to
~$162** (Jul 1, back above the debut close), heading **into** a now-confirmed inclusion:

- **Nasdaq-100 inclusion — CONFIRMED (announced Jun 26).** SPCX joins **effective Jul 7**,
  the first stock to use the 15-day fast-track rule; index funds buy the **Jul 6 closing
  auction**. Forced demand is ~**$4.3B** (~1% weight) + ~$3B of Russell reweighting (already
  added Jun 18) — smaller than early guesses. **S&P 500 still off** (profitability rule;
  2027+). History says post-inclusion names *fade* — **Palantir, Strategy & Axon all fell in
  the 10 days after joining** (2024).
- **The $25B bond was a bullish tell, not just a shock.** The −16% Jun 22 selloff came on the
  debut bond news, but the deal **priced at $25B** (up from $20B) with **~$90B of orders —
  3.5× oversubscribed**, one of the largest IG order books ever (5 tranches 2031–2056,
  5.35–6.65%; refinancing the xAI bridge). That demand helped SPCX recover off the low.
- **Cursor is a $60B option.** SpaceX can buy Anysphere (Cursor) for **$60B all-stock** or
  pay a **$10B breakup fee** to walk; Oppenheimer since set a **$250 target** citing revenue
  visibility. Drove the $225 peak, still a dilution overhang.
- **Lockup — the supply wall right after inclusion.** Base **20%** of insider shares unlock
  the 2nd trading day after Q2 earnings (~late Jul/early Aug), rising to 30% if SPCX closes
  **≥$175.50** (30% over IPO) on 5 of the 10 days into earnings — **at risk** at ~$162.
  **~$800B of stock is eligible by October.**

Macro (Jul 1 close): **S&P 7,483 / Nasdaq 26,040 / VIX ~16.6** — risk-off has **unwound**
(Q2 the strongest quarter since 2020; S&P/Dow near records). The odd one out is **BTC: it
wicked to a 652-day low (~$58k)** early in the week, then **recovered back above $60k** (still
under its 200W ~$62k) as on-chain **long-term holders flipped back to accumulation** — so the
cross-confirmation trigger is *testing, not confirmed*. The classic "index effect" has faded,
so the Jul 6 forced-buy is **modest and single-print**, and now competes with the Aug lockup.
See the dated UPDATE block in [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md).

See [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md) for the fact-checked, cited
breakdown of every claim (✅ fact · 🟡 overstated · ⚠️ contingent · ❌ wrong).
