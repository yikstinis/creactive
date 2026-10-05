import { expect, test as base } from '@playwright/test'
import { createSnapshotSuite, renderLayoutProbe } from '@root/snapshot.helpers'
import type { SnapshotRunner, SnapshotTest, VisualDriver } from '@root/snapshot.types'

const extended = base.extend<{
  launch: VisualDriver['launch']
  open: VisualDriver['open']
  match: VisualDriver['match']
}>({
  // No-op: Playwright already starts every test on a fresh page.
  // Playwright parses fixture sources for dependencies, so the first argument must be an empty destructuring pattern.
  // eslint-disable-next-line no-empty-pattern
  launch: async ({}, provide) => {
    await provide(async () => {})
  },
  open: async ({ page }, provide) => {
    await provide(async (sceneId, targetTestId) => {
      await page.goto(`/${sceneId}`)
      await page.getByTestId(targetTestId).waitFor({ state: 'visible' })
    })
  },
  match: async ({ page }, provide) => {
    await provide(async (targetTestId, group, name) => {
      await expect(page.getByTestId(targetTestId)).toHaveScreenshot([group, `${name}.png`])
    })
  },
})

// `setup` runs per test (`beforeEach`), since a fresh page is cheap, unlike Detox's app relaunch.
const snapshotTest: SnapshotRunner & SnapshotTest = Object.assign(extended, {
  setup: (fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>) => {
    extended.beforeEach(async ({ launch, open, match }) => {
      await fn({ launch, open, match })
    })
  },
  create: createSnapshotSuite,
  renderLayout: renderLayoutProbe,
})

// Assigned globally so scene files can reference `test` without importing it (see snapshot.types.d.ts).
// snapshot.playwright.config.ts imports this before Playwright loads any spec file, so it always wins over snapshot.helpers.tsx's no-op fallback.
;(globalThis as unknown as { test: SnapshotTest }).test = snapshotTest
