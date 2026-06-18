import { BorderRadius } from '@/constants'
import {
  useBorderBottomLeftRadiusStyle,
  useBorderBottomRightRadiusStyle,
  useBorderRadiusStyle,
  useBorderTopLeftRadiusStyle,
  useBorderTopRightRadiusStyle,
} from '@/hooks'
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
  borderRadius,
  borderRadiusTopLeft,
  borderRadiusTopRight,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  isDisabled,
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
      style={[
        pressableStyleSheet.userSelectNone,
        isDisabled && pressableStyleSheet.pointerEventsNone,
        useBorderRadiusStyle(borderRadius),
        useBorderTopLeftRadiusStyle(borderRadiusTopLeft),
        useBorderTopRightRadiusStyle(borderRadiusTopRight),
        useBorderBottomLeftRadiusStyle(borderRadiusBottomLeft),
        useBorderBottomRightRadiusStyle(borderRadiusBottomRight),
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
  userSelectNone: {
    userSelect: 'none',
  },
  pointerEventsNone: {
    pointerEvents: 'none',
  },
})
Pressable.BorderRadius = BorderRadius
Pressable.Tag = PressableTag
