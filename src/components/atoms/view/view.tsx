import { ReactNode } from 'react'
import { View as NativeView, ViewStyle } from 'react-native'
import { DEFAULT_SPACING_VALUES, Spacing } from '@/constants/spacing'

export interface ViewProps {
  children?: ReactNode
  style?: ViewStyle
  padding?: Spacing
  margin?: Spacing
}

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
