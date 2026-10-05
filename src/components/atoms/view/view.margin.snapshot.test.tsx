import type { SnapshotCase } from '@root/snapshot.types'

import { Spacing } from '@/constants/spacing'

export const X6S: SnapshotCase = [
  'renders with X6S margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={Spacing.X6S}>
        {test.renderLayout()}
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
        {test.renderLayout()}
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
        {test.renderLayout()}
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
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM_MD: SnapshotCase = [
  'renders with [SM, MD] margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={[Spacing.SM, Spacing.MD]}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM_MD_LG: SnapshotCase = [
  'renders with [SM, MD, LG] margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={[Spacing.SM, Spacing.MD, Spacing.LG]}>
        {test.renderLayout()}
      </View>
    )
  },
]

export const SM_MD_LG_XL: SnapshotCase = [
  'renders with [SM, MD, LG, XL] margin',
  () => {
    const { View } = require('@/components/atoms/view/view') as typeof import('@/components/atoms/view/view')
    return (
      <View margin={[Spacing.SM, Spacing.MD, Spacing.LG, Spacing.XL]}>
        {test.renderLayout()}
      </View>
    )
  },
]

test.create('components/atoms/View', { X6S, SM, LG, X6L, SM_MD, SM_MD_LG, SM_MD_LG_XL })
