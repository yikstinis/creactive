import type { Fraction, FractionValue, PixelDimension } from '@/helpers'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type { TransitionDuration } from './constants'

export interface TransitionProperties extends PropsWithChildren {
  /**
   * Allows to select transition in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Target opacity of the transition.
   * Animates from the previous value to the new one.
   * @see Fraction
   * @default undefined
   */
  opacity?: Fraction
  /**
   * Target scale of the transition.
   * Animates from the previous value to the new one.
   * @see Fraction
   * @default undefined
   */
  scale?: Fraction
  /**
   * Target horizontal translation of the transition.
   * Animates from the previous value to the new one.
   * @see Dimension
   * @default undefined
   */
  translateX?: PixelDimension
  /**
   * Target vertical translation of the transition.
   * Animates from the previous value to the new one.
   * @see Dimension
   * @default undefined
   */
  translateY?: PixelDimension
  /**
   * Duration of the transition animation.
   * @see Transition.Duration
   * @default Transition.Duration.MD
   */
  duration?: TransitionDuration
}
export type TransitionComponent = FunctionComponent<TransitionProperties> & {
  Duration: Record<keyof typeof TransitionDuration, TransitionDuration>
}
/**
 * Styled transition properties type.
 * Used to render transition component on web.
 */
export type TransitionStyledProperties = {
  css: {
    opacity?: FractionValue
    transform?: string
    transition: string
  }
}
