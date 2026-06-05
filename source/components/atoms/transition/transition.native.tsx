import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { TransitionDuration } from './constants'
import {
  useTransitionDurationValue,
  useTransitionOpacityValue,
  useTransitionTranslateNativeValue,
} from './hooks'
import type { TransitionComponent } from './transition.types'

const Transition: TransitionComponent = ({
  testId,
  opacity,
  scale,
  translateX,
  translateY,
  duration = TransitionDuration.MD,
  children,
}) => {
  const durationValue = useTransitionDurationValue(duration)
  const opacityTarget = useTransitionOpacityValue(opacity) ?? 1
  const scaleTarget = scale?.toValue() ?? 1
  const translateXTarget = useTransitionTranslateNativeValue(translateX)
  const translateYTarget = useTransitionTranslateNativeValue(translateY)

  const animatedOpacity = useRef(new Animated.Value(opacityTarget))
  const animatedScale = useRef(new Animated.Value(scaleTarget))
  const animatedTranslateX = useRef(new Animated.Value(translateXTarget))
  const animatedTranslateY = useRef(new Animated.Value(translateYTarget))

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedOpacity.current, {
        toValue: opacityTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScale.current, {
        toValue: scaleTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
      Animated.timing(animatedTranslateX.current, {
        toValue: translateXTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
      Animated.timing(animatedTranslateY.current, {
        toValue: translateYTarget,
        duration: durationValue,
        useNativeDriver: true,
      }),
    ]).start()
  }, [opacityTarget, scaleTarget, translateXTarget, translateYTarget, durationValue])

  return (
    <Animated.View
      testID={testId}
      style={{
        opacity: animatedOpacity.current,
        transform: [
          { scale: animatedScale.current },
          { translateX: animatedTranslateX.current },
          { translateY: animatedTranslateY.current },
        ],
      }}
    >
      {children}
    </Animated.View>
  )
}
Transition.Duration = TransitionDuration
export default Transition
