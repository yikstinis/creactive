import { type MouseEvent, useCallback, useMemo, useState } from 'react'
import { PressableStyled } from './components'
import { PressableTag } from './constants'
import { PressableContext } from './pressable.context'
import type { PressableComponent } from './pressable.types'

const PRESSABLE_TAG_VALUE = {
  [PressableTag.BUTTON]: 'button' as const,
  [PressableTag.ANCHOR]: 'a' as const,
}

export const Pressable: PressableComponent = ({
  testId,
  tag = PressableTag.BUTTON,
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
Pressable.Tag = PressableTag
