import { Icon, IconSize, useIconContext } from '@/components/atoms/icon'
import { useThemeContext } from '@/contexts'
import { useEffect, useMemo, useRef } from 'react'
import { Animated, Easing, Platform } from 'react-native'
import { Circle, G } from 'react-native-svg'
import { SpinnerColor } from './constants'
import { useSpinnerColorValue } from './hooks'
import type {
  SpinnerChildrenProperties,
  SpinnerComponent,
  SpinnerProperties,
} from './spinner.types'

const SpinnerAnimatedG = Animated.createAnimatedComponent(G)
const SpinnerAnimatedCircle = Animated.createAnimatedComponent(Circle)

const SpinnerChildren = ({ isDisabled }: SpinnerChildrenProperties) => {
  const themeContext = useThemeContext()
  const iconContext = useIconContext()
  const rotateRef = useRef(new Animated.Value(0))
  const strokeDasharrayRef = useRef(new Animated.Value(0))

  useEffect(() => {
    if (!isDisabled) {
      const animation = Animated.parallel([
        Animated.loop(
          Animated.timing(rotateRef.current, {
            toValue: 1,
            duration: themeContext.durationComplexSM,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ),
        Animated.loop(
          Animated.timing(strokeDasharrayRef.current, {
            toValue: 1,
            duration: themeContext.durationComplexLG,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ),
      ])
      animation.start()
      return () => animation.stop()
    }
  }, [
    isDisabled,
    themeContext.durationComplexSM,
    themeContext.durationComplexLG,
  ])

  const rotation = useMemo(
    () =>
      rotateRef.current.interpolate(
        Platform.select({
          web: {
            inputRange: [0, 1],
            outputRange: ['rotate(0, 12, 12)', 'rotate(360, 12, 12)'],
          },
          default: {
            inputRange: [0, 1],
            outputRange: [0, 360],
          },
        })!,
      ),
    [],
  )

  const strokeDasharray = useMemo(
    () =>
      strokeDasharrayRef.current.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['10 40', '40 10', '10 40'],
      }),
    [],
  )

  if (Platform.OS === 'web') {
    return (
      <SpinnerAnimatedG
        transform={rotation as Animated.AnimatedInterpolation<string>}
      >
        <SpinnerAnimatedCircle
          cx='12'
          cy='12'
          r='8'
          fill='none'
          stroke={iconContext.color}
          strokeWidth='2.5'
          strokeDasharray={strokeDasharray}
        />
      </SpinnerAnimatedG>
    )
  }

  return (
    <G transform='translate(12,12)'>
      <SpinnerAnimatedG rotation={rotation}>
        <SpinnerAnimatedCircle
          cx={0}
          cy={0}
          r='8'
          fill='none'
          stroke={iconContext.color}
          strokeWidth='2.5'
          strokeDasharray={strokeDasharray}
        />
      </SpinnerAnimatedG>
    </G>
  )
}

export const Spinner: SpinnerComponent = ({
  testId,
  isDisabled = false,
  size = IconSize.MD,
  color = SpinnerColor.BASE_800,
}: SpinnerProperties) => {
  return (
    <Icon
      testId={testId}
      box={Icon.Size.MD}
      size={size}
      color={useSpinnerColorValue(color)}
    >
      <SpinnerChildren isDisabled={isDisabled} />
    </Icon>
  )
}
Spinner.Size = IconSize
Spinner.Color = SpinnerColor
