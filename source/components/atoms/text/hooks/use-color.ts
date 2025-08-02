import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { StyleSheet } from 'react-native'
import { TextColor } from '../constants'

const TEXT_THEME_COLOR_KEY = {
  [TextColor.BASE_100]: 'colorForegroundBase100' as const,
  [TextColor.BASE_200]: 'colorForegroundBase200' as const,
  [TextColor.BASE_300]: 'colorForegroundBase300' as const,
  [TextColor.BASE_400]: 'colorForegroundBase400' as const,
  [TextColor.BASE_500]: 'colorForegroundBase500' as const,
  [TextColor.BASE_600]: 'colorForegroundBase600' as const,
  [TextColor.BASE_700]: 'colorForegroundBase700' as const,
  [TextColor.BASE_800]: 'colorForegroundBase800' as const,
  [TextColor.BASE_900]: 'colorForegroundBase900' as const,
  [TextColor.INVERSE_100]: 'colorForegroundInverse100' as const,
  [TextColor.INVERSE_200]: 'colorForegroundInverse200' as const,
  [TextColor.INVERSE_300]: 'colorForegroundInverse300' as const,
  [TextColor.INVERSE_400]: 'colorForegroundInverse400' as const,
  [TextColor.INVERSE_500]: 'colorForegroundInverse500' as const,
  [TextColor.INVERSE_600]: 'colorForegroundInverse600' as const,
  [TextColor.INVERSE_700]: 'colorForegroundInverse700' as const,
  [TextColor.INVERSE_800]: 'colorForegroundInverse800' as const,
  [TextColor.INVERSE_900]: 'colorForegroundInverse900' as const,
  [TextColor.FAILURE_100]: 'colorForegroundFailure100' as const,
  [TextColor.FAILURE_200]: 'colorForegroundFailure200' as const,
  [TextColor.FAILURE_300]: 'colorForegroundFailure300' as const,
  [TextColor.FAILURE_400]: 'colorForegroundFailure400' as const,
  [TextColor.FAILURE_500]: 'colorForegroundFailure500' as const,
  [TextColor.FAILURE_600]: 'colorForegroundFailure600' as const,
  [TextColor.FAILURE_700]: 'colorForegroundFailure700' as const,
  [TextColor.FAILURE_800]: 'colorForegroundFailure800' as const,
  [TextColor.FAILURE_900]: 'colorForegroundFailure900' as const,
}
const textColorStylesheet = StyleSheet.create({
  transparent: {
    color: 'transparent',
  },
})
export const useTextColorStyle = (color: TextColor) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (color === TextColor.TRANSPARENT) return textColorStylesheet.transparent
  return themeStyleSheet[TEXT_THEME_COLOR_KEY[color]]
}

export const useTextColorValue = (color: TextColor) => {
  const themeContext = useThemeContext()
  if (color === TextColor.TRANSPARENT) return 'transparent'
  return themeContext[TEXT_THEME_COLOR_KEY[color]]
}
