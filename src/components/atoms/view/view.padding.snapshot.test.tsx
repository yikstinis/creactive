import type { SnapshotCase } from '@root/snapshot.types'

import { Spacing } from '@/constants/spacing'

export const X6S: SnapshotCase = [
  'renders with X6S padding',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View padding={Spacing.X6S}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM: SnapshotCase = [
  'renders with SM padding',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View padding={Spacing.SM}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const LG: SnapshotCase = [
  'renders with LG padding',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View padding={Spacing.LG}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const X6L: SnapshotCase = [
  'renders with X6L padding',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View padding={Spacing.X6L}>
        {test.renderLayout()}
      </View>
    )
  },
]

test.create('components/atoms/View', { X6S, SM, LG, X6L })
