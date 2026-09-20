# Agent instructions

Creactive is a cross-platform component library built on React Native.

This file holds the working conventions for any AI agent contributing code here.

## Structure

### Directories

- `constants/` — shared constant values and enums (e.g. the spacing scale) used across the library.
- `helpers/` — framework-agnostic utility logic (e.g. `Dimension`), with no React/React Native dependency.
- `components/atoms/` — smallest UI building blocks, typically a thin wrapper around a single React Native primitive (e.g. `View`).
- `components/molecules/` — compositions of atoms (and other molecules) into a reusable higher-level component.

### Files and folders

Kebab-case only, for every file and directory (e.g. `kebab-case.ts`, `some-helper/`).

### Units

Each unit (component, helper) lives in its own kebab-case directory, colocating:

- `name.ts(x)` — implementation.
- `name.unit.test.ts(x)` — unit tests.
- `name.types.d.ts` — interfaces and type aliases.
- `index.ts` — barrel (see [Exports](#exports)).

Every directory, including parent directories (e.g. `helpers/`, `components/`), has its own `index.ts` that re-exports its children, chaining barrels up to `src/index.ts`.

## Naming and exports in code

### Constants

`UPPER_SNAKE_CASE` (e.g. `DEFAULT_VALUES`).

### Components and classes

`PascalCase`, matching the kebab-case file/directory name (e.g. `view.tsx` exports `View`, `dimension.ts` exports `Dimension`).

### Exports

- `name.ts(x)` / `name.types.d.ts` may export everything needed to exercise the unit in tests, including internals that aren't part of its public API.
- `index.ts` re-exports, by name, only what's actually public — never `export *` from the implementation file, so internals never leak past the barrel.
- Export every type that could be useful to a library consumer (props, public interfaces, type aliases used in public signatures), even if no internal code imports it outside of tests.

## Comments

Default to no comments — add one only for a non-obvious constraint, invariant, or reasoning. Format multi-sentence comments as multi-line `//` comments (one sentence per line), not a single long line.

## Testing

All functionality must be covered by tests — every code path that's written, including edge cases, not just the happy path.

Nest `describe` blocks to mirror what's under test:

1. Outer `describe` — the `@/...` path alias of the file under test (e.g. `@/helpers/helper/helper`).
2. Next `describe` — the name of the export from that file being tested (e.g. `Helper` or `Component`).
3. If that export is an object, a further `describe` per property being tested.

When the set of possible inputs is exhaustively enumerable (e.g. an enum), test every member rather than a sample.

For every component, every prop that affects rendering must be covered by a snapshot test (e.g. `name.property.snapshot.test.tsx`).

## Workflow

- Run `npm run tsc` (TypeScript typecheck), `npm run eslint`, and `npm run jest` (unit tests, across the `native` and `web` projects) before committing.
