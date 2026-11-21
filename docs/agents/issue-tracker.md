# Issue tracker: Local Markdown

Issues and specs live in `.scratch/` within this repository. This is the initial
local default; using these skills does not publish work to GitHub.

- One feature per directory: `.scratch/<feature-slug>/`.
- Spec: `.scratch/<feature-slug>/spec.md`.
- Tickets: `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`,
  with one file per ticket.
- Record triage state as a `Status:` line near the top, using `triage-labels.md`.
- Record dependencies as `Blocked by: NN, NN`. A ticket is unblocked when all
  listed dependencies are resolved.
- Append discussion under `## Comments`; preserve prior decisions.

When a skill says "publish to the issue tracker", create or update these files.
When it says "fetch the relevant ticket", read the supplied local path or find
the numbered ticket in the feature directory. Create directories when needed.

## Wayfinding

- Map: `.scratch/<effort>/map.md`, containing Notes, Decisions-so-far, and Fog.
- Child tickets use the `issues/` convention above and a `Type:` field of
  `research`, `prototype`, `grilling`, or `task`.
- An open, unblocked, unclaimed ticket is on the frontier; use number order.
- Claim a ticket by setting `Status: claimed` before working on it.
- Resolve it by appending `## Answer`, setting `Status: resolved`, and adding a
  gist and link to the map's Decisions-so-far.

`claimed` and `resolved` are execution states; the triage roles describe readiness.
PRs are not an automatic triage input. Switch this convention explicitly before
using an external issue tracker.
