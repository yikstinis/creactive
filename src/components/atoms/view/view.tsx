import { View as NativeView } from 'react-native'

import type { ViewProps } from '@/components/atoms/view/view.types'
import { DEFAULT_SPACING_VALUES } from '@/constants/spacing'

export function View({ children, style, padding, margin }: ViewProps) {
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
