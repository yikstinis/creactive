import { StyledView } from './components'
import {
  VIEW_HTML_TAG,
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
  useViewBackgroundColorCSSValue,
  useViewBorderColorCSSValue,
  useViewBorderRadiusCSSValue,
  useViewBorderWidthCSSValue,
  useViewBoxShadowCSSValue,
  useViewOpacityValue,
  useViewPositionValue,
  useViewSizeValue,
  useViewSpacingCSSValue,
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
    <StyledView
      data-testid={testId}
      as={VIEW_HTML_TAG[tag]}
      position={position}
      top={useViewPositionValue(top)}
      left={useViewPositionValue(left)}
      right={useViewPositionValue(right)}
      bottom={useViewPositionValue(bottom)}
      opacity={useViewOpacityValue(opacity)}
      overflow={overflow}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      alignContent={alignContent}
      marginTop={useViewSpacingCSSValue(marginTop)}
      paddingTop={useViewSpacingCSSValue(paddingTop)}
      marginLeft={useViewSpacingCSSValue(marginLeft)}
      paddingLeft={useViewSpacingCSSValue(paddingLeft)}
      marginRight={useViewSpacingCSSValue(marginRight)}
      paddingRight={useViewSpacingCSSValue(paddingRight)}
      marginBottom={useViewSpacingCSSValue(marginBottom)}
      paddingBottom={useViewSpacingCSSValue(paddingBottom)}
      minWidth={useViewSizeValue(minWidth)}
      width={useViewSizeValue(width)}
      maxWidth={useViewSizeValue(maxWidth)}
      minHeight={useViewSizeValue(minHeight)}
      height={useViewSizeValue(height)}
      maxHeight={useViewSizeValue(maxHeight)}
      boxShadow={useViewBoxShadowCSSValue(boxShadow)}
      borderColor={useViewBorderColorCSSValue(borderColor)}
      borderWidth={useViewBorderWidthCSSValue(borderWidth)}
      borderWidthTop={useViewBorderWidthCSSValue(borderWidthTop)}
      borderWidthLeft={useViewBorderWidthCSSValue(borderWidthLeft)}
      borderWidthRight={useViewBorderWidthCSSValue(borderWidthRight)}
      borderWidthBottom={useViewBorderWidthCSSValue(borderWidthBottom)}
      borderRadius={useViewBorderRadiusCSSValue(borderRadius)}
      backgroundColor={useViewBackgroundColorCSSValue(backgroundColor)}
    >
      {children}
    </StyledView>
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
