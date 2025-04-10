import { View as ReactNativeView, StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewSpacing,
  ViewTag,
} from './constants'
import {
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewFlexDirectionStyle,
  useViewJustifyContentStyle,
  useViewMarginBottomStyle,
  useViewMarginLeftStyle,
  useViewMarginRightStyle,
  useViewMarginTopStyle,
  useViewPaddingBottomStyle,
  useViewPaddingLeftStyle,
  useViewPaddingRightStyle,
  useViewPaddingTopStyle,
} from './hooks'
import type { ViewComponent } from './view.types'

const viewStyleSheet = StyleSheet.create({
  default: {
    display: 'flex',
    margin: 0,
    padding: 0,
    zIndex: 0,
    position: 'relative',
    listStyle: 'none',
    textDecoration: 'none',
    boxSizing: 'border-box',
  },
})
const View: ViewComponent = ({
  flexDirection = ViewFlexDirection.COLUMN,
  justifyContent = ViewJustifyContent.FLEX_START,
  alignItems = ViewAlignItems.STRETCH,
  alignSelf,
  alignContent = ViewAlignContent.FLEX_START,
  marginTop,
  paddingTop,
  marginLeft,
  paddingLeft,
  marginRight,
  paddingRight,
  marginBottom,
  paddingBottom,
  children,
}) => {
  return (
    <ReactNativeView
      style={[
        viewStyleSheet.default,
        useViewFlexDirectionStyle(flexDirection),
        useViewJustifyContentStyle(justifyContent),
        useViewAlignItemsStyle(alignItems),
        useViewAlignSelfStyle(alignSelf),
        useViewAlignContentStyle(alignContent),
        useViewMarginTopStyle(marginTop),
        useViewPaddingTopStyle(paddingTop),
        useViewMarginLeftStyle(marginLeft),
        useViewPaddingLeftStyle(paddingLeft),
        useViewMarginRightStyle(marginRight),
        useViewPaddingRightStyle(paddingRight),
        useViewMarginBottomStyle(marginBottom),
        useViewPaddingBottomStyle(paddingBottom),
      ]}
    >
      {children}
    </ReactNativeView>
  )
}
View.Tag = ViewTag
View.FlexDirection = ViewFlexDirection
View.JustifyContent = ViewJustifyContent
View.AlignItems = ViewAlignItems
View.AlignSelf = ViewAlignSelf
View.AlignContent = ViewAlignContent
View.Spacing = ViewSpacing
export default View
