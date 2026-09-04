# Agent instructions

Creactive is a cross-platform component library built on React Native.

This file holds the working conventions for any AI agent contributing code here. Keep it current as conventions are established — update it whenever a new rule is agreed on.

## Workflow

- Run `npm run lint` before committing (runs ESLint and the TypeScript typecheck).
- Run `npm test` before committing (runs the Jest unit tests, across the `native` and `web` projects).

## Testing

All functionality must be covered by tests — every code path that's written, including edge cases, not just the happy path.

Nest `describe` blocks to mirror what's under test:

1. Outer `describe` — the `@/...` path alias of the file under test (e.g. `@/helpers/dimension/dimension`).
2. Next `describe` — the name of the export from that file being tested (e.g. `Dimension`).
3. If that export is an object, a further `describe` per property being tested.

When the set of possible inputs is exhaustively enumerable (e.g. an enum), test every member rather than a sample.

### Visual regression testing

- **Web**: every component's `*.stories.tsx` doubles as the source of truth for pixel screenshot coverage — write one before relying on it for a new component. `npm run test:visual:web` builds Storybook and runs Playwright (`visual/*.visual.spec.ts`) against each story's `iframe.html?id=...` URL.
- **Native**: `example/` is a standalone Expo app (its own workspace, excluded from root ESLint/TypeScript checks) that renders components directly in `App.tsx` — not through Storybook's on-device UI, which added a whole class of native crashes (BottomSheet, gesture handling, persisted selection) unrelated to the component under test. `npm run test:visual:ios` / `test:visual:android` run Detox, comparing screenshots via `jest-image-snapshot`. Add new components to `App.tsx` following `View`'s example.
- Baselines are committed PNGs. Regenerate them on CI, not locally — cross-machine font/anti-aliasing differences cause false-positive diffs otherwise.
- Visual suites are opt-in and stay out of `npm test`/`npm run lint` — they're slow and environment-dependent (browser/simulator/emulator boot).

## Naming

- **Constants** — `UPPER_SNAKE_CASE` (e.g. `DEFAULT_VALUES`).

## Comments

Default to no comments — add one only for a non-obvious constraint, invariant, or reasoning. Format multi-sentence comments as a multi-line JSDoc block (one sentence per line), not a single long line.

- **Enums** — state its single responsibility: what it represents and where it's valid to use; add where it isn't only when relevant and there's something worth saying.
- **Classes** — state its single responsibility (what it represents and where it's valid to use), and call out any non-obvious invariant or usage guidance that isn't evident from its type or members (e.g. immutability, a preferred construction pattern, equality semantics) — only when there's something worth saying.
- **Constants** — if the value(s) aren't self-evident from the name/type, state the reasoning or source behind them (why these values, where they came from) rather than restating what the constant is.
- **React components** — state its single responsibility (what it represents and where it's valid to use), and call out any non-obvious invariant or usage guidance that isn't evident from its props or body — only when there's something worth saying.
- **Interfaces and object-shape type aliases** (e.g. `ViewProps`) — always state its single responsibility: what it represents and where it's valid to use.
- **Other type aliases** (unions, generic instantiations, etc.) — only comment if the alias hides something not evident from its right-hand side (e.g. why it exists, an invariant it encodes); don't restate what the definition already says.
