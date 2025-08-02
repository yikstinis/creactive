import styled from '@emotion/styled'
import type { TextStyledProperties } from '../text.types'

export const TextStyled = styled.span<TextStyledProperties>`
  display: ${(properties) =>
    properties.css.maxLines === undefined ? 'inline' : '-webkit-box'};
  margin: 0;
  padding: 0;
  position: static;
  list-style: none;
  border-style: solid;
  box-sizing: border-box;
  text-decoration: none;
  white-space: pre-wrap;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  text-align: ${(properties) => properties.css.textAlign};
  text-decoration-line: ${(properties) => properties.css.textDecoration};
  font-family: ${(properties) => properties.css.fontFamily};
  font-weight: ${(properties) => properties.css.fontWeight};
  font-size: ${(properties) => properties.css.fontSize}px;
  line-height: ${(properties) => properties.css.lineHeight}px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(properties) => properties.css.maxLines};
  color: ${(properties) => properties.css.color};
  opacity: ${(properties) => properties.css.opacity};
  border-width: 0;
`
