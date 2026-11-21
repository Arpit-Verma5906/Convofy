# Convofy agent instructions

## Project boundaries

Convofy has two independent Bun packages: `Frontend/` (React/Vite) and
`Backend/` (Express/TypeScript/Mongoose). Run commands from the relevant package;
there is no root package or workspace command. Read the scoped `AGENTS.md` before
changing either package.

Authentication is implemented; conversation data and messaging UI still use
frontend mocks. Check the implementation before treating README roadmap items
or real-time messaging as delivered behavior.

## Working rules

- Use Bun and the existing `bun.lock` files. Keep dependency changes scoped to
  the affected package and avoid introducing another package manager's lockfile.
- Preserve the current JavaScript/JSX frontend and TypeScript backend split.
  Match the surrounding code's style instead of reformatting unrelated files.
- Coordinate API changes across backend routes, frontend requests, and auth
  state. Preserve existing response shapes unless the task changes the contract.
- Keep credentials in environment variables. Never commit `.env` files, tokens,
  OAuth secrets, or production data; use placeholders in examples.
- Verify changes with the affected package's checks below. Report existing
  failures separately from failures introduced by the change. Neither package
  currently defines a test script; add behavior tests when the task warrants
  them, rather than claiming an unavailable test suite passed.

## Commands

| Directory | Purpose | Command |
| --- | --- | --- |
| `Frontend/` | Install locked dependencies | `bun install --frozen-lockfile` |
| `Frontend/` | Development server | `bun run dev` |
| `Frontend/` | Check JavaScript/JSX | `bun run lint` |
| `Frontend/` | Production build | `bun run build` |
| `Backend/` | Install locked dependencies | `bun install --frozen-lockfile` |
| `Backend/` | Development server | `bun run dev` |
| `Backend/` | Type check, with dependencies installed | `bunx --no-install tsc --noEmit` |

Backend startup requires MongoDB and JWT/Google OAuth environment configuration;
type checking alone does not validate login or database behavior.

## Agent skills

Project skills live at `.agents/skills/<name>/SKILL.md`. Read the relevant entry
and its referenced resources when using a skill. Keep upstream invocation
settings: workflows marked `disable-model-invocation: true` are user-invoked.
Installing a skill does not start its workflow.

For skill selection, source provenance, and maintenance, read
`docs/agents/skills.md`. Useful entry points include `ask-matt`, `tdd`,
`diagnosing-bugs`, `codebase-design`, `code-review`, and `grill-with-docs`.

### Issue tracker

Before creating specs or tickets, or triaging work, read
`docs/agents/issue-tracker.md` for the project tracker convention.

### Triage labels

Before triaging, read `docs/agents/triage-labels.md` for the role mapping.

### Domain docs

Before domain exploration or architecture work, read `docs/agents/domain.md`.
Use the single-context glossary and ADR layout described there.
