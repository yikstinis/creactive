import type { Dimension, Fraction } from '@/helpers'
import { StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewFlexWrap,
  ViewJustifyContent,
} from '../constants'

export const useViewFlexGrowValue = (flexGrow?: Fraction) => flexGrow?.toValue()
export const useViewFlexShrinkValue = (flexShrink?: Fraction) =>
  flexShrink?.toValue()
export const useViewFlexBasisValue = (flexBasis?: Dimension) =>
  flexBasis?.toValue()

const viewFlexWrapStyleSheet = StyleSheet.create({
  flexWrapNone: {
    flexWrap: 'nowrap',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
})
const VIEW_FLEX_WRAP_STYLE = {
  [ViewFlexWrap.NONE]: viewFlexWrapStyleSheet.flexWrapNone,
  [ViewFlexWrap.WRAP]: viewFlexWrapStyleSheet.flexWrap,
}
export const useViewFlexWrapStyle = (flexWrap?: ViewFlexWrap) =>
  VIEW_FLEX_WRAP_STYLE[flexWrap]

const VIEW_FLEX_WRAP_VALUE = {
  [ViewFlexWrap.NONE]: 'nowrap' as const,
  [ViewFlexWrap.WRAP]: 'wrap' as const,
}
export const useViewFlexWrapValue = (flexWrap?: ViewFlexWrap) =>
  VIEW_FLEX_WRAP_VALUE[flexWrap]

const viewFlexDirectionStyleSheet = StyleSheet.create({
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexDirectionRowReverse: {
    flexDirection: 'row-reverse',
  },
})
const VIEW_FLEX_DIRECTION_STYLE = {
  [ViewFlexDirection.COLUMN]: viewFlexDirectionStyleSheet.flexDirectionColumn,
  [ViewFlexDirection.ROW]: viewFlexDirectionStyleSheet.flexDirectionRow,
  [ViewFlexDirection.COLUMN_REVERSE]:
    viewFlexDirectionStyleSheet.flexDirectionColumnReverse,
  [ViewFlexDirection.ROW_REVERSE]:
    viewFlexDirectionStyleSheet.flexDirectionRowReverse,
}
export const useViewFlexDirectionStyle = (flexDirection?: ViewFlexDirection) =>
  VIEW_FLEX_DIRECTION_STYLE[flexDirection]

const VIEW_FLEX_DIRECTION_VALUE = {
  [ViewFlexDirection.COLUMN]: 'column' as const,
  [ViewFlexDirection.ROW]: 'row' as const,
  [ViewFlexDirection.COLUMN_REVERSE]: 'column-reverse' as const,
  [ViewFlexDirection.ROW_REVERSE]: 'row-reverse' as const,
}
export const useViewFlexDirectionValue = (flexDirection?: ViewFlexDirection) =>
  VIEW_FLEX_DIRECTION_VALUE[flexDirection]

const viewJustifyContentStyleSheet = StyleSheet.create({
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
})
const VIEW_JUSTIFY_CONTENT_STYLE = {
  [ViewJustifyContent.FLEX_START]:
    viewJustifyContentStyleSheet.justifyContentFlexStart,
  [ViewJustifyContent.CENTER]:
    viewJustifyContentStyleSheet.justifyContentCenter,
  [ViewJustifyContent.FLEX_END]:
    viewJustifyContentStyleSheet.justifyContentFlexEnd,
  [ViewJustifyContent.SPACE_BETWEEN]:
    viewJustifyContentStyleSheet.justifyContentSpaceBetween,
  [ViewJustifyContent.SPACE_AROUND]:
    viewJustifyContentStyleSheet.justifyContentSpaceAround,
  [ViewJustifyContent.SPACE_EVENLY]:
    viewJustifyContentStyleSheet.justifyContentSpaceEvenly,
}
export const useViewJustifyContentStyle = (
  justifyContent?: ViewJustifyContent,
) => VIEW_JUSTIFY_CONTENT_STYLE[justifyContent]

const VIEW_JUSTIFY_CONTENT_VALUE = {
  [ViewJustifyContent.FLEX_START]: 'flex-start' as const,
  [ViewJustifyContent.CENTER]: 'center' as const,
  [ViewJustifyContent.FLEX_END]: 'flex-end' as const,
  [ViewJustifyContent.SPACE_BETWEEN]: 'space-between' as const,
  [ViewJustifyContent.SPACE_AROUND]: 'space-around' as const,
  [ViewJustifyContent.SPACE_EVENLY]: 'space-evenly' as const,
}
export const useViewJustifyContentValue = (
  justifyContent?: ViewJustifyContent,
) => VIEW_JUSTIFY_CONTENT_VALUE[justifyContent]

const viewAlignItemsStyleSheet = StyleSheet.create({
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  alignItemsBaseline: {
    alignItems: 'baseline',
  },
})
const VIEW_ALIGN_ITEMS_STYLE = {
  [ViewAlignItems.FLEX_START]: viewAlignItemsStyleSheet.alignItemsFlexStart,
  [ViewAlignItems.CENTER]: viewAlignItemsStyleSheet.alignItemsCenter,
  [ViewAlignItems.FLEX_END]: viewAlignItemsStyleSheet.alignItemsFlexEnd,
  [ViewAlignItems.STRETCH]: viewAlignItemsStyleSheet.alignItemsStretch,
  [ViewAlignItems.BASELINE]: viewAlignItemsStyleSheet.alignItemsBaseline,
}
export const useViewAlignItemsStyle = (alignItems?: ViewAlignItems) =>
  VIEW_ALIGN_ITEMS_STYLE[alignItems]

const VIEW_ALIGN_ITEMS_VALUE = {
  [ViewAlignItems.FLEX_START]: 'flex-start' as const,
  [ViewAlignItems.CENTER]: 'center' as const,
  [ViewAlignItems.FLEX_END]: 'flex-end' as const,
  [ViewAlignItems.STRETCH]: 'stretch' as const,
  [ViewAlignItems.BASELINE]: 'baseline' as const,
}
export const useViewAlignItemsValue = (alignItems?: ViewAlignItems) =>
  VIEW_ALIGN_ITEMS_VALUE[alignItems]

const viewAlignSelfStyleSheet = StyleSheet.create({
  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfStretch: {
    alignSelf: 'stretch',
  },
  alignSelfBaseline: {
    alignSelf: 'baseline',
  },
})
const VIEW_ALIGN_SELF_STYLE = {
  [ViewAlignSelf.FLEX_START]: viewAlignSelfStyleSheet.alignSelfFlexStart,
  [ViewAlignSelf.CENTER]: viewAlignSelfStyleSheet.alignSelfCenter,
  [ViewAlignSelf.FLEX_END]: viewAlignSelfStyleSheet.alignSelfFlexEnd,
  [ViewAlignSelf.STRETCH]: viewAlignSelfStyleSheet.alignSelfStretch,
  [ViewAlignSelf.BASELINE]: viewAlignSelfStyleSheet.alignSelfBaseline,
}
export const useViewAlignSelfStyle = (alignSelf?: ViewAlignSelf) =>
  VIEW_ALIGN_SELF_STYLE[alignSelf]

const VIEW_ALIGN_SELF_VALUE = {
  [ViewAlignSelf.FLEX_START]: 'flex-start' as const,
  [ViewAlignSelf.CENTER]: 'center' as const,
  [ViewAlignSelf.FLEX_END]: 'flex-end' as const,
  [ViewAlignSelf.STRETCH]: 'stretch' as const,
  [ViewAlignSelf.BASELINE]: 'baseline' as const,
}
export const useViewAlignSelfValue = (alignSelf?: ViewAlignSelf) =>
  VIEW_ALIGN_SELF_VALUE[alignSelf]

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
  alignContentSpaceEvenly: {
    alignContent: 'space-evenly',
  },
})
const VIEW_ALIGN_CONTENT_STYLE = {
  [ViewAlignContent.FLEX_START]:
    viewAlignContentStyleSheet.alignContentFlexStart,
  [ViewAlignContent.CENTER]: viewAlignContentStyleSheet.alignContentCenter,
  [ViewAlignContent.FLEX_END]: viewAlignContentStyleSheet.alignContentFlexEnd,
  [ViewAlignContent.STRETCH]: viewAlignContentStyleSheet.alignContentStretch,
  [ViewAlignContent.SPACE_BETWEEN]:
    viewAlignContentStyleSheet.alignContentSpaceBetween,
  [ViewAlignContent.SPACE_AROUND]:
    viewAlignContentStyleSheet.alignContentSpaceAround,
  [ViewAlignContent.SPACE_EVENLY]:
    viewAlignContentStyleSheet.alignContentSpaceEvenly,
}
export const useViewAlignContentStyle = (alignContent?: ViewAlignContent) =>
  VIEW_ALIGN_CONTENT_STYLE[alignContent]

const VIEW_ALIGN_CONTENT_VALUE = {
  [ViewAlignContent.FLEX_START]: 'flex-start' as const,
  [ViewAlignContent.CENTER]: 'center' as const,
  [ViewAlignContent.FLEX_END]: 'flex-end' as const,
  [ViewAlignContent.STRETCH]: 'stretch' as const,
  [ViewAlignContent.SPACE_BETWEEN]: 'space-between' as const,
  [ViewAlignContent.SPACE_AROUND]: 'space-around' as const,
  [ViewAlignContent.SPACE_EVENLY]: 'space-evenly' as const,
}
export const useViewAlignContentValue = (alignContent?: ViewAlignContent) =>
  VIEW_ALIGN_CONTENT_VALUE[alignContent]
