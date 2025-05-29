import styled from '@emotion/styled'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewFlexWrap,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
} from '../constants'
import type { StyledViewProps } from '../view.types'

// View component web version styling maps.
// Leaving it here to keep all web view styles in one place.
// It seems like a good idea, feeling no conflict with the native styling.

const POSITION_CSS_VALUE = {
  [ViewPosition.RELATIVE]: 'relative',
  [ViewPosition.ABSOLUTE]: 'absolute',
}

const OVERFLOW_CSS_VALUE = {
  [ViewOverflow.VISIBLE]: 'visible',
  [ViewOverflow.HIDDEN]: 'hidden',
}

const FLEX_WRAP_CSS_VALUE = {
  [ViewFlexWrap.NONE]: 'nowrap',
  [ViewFlexWrap.WRAP]: 'wrap',
}
const FLEX_DIRECTION_CSS_VALUE = {
  [ViewFlexDirection.COLUMN]: 'column',
  [ViewFlexDirection.ROW]: 'row',
}

const JUSTUFY_CONTENT_CSS_VALUE = {
  [ViewJustifyContent.FLEX_START]: 'flex-start',
  [ViewJustifyContent.FLEX_END]: 'flex-end',
  [ViewJustifyContent.CENTER]: 'center',
  [ViewJustifyContent.SPACE_BETWEEN]: 'space-between',
  [ViewJustifyContent.SPACE_AROUND]: 'space-around',
  [ViewJustifyContent.SPACE_EVENLY]: 'space-evenly',
}

const ALIGN_ITEMS_CSS_VALUE = {
  [ViewAlignItems.FLEX_START]: 'flex-start',
  [ViewAlignItems.FLEX_END]: 'flex-end',
  [ViewAlignItems.STRETCH]: 'stretch',
  [ViewAlignItems.CENTER]: 'center',
  [ViewAlignItems.BASELINE]: 'baseline',
}

const ALIGN_SELF_CSS_VALUE = {
  [ViewAlignSelf.FLEX_START]: 'flex-start',
  [ViewAlignSelf.FLEX_END]: 'flex-end',
  [ViewAlignSelf.CENTER]: 'center',
  [ViewAlignSelf.STRETCH]: 'stretch',
  [ViewAlignSelf.BASELINE]: 'baseline',
}

const ALIGN_CONTENT_CSS_VALUE = {
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
  border-style: solid;
  text-decoration: none;
  box-sizing: border-box;
  position: ${({ position }) => POSITION_CSS_VALUE[position]};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  opacity: ${({ opacity }) => opacity};
  overflow: ${({ overflow }) => OVERFLOW_CSS_VALUE[overflow]};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-wrap: ${({ flexWrap }) => FLEX_WRAP_CSS_VALUE[flexWrap]};
  flex-direction: ${({ flexDirection }) =>
    FLEX_DIRECTION_CSS_VALUE[flexDirection]};
  justify-content: ${({ justifyContent }) =>
    JUSTUFY_CONTENT_CSS_VALUE[justifyContent]};
  align-items: ${({ alignItems }) => ALIGN_ITEMS_CSS_VALUE[alignItems]};
  align-self: ${({ alignSelf }) => ALIGN_SELF_CSS_VALUE[alignSelf]};
  align-content: ${({ alignContent }) => ALIGN_CONTENT_CSS_VALUE[alignContent]};
  margin-top: ${({ marginTop }) => marginTop};
  padding-top: ${({ paddingTop }) => paddingTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding-right: ${({ paddingRight }) => paddingRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth};
  border-top-width: ${({ borderWidthTop }) => borderWidthTop};
  border-left-width: ${({ borderWidthLeft }) => borderWidthLeft};
  border-right-width: ${({ borderWidthRight }) => borderWidthRight};
  border-bottom-width: ${({ borderWidthBottom }) => borderWidthBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top-left-radius: ${({ borderRadiusTopLeft }) => borderRadiusTopLeft};
  border-top-right-radius: ${({ borderRadiusTopRight }) =>
    borderRadiusTopRight};
  border-bottom-left-radius: ${({ borderRadiusBottomLeft }) =>
    borderRadiusBottomLeft};
  border-bottom-right-radius: ${({ borderRadiusBottomRight }) =>
    borderRadiusBottomRight};
  background-color: ${({ backgroundColor }) => backgroundColor};
`
