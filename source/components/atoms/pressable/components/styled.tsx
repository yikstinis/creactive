import styled from '@emotion/styled'
import type { PressableStyledProperties } from '../pressable.types'

export const PressableStyled = styled.button<
  PressableStyledProperties & { href?: string }
>`
  display: inline;
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  padding-block: 0;
  padding-inline: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  text-align: inherit;
  user-select: none;
  touch-action: manipulation;
  outline-style: none;
  pointer-events: ${({ css }) => css.pointerEvents};
`
