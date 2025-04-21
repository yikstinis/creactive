import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { StyleSheet } from 'react-native'
import { TEXT_COLOR_THEME_KEY, TextColor } from '../constants'

const textColorStylesheet = StyleSheet.create({
  transparent: {
    color: 'transparent',
  },
})
export const useTextColorStyle = (color: TextColor) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (color === TextColor.TRANSPARENT) return textColorStylesheet.transparent
  return themeStyleSheet[TEXT_COLOR_THEME_KEY[color]]
}

export const useTextColorCSSValue = (color: TextColor) => {
  const themeContext = useThemeContext()
  if (color === TextColor.TRANSPARENT) return 'transparent'
  return themeContext[TEXT_COLOR_THEME_KEY[color]]
}
