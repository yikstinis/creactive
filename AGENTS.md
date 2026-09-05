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
- When a component's visual test must cover every value of an enumerable prop (e.g. View's padding scale), list the cases once in a colocated `<component>.visual.cases.ts` and derive `App.tsx`, the Playwright test, and the Detox test from it — covering a new case is then a single line there. `App.tsx` renders one case at a time (`<component>-<prop>-<case>` testID) plus a nav row of per-case testID'd `Pressable`s (`<component>-<prop>-nav-<case>`); each test taps a case's nav entry, then screenshots its testID. File the resulting snapshot as `snapshots/<prop>/<case>.{platform}-{device}.png` (e.g. `snapshots/padding/x6l.ios-iphone-17.png`), suffixed to match the `snapshot-test-{platform}-{device}` job naming in maintain.yml — this groups a case's baselines across every platform side by side, for reviewing one case's cross-platform rendering as a unit.
- Each case's screenshotted element is a fixed-padding (80px) container in one color, wrapping the prop-under-test's own box in a contrasting color, itself wrapping 3 fixed 32×32 reference squares (colors distinct from both, so all 3 stay visible) — the squares give a constant-size reference and the contrasting fill makes the prop's own box (e.g. its padding) a visibly distinct band, not just blank space indistinguishable from the fixed frame around it.
- Prefer tap-to-select navigation between cases (a `Pressable` per case, tapped by testID) over scrolling a shared `ScrollView` into position. A `ScrollView` + Detox's `waitFor(...).toBeVisible().whileElement(by.id(scrollViewTestID)).scroll(...)` looked simpler at first, but consistently hung the Android Detox run at the first case needing an actual scroll (Espresso's "waited for window focus... not request layout" - the app never recovered for the rest of that run afterward). Neither removing `react-native-safe-area-context` nor `disable-animations: true` on the emulator runner fixed it; switching to tap navigation (no gesture, one screen/case swapped in place) sidesteps the whole class of issue and is exactly as valid a "single app screen/launch" per AGENTS.md's testing rules.
- The container holding the currently-selected case (and its nav row) needs `alignItems: 'flex-start'` on its own parent - View's default `alignItems: 'stretch'` otherwise stretches it to the full screen width, which both hides the padding-driven size differences between cases and produces a screenshot dominated by empty background.
- Detox's `element(by.id(...)).takeScreenshot()` (rather than `device.takeScreenshot()`) came back blank/all-background on this project's CI Android *and* iOS emulators for every case, sized correctly but with no content painted - a known class of issue on GitHub Actions runners, since element screenshots are drawn via the view's own `draw()` rather than reading back the actual compositor output. Use `device.takeScreenshot()` for native visual tests instead, then crop the case's own bounds out of it in JS (with `jimp`) to match Playwright's tight per-element crop: take the full-screen shot, read the case's `element(by.id(caseTestID)).getAttributes().frame` (screen coordinates), and derive the point-to-pixel scale from a full-screen-spanning root testID's own frame (`screenshot.bitmap.width / rootFrame.width`) rather than assuming a platform-specific unit - `device.takeScreenshot()` returns raw pixels, but `frame` comes back in points on iOS and (empirically) already in pixels on Android, so this ratio comes out to the real device scale (e.g. 3 on an iPhone simulator) either way.
