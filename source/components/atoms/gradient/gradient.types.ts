import type { Fraction } from '@/helpers'
import type { Color } from '@/types'
import type { FunctionComponent, ReactElement } from 'react'
import type { GradientLinearDirection } from './constants'

/**
 * Gradient stop component properties.
 * Describes possible gradient stop component customization.
 * @see Gradient.Stop
 */
export interface GradientStopProperties {
  /**
   * Should be used to control gradient stop offset.
   * @see Fraction
   * @default undefined
   */
  offset: Fraction
  /**
   * Allows to control gradient stop color.
   * @see Color
   * @default undefined
   */
  color: Color
}
/**
 * Gradient stop component.
 * Should be used as a child of gradient component.
 * @see Gradient.Stop
 */
export type GradientStopComponent = FunctionComponent<GradientStopProperties>

/**
 * Linear gradient component properties.
 * Describes possible gradient component customization.
 * @see Gradient.Linear
 */
export interface GradientLinearProperties {
  /**
   * Allows to select linear gradient component in tests.
   * @default undefined
   */
  testId?: string
  /**
   * One of supported gradient directions.
   * @see Gradient.Direction
   */
  direction: GradientLinearDirection
  /**
   * Gradient children.
   * @see Gradient.Stop
   * @default undefined
   */
  children: ReactElement[]
}
/**
 * Linear gradient component.
 * Allows to render linear gradient.
 * Provides access to direction constants.
 * @see Gradient.Linear
 * @see Gradient.Direction
 */
export type GradientLinearComponent =
  FunctionComponent<GradientLinearProperties> & {
    Direction: Record<
      keyof typeof GradientLinearDirection,
      GradientLinearDirection
    >
  }

/**
 * Gradient object providing access to components and constants.
 * @see Gradient.Linear
 * @see Gradient.Stop
 */
export type GradientObject = {
  Linear: GradientLinearComponent
  Stop: GradientStopComponent
}
