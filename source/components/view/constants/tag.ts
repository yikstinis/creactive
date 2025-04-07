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

/**
 * Mapping tags to its string constants.
 * This is used to render correct HTML tags in web.
 */
export const HTMLTag = {
  [ViewTag.DIV]: 'div' as const,
  [ViewTag.FIGURE]: 'figure' as const,
  [ViewTag.FIGCAPTION]: 'figcaption' as const,
  [ViewTag.ARTICLE]: 'article' as const,
  [ViewTag.SECTION]: 'section' as const,
  [ViewTag.HEADER]: 'header' as const,
  [ViewTag.MAIN]: 'main' as const,
  [ViewTag.FOOTER]: 'footer' as const,
}
