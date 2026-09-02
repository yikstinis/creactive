import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

import type { Spacing } from '@/constants/spacing'

export interface ViewProps {
  children?: ReactNode
  style?: ViewStyle
  padding?: Spacing
  margin?: Spacing
}
