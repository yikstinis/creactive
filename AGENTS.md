# Agent instructions

Creactive is a cross-platform component library built on React Native.

This file holds the working conventions for any AI agent contributing code here. Keep it current as conventions are established — update it whenever a new rule is agreed on.

## Workflow

- Run `npm run lint` before committing (runs ESLint and the TypeScript typecheck).
- Run `npm test` before committing (runs the Jest unit tests, across the `native` and `web` projects).

## Testing

All functionality must be covered by tests — every code path that's written, including edge cases, not just the happy path.

## Naming

- **Constants** — `UPPER_SNAKE_CASE` (e.g. `DEFAULT_VALUES`).

## Comments

Default to no comments — add one only for a non-obvious constraint, invariant, or reasoning. Format multi-sentence comments as a multi-line JSDoc block (one sentence per line), not a single long line.

- **Enums** — state its single responsibility: what it represents and where it's valid to use; add where it isn't only when relevant and there's something worth saying.
- **Classes** — state its single responsibility (what it represents and where it's valid to use), and call out any non-obvious invariant or usage guidance that isn't evident from its type or members (e.g. immutability, a preferred construction pattern, equality semantics) — only when there's something worth saying.
- **Constants** — if the value(s) aren't self-evident from the name/type, state the reasoning or source behind them (why these values, where they came from) rather than restating what the constant is.
- **Type aliases** — only comment if the alias hides something not evident from its right-hand side (e.g. why it exists, an invariant it encodes); don't restate what the definition already says.
