import { BorderRadius } from '@/constants'
import { useBorderRadiusValue } from '@/hooks'
import styled from '@emotion/styled'
import { type MouseEvent, useCallback, useMemo, useState } from 'react'
import { PressableTag } from './constants'
import { PressableContext } from './pressable.context'
import type { PressableComponent } from './pressable.types'

const PRESSABLE_TAG_VALUE = {
  [PressableTag.BUTTON]: 'button' as const,
  [PressableTag.ANCHOR]: 'a' as const,
}

type PressableStyledProperties = {
  css: {
    pointerEvents?: string
    borderRadius?: number | '50%'
    borderTopLeftRadius?: number | '50%'
    borderTopRightRadius?: number | '50%'
    borderBottomLeftRadius?: number | '50%'
    borderBottomRightRadius?: number | '50%'
  }
}

const formatBorderRadius = (value?: number | '50%') => {
  if (value === undefined) return undefined
  if (value === '50%') return value
  return `${value}px`
}

const PressableStyled = styled.button<
  PressableStyledProperties & { href?: string }
>`
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
  pointer-events: ${({ css }) => css.pointerEvents};
  border-radius: ${({ css }) => formatBorderRadius(css.borderRadius)};
  border-top-left-radius: ${({ css }) =>
    formatBorderRadius(css.borderTopLeftRadius)};
  border-top-right-radius: ${({ css }) =>
    formatBorderRadius(css.borderTopRightRadius)};
  border-bottom-left-radius: ${({ css }) =>
    formatBorderRadius(css.borderBottomLeftRadius)};
  border-bottom-right-radius: ${({ css }) =>
    formatBorderRadius(css.borderBottomRightRadius)};
`

export const Pressable: PressableComponent = ({
  testId,
  tag = PressableTag.BUTTON,
  borderRadius,
  borderRadiusTopLeft,
  borderRadiusTopRight,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  href,
  isDisabled,
  onPress,
  onPressIn,
  onPressOut,
  children,
}) => {
  const [isPressedIn, setPressedIn] = useState(false)
  const value = useMemo(() => ({ isPressedIn }), [isPressedIn])

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (isDisabled) return
      onPress?.(event)
    },
    [isDisabled, onPress],
  )

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      setPressedIn(true)
      onPressIn?.(event)
    },
    [onPressIn],
  )

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      setPressedIn(false)
      onPressOut?.(event)
    },
    [onPressOut],
  )

  return (
    <PressableStyled
      data-testid={testId}
      as={PRESSABLE_TAG_VALUE[tag]}
      css={{
        pointerEvents: isDisabled ? 'none' : undefined,
        borderRadius: useBorderRadiusValue(borderRadius),
        borderTopLeftRadius: useBorderRadiusValue(borderRadiusTopLeft),
        borderTopRightRadius: useBorderRadiusValue(borderRadiusTopRight),
        borderBottomLeftRadius: useBorderRadiusValue(borderRadiusBottomLeft),
        borderBottomRightRadius: useBorderRadiusValue(borderRadiusBottomRight),
      }}
      href={tag === PressableTag.ANCHOR ? href : undefined}
      tabIndex={0}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <PressableContext.Provider value={value}>
        {children}
      </PressableContext.Provider>
    </PressableStyled>
  )
}
Pressable.BorderRadius = BorderRadius
Pressable.Tag = PressableTag
