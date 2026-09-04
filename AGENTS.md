# Agent instructions

Creactive is a cross-platform component library built on React Native.

This file holds the working conventions for any AI agent contributing code here. Keep it current as conventions are established — update it whenever a new rule is agreed on.

## Naming

- **Constants** — `UPPER_SNAKE_CASE` (e.g. `DEFAULT_VALUES`).

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

### Visual regression testing

The root `App.tsx` is an Expo app entry point that renders components directly — the same component tree is screenshotted on every platform, so add new components to `App.tsx` following `View`'s example. It goes through the normal `tsc`/`eslint` checks like the rest of the repo.

- **Web**: `npm run test:visual:web` runs `expo export -p web` and Playwright (`visual/*.visual.spec.ts`) against the exported static build.
- **Native**: `npm run test:visual:ios` / `test:visual:android` run Detox, comparing screenshots via `jest-image-snapshot`.
- Baselines are committed PNGs. Regenerate them on CI, not locally — cross-machine font/anti-aliasing differences cause false-positive diffs otherwise.
- Visual suites are opt-in and stay out of `npm run tsc`/`eslint`/`jest` — they're slow and environment-dependent (browser/simulator/emulator boot).
