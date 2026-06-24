import { BorderRadius } from '@/constants'
import { DIMENSION_NONE, FRACTION_MAX } from '@/helpers'
import { useBorderRadiusValue } from '@/hooks'
import { useLayoutEffect, useRef } from 'react'
import { ViewStyled } from './components'
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
  useViewAlignContentValue,
  useViewAlignItemsValue,
  useViewAlignSelfValue,
  useViewBackgroundColorValue,
  useViewBorderColorValue,
  useViewBorderWidthValue,
  useViewBoxShadowValue,
  useViewFlexBasisValue,
  useViewFlexDirectionValue,
  useViewFlexGrowValue,
  useViewFlexShrinkValue,
  useViewFlexWrapValue,
  useViewJustifyContentValue,
  useViewOpacityValue,
  useViewOverflowValue,
  useViewPositionDimensionValue,
  useViewPositionValue,
  useViewSizeValue,
  useViewSpacingValue,
  useViewTagValue,
  useViewTransformValue,
  useViewTransitionValue,
} from './hooks'
import type { ViewComponent, ViewProperties } from './view.types'

const View: ViewComponent = ({
  testId,
  tag = ViewTag.DIV,
  position = ViewPosition.RELATIVE,
  top,
  left,
  right,
  bottom,
  opacity,
  opacityTransitionDuration,
  scale,
  translateX,
  translateY,
  transformTransitionDuration,
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
  const ref = useRef<HTMLDivElement>(null)
  const layoutCallbackRef = useRef(onLayout)
  layoutCallbackRef.current = onLayout

  useLayoutEffect(() => {
    if (!ref.current) return
    const observer = new ResizeObserver(([entry]) => {
      if (layoutCallbackRef.current) {
        const { width, height } = entry.contentRect
        layoutCallbackRef.current({
          width,
          height,
        })
      }
    })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <ViewStyled
      data-testid={testId}
      ref={ref}
      as={useViewTagValue(tag)}
      css={{
        position: useViewPositionValue(position),
        top: useViewPositionDimensionValue(top),
        left: useViewPositionDimensionValue(left),
        right: useViewPositionDimensionValue(right),
        bottom: useViewPositionDimensionValue(bottom),
        opacity: useViewOpacityValue(opacity),
        transform: useViewTransformValue(scale, translateX, translateY),
        transition: useViewTransitionValue(
          opacityTransitionDuration,
          transformTransitionDuration,
        ),
        overflow: useViewOverflowValue(overflow),
        flexGrow: useViewFlexGrowValue(flexGrow),
        flexShrink: useViewFlexShrinkValue(flexShrink),
        flexBasis: useViewFlexBasisValue(flexBasis),
        flexWrap: useViewFlexWrapValue(flexWrap),
        flexDirection: useViewFlexDirectionValue(flexDirection),
        justifyContent: useViewJustifyContentValue(justifyContent),
        alignItems: useViewAlignItemsValue(alignItems),
        alignSelf: useViewAlignSelfValue(alignSelf),
        alignContent: useViewAlignContentValue(alignContent),
        gap: useViewSpacingValue(gap),
        marginTop: useViewSpacingValue(marginTop),
        paddingTop: useViewSpacingValue(paddingTop),
        marginLeft: useViewSpacingValue(marginLeft),
        paddingLeft: useViewSpacingValue(paddingLeft),
        marginRight: useViewSpacingValue(marginRight),
        paddingRight: useViewSpacingValue(paddingRight),
        marginBottom: useViewSpacingValue(marginBottom),
        paddingBottom: useViewSpacingValue(paddingBottom),
        minWidth: useViewSizeValue(minWidth),
        width: useViewSizeValue(width),
        maxWidth: useViewSizeValue(maxWidth),
        minHeight: useViewSizeValue(minHeight),
        height: useViewSizeValue(height),
        maxHeight: useViewSizeValue(maxHeight),
        boxShadow: useViewBoxShadowValue(boxShadow),
        borderColor: useViewBorderColorValue(borderColor),
        borderWidth: useViewBorderWidthValue(borderWidth),
        borderWidthTop: useViewBorderWidthValue(borderWidthTop),
        borderWidthLeft: useViewBorderWidthValue(borderWidthLeft),
        borderWidthRight: useViewBorderWidthValue(borderWidthRight),
        borderWidthBottom: useViewBorderWidthValue(borderWidthBottom),
        borderRadius: useBorderRadiusValue(borderRadius),
        borderRadiusTopLeft: useBorderRadiusValue(borderRadiusTopLeft),
        borderRadiusTopRight: useBorderRadiusValue(borderRadiusTopRight),
        borderRadiusBottomLeft: useBorderRadiusValue(borderRadiusBottomLeft),
        borderRadiusBottomRight: useBorderRadiusValue(borderRadiusBottomRight),
        backgroundColor: useViewBackgroundColorValue(backgroundColor),
      }}
    >
      {children}
    </ViewStyled>
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
