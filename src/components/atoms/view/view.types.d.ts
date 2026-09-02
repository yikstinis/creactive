import type { PropsWithChildren } from 'react'
import type { ViewStyle } from 'react-native'

import type { Spacing } from '@/constants/spacing'

export interface ViewProps extends PropsWithChildren {
  style?: ViewStyle
  padding?: Spacing
  margin?: Spacing
}
