import { useThemeContext, useThemeStyleSheet } from '@/contexts'
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
}
export const useViewBackgroundColorStyle = (
  backgroundColor?: ViewBackgroundColor,
) => useThemeStyleSheet()[VIEW_BACKGROUND_COLOR_THEME_KEY[backgroundColor]]
export const useViewBackgroundColorValue = (
  backgroundColor?: ViewBackgroundColor,
) => useThemeContext()[VIEW_BACKGROUND_COLOR_THEME_KEY[backgroundColor]]
