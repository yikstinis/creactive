import { StyledView } from './components'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBorderRadius,
  ViewFlexDirection,
  ViewHTMLTag,
  ViewJustifyContent,
  ViewSpacing,
  ViewTag,
} from './constants'
import {
  useViewBorderRadiusCSSValue,
  useViewSizeValue,
  useViewSpacingTokenValue,
} from './hooks'
import type { ViewComponent } from './view.types'

const View: ViewComponent = ({
  tag = ViewTag.DIV,
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
View.FlexDirection = ViewFlexDirection
View.JustifyContent = ViewJustifyContent
View.AlignItems = ViewAlignItems
View.AlignSelf = ViewAlignSelf
View.AlignContent = ViewAlignContent
View.Spacing = ViewSpacing
View.BorderRadius = ViewBorderRadius
export default View
