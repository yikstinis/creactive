import { StyledView } from './components'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBorderRadius,
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
  useViewPositionValue,
  useViewSizeValue,
  useViewSpacingTokenValue,
} from './hooks'
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
  borderRadius,
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
      borderRadius={useViewBorderRadiusCSSValue(borderRadius)}
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
View.BorderRadius = ViewBorderRadius
export default View
