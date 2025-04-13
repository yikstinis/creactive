import { StyledView } from './components'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBackgroundColor,
  ViewBorderRadius,
  ViewBorderWidth,
  ViewFlexDirection,
  ViewHTMLTag,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
  ViewSpacing,
  ViewTag,
} from './constants'
import {
  useViewBorderRadiusCSSValue,
  useViewBorderWidthTokenValue,
  useViewPositionValue,
  useViewSizeValue,
  useViewSpacingTokenValue,
} from './hooks'
import { useViewBackgroundColorCSSValue } from './hooks/use-color'
import type { ViewComponent } from './view.types'

const View: ViewComponent = ({
  tag = ViewTag.DIV,
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
  borderWidth,
  borderRadius,
  backgroundColor = ViewBackgroundColor.TRANSPARENT,
  children,
}) => {
  return (
    <StyledView
      as={ViewHTMLTag[tag]}
      position={position}
      top={useViewPositionValue(top)}
      left={useViewPositionValue(left)}
      right={useViewPositionValue(right)}
      bottom={useViewPositionValue(bottom)}
      overflow={overflow}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      alignContent={alignContent}
      marginTop={useViewSpacingTokenValue(marginTop)}
      paddingTop={useViewSpacingTokenValue(paddingTop)}
      marginLeft={useViewSpacingTokenValue(marginLeft)}
      paddingLeft={useViewSpacingTokenValue(paddingLeft)}
      marginRight={useViewSpacingTokenValue(marginRight)}
      paddingRight={useViewSpacingTokenValue(paddingRight)}
      marginBottom={useViewSpacingTokenValue(marginBottom)}
      paddingBottom={useViewSpacingTokenValue(paddingBottom)}
      minWidth={useViewSizeValue(minWidth)}
      width={useViewSizeValue(width)}
      maxWidth={useViewSizeValue(maxWidth)}
      minHeight={useViewSizeValue(minHeight)}
      height={useViewSizeValue(height)}
      maxHeight={useViewSizeValue(maxHeight)}
      borderWidth={useViewBorderWidthTokenValue(borderWidth)}
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
View.BorderWidth = ViewBorderWidth
View.BorderRadius = ViewBorderRadius
View.BackgroundColor = ViewBackgroundColor
export default View
