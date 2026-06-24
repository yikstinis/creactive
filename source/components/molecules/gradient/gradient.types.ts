import type { ViewComponent, ViewProperties } from '@/components/atoms/view'
import type { Fraction } from '@/helpers'
import type { Color } from '@/types'
import type { FunctionComponent } from 'react'
import type { GradientLinearDirection } from './constants'

/**
 * Gradient stop config.
 * Describes a single gradient stop with offset and color.
 */
export interface GradientStopConfig {
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
 * Linear gradient component properties.
 * Describes possible gradient component customization.
 * @see Gradient.Linear
 */
export interface GradientLinearProperties extends ViewProperties {
  /**
   * One of supported gradient directions.
   * @see Gradient.Direction
   */
  direction: GradientLinearDirection
  /**
   * Gradient stop configs.
   * @see GradientStopConfig
   */
  config: GradientStopConfig[]
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
    Fill: {
      Absolute: FunctionComponent<
        Omit<
          GradientLinearProperties,
          'position' | 'top' | 'left' | 'right' | 'bottom'
        >
      >
      Flex: FunctionComponent<Omit<GradientLinearProperties, 'flexGrow'>>
    }
  }

/**
 * Circular gradient component properties.
 * Describes possible gradient component customization.
 * @see Gradient.Circular
 */
export interface GradientCircularProperties extends ViewProperties {
  /**
   * Horizontal center of the gradient circle as a fraction of the element width.
   * @see Fraction
   * @default 0.5
   */
  cx?: Fraction
  /**
   * Vertical center of the gradient circle as a fraction of the element height.
   * @see Fraction
   * @default 0.5
   */
  cy?: Fraction
  /**
   * Gradient stop configs.
   * @see GradientStopConfig
   */
  config: GradientStopConfig[]
}
/**
 * Circular gradient component.
 * Allows to render radial gradient from center outward.
 * @see Gradient.Circular
 */
export type GradientCircularComponent =
  FunctionComponent<GradientCircularProperties> & {
    Fill: {
      Absolute: FunctionComponent<
        Omit<
          GradientCircularProperties,
          'position' | 'top' | 'left' | 'right' | 'bottom'
        >
      >
      Flex: FunctionComponent<Omit<GradientCircularProperties, 'flexGrow'>>
    }
  }

/**
 * Gradient object providing access to components and constants.
 * @see Gradient.Linear
 * @see Gradient.Circular
 */
export type GradientObject = {
  Linear: GradientLinearComponent
  Circular: GradientCircularComponent
} & Pick<
  ViewComponent,
  | 'Tag'
  | 'Position'
  | 'Overflow'
  | 'FlexWrap'
  | 'FlexDirection'
  | 'JustifyContent'
  | 'AlignItems'
  | 'AlignSelf'
  | 'AlignContent'
  | 'Spacing'
  | 'BoxShadow'
  | 'BorderColor'
  | 'BorderWidth'
  | 'BorderRadius'
  | 'BackgroundColor'
  | 'TransitionDuration'
>
