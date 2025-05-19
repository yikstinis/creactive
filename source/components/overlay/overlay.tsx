import { useLayoutEffect, useRef } from 'react'
import { Animated, Pressable, StyleSheet } from 'react-native'
import type { OverlayComponent } from './overlay.types'

const overlayStyleSheet = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'rgb(0, 0, 0)',
  },
})

export const Overlay: OverlayComponent = ({
  isPressable,
  isVisible,
  children,
  onPress,
}) => {
  const opacity = useRef(new Animated.Value(0)).current

  useLayoutEffect(() => {
    Animated.timing(opacity, {
      // TODO: Move to theme configurable constants..
      toValue: isVisible ? 0.75 : 0,
      duration: 125,
      useNativeDriver: true,
    }).start()
  }, [isVisible])

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {
          opacity,
        },
      ]}
    >
      {isPressable && (
        <Pressable
          style={[StyleSheet.absoluteFill, overlayStyleSheet.backgroundColor]}
          onPress={onPress}
        >
          {children}
        </Pressable>
      )}

      {isPressable === false && children}
    </Animated.View>
  )
}
