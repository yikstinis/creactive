import { BorderRadius } from '@/constants'
import { DIMENSION_NONE, FRACTION_MAX } from '@/helpers'
import {
  useBorderBottomLeftRadiusStyle,
  useBorderBottomRightRadiusStyle,
  useBorderRadiusStyle,
  useBorderTopLeftRadiusStyle,
  useBorderTopRightRadiusStyle,
} from '@/hooks'
import { type FunctionComponent, useCallback } from 'react'
import {
  LayoutChangeEvent,
  View as ReactNativeView,
  StyleSheet,
} from 'react-native'
import { ViewAnimated } from './components/animated'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBackgroundColor,
  ViewBorderColor,
  ViewBorderWidth,
  ViewBoxShadow,
  ViewFlexDirection,
  ViewFlexWrap,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
  ViewSpacing,
  ViewTag,
  ViewTransitionDuration,
} from './constants'
import {
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewBackgroundColorStyle,
  useViewBorderBottomWidthStyle,
  useViewBorderColorStyle,
  useViewBorderLeftWidthStyle,
  useViewBorderRightWidthStyle,
  useViewBorderTopWidthStyle,
  useViewBorderWidthStyle,
  useViewBoxShadowStyle,
  useViewFlexBasisValue,
  useViewFlexDirectionStyle,
  useViewFlexGrowValue,
  useViewFlexShrinkValue,
  useViewFlexWrapStyle,
  useViewGapStyle,
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
  useViewTranslateNativeValue,
} from './hooks'
import type { ViewComponent, ViewProperties } from './view.types'

const ViewNative: FunctionComponent<ViewProperties> = ({
  testId,
  position = ViewPosition.RELATIVE,
  top,
  left,
  right,
  bottom,
  opacity,
  scale,
  translateX,
  translateY,
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
  gap,
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
  const scaleValue = scale?.toValue() ?? 1
  const translateXValue = useViewTranslateNativeValue(translateX)
  const translateYValue = useViewTranslateNativeValue(translateY)

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
        {
          transform: [
            { scale: scaleValue },
            { translateX: translateXValue },
            { translateY: translateYValue },
          ],
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
        useViewGapStyle(gap),
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
        useBorderRadiusStyle(borderRadius),
        useBorderTopLeftRadiusStyle(borderRadiusTopLeft),
        useBorderTopRightRadiusStyle(borderRadiusTopRight),
        useBorderBottomLeftRadiusStyle(borderRadiusBottomLeft),
        useBorderBottomRightRadiusStyle(borderRadiusBottomRight),
        useViewBackgroundColorStyle(backgroundColor),
      ]}
      onLayout={handleLayout}
    >
      {children}
    </ReactNativeView>
  )
}

const viewStyleSheet = StyleSheet.create({
  default: {
    display: 'flex',
    margin: 0,
    padding: 0,
    zIndex: 0,
    position: 'relative',
    listStyle: 'none',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
})

const View: ViewComponent = (props) => {
  if (
    props.opacityTransitionDuration !== undefined ||
    props.transformTransitionDuration !== undefined
  ) {
    return <ViewAnimated {...props} />
  }
  return <ViewNative {...props} />
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
View.BorderRadius = BorderRadius
View.BackgroundColor = ViewBackgroundColor
View.TransitionDuration = ViewTransitionDuration

const ViewFillAbsolute = ({
  children,
  ...rest
}: Omit<ViewProperties, 'position' | 'top' | 'left' | 'right' | 'bottom'>) => (
  <View
    {...rest}
    position={ViewPosition.ABSOLUTE}
    top={DIMENSION_NONE}
    left={DIMENSION_NONE}
    right={DIMENSION_NONE}
    bottom={DIMENSION_NONE}
  >
    {children}
  </View>
)
const ViewFillFlex = ({
  children,
  ...rest
}: Omit<ViewProperties, 'flexGrow'>) => (
  <View
    {...rest}
    flexGrow={FRACTION_MAX}
  >
    {children}
  </View>
)
View.Fill = {
  Absolute: ViewFillAbsolute,
  Flex: ViewFillFlex,
}

export default View
