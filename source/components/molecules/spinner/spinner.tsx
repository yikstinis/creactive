import { Icon, useIconContext } from '@/components/atoms/icon'
import { IconSize } from '@/constants'
import { useThemeContext } from '@/contexts'
import { useIconSizeValue } from '@/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'
import { Path } from 'react-native-svg'
import { SpinnerColor } from './constants'
import { useSpinnerColorValue } from './hooks'
import type { SpinnerComponent, SpinnerProperties } from './spinner.types'

const SpinnerChildren = () => {
  const iconContext = useIconContext()

  return (
    <Path
      fill={iconContext.color}
      d='M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z'
    />
  )
}

export const Spinner: SpinnerComponent = ({
  testId,
  size = IconSize.MD,
  color = SpinnerColor.BASE_800,
}: SpinnerProperties) => {
  const themeContext = useThemeContext()
  const rotationRef = useRef(new Animated.Value(0))
  const sizeValue = useIconSizeValue(size)

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotationRef.current, {
        toValue: 1,
        duration: themeContext.durationComplexLG,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    )
    animation.start()
    return () => animation.stop()
  }, [themeContext.durationComplexLG])

  const spinnerStyleSheet = useMemo(
    () =>
      StyleSheet.create({
        size: {
          width: sizeValue,
          height: sizeValue,
        },
      }),
    [sizeValue],
  )

  return (
    <Animated.View
      testID={testId}
      style={[
        spinnerStyleSheet.size,
        {
          transform: [
            {
              rotate: rotationRef.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      <Icon
        box={Icon.Size.MD}
        size={size}
        color={useSpinnerColorValue(color)}
      >
        <SpinnerChildren />
      </Icon>
    </Animated.View>
  )
}
Spinner.Size = IconSize
Spinner.Color = SpinnerColor
