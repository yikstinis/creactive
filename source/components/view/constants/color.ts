/**
 * View border color enumerated constants.
 * Should be used to control view border color with properties.
 */
export enum ViewBorderColor {
  BASE_100,
  BASE_200,
  BASE_300,
  BASE_400,
  BASE_500,
  BASE_600,
  BASE_700,
  BASE_800,
  BASE_900,
}
// Theme border color key map.
export const VIEW_THEME_BORDER_COLOR_KEY = {
  [ViewBorderColor.BASE_100]: 'colorBorderBase100' as const,
  [ViewBorderColor.BASE_200]: 'colorBorderBase200' as const,
  [ViewBorderColor.BASE_300]: 'colorBorderBase300' as const,
  [ViewBorderColor.BASE_400]: 'colorBorderBase400' as const,
  [ViewBorderColor.BASE_500]: 'colorBorderBase500' as const,
  [ViewBorderColor.BASE_600]: 'colorBorderBase600' as const,
  [ViewBorderColor.BASE_700]: 'colorBorderBase700' as const,
  [ViewBorderColor.BASE_800]: 'colorBorderBase800' as const,
  [ViewBorderColor.BASE_900]: 'colorBorderBase900' as const,
}

/**
 * View themed background color enumerated constants.
 * Allows to pass theme background colors as component property.
 */
export enum ViewBackgroundColor {
  BASE_100,
  BASE_200,
  BASE_300,
  BASE_400,
  BASE_500,
  BASE_600,
  BASE_700,
  BASE_800,
  BASE_900,
}
// Theme background color key map.
export const VIEW_THEME_BACKGROUND_COLOR_KEY = {
  [ViewBackgroundColor.BASE_100]: 'colorBackgroundBase100' as const,
  [ViewBackgroundColor.BASE_200]: 'colorBackgroundBase200' as const,
  [ViewBackgroundColor.BASE_300]: 'colorBackgroundBase300' as const,
  [ViewBackgroundColor.BASE_400]: 'colorBackgroundBase400' as const,
  [ViewBackgroundColor.BASE_500]: 'colorBackgroundBase500' as const,
  [ViewBackgroundColor.BASE_600]: 'colorBackgroundBase600' as const,
  [ViewBackgroundColor.BASE_700]: 'colorBackgroundBase700' as const,
  [ViewBackgroundColor.BASE_800]: 'colorBackgroundBase800' as const,
  [ViewBackgroundColor.BASE_900]: 'colorBackgroundBase900' as const,
}
