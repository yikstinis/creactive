/**
 * Text align enum supported by compoent.
 * Allows to control text alignment if required.
 */
export enum TextAlign {
  LEFT,
  CENTER,
  RIGHT,
}

/**
 * Available text color enum.
 * Should be used to control the color of the text.
 */
export enum TextDecoration {
  NONE,
  UNDERLINE,
}

/**
 * Available text line height enum.
 * Should be used to control the line height of the text.
 */
export enum TextLineHeight {
  NONE,
  TIGHT,
  SNUG,
  NORMAL,
  RELAXED,
  LOOSE,
}
export const TEXT_THEME_LINE_HEIGHT_KEY = {
  [TextLineHeight.NONE]: 'lineHeightBaseNone' as const,
  [TextLineHeight.TIGHT]: 'lineHeightBaseTight' as const,
  [TextLineHeight.SNUG]: 'lineHeightBaseSnug' as const,
  [TextLineHeight.NORMAL]: 'lineHeightBaseNormal' as const,
  [TextLineHeight.RELAXED]: 'lineHeightBaseRelaxed' as const,
  [TextLineHeight.LOOSE]: 'lineHeightBaseLoose' as const,
}
