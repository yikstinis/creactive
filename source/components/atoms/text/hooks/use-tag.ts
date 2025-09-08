import { TextTag } from '../constants'

const TEXT_TAG_VALUE = {
  [TextTag.SPAN]: 'span' as const,
  [TextTag.P]: 'p' as const,
  [TextTag.H1]: 'h1' as const,
  [TextTag.H2]: 'h2' as const,
  [TextTag.H3]: 'h3' as const,
  [TextTag.H4]: 'h4' as const,
  [TextTag.H5]: 'h5' as const,
  [TextTag.H6]: 'h6' as const,
}
export const useTextTagValue = (tag: TextTag) => TEXT_TAG_VALUE[tag]
