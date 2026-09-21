import { deriveTestId } from '@root/snapshot.testable'
import type { SnapshotCase } from '@root/snapshot.types'

import type { View as ViewComponent } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'

/**
 * Route prefix (`component/view/padding`) identifying this component's scenes - each case below
 * gets its own full route, `${id}/<its own export name, lowercased>`.
 */
export const id = 'component/view/padding'

// require()'d rather than imported at module top level, so this file can still be loaded for just
// `id`/its case names by Playwright's Node test runner, which can't parse react-native's own
// source - see snapshot.testable.tsx.
function requireView() {
  const { View } = require('@/components/atoms/view/view') as { View: typeof ViewComponent }
  return View
}

export const X6S: SnapshotCase = [
  'renders with X6S padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X6S} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X5S: SnapshotCase = [
  'renders with X5S padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X5S} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X4S: SnapshotCase = [
  'renders with X4S padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X4S} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X3S: SnapshotCase = [
  'renders with X3S padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X3S} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X2S: SnapshotCase = [
  'renders with X2S padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X2S} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const XS: SnapshotCase = [
  'renders with XS padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.XS} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const SM: SnapshotCase = [
  'renders with SM padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.SM} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const MD: SnapshotCase = [
  'renders with MD padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.MD} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const LG: SnapshotCase = [
  'renders with LG padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.LG} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const XL: SnapshotCase = [
  'renders with XL padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.XL} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X2L: SnapshotCase = [
  'renders with X2L padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X2L} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X3L: SnapshotCase = [
  'renders with X3L padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X3L} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X4L: SnapshotCase = [
  'renders with X4L padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X4L} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X5L: SnapshotCase = [
  'renders with X5L padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X5L} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X6L: SnapshotCase = [
  'renders with X6L padding',
  () => {
    const View = requireView()
    return (
      <View padding={Spacing.X6L} style={{ backgroundColor: 'black' }}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

const CASES = { X6S, X5S, X4S, X3S, X2S, XS, SM, MD, LG, XL, X2L, X3L, X4L, X5L, X6L }

test.describe('atoms/View', () => {
  test.setup(async ({ launch }) => {
    await launch()
  })

  for (const [key, [name]] of Object.entries(CASES)) {
    test(name, async ({ open, match }) => {
      const caseName = key.toLowerCase()
      const sceneId = `${id}/${caseName}`
      const testId = deriveTestId(sceneId)

      await open(sceneId, testId)
      await match(testId, 'padding', caseName)
    })
  }
})
