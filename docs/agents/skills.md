# Project skills

Matt Pocock's engineering and productivity skills are vendored in
`.agents/skills/` for this repository. Each directory contains its original
`SKILL.md` and supporting resources. Source:
[mattpocock/skills](https://github.com/mattpocock/skills), pinned to commit
`abeeaf95660ba9e8b7c753eb38f441ca707a8823`.
The upstream license is preserved in `.agents/mattpocock-LICENSE` and the exact
source paths are recorded in `.agents/mattpocock-skills.json`.

## Using the skills

Use `$ask-matt` to choose a workflow, `$tdd` for test-first implementation,
`$diagnosing-bugs` for diagnosis, `$codebase-design` for module design, and
`$grill-with-docs` to explore a design while recording its terminology.
Use `$code-review` when a review is requested, and `$pr` when preparing a PR body.
The installed skills become available on the next turn; if an agent does not
discover them automatically, point it to the relevant local `SKILL.md`.

Preserve upstream user-invoked versus model-invoked behavior. When a skill refers
to a named skill or a "Skill tool", load that skill's local `SKILL.md` if the
current agent has no dedicated skill tool. Use the current environment's tools
and respect its instructions and the user's task scope.

Engineering workflows use `issue-tracker.md`, `triage-labels.md`, and `domain.md`
in this directory. These are editable project defaults: local Markdown tickets,
the five upstream triage roles, and a single-context domain layout. No external
tracker configuration has been changed. The full upstream
`setup-matt-pocock-skills` interview is installed for changing those preferences
later; it was not run as part of installation.

## Installed scope and maintenance

All 20 engineering skills and all 7 productivity skills from the pinned source
are installed. Upstream `in-progress` and `misc` skills are excluded: they are
experimental or concern separate tools and migrations.

These are editable project files, not an automatically updating plugin. To
update, inspect upstream changes, replace the corresponding skill directories
with their complete resources, and update the pinned commit, source-path
manifest, license, and any changed project conventions together. Review local
edits before replacing files. Avoid installing a second copy via a plugin for
this same project.
