import { useLayoutEffect, useRef } from 'react'
import { ViewStyled } from './components'
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
  useViewAlignContentValue,
  useViewAlignItemsValue,
  useViewAlignSelfValue,
  useViewBackgroundColorValue,
  useViewBorderColorValue,
  useViewBorderRadiusValue,
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
} from './hooks'
import type { ViewComponent } from './view.types'

const View: ViewComponent = ({
  testId,
  tag = ViewTag.DIV,
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
  const ref = useRef<HTMLDivElement | undefined>(undefined)
  const layoutCallbackRef = useRef(onLayout)
  layoutCallbackRef.current = onLayout
  // TODO: Add resize event listener and layout callback..
  useLayoutEffect(() => {
    if (ref.current && layoutCallbackRef.current) {
      const clientRect = ref.current.getBoundingClientRect()
      layoutCallbackRef.current({
        width: clientRect.width,
        height: clientRect.height,
      })
    }
  }, [])
  return (
    <ViewStyled
      data-testid={testId}
      ref={ref}
      as={useViewTagValue(tag)}
      values={{
        position: useViewPositionValue(position),
        top: useViewPositionDimensionValue(top),
        left: useViewPositionDimensionValue(left),
        right: useViewPositionDimensionValue(right),
        bottom: useViewPositionDimensionValue(bottom),
        opacity: useViewOpacityValue(opacity),
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
        borderRadius: useViewBorderRadiusValue(borderRadius),
        borderRadiusTopLeft: useViewBorderRadiusValue(borderRadiusTopLeft),
        borderRadiusTopRight: useViewBorderRadiusValue(borderRadiusTopRight),
        borderRadiusBottomLeft: useViewBorderRadiusValue(
          borderRadiusBottomLeft,
        ),
        borderRadiusBottomRight: useViewBorderRadiusValue(
          borderRadiusBottomRight,
        ),
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
View.BorderRadius = ViewBorderRadius
View.BackgroundColor = ViewBackgroundColor
export default View
