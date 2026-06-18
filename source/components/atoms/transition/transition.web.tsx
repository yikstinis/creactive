import { TransitionStyled } from './components'
import { TransitionDuration } from './constants'
import {
  useTransitionDurationValue,
  useTransitionOpacityValue,
  useTransitionTransformValue,
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

  return (
    <TransitionStyled
      data-testid={testId}
      css={{
        opacity: useTransitionOpacityValue(opacity),
        transform: useTransitionTransformValue(scale, translateX, translateY),
        transition: `opacity ${durationValue}ms ease,transform ${durationValue}ms ease`,
      }}
    >
      {children}
    </TransitionStyled>
  )
}
Transition.Duration = TransitionDuration
export default Transition
