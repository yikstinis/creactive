import { View as ReactNativeView, StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBackgroundColor,
  ViewBorderColor,
  ViewBorderRadius,
  ViewBorderWidth,
  ViewBoxShadow,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
  ViewSpacing,
  ViewTag,
} from './constants'
import {
  useFlexBasisStyle,
  useFlexGrowStyle,
  useFlexShrinkStyle,
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewBackgroundColorStyle,
  useViewBorderColorStyle,
  useViewBorderRadiusStyle,
  useViewBorderWidthBottomStyle,
  useViewBorderWidthLeftStyle,
  useViewBorderWidthRightStyle,
  useViewBorderWidthStyle,
  useViewBorderWidthTopStyle,
  useViewBoxShadowStyle,
  useViewFlexDirectionStyle,
  useViewJustifyContentStyle,
  useViewMarginBottomStyle,
  useViewMarginLeftStyle,
  useViewMarginRightStyle,
  useViewMarginTopStyle,
  useViewOpacityValue,
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
    borderStyle: 'solid',
    textDecoration: 'none',
    boxSizing: 'border-box',
  },
})
const View: ViewComponent = ({
  testId,
  position = ViewPosition.RELATIVE,
  top,
  left,
  right,
  bottom,
  opacity,
  overflow = ViewOverflow.VISIBLE,
  flexGrow,
  flexShrink,
  flexBasis,
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
  boxShadow,
  borderColor,
  borderWidth,
  borderWidthTop,
  borderWidthLeft,
  borderWidthRight,
  borderWidthBottom,
  borderRadius,
  backgroundColor,
  children,
}) => {
  return (
    <ReactNativeView
      testID={testId}
      style={[
        viewStyleSheet.default,
        useViewPositionStyle(position),
        {
          top: useViewPositionValue(top),
          left: useViewPositionValue(left),
          right: useViewPositionValue(right),
          bottom: useViewPositionValue(bottom),
        },
        {
          opacity: useViewOpacityValue(opacity),
        },
        useViewOverflowStyle(overflow),
        // TODO: Make this styles consistent..
        useFlexGrowStyle(flexGrow),
        useFlexShrinkStyle(flexShrink),
        useFlexBasisStyle(flexBasis),

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
        useViewBoxShadowStyle(boxShadow),
        useViewBorderColorStyle(borderColor),
        useViewBorderWidthStyle(borderWidth),
        useViewBorderWidthTopStyle(borderWidthTop),
        useViewBorderWidthLeftStyle(borderWidthLeft),
        useViewBorderWidthRightStyle(borderWidthRight),
        useViewBorderWidthBottomStyle(borderWidthBottom),
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
View.BoxShadow = ViewBoxShadow
View.BorderColor = ViewBorderColor
View.BorderWidth = ViewBorderWidth
View.BorderRadius = ViewBorderRadius
View.BackgroundColor = ViewBackgroundColor
export default View
