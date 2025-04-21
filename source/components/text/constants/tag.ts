/**
 * Supported by view component tags.
 * All possible layout tags should be listed here.
 */
export enum TextTag {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SPAN,
}
// HTML tag map.
export const TEXT_HTML_TAG = {
  [TextTag.H1]: 'h1' as const,
  [TextTag.H2]: 'h2' as const,
  [TextTag.H3]: 'h3' as const,
  [TextTag.H4]: 'h4' as const,
  [TextTag.H5]: 'h5' as const,
  [TextTag.H6]: 'h6' as const,
  [TextTag.P]: 'p' as const,
  [TextTag.SPAN]: 'span' as const,
}
