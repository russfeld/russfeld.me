# OpenWolf

This project uses OpenWolf for context management. The always-on rules live in `.claude/rules/openwolf.md`; the hooks handle bookkeeping (anatomy index, memory log, read tracking) automatically.

For the full operating protocol (session handoff, memory discipline, bug logging), load the `openwolf` skill, or read `.wolf/OPENWOLF.md`. Regenerate the session handoff with `/handoff`.

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

# This project

This is my personal website. It is currently built using Hugo with the hyde-hyde theme that has been updated to use a color scheme from m10c. 

## About me

I work in academia as a computer science instructor at Kansas State University. However, I have carefully worked to ensure that this site uses branding that is not tied to K-State in case I switch to another institution in the future. 

I enjoy cooking and share some recipes on this site - at one time I had tried to make the recipes fit a semantic web format from chowdown, but I'm not completely tied to that. I also blog, but not very often. I prefer to author written content in Markdown, and I like the features present in the Hugo Theme Relearn theme that I use for textbooks (https://github.com/ksu-cs-textbooks/hugo-theme-relearn) that aren't present in this site

I also have lots of old website content that I have ported over from a static HTML website (the `content/teaching` folder) and some old presentation material that use ImpressJS or RevealJS. Those could be extracted from this site and served statically instead of within the site theme. 

## The goal

I would like to make this website easier to keep up to date by pulling much of my CV information from a bibtex file and some other structured text files for grants, awards, etc. I may also want to make subpages for some grants and papers with additional information and links I can share. 

I am considering either updating this existing site by pulling new updates from Hugo and the hyde-hyde theme, converting to Hugo Theme Relearn with some customization to maintain a similar look and feel (this would enable sharing more tutorial information here, but I could also see me creating a subsite that uses the Hugo Theme Relearn theme that is targeted at tutorials separate from this site), or migrating wholesale to something powered by Vue (possibly using Nuxt) that is built to a static site. 