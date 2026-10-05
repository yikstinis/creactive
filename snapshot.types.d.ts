import type { beforeAll as jestBeforeAll, describe as jestDescribe, it as jestIt } from '@jest/globals'
import type { ReactNode } from 'react'

declare global {
  const describe: typeof jestDescribe
  const it: typeof jestIt
  const beforeAll: typeof jestBeforeAll
}

export interface VisualDriver {
  launch(): Promise<void>
  open(sceneId: string, targetTestId: string): Promise<void>
  match(targetTestId: string, group: string, name: string): Promise<void>
}

export interface SnapshotRunner {
  (name: string, fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>): void
  describe(name: string, fn: () => void): void
  setup(fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>): void
}

export interface SnapshotTest {
  // `name` is only the `describe` title; the route is derived from the calling file's path (see `createSnapshotSuite`).
  create(name: string, cases: Record<string, SnapshotCase>): void
  renderLayout(): ReactNode
}

// Never imported: the Detox/Playwright setup scripts, or `snapshot.helpers.tsx` in the real app, assign it before any scene file runs.
declare global {
  const test: SnapshotTest
}

// `render` must `require()` the component under test so the file stays loadable by Playwright's Node runner, which can't parse react-native's source.
// The export name is used unchanged as the case's route segment, testID and snapshot filename.
export type SnapshotCase = readonly [name: string, render: () => ReactNode]

export interface VisualScene {
  id: string
  render: () => ReactNode
}
