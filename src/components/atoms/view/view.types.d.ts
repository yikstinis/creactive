import type { FunctionComponent, PropsWithChildren } from 'react'
import type { ViewStyle } from 'react-native'

import type { Spacing } from '@/constants/spacing'

/**
 * Props for the `View` atom.
 * Use to pass through native view styling plus scale-constrained padding/margin.
 */
export interface ViewProps extends PropsWithChildren {
  style?: ViewStyle
  padding?: Spacing
  margin?: Spacing
}

export type ViewComponent = FunctionComponent<ViewProps>
