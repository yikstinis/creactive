import { ViewTag } from '../constants'

export const VIEW_TAG_VALUE = {
  [ViewTag.DIV]: 'div' as const,
  [ViewTag.FIGURE]: 'figure' as const,
  [ViewTag.FIGCAPTION]: 'figcaption' as const,
  [ViewTag.ARTICLE]: 'article' as const,
  [ViewTag.SECTION]: 'section' as const,
  [ViewTag.HEADER]: 'header' as const,
  [ViewTag.MAIN]: 'main' as const,
  [ViewTag.FOOTER]: 'footer' as const,
}
export const useViewTagValue = (tag: ViewTag) => VIEW_TAG_VALUE[tag]
