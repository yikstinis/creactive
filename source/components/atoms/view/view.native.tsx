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
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewBackgroundColorStyle,
  useViewBorderBottomLeftRadiusStyle,
  useViewBorderBottomRightRadiusStyle,
  useViewBorderBottomWidthStyle,
  useViewBorderColorStyle,
  useViewBorderLeftWidthStyle,
  useViewBorderRadiusStyle,
  useViewBorderRightWidthStyle,
  useViewBorderTopLeftRadiusStyle,
  useViewBorderTopRightRadiusStyle,
  useViewBorderTopWidthStyle,
  useViewBorderWidthStyle,
  useViewBoxShadowStyle,
  useViewFlexBasisValue,
  useViewFlexDirectionStyle,
  useViewFlexGrowValue,
  useViewFlexShrinkValue,
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
  useViewPositionDimensionValue,
  useViewPositionStyle,
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
  alignContent,
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
    [onLayout],
  )

  return (
    <ReactNativeView
      testID={testId}
      style={[
        viewStyleSheet.default,
        useViewPositionStyle(position),
        {
          top: useViewPositionDimensionValue(top),
          left: useViewPositionDimensionValue(left),
          right: useViewPositionDimensionValue(right),
          bottom: useViewPositionDimensionValue(bottom),
        },
        {
          opacity: useViewOpacityValue(opacity),
        },
        useViewOverflowStyle(overflow),
        {
          flexGrow: useViewFlexGrowValue(flexGrow),
          flexShrink: useViewFlexShrinkValue(flexShrink),
          // This hook returns cross platform dimension value.
          // Its return type contains web specific `${number}px` type also.
          // To remove type check error we cast result type here - it is safe.
          flexBasis: useViewFlexBasisValue(flexBasis) as number | `${number}%`,
        },
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
        useViewBorderTopWidthStyle(borderWidthTop),
        useViewBorderLeftWidthStyle(borderWidthLeft),
        useViewBorderRightWidthStyle(borderWidthRight),
        useViewBorderBottomWidthStyle(borderWidthBottom),
        useViewBorderRadiusStyle(borderRadius),
        useViewBorderTopLeftRadiusStyle(borderRadiusTopLeft),
        useViewBorderTopRightRadiusStyle(borderRadiusTopRight),
        useViewBorderBottomLeftRadiusStyle(borderRadiusBottomLeft),
        useViewBorderBottomRightRadiusStyle(borderRadiusBottomRight),
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
