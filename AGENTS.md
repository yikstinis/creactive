# Agent instructions

Creactive is a cross-platform component library built on React Native.

This file holds the working conventions for any AI agent contributing code here.

## Naming

- **Files** — kebab-case (e.g. `kebab-case.ts`).
- **Constants** — `UPPER_SNAKE_CASE` (e.g. `DEFAULT_VALUES`).

## Structure

Each unit (component, helper) lives in its own kebab-case directory, colocating:

- `name.ts` — implementation.
- `name.unit.test.ts(x)` — unit tests.
- `name.types.d.ts` — interfaces and type aliases.
- `index.ts` — barrel, re-exporting the unit as `export * from '@/.../name'` and `export type * from '@/.../name.types'`.

Every directory, including parent directories (e.g. `helpers/`, `components/`), has its own `index.ts` that re-exports its children, chaining barrels up to `src/index.ts`.

## Comments

Default to no comments — add one only for a non-obvious constraint, invariant, or reasoning. Format multi-sentence comments as multi-line `//` comments (one sentence per line), not a single long line.

## Workflow

- Run `npm run tsc` (TypeScript typecheck), `npm run eslint`, and `npm run jest` (unit tests, across the `native` and `web` projects) before committing.

## Testing

All functionality must be covered by tests — every code path that's written, including edge cases, not just the happy path.

Nest `describe` blocks to mirror what's under test:

1. Outer `describe` — the `@/...` path alias of the file under test (e.g. `@/helpers/dimension/dimension`).
2. Next `describe` — the name of the export from that file being tested (e.g. `Dimension`).
3. If that export is an object, a further `describe` per property being tested.

When the set of possible inputs is exhaustively enumerable (e.g. an enum), test every member rather than a sample.
