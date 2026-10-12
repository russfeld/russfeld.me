---
description: learned preferences, project conventions, and Do-Not-Repeat rules
budget_tokens: 2000
---
# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-10-10

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->
- Prefers long planning/review before changes; priorities are low maintenance + keeping the current hyde-hyde/m10c look.
- Authors content in Markdown; likes Relearn-style notice boxes.

## Key Learnings

- **Project:** russfeld.me
- hyde-hyde is abandoned (upstream HEAD == pinned 25c8440); plan is a lean in-repo theme.
- Analytics: Google Analytics only (Plausible no longer used). Config GA ID is a dead UA id.
- Old sites: /workspaces/archive/ciswebsite_repo (PHP, includes only), Jekyll at russfeld.me_files_repo (+ rendered russfeld.me_repo).

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-10-10] Never change existing public URLs (blog, recipes, projects, about, talks): they are linked externally and indexed by Google. Use aliases/301s for anything moved; keep `:filename` frontmatter date/slug config.
- [2026-10-10] Before bulk-optimizing images, separate inline slide images from downloadable/print files (href targets, openhouse/files print templates). I resized 14000px print templates by mistake and had to restore them.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
- [2026-10-10] Stay on Hugo (not Nuxt/Relearn) for low maintenance; full plan in ~/.claude/plans/hi-claude-review-the-hashed-stearns.md.
- [2026-10-10] CV: separate Overleaf .bib files -> `npm run bib` -> committed data/bib/*.json; YAML for grants/awards/teaching/service; PDF CV stays manual.
- [2026-10-10] Legacy content -> archive.russfeld.me (pre-rendered PHP site, fresh pruned repo, frozen + banner, 301s from all old URLs).
