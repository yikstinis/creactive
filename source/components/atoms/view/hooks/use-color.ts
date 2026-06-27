import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { Color } from '@/helpers'
import type { ColorValue, RGBColor, TransparentColor } from '@/helpers'
import { ViewBackgroundColor } from '../constants'

const VIEW_BACKGROUND_COLOR_THEME_KEY = {
  [ViewBackgroundColor.BASE_100]: 'colorBackgroundBase100' as const,
  [ViewBackgroundColor.BASE_200]: 'colorBackgroundBase200' as const,
  [ViewBackgroundColor.BASE_300]: 'colorBackgroundBase300' as const,
  [ViewBackgroundColor.BASE_400]: 'colorBackgroundBase400' as const,
  [ViewBackgroundColor.BASE_500]: 'colorBackgroundBase500' as const,
  [ViewBackgroundColor.BASE_600]: 'colorBackgroundBase600' as const,
  [ViewBackgroundColor.BASE_700]: 'colorBackgroundBase700' as const,
  [ViewBackgroundColor.BASE_800]: 'colorBackgroundBase800' as const,
  [ViewBackgroundColor.BASE_900]: 'colorBackgroundBase900' as const,
  [ViewBackgroundColor.PRIMARY_100]: 'colorBackgroundPrimary100' as const,
  [ViewBackgroundColor.PRIMARY_200]: 'colorBackgroundPrimary200' as const,
  [ViewBackgroundColor.PRIMARY_300]: 'colorBackgroundPrimary300' as const,
  [ViewBackgroundColor.PRIMARY_400]: 'colorBackgroundPrimary400' as const,
  [ViewBackgroundColor.PRIMARY_500]: 'colorBackgroundPrimary500' as const,
  [ViewBackgroundColor.PRIMARY_600]: 'colorBackgroundPrimary600' as const,
  [ViewBackgroundColor.PRIMARY_700]: 'colorBackgroundPrimary700' as const,
  [ViewBackgroundColor.PRIMARY_800]: 'colorBackgroundPrimary800' as const,
  [ViewBackgroundColor.PRIMARY_900]: 'colorBackgroundPrimary900' as const,
  [ViewBackgroundColor.ACCENT_100]: 'colorBackgroundAccent100' as const,
  [ViewBackgroundColor.ACCENT_200]: 'colorBackgroundAccent200' as const,
  [ViewBackgroundColor.ACCENT_300]: 'colorBackgroundAccent300' as const,
  [ViewBackgroundColor.ACCENT_400]: 'colorBackgroundAccent400' as const,
  [ViewBackgroundColor.ACCENT_500]: 'colorBackgroundAccent500' as const,
  [ViewBackgroundColor.ACCENT_600]: 'colorBackgroundAccent600' as const,
  [ViewBackgroundColor.ACCENT_700]: 'colorBackgroundAccent700' as const,
  [ViewBackgroundColor.ACCENT_800]: 'colorBackgroundAccent800' as const,
  [ViewBackgroundColor.ACCENT_900]: 'colorBackgroundAccent900' as const,
  [ViewBackgroundColor.SUBACCENT_100]: 'colorBackgroundSubaccent100' as const,
  [ViewBackgroundColor.SUBACCENT_200]: 'colorBackgroundSubaccent200' as const,
  [ViewBackgroundColor.SUBACCENT_300]: 'colorBackgroundSubaccent300' as const,
  [ViewBackgroundColor.SUBACCENT_400]: 'colorBackgroundSubaccent400' as const,
  [ViewBackgroundColor.SUBACCENT_500]: 'colorBackgroundSubaccent500' as const,
  [ViewBackgroundColor.SUBACCENT_600]: 'colorBackgroundSubaccent600' as const,
  [ViewBackgroundColor.SUBACCENT_700]: 'colorBackgroundSubaccent700' as const,
  [ViewBackgroundColor.SUBACCENT_800]: 'colorBackgroundSubaccent800' as const,
  [ViewBackgroundColor.SUBACCENT_900]: 'colorBackgroundSubaccent900' as const,
}
export const useViewBackgroundColorStyle = (
  backgroundColor?: ViewBackgroundColor | RGBColor | TransparentColor,
) => {
  const sheet = useThemeStyleSheet()
  if (backgroundColor === undefined) return undefined
  if (backgroundColor instanceof Color) return { backgroundColor: backgroundColor.toValue() }
  return sheet[VIEW_BACKGROUND_COLOR_THEME_KEY[backgroundColor]]
}
export const useViewBackgroundColorValue = (
  backgroundColor?: ViewBackgroundColor | RGBColor | TransparentColor,
): ColorValue | undefined => {
  const context = useThemeContext()
  if (backgroundColor === undefined) return undefined
  if (backgroundColor instanceof Color) return backgroundColor.toValue()
  return context[VIEW_BACKGROUND_COLOR_THEME_KEY[backgroundColor]].toValue()
}
