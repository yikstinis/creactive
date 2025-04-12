import styled from '@emotion/styled'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewOverflow,
} from '../constants'
import type { StyledViewProps } from '../view.types'

// View component web version styling maps.
// Leaving it here to keep all web view styles in one place.
// It seems like a good idea, feeling no conflict with the native styling.

// Overflow.
const OverflowStyle = {
  [ViewOverflow.VISIBLE]: 'visible',
  [ViewOverflow.HIDDEN]: 'hidden',
}

// Flex direction.
const FlexDirectionStyle = {
  [ViewFlexDirection.COLUMN]: 'column',
  [ViewFlexDirection.ROW]: 'row',
}
// Justify content.
const JustifyContentStyle = {
  [ViewJustifyContent.FLEX_START]: 'flex-start',
  [ViewJustifyContent.FLEX_END]: 'flex-end',
  [ViewJustifyContent.CENTER]: 'center',
  [ViewJustifyContent.SPACE_BETWEEN]: 'space-between',
  [ViewJustifyContent.SPACE_AROUND]: 'space-around',
  [ViewJustifyContent.SPACE_EVENLY]: 'space-evenly',
}
// Align items.
const AlignItemsStyle = {
  [ViewAlignItems.FLEX_START]: 'flex-start',
  [ViewAlignItems.FLEX_END]: 'flex-end',
  [ViewAlignItems.STRETCH]: 'stretch',
  [ViewAlignItems.CENTER]: 'center',
  [ViewAlignItems.BASELINE]: 'baseline',
}
// Align self.
const AlignSelfStyle = {
  [ViewAlignSelf.FLEX_START]: 'flex-start',
  [ViewAlignSelf.FLEX_END]: 'flex-end',
  [ViewAlignSelf.CENTER]: 'center',
  [ViewAlignSelf.STRETCH]: 'stretch',
  [ViewAlignSelf.BASELINE]: 'baseline',
}
// Align content.
const AlignContentStyle = {
  [ViewAlignContent.FLEX_START]: 'flex-start',
  [ViewAlignContent.FLEX_END]: 'flex-end',
  [ViewAlignContent.CENTER]: 'center',
  [ViewAlignContent.STRETCH]: 'stretch',
  [ViewAlignContent.SPACE_BETWEEN]: 'space-between',
  [ViewAlignContent.SPACE_AROUND]: 'space-around',
}
// Styled view component for inner usage inside web version.
export const StyledView = styled.div<StyledViewProps>`
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 0;
  position: relative;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  overflow: ${({ overflow }) => OverflowStyle[overflow]};
  flex-direction: ${({ flexDirection }) => FlexDirectionStyle[flexDirection]};
  justify-content: ${({ justifyContent }) =>
    JustifyContentStyle[justifyContent]};
  align-items: ${({ alignItems }) => AlignItemsStyle[alignItems]};
  align-self: ${({ alignSelf }) => AlignSelfStyle[alignSelf]};
  align-content: ${({ alignContent }) => AlignContentStyle[alignContent]};
  margin-top: ${({ marginTop }) => marginTop}px;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  padding-right: ${({ paddingRight }) => paddingRight}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  border-radius: ${({ borderRadius }) => borderRadius};
`
