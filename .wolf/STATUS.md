---
description: session handoff, regenerate with /handoff when a quest finishes
budget_tokens: 1000
---
# STATUS — russfeld.me

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Last updated: 2026-11-14

Approved plan (read for phase details): `~/.claude/plans/hi-claude-review-the-hashed-stearns.md`
Phases: 0 URL baseline ✅ · 1 lean theme ✅ · 2 data-driven CV + Research ✅ (talks pending) · 3 recipe cleanup ✅ · 4 archive ✅

## ✅ Done (all merged to `master`; HEAD `724de6f`, PR #17)

- **Live:** russfeld.me and archive.russfeld.me now serve the new sites (cutover done by the user before 2026-11-14).
- **Phases 0/1/3/4 (PRs #13–15):** URL baseline + `scripts/check-urls.sh`; archive repo with 301s; theme vendored in `layouts/`; recipes use flat `image` + JSON-LD.
- **Phase 2 (PR #16):** `bib/papers.bib` → `npm run bib` → `data/bib/papers.json`; `cite.html`; shortcodes `cv/bib`, `cv/grants`; `/research/` + opt-in subpages (`bibkey:`/`grant:`).
- **Eval review (PR #17):** read annual evals 2013–2025 and synced the CV:
  - `data/awards.yaml` + `cv/awards` shortcode
  - `grants.yaml` gained `agency`, AI Education ($899,663, 2025–2029) and CS4KS ×3 (2022 $471,656 / 2023 $748K / 2024 $685,466)
  - About page (`content/about/_index.md`) pulls grants, awards (`summary: true`) and bib entries with `selected = {true}`; its education/work/teaching/curriculum lists stay hand-synced yearly
  - CV text updates: Ph.D. expected 2027 + RPE, service, outreach, presentations, professional development

## 🚀 Next quest: Student projects review

- **Files:** `content/about/projects.md` (check line endings; edit byte-wise if CRLF). The page has years 2016–2023 only.
- **Source:** gitignored `evals/cv-followups.md` ("Student mentoring" section), plus `evals/eval2024.tex` and `eval2025.tex` for the full 2024–2025 lists:
  - CIS 598 projects (12 in 2024, 13 in 2025)
  - ICS capstones (2 in 2024, 7 in 2025)
  - CIS 642/643 teams
  - graduate work: Friday James, Joshua Barron
- **Work:** add 2024 and 2025 sections in the existing format (2023 links go to `textbooks.cs.ksu.edu/cis598/b-schedule/...#N`; check whether 2024/2025 schedule pages exist). Fill gaps for 2018–2021 from the follow-ups list where they're missing.
- **Acceptance:** the build has no errors; `check-urls.sh` passes; the user approves the list before edits (they asked to review lists first).
- **Open decisions:**
  - whether to include student names for the 642/643 and ICS teams (the evals give project names only)
  - whether the CIS 598 link anchors are still valid

## Later / blocked

- **Projects page follow-ups:** CIS 642/643 team names for 2024–2025 (user checking email); Fall 2026 CIS 598 projects once `09-fall2026` is posted. Tracked in `evals/cv-followups.md`.

- **Talks (rest of Phase 2):** blocked on the user's talks `.bib`. Then: a talk variant of `cite.html`; replace the CV "Invited Talks" and "Selected Presentations" sections; move `content/talks/*` → `content/research/talks/<slug>/` with aliases. The user still needs to decide:
  - one talks bib or two
  - custom fields for slide/video links
  - whether the Talks menu item stays
- **Deferred (in `evals/cv-followups.md`):** a list of unfunded grant proposals (whether to add a "Submitted Proposals" section); the 2014 CDER book chapter (the user is checking whether it was published).
- **Other:** placeholder bib key `10.1145/newpaper`; draft subpages `content/research/papers/building-the-cyber-pipeline/` and `content/research/grants/kriate/` still need to be filled in or deleted; archive is missing two videos; curl-check the 301s on the live domain.

## Context

- **Workflow:** the user commits with GPG and opens/merges PRs. Work on a branch, stage changes, suggest a commit message; never commit for the user.
- **Private data:** `/evals` (eval PDFs/tex, follow-ups) is gitignored and never goes in the repo; don't publish student comments.
- **Quirks:**
  - `cv.md` and `_index.md` use CRLF line endings: edit with Python `newline=''`
  - in .bib, escape `%` as `\%` and separate authors with ` and `
- **Tools:** non-extended Hugo, Node 24, no `gh`.

```bash
npm run bib                                                   # bib/*.bib -> data/bib/*.json (commit the JSON)
hugo --minify -d /tmp/out && scripts/check-urls.sh /tmp/out   # zero missing baseline URLs required
```
