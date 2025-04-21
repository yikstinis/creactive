/**
 * Supported text color constants.
 * Part of theme colors, suitable for text coloring.
 * Some extra constants like transparent for example are also included.
 */
export enum TextColor {
  TRANSPARENT,
  BASE_100,
  BASE_200,
  BASE_300,
  BASE_400,
  BASE_500,
  BASE_600,
  BASE_700,
  BASE_800,
  BASE_900,
  INVERSE_100,
  INVERSE_200,
  INVERSE_300,
  INVERSE_400,
  INVERSE_500,
  INVERSE_600,
  INVERSE_700,
  INVERSE_800,
  INVERSE_900,
}

export const TEXT_COLOR_THEME_KEY = {
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
}
