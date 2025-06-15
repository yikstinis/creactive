import { useCallback } from 'react'
import {
  LayoutChangeEvent,
  View as ReactNativeView,
  StyleSheet,
} from 'react-native'
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
  ViewFlexWrap,
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
  useViewBorderRadiusBottomLeftStyle,
  useViewBorderRadiusBottomRightStyle,
  useViewBorderRadiusStyle,
  useViewBorderRadiusTopLeftStyle,
  useViewBorderRadiusTopRightStyle,
  useViewBorderWidthBottomStyle,
  useViewBorderWidthLeftStyle,
  useViewBorderWidthRightStyle,
  useViewBorderWidthStyle,
  useViewBorderWidthTopStyle,
  useViewBoxShadowStyle,
  useViewFlexDirectionStyle,
  useViewFlexWrapStyle,
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
  flexWrap = ViewFlexWrap.NONE,
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
  borderRadiusTopLeft,
  borderRadiusTopRight,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  backgroundColor,
  children,
  onLayout,
}) => {
  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (onLayout) {
        const height = event.nativeEvent.layout.height
        const width = event.nativeEvent.layout.width
        onLayout({
          width,
          height,
        })
      }
    },
    [onLayout]
  )

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

        useViewFlexWrapStyle(flexWrap),
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
        useViewBorderRadiusTopLeftStyle(borderRadiusTopLeft),
        useViewBorderRadiusTopRightStyle(borderRadiusTopRight),
        useViewBorderRadiusBottomLeftStyle(borderRadiusBottomLeft),
        useViewBorderRadiusBottomRightStyle(borderRadiusBottomRight),
        useViewBackgroundColorStyle(backgroundColor),
      ]}
      onLayout={handleLayout}
    >
      {children}
    </ReactNativeView>
  )
}
View.Tag = ViewTag
View.Position = ViewPosition
View.Overflow = ViewOverflow
View.FlexWrap = ViewFlexWrap
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
