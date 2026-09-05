import type { SnapshotTest } from '@/testing/visual.types'

/**
 * `device` is Detox's own ambient global (declared by `detox/globals.d.ts`, pulled into the
 * program by `detox.setup.ts`'s `import ... from 'detox'`) - it only exists once Detox's Jest
 * environment has set it up, which happens before a test file's own top-level code runs, so
 * checking it here reliably tells apart the two runners that can execute a `*.snapshot.test.ts`
 * file.
 *
 * Both `test` implementations must be loaded lazily, with a plain `require` rather than a static
 * `import`: `detox.setup.ts` imports `@jest/globals`, which throws immediately ("Do not import
 * `@jest/globals` outside of the Jest test environment") the moment it's loaded under
 * Playwright's own runner - a static `import` evaluates unconditionally regardless of which
 * branch below ends up used, so it would crash Playwright before this file's own code ever runs.
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
export const test: SnapshotTest = (typeof device === 'undefined' ? require('@root/playwright.setup') : require('@root/detox.setup')).test
