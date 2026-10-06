import type { SnapshotCase } from '@root/snapshot.types'

import { Spacing } from '@/constants/spacing'

export const X6S: SnapshotCase = [
  'renders with X6S paddingBottom',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingBottom={Spacing.X6S}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM: SnapshotCase = [
  'renders with SM paddingBottom',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingBottom={Spacing.SM}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const LG: SnapshotCase = [
  'renders with LG paddingBottom',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingBottom={Spacing.LG}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const X6L: SnapshotCase = [
  'renders with X6L paddingBottom',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingBottom={Spacing.X6L}>
        {test.renderLayout()}
      </View>
    )
  },
]

test.create('components/atoms/View', { X6S, SM, LG, X6L })
