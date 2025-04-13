import { View as ReactNativeView, StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBackgroundColor,
  ViewBorderColor,
  ViewBorderRadius,
  ViewBorderWidth,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
  ViewSpacing,
  ViewTag,
} from './constants'
import {
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewBackgroundColorStyle,
  useViewBorderColorStyle,
  useViewBorderRadiusStyle,
  useViewBorderWidthStyle,
  useViewFlexDirectionStyle,
  useViewJustifyContentStyle,
  useViewMarginBottomStyle,
  useViewMarginLeftStyle,
  useViewMarginRightStyle,
  useViewMarginTopStyle,
  useViewOverflowStyle,
  useViewPaddingBottomStyle,
  useViewPaddingLeftStyle,
  useViewPaddingRightStyle,
  useViewPaddingTopStyle,
  useViewPositionStyle,
  useViewPositionValue,
  useViewSizeValue,
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
  position = ViewPosition.RELATIVE,
  top,
  left,
  right,
  bottom,
  overflow = ViewOverflow.VISIBLE,
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
  minWidth,
  width,
  maxWidth,
  minHeight,
  height,
  maxHeight,
  borderColor,
  borderWidth,
  borderRadius,
  backgroundColor = ViewBackgroundColor.TRANSPARENT,
  children,
}) => {
  return (
    <ReactNativeView
      style={[
        viewStyleSheet.default,
        useViewPositionStyle(position),
        {
          top: useViewPositionValue(top),
          left: useViewPositionValue(left),
          right: useViewPositionValue(right),
          bottom: useViewPositionValue(bottom),
        },
        useViewOverflowStyle(overflow),
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
        {
          minWidth: useViewSizeValue(minWidth),
          width: useViewSizeValue(width),
          maxWidth: useViewSizeValue(maxWidth),
          minHeight: useViewSizeValue(minHeight),
          height: useViewSizeValue(height),
          maxHeight: useViewSizeValue(maxHeight),
        },
        useViewBorderColorStyle(borderColor),
        useViewBorderWidthStyle(borderWidth),
        useViewBorderRadiusStyle(borderRadius),
        useViewBackgroundColorStyle(backgroundColor),
      ]}
    >
      {children}
    </ReactNativeView>
  )
}
View.Tag = ViewTag
View.Position = ViewPosition
View.Overflow = ViewOverflow
View.FlexDirection = ViewFlexDirection
View.JustifyContent = ViewJustifyContent
View.AlignItems = ViewAlignItems
View.AlignSelf = ViewAlignSelf
View.AlignContent = ViewAlignContent
View.Spacing = ViewSpacing
View.BorderColor = ViewBorderColor
View.BorderWidth = ViewBorderWidth
View.BorderRadius = ViewBorderRadius
View.BackgroundColor = ViewBackgroundColor
export default View
