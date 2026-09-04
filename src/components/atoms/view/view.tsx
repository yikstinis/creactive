import { View as NativeView } from 'react-native'

import type { ViewComponent, ViewProps } from '@/components/atoms/view/view.types'
import { DEFAULT_SPACING_VALUES } from '@/constants/spacing'

/**
 * Cross-platform layout container, the atom other components build on for spacing and styling.
 * Use in place of React Native's `View` wherever scale-constrained padding/margin is needed.
 */
export const View: ViewComponent = ({ children, style, padding, margin }: ViewProps) => {
  return (
    <NativeView
      style={[
        padding !== undefined && { padding: DEFAULT_SPACING_VALUES[padding].value },
        margin !== undefined && { margin: DEFAULT_SPACING_VALUES[margin].value },
        style,
      ]}
    >
      {children}
    </NativeView>
  )
}
