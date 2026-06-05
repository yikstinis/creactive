import styled from '@emotion/styled'
import type { TransitionStyledProperties } from '../transition.types'

export const TransitionStyled = styled.div<TransitionStyledProperties>`
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 0;
  position: relative;
  list-style: none;
  border-style: solid;
  text-decoration: none;
  box-sizing: border-box;
  overflow: visible;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-width: 0px;
  opacity: ${(properties) => properties.css.opacity};
  transform: ${(properties) => properties.css.transform};
  transition: ${(properties) => properties.css.transition};
`
