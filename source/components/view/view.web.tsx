import styled from '@emotion/styled'
import {
  HTMLTag,
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewTag,
} from './constants'
import type { StyledViewProps, ViewComponent } from './view.types'

const StyledView = styled.div<StyledViewProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => {
    switch (flexDirection) {
      case ViewFlexDirection.COLUMN:
        return 'column'
      case ViewFlexDirection.ROW:
        return 'row'
    }
  }};
  justify-content: ${({ justifyContent }) => {
    switch (justifyContent) {
      case ViewJustifyContent.FLEX_START:
        return 'flex-start'
      case ViewJustifyContent.FLEX_END:
        return 'flex-end'
      case ViewJustifyContent.CENTER:
        return 'center'
      case ViewJustifyContent.SPACE_BETWEEN:
        return 'space-between'
      case ViewJustifyContent.SPACE_AROUND:
        return 'space-around'
      case ViewJustifyContent.SPACE_EVENLY:
        return 'space-evenly'
    }
  }};
  align-items: ${({ alignItems }) => {
    switch (alignItems) {
      case ViewAlignItems.FLEX_START:
        return 'flex-start'
      case ViewAlignItems.FLEX_END:
        return 'flex-end'
      case ViewAlignItems.CENTER:
        return 'center'
      case ViewAlignItems.STRETCH:
        return 'stretch'
      case ViewAlignItems.BASELINE:
        return 'baseline'
    }
  }};
  align-self: ${({ alignSelf }) => {
    switch (alignSelf) {
      case ViewAlignSelf.FLEX_START:
        return 'flex-start'
      case ViewAlignSelf.FLEX_END:
        return 'flex-end'
      case ViewAlignSelf.CENTER:
        return 'center'
      case ViewAlignSelf.STRETCH:
        return 'stretch'
      case ViewAlignSelf.BASELINE:
        return 'baseline'
    }
  }};
  align-content: ${({ alignContent }) => {
    switch (alignContent) {
      case ViewAlignContent.FLEX_START:
        return 'flex-start'
      case ViewAlignContent.FLEX_END:
        return 'flex-end'
      case ViewAlignContent.CENTER:
        return 'center'
      case ViewAlignContent.STRETCH:
        return 'stretch'
      case ViewAlignContent.SPACE_BETWEEN:
        return 'space-between'
      case ViewAlignContent.SPACE_AROUND:
        return 'space-around'
    }
  }};
  margin: 0;
  padding: 0;
  z-index: 0;
  position: relative;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
`
const View: ViewComponent = ({
  tag = ViewTag.DIV,
  flexDirection = ViewFlexDirection.COLUMN,
  justifyContent = ViewJustifyContent.FLEX_START,
  alignItems = ViewAlignItems.STRETCH,
  alignContent = ViewAlignContent.FLEX_START,
  alignSelf,
  children,
}) => {
  return (
    <StyledView
      as={HTMLTag[tag]}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      alignContent={alignContent}
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
export default View
