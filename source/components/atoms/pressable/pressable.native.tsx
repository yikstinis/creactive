import { useCallback, useMemo, useState } from 'react'
import {
  type GestureResponderEvent,
  Pressable as ReactNativePressable,
  StyleSheet,
} from 'react-native'
import { PressableTag } from './constants'
import { PressableContext } from './pressable.context'
import type { PressableComponent } from './pressable.types'

export const Pressable: PressableComponent = ({
  testId,
  isDisabled,
  onPress,
  onPressIn,
  onPressOut,
  children,
}) => {
  const [isPressedIn, setPressedIn] = useState(false)

  // Memoized for React 18 compatibility — no compiler to auto-memo context values.
  const value = useMemo(() => ({ isPressedIn }), [isPressedIn])

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      setPressedIn(true)
      onPressIn?.(event)
    },
    [onPressIn],
  )

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      setPressedIn(false)
      onPressOut?.(event)
    },
    [onPressOut],
  )

  return (
    <ReactNativePressable
      testID={testId}
      style={[
        pressableStyleSheet.displayInline,
        pressableStyleSheet.userSelectNone,
        pressableStyleSheet.outlineStyleNone,
        isDisabled && pressableStyleSheet.pointerEventsNone,
      ]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <PressableContext.Provider value={value}>
        {children}
      </PressableContext.Provider>
    </ReactNativePressable>
  )
}
const pressableStyleSheet = StyleSheet.create({
  displayInline: {
    display: 'inline' as 'flex',
  },
  userSelectNone: {
    userSelect: 'none',
  },
  outlineStyleNone: {
    outlineStyle: 'none',
  },
  pointerEventsNone: {
    pointerEvents: 'none',
  },
})
Pressable.Tag = PressableTag
