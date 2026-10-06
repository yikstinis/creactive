import type { SnapshotCase } from '@root/snapshot.types'

import { Spacing } from '@/constants/spacing'

export const X6S: SnapshotCase = [
  'renders with X6S paddingLeft',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingLeft={Spacing.X6S}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM: SnapshotCase = [
  'renders with SM paddingLeft',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingLeft={Spacing.SM}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const LG: SnapshotCase = [
  'renders with LG paddingLeft',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingLeft={Spacing.LG}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const X6L: SnapshotCase = [
  'renders with X6L paddingLeft',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View paddingLeft={Spacing.X6L}>
        {test.renderLayout()}
      </View>
    )
  },
]

test.create('components/atoms/View', { X6S, SM, LG, X6L })
