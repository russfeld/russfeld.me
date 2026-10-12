---
description: session handoff, regenerate with /handoff when a quest finishes
budget_tokens: 1000
---
# STATUS — russfeld.me

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Last updated: 2026-10-12

Approved plan (read for phase details): `~/.claude/plans/hi-claude-review-the-hashed-stearns.md`
Phases: 0 URL baseline ✅ · 1 lean theme ✅ · 2 data-driven CV + Research · 3 recipe cleanup · 4 archive ✅

## ✅ Done (all merged to `master`, clean tree at `6022644`)

- **Phase 0:** `scripts/baseline-urls.txt` (1964 pre-migration paths) + `scripts/check-urls.sh <public_dir>` (exempts prefixes in `scripts/redirected-urls.txt`).
- **Phase 4:**
  - archive repo `russfeld/archive` (`/workspaces/archive-site`), staged at archive.dev.russfeld.me on the new droplet
  - main site PR #13: legacy content removed, `nginx/default.conf` 301s to archive.russfeld.me (tested locally: 1960/1964 baseline URLs, 106/106 Jekyll URLs)
- **Phase 1 (PR #14):**
  - theme vendored into `layouts/`; submodules and `resources/_gen` gone; SCSS → plain CSS in `assets/css/` (m10c palette as `--color-*` vars); builds with non-extended Hugo
  - removed highlight.js, jQuery, flexslider and unused partials
  - GA4 `G-HDHZ0ZXKQQ` via `[services.googleAnalytics]` in `<head>`
  - notice boxes: `layouts/shortcodes/notice.html`, `layouts/_markup/render-blockquote.html`, `layouts/partials/notice.html`
  - verified: 28 screenshots pixel-identical, check-urls OK; unused deploy/Apache files deleted

## 🚀 Next quest: verify the first deploy, then Phase 3 (recipe cleanup)

1. **Deploy check (user-gated):** Watchtower is **paused** on the main site, and the floating IP still points at the old droplet (143.244.200.46); new droplet is 192.81.209.228, main site staged at `dev.russfeld.me`. When the user resumes it:
   - confirm the GitHub Actions build succeeded. It's the first build without `resources/_gen` and submodules; the Dockerfile uses `hugomods/hugo:ci-0.148.1`.
   - `curl -sI` on `https://russfeld.me/teaching/cis115fall2013/`, `/presentations/2016gittutorial/`, `/cv/`, `/recipes/smashburgers.html` → 301; `/projects/` → 200.
   - check that each archive target path returns 200 on `archive.dev.russfeld.me` until cutover.
2. **Phase 3** (needs no user input; see the plan). Recipe URLs must not change.
   - Normalize front matter in `content/recipes/*.md` (`header.teaser`/`overlay_image` → `image`) and update the `layouts/recipes/*` and `page-single/recipe*` partials.
   - Fix Jekyll leftover links such as `{{ site.url }}/2017/03/12/homemade-hamburgers/` (visible on smashburgers).
   - Add a schema.org Recipe JSON-LD partial.
   - Acceptance: `check-urls.sh` passes, screenshots match except the intended link fixes, and the JSON-LD validates.
3. **Phase 2** is blocked until the user provides the Overleaf `.bib` files (one per category).

### Open items for the user
- Floating-IP cutover to the new droplet. Until then, archive.russfeld.me 404s publicly; the user accepted that window.
- Missing archive videos (`media/b3fall2014rift.mp4`, `media/lecture2/nathanbean.mp4`); readability of the resized `cis225fall2015/15cloud/images/infographic.png`.

## Context

- **Workflow:** the user commits with GPG themselves. Stage on a branch and give a suggested message; the user opens PRs and merges. Never commit for them.
- **Tools:** the devcontainer has non-extended Hugo (now sufficient). nginx and chromium are installed for redirect tests and screenshots (sudo works). No docker, no `gh`.
- **Scratchpad helpers** (may be gone in a new session): `shots.sh` (screenshots, 45s timeout per page), `redirtest.py`, `linkcheck.py`, `hugo-ext/`.
- Some content files are CRLF; edit byte-wise or with sed.

## 🔧 Useful commands

```bash
hugo --minify -d /tmp/out && scripts/check-urls.sh /tmp/out   # zero missing baseline URLs required
```

## 📚 References

- `.wolf/cerebrum.md` (Do-Not-Repeat: never change public URLs; don't resize print images; no `pkill -f` self-match; build-verify before deleting layouts; preserve CRLF) · `.wolf/buglog.json`
