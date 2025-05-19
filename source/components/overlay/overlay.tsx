import { useLayoutEffect, useRef } from 'react'
import { Animated, Pressable, StyleSheet, View } from 'react-native'
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

  const pointerEvents = (() => {
    if (isVisible) return 'auto'
    return 'none'
  })()

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
          style={[
            StyleSheet.absoluteFill,
            overlayStyleSheet.backgroundColor,
            {
              pointerEvents,
            },
          ]}
          onPress={onPress}
        >
          {children}
        </Pressable>
      )}

      {isPressable === false && (
        <View
          style={[
            StyleSheet.absoluteFill,
            overlayStyleSheet.backgroundColor,
            {
              pointerEvents,
            },
          ]}
        >
          {children}
        </View>
      )}
    </Animated.View>
  )
}
