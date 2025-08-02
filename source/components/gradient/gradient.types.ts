import type { Fraction } from '@/helpers'
import type { Color } from '@/types'
import type { FunctionComponent, ReactElement } from 'react'
import type { GradientDirection } from './constants'

/**
 * Gradient stop component properties.
 * Describes possible gradient stop component customization.
 * @see Gradient.Stop
 */
export interface GradientStopProps {
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
export type GradientStopComponent = FunctionComponent<GradientStopProps>

/**
 * Linear gradient component properties.
 * Describes possible gradient component customization.
 * @see Gradient.Linear
 */
export interface GradientLinearProps {
  /**
   * One of supported gradient directions.
   * @see Gradient.Direction
   * @default Gradient.Direction.BOTTOM
   */
  direction?: GradientDirection
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
export type GradientLinearComponent = FunctionComponent<GradientLinearProps> & {
  Direction: Record<keyof typeof GradientDirection, GradientDirection>
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
