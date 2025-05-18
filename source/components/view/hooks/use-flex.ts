import { Fraction, Size } from '@/helpers'
import { StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
} from '../constants'

export const useFlexGrowStyle = (flexGrow?: Fraction) => {
  if (flexGrow) {
    return {
      flexGrow: flexGrow.toValue(),
    }
  }
}
export const useFlexGrowCSSValue = (flexGrow?: Fraction) => {
  if (flexGrow) return flexGrow.toValue()
}

export const useFlexShrinkStyle = (flexShrink?: Fraction) => {
  if (flexShrink) {
    return {
      flexShrink: flexShrink.toValue(),
    }
  }
}
export const useFlexShrinkCSSValue = (flexShrink?: Fraction) => {
  if (flexShrink) return flexShrink.toValue()
}

// TODO: This is native only hook, so we convert type to native type..
export const useFlexBasisStyle = (flexBasis?: Size) => {
  if (flexBasis) {
    return {
      flexBasis: flexBasis.toValue() as number | `${number}%`,
    }
  }
}

export const useFlexBasisiCSSValue = (flexBasis?: Size) => {
  if (flexBasis) return flexBasis.toValue()
}

// Flex direction style sheet.
const viewFlexDirectionStyleSheet = StyleSheet.create({
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
})
// Flex direction style map.
const FLEX_DIRECTION_STYLE = {
  [ViewFlexDirection.COLUMN]: viewFlexDirectionStyleSheet.flexDirectionColumn,
  [ViewFlexDirection.ROW]: viewFlexDirectionStyleSheet.flexDirectionRow,
}
// Flex direction hook.
export const useViewFlexDirectionStyle = (flexDirection: ViewFlexDirection) =>
  FLEX_DIRECTION_STYLE[flexDirection]

// Justify content style sheet.
const viewJustifyContentStyleSheet = StyleSheet.create({
  justifuContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifuContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifuContentCenter: {
    justifyContent: 'center',
  },
  justifuContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifuContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifuContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
})
// Justify content style map.
const JUSTIFY_CONTENT_STYLE = {
  [ViewJustifyContent.FLEX_START]:
    viewJustifyContentStyleSheet.justifuContentFlexStart,
  [ViewJustifyContent.FLEX_END]:
    viewJustifyContentStyleSheet.justifuContentFlexEnd,
  [ViewJustifyContent.CENTER]:
    viewJustifyContentStyleSheet.justifuContentCenter,
  [ViewJustifyContent.SPACE_BETWEEN]:
    viewJustifyContentStyleSheet.justifuContentSpaceBetween,
  [ViewJustifyContent.SPACE_AROUND]:
    viewJustifyContentStyleSheet.justifuContentSpaceAround,
  [ViewJustifyContent.SPACE_EVENLY]:
    viewJustifyContentStyleSheet.justifuContentSpaceEvenly,
}
// Justify content hook.
export const useViewJustifyContentStyle = (
  justifyContent: ViewJustifyContent
) => JUSTIFY_CONTENT_STYLE[justifyContent]

// Align items style sheet.
const viewAlignItemsStyleSheet = StyleSheet.create({
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  alignItemsBaseline: {
    alignItems: 'baseline',
  },
})
// Align items style map.
const ALIGN_ITEMS_STYLE = {
  [ViewAlignItems.FLEX_START]: viewAlignItemsStyleSheet.alignItemsFlexStart,
  [ViewAlignItems.FLEX_END]: viewAlignItemsStyleSheet.alignItemsFlexEnd,
  [ViewAlignItems.CENTER]: viewAlignItemsStyleSheet.alignItemsCenter,
  [ViewAlignItems.STRETCH]: viewAlignItemsStyleSheet.alignItemsStretch,
  [ViewAlignItems.BASELINE]: viewAlignItemsStyleSheet.alignItemsBaseline,
}
// Align items hook.
export const useViewAlignItemsStyle = (alignItems: ViewAlignItems) =>
  ALIGN_ITEMS_STYLE[alignItems]

// Align self style sheet.
const viewAlignSelfStyleSheet = StyleSheet.create({
  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStretch: {
    alignSelf: 'stretch',
  },
  alignSelfBaseline: {
    alignSelf: 'baseline',
  },
})
// Align self style map.
const ALIGN_SELF_STYLE = {
  [ViewAlignSelf.FLEX_START]: viewAlignSelfStyleSheet.alignSelfFlexStart,
  [ViewAlignSelf.FLEX_END]: viewAlignSelfStyleSheet.alignSelfFlexEnd,
  [ViewAlignSelf.CENTER]: viewAlignSelfStyleSheet.alignSelfCenter,
  [ViewAlignSelf.STRETCH]: viewAlignSelfStyleSheet.alignSelfStretch,
  [ViewAlignSelf.BASELINE]: viewAlignSelfStyleSheet.alignSelfBaseline,
}
// Align self hook.
export const useViewAlignSelfStyle = (alignSelf?: ViewAlignSelf) =>
  ALIGN_SELF_STYLE[alignSelf]

// Align content style sheet.
const viewAlignContentStyleSheet = StyleSheet.create({
  alignContentFlexStart: {
    alignContent: 'flex-start',
  },
  alignContentFlexEnd: {
    alignContent: 'flex-end',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  alignContentStretch: {
    alignContent: 'stretch',
  },
  alignContentSpaceBetween: {
    alignContent: 'space-between',
  },
  alignContentSpaceAround: {
    alignContent: 'space-around',
  },
  valignContentSpaceEvenly: {
    alignContent: 'space-evenly',
  },
})
// Align content style map.
const ALIGN_CONTENT_STYLE = {
  [ViewAlignContent.FLEX_START]:
    viewAlignContentStyleSheet.alignContentFlexStart,
  [ViewAlignContent.FLEX_END]: viewAlignContentStyleSheet.alignContentFlexEnd,
  [ViewAlignContent.CENTER]: viewAlignContentStyleSheet.alignContentCenter,
  [ViewAlignContent.STRETCH]: viewAlignContentStyleSheet.alignContentStretch,
  [ViewAlignContent.SPACE_BETWEEN]:
    viewAlignContentStyleSheet.alignContentSpaceBetween,
  [ViewAlignContent.SPACE_AROUND]:
    viewAlignContentStyleSheet.alignContentSpaceAround,
}
// Align content hook.
export const useViewAlignContentStyle = (alignContent: ViewAlignContent) =>
  ALIGN_CONTENT_STYLE[alignContent]
