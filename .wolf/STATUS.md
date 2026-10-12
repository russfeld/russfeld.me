---
description: session handoff, regenerate with /handoff when a quest finishes
budget_tokens: 1000
---
# STATUS — russfeld.me

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Last updated: 2026-10-10

Approved plan (read for phase details): `~/.claude/plans/hi-claude-review-the-hashed-stearns.md`
Phases: 0 URL baseline · 1 lean theme (same look) · 2 data-driven CV + Research · 3 recipe cleanup · 4 archive.russfeld.me

## ✅ Done

- **Phase 0:** `scripts/baseline-urls.txt` (1964 paths of the pre-migration site, matches live sitemap) + `scripts/check-urls.sh [public_dir]` (prefixes in `scripts/redirected-urls.txt` exempt). Keep taxonomies areas/sections/cuisines (they output pages).
- **Phase 4 archive** `/workspaces/archive-site` → `russfeld/archive` (`main`, `83973a9`, pushed): pre-rendered old PHP site + banner, `tools/` (render-php, fix-links, dedup symlinks, resize-images), GA4 `G-HDHZ0ZXKQQ` in `js/analytics.js`, Dockerfile + nginx conf + workflow → `ghcr.io/russfeld/archive:latest` → Watchtower. 428M.
- **Phase 4 main-site half: done in working tree, UNCOMMITTED on `master`.** Removed `static/assets/oldimpress`, `content/teaching`, openhouse/lecturetime decks (1548 staged deletions). Links → archive (cv.md, openhouse/index.md, lecturetime2021/index.md + `snail.jpg`, Teaching menu in config.toml). `nginx/default.conf` 301s wired in Dockerfile; `scripts/redirected-urls.txt`. Local nginx test: 1960/1964 baseline URLs resolve (4 stray `.md` files accepted), 106/106 Jekyll URLs resolve.

## 🚀 Next quest: ship the main-site half of Phase 4

1. Ask the user whether archive.russfeld.me is live (CI build ok, secrets `DISCORD_WEBHOOK`/`DEPLOY_TOKEN` added, GHCR visibility, server compose service with Traefik labels + `docker compose up -d archive`). **Don't ship until it's live**, or the redirects point at a dead host.
2. Create a branch off `master`, stage the main-site changes listed above plus `scripts/` and `nginx/`. The user commits with GPG in another terminal; never commit for them.
   - Ask before staging `.claude/`, `.devcontainer/`, `.wolf/`. `package-lock.json`, `deploy.sh`, Apache `*.conf`, `russ.feldhausen.me/`, `todo2.txt`: unused (confirmed); the plan deletes them in Phase 1.
3. Acceptance criteria: `scripts/check-urls.sh` passes on a fresh build, and after deploy `curl -I` on `/teaching/cis115fall2013/`, `/presentations/2016gittutorial/` and `/recipes/smashburgers.html` returns 301 to the right target.

**Then Phase 1 (theme rebuild).** GA4 ID for the main site is `G-HDHZ0ZXKQQ`; remove Plausible.
**Phase 2** is blocked until the user provides the Overleaf `.bib` files.

### Open items for the user
- Possibly has the missing archive videos (`media/b3fall2014rift.mp4`, `media/lecture2/nathanbean.mp4`); 3 links stay broken until then.
- Eyeball the resized `cis225fall2015/15cloud/images/infographic.png` for readability.

## Context

- The devcontainer's Hugo isn't extended. Build with `/tmp/claude-1000/.../scratchpad/hugo-ext/hugo` (re-download hugo_extended_0.148.1 if the scratchpad is gone). **Never run `--gc`** without `git checkout -- resources` afterwards: the committed `resources/_gen` cache is what CI relies on.
- Theme submodules are initialized locally now (needed only until Phase 1 drops them).
- nginx is installed in the devcontainer for redirect testing (sudo works). There's no docker, and no `gh` CLI.
- Old sources: `/workspaces/archive/ciswebsite_repo` (original PHP site), `russfeld.me_files_repo` (Jekyll source).

## 🔧 Useful commands

```bash
scripts/check-urls.sh <public_dir>   # zero missing baseline URLs required
```

## 📚 References

- `.wolf/cerebrum.md` (preferences, Do-Not-Repeat: never change public URLs; don't resize download/print images) · `.wolf/buglog.json` (nginx index-rewrite bug)
