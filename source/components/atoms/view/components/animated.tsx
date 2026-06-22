import {
  useBorderBottomLeftRadiusStyle,
  useBorderBottomRightRadiusStyle,
  useBorderRadiusStyle,
  useBorderTopLeftRadiusStyle,
  useBorderTopRightRadiusStyle,
} from '@/hooks'
import { useCallback, useLayoutEffect, useRef } from 'react'
import { Animated, LayoutChangeEvent, StyleSheet } from 'react-native'
import {
  ViewAlignItems,
  ViewFlexDirection,
  ViewFlexWrap,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
} from '../constants'
import type { ViewTransitionDuration } from '../constants'
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
  useViewTransitionDurationValue,
  useViewTranslateNativeValue,
} from '../hooks'
import type { ViewProperties } from '../view.types'

type ViewAnimatedProperties = ViewProperties & {
  transitionDuration: ViewTransitionDuration
}

export const ViewAnimated = ({
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
  transitionDuration,
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
}: ViewAnimatedProperties) => {
  const durationValue = useViewTransitionDurationValue(transitionDuration)
  const opacityTarget = useViewOpacityValue(opacity) ?? 1
  const scaleTarget = scale?.toValue() ?? 1
  const translateXTarget = useViewTranslateNativeValue(translateX)
  const translateYTarget = useViewTranslateNativeValue(translateY)

  const animatedOpacity = useRef(new Animated.Value(opacityTarget))
  const animatedScale = useRef(new Animated.Value(scaleTarget))
  const animatedTranslateX = useRef(new Animated.Value(translateXTarget))
  const animatedTranslateY = useRef(new Animated.Value(translateYTarget))

  useLayoutEffect(() => {
    Animated.parallel([
      Animated.timing(animatedOpacity.current, {
        toValue: opacityTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScale.current, {
        toValue: scaleTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
      Animated.timing(animatedTranslateX.current, {
        toValue: translateXTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
      Animated.timing(animatedTranslateY.current, {
        toValue: translateYTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
    ]).start()
  }, [opacityTarget, scaleTarget, translateXTarget, translateYTarget, durationValue])

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (onLayout) {
        const height = event.nativeEvent.layout.height
        const width = event.nativeEvent.layout.width
        onLayout({ width, height })
      }
    },
    [onLayout],
  )

  return (
    <Animated.View
      testID={testId}
      style={[
        viewAnimatedStyleSheet.default,
        useViewPositionStyle(position),
        {
          top: useViewPositionDimensionValue(top),
          left: useViewPositionDimensionValue(left),
          right: useViewPositionDimensionValue(right),
          bottom: useViewPositionDimensionValue(bottom),
        },
        {
          opacity: animatedOpacity.current,
          transform: [
            { scale: animatedScale.current },
            { translateX: animatedTranslateX.current },
            { translateY: animatedTranslateY.current },
          ],
        },
        useViewOverflowStyle(overflow),
        {
          flexGrow: useViewFlexGrowValue(flexGrow),
          flexShrink: useViewFlexShrinkValue(flexShrink),
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
    </Animated.View>
  )
}

const viewAnimatedStyleSheet = StyleSheet.create({
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
