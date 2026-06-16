import { useCallback, useMemo, useState } from 'react'
import {
  GestureResponderEvent,
  Pressable as ReactNativePressable,
  StyleSheet,
} from 'react-native'
import { PressableContext } from './pressable.context'
import type { PressableComponent } from './pressable.types'

export const Pressable: PressableComponent = ({
  testId,
  onPress,
  onPressIn,
  onPressOut,
  children,
}) => {
  const [isPressedIn, setPressedIn] = useState(false)

  // We do support 18 React version without compiler.
  // We have to memorize context values to avoid extra re-renders.
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
      style={styleSheet.pressableElement}
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
const styleSheet = StyleSheet.create({
  pressableElement: {
    userSelect: 'none',
  },
})
