import { View as NativeView } from 'react-native'

import type { ViewComponent, ViewProps } from '@/components/atoms/view/view.types'
import { useThemeStyleSheet } from '@/context/theme/theme.context'

export const View: ViewComponent = ({ children, style, padding, margin, testID }: ViewProps) => {
  const styleSheet = useThemeStyleSheet()

  return (
    <NativeView
      testID={testID}
      style={[
        padding !== undefined && styleSheet[`padding${padding}`],
        margin !== undefined && styleSheet[`margin${margin}`],
        style,
      ]}
    >
      {children}
    </NativeView>
  )
}
