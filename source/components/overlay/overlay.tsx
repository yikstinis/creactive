import { useLayoutEffect, useRef } from 'react'
import { Animated, Pressable, StyleSheet, View } from 'react-native'
import { OverlayBackgroundColor } from './constants'
import type { OverlayComponent } from './overlay.types'

const overlayStyleSheet = StyleSheet.create({
  backgroundColorDark: {
    backgroundColor: 'rgb(0,0,0)',
  },
  backgroundColorLight: {
    backgroundColor: 'rgb(255,255,255)',
  },
})

const BACKGROUND_COLOR_STYLE = {
  [OverlayBackgroundColor.DARK]: overlayStyleSheet.backgroundColorDark,
  [OverlayBackgroundColor.LIGHT]: overlayStyleSheet.backgroundColorLight,
}

export const Overlay: OverlayComponent = ({
  isPressable,
  isVisible,
  backgroundColor = OverlayBackgroundColor.DARK,
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
            [BACKGROUND_COLOR_STYLE[backgroundColor]],
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
            [BACKGROUND_COLOR_STYLE[backgroundColor]],
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
Overlay.BackgroundColor = OverlayBackgroundColor
