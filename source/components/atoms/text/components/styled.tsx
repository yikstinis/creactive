import styled from '@emotion/styled'
import type { TextStyledProperties } from '../text.types'

export const TextStyled = styled.span<TextStyledProperties>`
  display: ${(properties) =>
    properties.values.maxLines === undefined ? 'inline' : '-webkit-box'};
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
  text-align: ${(properties) => properties.values.textAlign};
  text-decoration-line: ${(properties) => properties.values.textDecoration};
  font-family: ${(properties) => properties.values.fontFamily};
  font-weight: ${(properties) => properties.values.fontWeight};
  font-size: ${(properties) => properties.values.fontSize}px;
  line-height: ${(properties) => properties.values.lineHeight}px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(properties) => properties.values.maxLines};
  color: ${(properties) => properties.values.color};
  opacity: ${(properties) => properties.values.opacity};
  border-width: 0;
`
