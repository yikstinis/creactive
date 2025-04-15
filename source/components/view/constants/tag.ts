/**
 * Supported by view component tags.
 * All possible layout tags should be listed here.
 */
export enum ViewTag {
  DIV,
  FIGURE,
  FIGCAPTION,
  ARTICLE,
  SECTION,
  HEADER,
  MAIN,
  FOOTER,
}
// HTML tag map.
export const VIEW_HTML_TAG = {
  [ViewTag.DIV]: 'div' as const,
  [ViewTag.FIGURE]: 'figure' as const,
  [ViewTag.FIGCAPTION]: 'figcaption' as const,
  [ViewTag.ARTICLE]: 'article' as const,
  [ViewTag.SECTION]: 'section' as const,
  [ViewTag.HEADER]: 'header' as const,
  [ViewTag.MAIN]: 'main' as const,
  [ViewTag.FOOTER]: 'footer' as const,
}
