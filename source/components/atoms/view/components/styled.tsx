import styled from '@emotion/styled'
import type { ViewStyledProperties } from '../view.types'

const formatSpacing = (spacing?: number) =>
  spacing === undefined ? undefined : `${spacing}px`
const formatBorderWidth = (borderWidth?: number) =>
  borderWidth === undefined ? 0 : `${borderWidth}px`
const formatBorderRadius = (borderRadius?: number | '50%') => {
  if (borderRadius === undefined) return undefined
  if (borderRadius === '50%') return borderRadius
  return `${borderRadius}px`
}
export const ViewStyled = styled.div<ViewStyledProperties>`
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 0;
  position: relative;
  list-style: none;
  border-style: solid;
  text-decoration: none;
  box-sizing: border-box;
  position: ${(properties) => properties.css.position};
  top: ${(properties) => properties.css.top};
  left: ${(properties) => properties.css.left};
  right: ${(properties) => properties.css.right};
  bottom: ${(properties) => properties.css.bottom};
  opacity: ${(properties) => properties.css.opacity};
  overflow: ${(properties) => properties.css.overflow};
  flex-grow: ${(properties) => properties.css.flexGrow};
  flex-shrink: ${(properties) => properties.css.flexShrink};
  flex-basis: ${(properties) => properties.css.flexBasis};
  flex-wrap: ${(properties) => properties.css.flexWrap};
  flex-direction: ${(properties) => properties.css.flexDirection};
  justify-content: ${(properties) => properties.css.justifyContent};
  align-items: ${(properties) => properties.css.alignItems};
  align-self: ${(properties) => properties.css.alignSelf};
  align-content: ${(properties) => properties.css.alignContent};
  margin-top: ${(properties) => formatSpacing(properties.css.marginTop)};
  padding-top: ${(properties) => formatSpacing(properties.css.paddingTop)};
  margin-left: ${(properties) => formatSpacing(properties.css.marginLeft)};
  padding-left: ${(properties) => formatSpacing(properties.css.paddingLeft)};
  margin-right: ${(properties) => formatSpacing(properties.css.marginRight)};
  padding-right: ${(properties) => formatSpacing(properties.css.paddingRight)};
  margin-bottom: ${(properties) => formatSpacing(properties.css.marginBottom)};
  padding-bottom: ${(properties) =>
    formatSpacing(properties.css.paddingBottom)};
  min-width: ${(properties) => properties.css.minWidth};
  width: ${(properties) => properties.css.width};
  max-width: ${(properties) => properties.css.maxWidth};
  min-height: ${(properties) => properties.css.minHeight};
  height: ${(properties) => properties.css.height};
  max-height: ${(properties) => properties.css.maxHeight};
  box-shadow: ${(properties) => properties.css.boxShadow};
  border-color: ${(properties) => properties.css.borderColor};
  border-width: ${(properties) =>
    formatBorderWidth(properties.css.borderWidth)};
  border-top-width: ${(properties) =>
    formatBorderWidth(properties.css.borderWidthTop)};
  border-left-width: ${(properties) =>
    formatBorderWidth(properties.css.borderWidthLeft)};
  border-right-width: ${(properties) =>
    formatBorderWidth(properties.css.borderWidthRight)};
  border-bottom-width: ${(properties) =>
    formatBorderWidth(properties.css.borderWidthBottom)};
  border-radius: ${(properties) =>
    formatBorderRadius(properties.css.borderRadius)};
  border-top-left-radius: ${(properties) =>
    formatBorderRadius(properties.css.borderRadiusTopLeft)};
  border-top-right-radius: ${(properties) =>
    formatBorderRadius(properties.css.borderRadiusTopRight)};
  border-bottom-left-radius: ${(properties) =>
    formatBorderRadius(properties.css.borderRadiusBottomLeft)};
  border-bottom-right-radius: ${(properties) =>
    formatBorderRadius(properties.css.borderRadiusBottomRight)};
  background-color: ${(properties) => properties.css.backgroundColor};
`
