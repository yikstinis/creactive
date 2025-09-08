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
  position: ${(properties) => properties.values.position};
  top: ${(properties) => properties.values.top};
  left: ${(properties) => properties.values.left};
  right: ${(properties) => properties.values.right};
  bottom: ${(properties) => properties.values.bottom};
  opacity: ${(properties) => properties.values.opacity};
  overflow: ${(properties) => properties.values.overflow};
  flex-grow: ${(properties) => properties.values.flexGrow};
  flex-shrink: ${(properties) => properties.values.flexShrink};
  flex-basis: ${(properties) => properties.values.flexBasis};
  flex-wrap: ${(properties) => properties.values.flexWrap};
  flex-direction: ${(properties) => properties.values.flexDirection};
  justify-content: ${(properties) => properties.values.justifyContent};
  align-items: ${(properties) => properties.values.alignItems};
  align-self: ${(properties) => properties.values.alignSelf};
  align-content: ${(properties) => properties.values.alignContent};
  margin-top: ${(properties) => formatSpacing(properties.values.marginTop)};
  padding-top: ${(properties) => formatSpacing(properties.values.paddingTop)};
  margin-left: ${(properties) => formatSpacing(properties.values.marginLeft)};
  padding-left: ${(properties) => formatSpacing(properties.values.paddingLeft)};
  margin-right: ${(properties) => formatSpacing(properties.values.marginRight)};
  padding-right: ${(properties) =>
    formatSpacing(properties.values.paddingRight)};
  margin-bottom: ${(properties) =>
    formatSpacing(properties.values.marginBottom)};
  padding-bottom: ${(properties) =>
    formatSpacing(properties.values.paddingBottom)};
  min-width: ${(properties) => properties.values.minWidth};
  width: ${(properties) => properties.values.width};
  max-width: ${(properties) => properties.values.maxWidth};
  min-height: ${(properties) => properties.values.minHeight};
  height: ${(properties) => properties.values.height};
  max-height: ${(properties) => properties.values.maxHeight};
  box-shadow: ${(properties) => properties.values.boxShadow};
  border-color: ${(properties) => properties.values.borderColor};
  border-width: ${(properties) =>
    formatBorderWidth(properties.values.borderWidth)};
  border-top-width: ${(properties) =>
    formatBorderWidth(properties.values.borderWidthTop)};
  border-left-width: ${(properties) =>
    formatBorderWidth(properties.values.borderWidthLeft)};
  border-right-width: ${(properties) =>
    formatBorderWidth(properties.values.borderWidthRight)};
  border-bottom-width: ${(properties) =>
    formatBorderWidth(properties.values.borderWidthBottom)};
  border-radius: ${(properties) =>
    formatBorderRadius(properties.values.borderRadius)};
  border-top-left-radius: ${(properties) =>
    formatBorderRadius(properties.values.borderRadiusTopLeft)};
  border-top-right-radius: ${(properties) =>
    formatBorderRadius(properties.values.borderRadiusTopRight)};
  border-bottom-left-radius: ${(properties) =>
    formatBorderRadius(properties.values.borderRadiusBottomLeft)};
  border-bottom-right-radius: ${(properties) =>
    formatBorderRadius(properties.values.borderRadiusBottomRight)};
  background-color: ${(properties) => properties.values.backgroundColor};
`
