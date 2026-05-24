import { useThemeContext } from '@/contexts'
import { IconColor } from '../constants'

const ICON_THEME_COLOR_KEY = {
  [IconColor.BASE_100]: 'colorForegroundBase100' as const,
  [IconColor.BASE_200]: 'colorForegroundBase200' as const,
  [IconColor.BASE_300]: 'colorForegroundBase300' as const,
  [IconColor.BASE_400]: 'colorForegroundBase400' as const,
  [IconColor.BASE_500]: 'colorForegroundBase500' as const,
  [IconColor.BASE_600]: 'colorForegroundBase600' as const,
  [IconColor.BASE_700]: 'colorForegroundBase700' as const,
  [IconColor.BASE_800]: 'colorForegroundBase800' as const,
  [IconColor.BASE_900]: 'colorForegroundBase900' as const,
  [IconColor.INVERSE_100]: 'colorForegroundInverse100' as const,
  [IconColor.INVERSE_200]: 'colorForegroundInverse200' as const,
  [IconColor.INVERSE_300]: 'colorForegroundInverse300' as const,
  [IconColor.INVERSE_400]: 'colorForegroundInverse400' as const,
  [IconColor.INVERSE_500]: 'colorForegroundInverse500' as const,
  [IconColor.INVERSE_600]: 'colorForegroundInverse600' as const,
  [IconColor.INVERSE_700]: 'colorForegroundInverse700' as const,
  [IconColor.INVERSE_800]: 'colorForegroundInverse800' as const,
  [IconColor.INVERSE_900]: 'colorForegroundInverse900' as const,
  [IconColor.FAILURE_100]: 'colorForegroundFailure100' as const,
  [IconColor.FAILURE_200]: 'colorForegroundFailure200' as const,
  [IconColor.FAILURE_300]: 'colorForegroundFailure300' as const,
  [IconColor.FAILURE_400]: 'colorForegroundFailure400' as const,
  [IconColor.FAILURE_500]: 'colorForegroundFailure500' as const,
  [IconColor.FAILURE_600]: 'colorForegroundFailure600' as const,
  [IconColor.FAILURE_700]: 'colorForegroundFailure700' as const,
  [IconColor.FAILURE_800]: 'colorForegroundFailure800' as const,
  [IconColor.FAILURE_900]: 'colorForegroundFailure900' as const,
}
export const useIconColorValue = (color: IconColor) => {
  const themeContext = useThemeContext()
  if (color === IconColor.TRANSPARENT) return 'transparent'
  return themeContext[ICON_THEME_COLOR_KEY[color]]
}
