import styled from '@emotion/styled'
import { TextAlign } from '../constants'
import type { StyledTextrops } from '../text.types'

const TEXT_ALIGN_CSS_VALUE = {
  [TextAlign.LEFT]: 'left',
  [TextAlign.CENTER]: 'center',
  [TextAlign.RIGHT]: 'right',
}

export const StyledText = styled.span<StyledTextrops>`
  display: ${({ maxLines }) =>
    maxLines === undefined ? 'inline' : '-webkit-box'};
  margin: 0;
  padding: 0;
  z-index: 0;
  position: static;
  list-style: none;
  border-style: solid;
  box-sizing: border-box;
  text-decoration: none;
  white-space: pre-wrap;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  text-align: ${({ align }) => TEXT_ALIGN_CSS_VALUE[align]};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  color: ${({ color }) => color};
  border-width: 0;
`
