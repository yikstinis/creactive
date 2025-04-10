import { StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
} from '../constants'

// Flex direction native style sheet.
const viewFlexDirectionStyleSheet = StyleSheet.create({
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
})
// Flex direction native style map.
const ViewFlexDirectionStyle = {
  [ViewFlexDirection.COLUMN]: viewFlexDirectionStyleSheet.flexDirectionColumn,
  [ViewFlexDirection.ROW]: viewFlexDirectionStyleSheet.flexDirectionRow,
}
// Flex direction native hook.
export const useViewFlexDirectionStyle = (flexDirection: ViewFlexDirection) =>
  ViewFlexDirectionStyle[flexDirection]

// Justify content native style sheet.
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
// Justify content native style map.
const ViewJustifyContentStyle = {
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
// Justify content native hook.
export const useViewJustifyContentStyle = (
  justifyContent: ViewJustifyContent
) => ViewJustifyContentStyle[justifyContent]

// Align items native style sheet.
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
// Align items native style map.
const ViewAlignItemsStyle = {
  [ViewAlignItems.FLEX_START]: viewAlignItemsStyleSheet.alignItemsFlexStart,
  [ViewAlignItems.FLEX_END]: viewAlignItemsStyleSheet.alignItemsFlexEnd,
  [ViewAlignItems.CENTER]: viewAlignItemsStyleSheet.alignItemsCenter,
  [ViewAlignItems.STRETCH]: viewAlignItemsStyleSheet.alignItemsStretch,
  [ViewAlignItems.BASELINE]: viewAlignItemsStyleSheet.alignItemsBaseline,
}
// Align items native hook.
export const useViewAlignItemsStyle = (alignItems: ViewAlignItems) =>
  ViewAlignItemsStyle[alignItems]

// Align self native style sheet.
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
// Align self native style map.
const ViewAlignSelfStyle = {
  [ViewAlignSelf.FLEX_START]: viewAlignSelfStyleSheet.alignSelfFlexStart,
  [ViewAlignSelf.FLEX_END]: viewAlignSelfStyleSheet.alignSelfFlexEnd,
  [ViewAlignSelf.CENTER]: viewAlignSelfStyleSheet.alignSelfCenter,
  [ViewAlignSelf.STRETCH]: viewAlignSelfStyleSheet.alignSelfStretch,
  [ViewAlignSelf.BASELINE]: viewAlignSelfStyleSheet.alignSelfBaseline,
}
// Align self native hook.
export const useViewAlignSelfStyle = (alignSelf?: ViewAlignSelf) =>
  ViewAlignSelfStyle[alignSelf]

// Align content native style sheet.
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
// Align content native style map.
const ViewAlignContentStyle = {
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
// Align content native hook.
export const useViewAlignContentStyle = (alignContent: ViewAlignContent) =>
  ViewAlignContentStyle[alignContent]
