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
| 03 · Post-Inclusion | Jul 7 onward | The reversal — **now confirmed**; trim in priority order. SPCX: accumulate into the lockup waves |

Dates/mechanics updated as of **July 12, 2026** (Q2 earnings date still unconfirmed; window
~Aug 6–11). SPCX debuted **Jun 12 at $135** (~$1.77T, $75B base raise / **$85.7B with
greenshoe**), closed +19.2% at $160.95, ran to a **$225.64 peak Jun 16**, **crashed to a
$147.11 low on Jun 23**, recovered to ~$162 — and then the inclusion trade resolved and the
post-inclusion slide kept going:

- **Nasdaq-100 inclusion — DONE (effective Jul 7).** The ~$4.3B forced buy printed in the
  **Jul 6 closing auction**: a $155–168 session that closed **$160.42, −1% — no pop**. Day 1
  *in* the index SPCX **faded −5.2% to ~$152**, breaking the $160.95 debut close — right on
  the **Palantir/Strategy/Axon** post-inclusion script. **S&P 500 still off** (profitability
  rule; 2027+).
- **The reversal is now CONFIRMED (Jul 7–12).** From ~$152 on Jul 7, SPCX slid to **~$138 by
  Jul 12** — a fresh low that **touched the $135 IPO price** (under the Jun 23 $147.11 floor),
  never reclaiming $160.95. ~**$400B of market cap erased**, >30% off the $225.64 peak. The
  Phase-03 sell order applies now. (To a buyer of the long-term thesis, this same weakness is
  the accumulation window — see the SPCX row in the book and the SUPPLY section.)
- **Quiet period over — 15 banks, all Buys (Jul 7).** The coverage wave broadened to **15
  firms, all Buy ratings**, price targets **$62–$800**: **Morgan Stanley $300** (Adam Jonas),
  **Goldman $205**, **Raymond James $800** (new Street high), plus RBC/Bernstein/Stifel/Citi;
  Oppenheimer at $250; **consensus ~$237**. The dissenter: **Morningstar's fair value ≈
  $780B** vs a ~$1.9T cap. A 15-bank wave still couldn't hold the tape.
- **The $25B bond was a bullish tell, not just a shock.** The −16% Jun 22 selloff came on the
  debut bond news, but the deal **priced at $25B** (up from $20B) with **~$90B of orders —
  3.5× oversubscribed**, one of the largest IG order books ever (5 tranches 2031–2056,
  5.35–6.65%; refinancing the xAI bridge). That demand helped SPCX recover off the low.
- **Cursor is a $60B option.** SpaceX can buy Anysphere (Cursor) for **$60B all-stock** or
  pay a **$10B breakup fee** to walk; Oppenheimer since set a **$250 target** citing revenue
  visibility. Drove the $225 peak, still a dilution overhang.
- **Lockup — now the whole trade (and the accumulation calendar).** Base **20%** of insider
  shares unlock the 2nd trading day after Q2 earnings (**~Aug 6–11**; SpaceX will release
  results only via its website & X, not the wires). It would have risen to 30% if SPCX closed
  **≥$175.50** on 5 of the 10 days into earnings — but that gate is **dead** at ~$138, so the
  10% rolls into the time tranches. **~$800B of stock is eligible by October.** Each wave is
  downside risk to a holder and a staged entry point to a buyer — same ladder, two sides.

Macro (Jul 7): the Dow set a record Jul 6 (53,055.91), then the tape turned — **S&P
7,519 / Nasdaq 25,960 / VIX ~15.7** as semis sold off on **Samsung's AI-capex worries**
(record Q2, stock down anyway) and a Reuters report that **DeepSeek is developing its own
AI chip**. The diverger is **BTC: it reclaimed its 200-week average (~$64k vs ~$62k)** after
the soft June jobs report (57k) and **held there Jul 11–12** — so the cross-asset gauge is
*not* confirming a broad risk-off break; this is an SPCX/AI-supply story. Insurance is getting
more expensive as the slide continues; the Aug lockup is the next wall. See the dated UPDATE
block in [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md).

See [`RESEARCH-FINDINGS.md`](./RESEARCH-FINDINGS.md) for the fact-checked, cited
breakdown of every claim (✅ fact · 🟡 overstated · ⚠️ contingent · ❌ wrong).
