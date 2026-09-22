import { deriveTestId } from '@root/snapshot.helpers'
import type { SnapshotCase } from '@root/snapshot.types'

import { Spacing } from '@/constants/spacing'

/**
 * Route prefix (`component/view/margin`) identifying this component's scenes - each case below
 * gets its own full route, `${id}/<its own export name, lowercased>`.
 */
export const id = 'component/view/margin'

// Every case below require()s `View` rather than importing it at module top level, so this file
// can still be loaded for just `id`/its case names by Playwright's Node test runner, which can't
// parse react-native's own source - see snapshot.helpers.tsx.
export const X6S: SnapshotCase = [
  'renders with X6S margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X6S}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X5S: SnapshotCase = [
  'renders with X5S margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X5S}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X4S: SnapshotCase = [
  'renders with X4S margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X4S}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X3S: SnapshotCase = [
  'renders with X3S margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X3S}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X2S: SnapshotCase = [
  'renders with X2S margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X2S}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const XS: SnapshotCase = [
  'renders with XS margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.XS}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const SM: SnapshotCase = [
  'renders with SM margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.SM}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const MD: SnapshotCase = [
  'renders with MD margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.MD}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const LG: SnapshotCase = [
  'renders with LG margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.LG}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const XL: SnapshotCase = [
  'renders with XL margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.XL}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X2L: SnapshotCase = [
  'renders with X2L margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X2L}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X3L: SnapshotCase = [
  'renders with X3L margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X3L}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X4L: SnapshotCase = [
  'renders with X4L margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X4L}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X5L: SnapshotCase = [
  'renders with X5L margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X5L}>
        {test.renderLayoutProbe()}
      </View>
    )
  },
]

export const X6L: SnapshotCase = [
  'renders with X6L margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X6L}>
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
      await match(testId, 'margin', caseName)
    })
  }
})
