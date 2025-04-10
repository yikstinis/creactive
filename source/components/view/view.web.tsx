import { StyledView } from './components'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewHTMLTag,
  ViewJustifyContent,
  ViewSpacing,
  ViewTag,
} from './constants'
import { useViewSpacingTokenValue } from './hooks'
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
export default View
