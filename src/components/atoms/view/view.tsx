import { View as NativeView } from 'react-native'

import type { ViewComponent, ViewProps } from '@/components/atoms/view/view.types'
import { DEFAULT_SPACING_VALUES } from '@/constants/spacing'

export const View: ViewComponent = ({ children, style, padding, margin, testID }: ViewProps) => {
  return (
    <NativeView
      testID={testID}
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
