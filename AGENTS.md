# Agent instructions

Creactive is a cross-platform component library built on React Native.

This file holds the working conventions for any AI agent contributing code here. Keep it current as conventions are established — update it whenever a new rule is agreed on.

## Naming

- **Constants** — `UPPER_SNAKE_CASE` (e.g. `DEFAULT_VALUES`).
- **Test files** — colocated with the code under test, suffixed by runner: `*.jest.test.{ts,tsx}` (unit), `*.playwright.test.ts` (web visual regression), `*.detox.test.ts` (native visual regression).

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

- **Web**: `npm run test:visual:web` runs `expo export -p web` and Playwright (`*.playwright.test.ts`, colocated with each component) against the exported static build.
- **Native**: `npm run test:visual:ios` / `test:visual:android` run Detox, comparing screenshots via `jest-image-snapshot` (`*.detox.test.ts`, colocated with each component).
- Baselines are committed PNGs, kept in a `snapshots/` folder next to each component's visual test files, one subfolder per prop under test (e.g. `snapshots/padding/`). Regenerate them on CI, not locally — cross-machine font/anti-aliasing differences cause false-positive diffs otherwise.
- Visual suites are opt-in and stay out of `npm run tsc`/`eslint`/`jest` — they're slow and environment-dependent (browser/simulator/emulator boot).
- When a component's visual test must cover every value of an enumerable prop (e.g. View's padding scale), list the cases once in a colocated `<component>.visual.cases.ts` and derive `App.tsx`, the Playwright test, and the Detox test from it — covering a new case is then a single line there. Render every case at once in `App.tsx` (one testID per case, `<component>-<prop>-<case>`) and screenshot each testID individually, rather than adding a whole App.tsx screen per case — this keeps the suites to a single app screen/launch. File the resulting snapshot as `snapshots/<prop>/<case>.{platform}-{device}.png` (e.g. `snapshots/padding/x6l.ios-iphone-17.png`), suffixed to match the `snapshot-test-{platform}-{device}` job naming in maintain.yml — this groups a case's baselines across every platform side by side, for reviewing one case's cross-platform rendering as a unit.
