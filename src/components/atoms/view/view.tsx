import type { ViewStyle } from 'react-native'
import { View as NativeView } from 'react-native'

import type {
  ViewComponent,
  ViewProps,
  ViewSpacingShorthand,
  ViewSpacingSides,
} from '@/components/atoms/view/view.types'
import { useThemeStyleSheet } from '@/context/theme/theme.context'
import type { ThemeStyleSheet } from '@/context/theme/theme.types'

export function getSpacingStyles(
  styleSheet: ThemeStyleSheet,
  property: 'padding' | 'margin',
  shorthand: ViewSpacingShorthand | undefined,
  sides: ViewSpacingSides,
): (ViewStyle | false)[] {
  if (shorthand !== undefined && !Array.isArray(shorthand)) {
    return [styleSheet[property][shorthand]]
  }

  const [top, right = top, bottom = top, left = right] = shorthand ?? []
  const [sideTop, sideRight, sideBottom, sideLeft] = shorthand === undefined ? sides : [top, right, bottom, left]

  return [
    sideTop !== undefined && styleSheet[`${property}Top`][sideTop],
    sideRight !== undefined && styleSheet[`${property}Right`][sideRight],
    sideBottom !== undefined && styleSheet[`${property}Bottom`][sideBottom],
    sideLeft !== undefined && styleSheet[`${property}Left`][sideLeft],
  ]
}

export const View: ViewComponent = ({
  children,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  testID,
}: ViewProps) => {
  const styleSheet = useThemeStyleSheet()

  return (
    <NativeView
      testID={testID}
      style={[
        ...getSpacingStyles(styleSheet, 'padding', padding, [paddingTop, paddingRight, paddingBottom, paddingLeft]),
        ...getSpacingStyles(styleSheet, 'margin', margin, [marginTop, marginRight, marginBottom, marginLeft]),
      ]}
    >
      {children}
    </NativeView>
  )
}
