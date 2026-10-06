import type { SnapshotCase } from '@root/snapshot.types'

import { Spacing } from '@/constants/spacing'

export const X6S: SnapshotCase = [
  'renders with X6S marginRight',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View marginRight={Spacing.X6S}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM: SnapshotCase = [
  'renders with SM marginRight',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View marginRight={Spacing.SM}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const LG: SnapshotCase = [
  'renders with LG marginRight',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View marginRight={Spacing.LG}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const X6L: SnapshotCase = [
  'renders with X6L marginRight',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View marginRight={Spacing.X6L}>
        {test.renderLayout()}
      </View>
    )
  },
]

test.create('components/atoms/View', { X6S, SM, LG, X6L })
