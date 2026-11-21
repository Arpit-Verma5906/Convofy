# Domain docs

Convofy uses a single-context domain layout shared by frontend and backend.

Before domain exploration or architecture work, read root `GLOSSARY.md` and any
relevant decisions in `docs/adr/` when they exist. Missing domain docs do not
block work. Create them when actual terminology or architecture decisions are
resolved, rather than scaffolding empty files.

Use the glossary's terms in code, tickets, hypotheses, and tests. Confirm a new
term's meaning before adding it. Record architectural decisions with context,
decision, and consequences in numbered `docs/adr/NNNN-<slug>.md` files.

If a future split introduces `GLOSSARY-MAP.md`, follow its pointers to the
relevant context glossaries and update this convention at the same time.
