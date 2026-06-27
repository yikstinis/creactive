import type { ViewComponent, ViewProperties } from '@/components/atoms/view'
import type { Fraction, RGBColor, TransparentColor } from '@/helpers'
import type { FunctionComponent } from 'react'
import type { GradientLinearDirection } from './constants'

/**
 * Gradient stop.
 * Describes a single gradient stop with offset and color.
 */
export interface GradientStop {
  /**
   * Position of the stop along the gradient axis.
   * Use a {@link Fraction} value between 0 and 1 where 0 is the gradient start and 1 is the end.
   * @see {@link Fraction}
   */
  offset: Fraction
  /**
   * Color of the gradient at this stop position.
   * Use any valid {@link Color} token to define the visual transition target.
   * @see {@link Color}
   */
  color: RGBColor | TransparentColor
}

/**
 * Linear gradient component properties.
 * Describes possible linear gradient component customization.
 * @see {@link GradientLinearComponent}
 */
export interface GradientLinearProperties extends ViewProperties {
  /**
   * One of the supported gradient directions.
   * Controls the axis along which the gradient transitions from the first to the last stop.
   * @see {@link GradientLinearComponent.Direction}
   */
  direction: GradientLinearDirection
  /**
   * Gradient stops defining the color transition.
   * Defines the color and position values used to construct the gradient.
   * @see {@link GradientStop}
   */
  stops: GradientStop[]
}
/**
 * Linear gradient component with static {@link GradientLinearComponent.Direction} enum attached.
 * Renders a linear gradient from first to last stop along the configured direction.
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
 * Describes possible circular gradient component customization.
 * @see {@link GradientCircularComponent}
 */
export interface GradientCircularProperties extends ViewProperties {
  /**
   * Horizontal center of the gradient circle as a fraction of the element width.
   * Pass a {@link Fraction} value between 0 and 1 to shift the focal point horizontally.
   * @see {@link Fraction}
   * @default 0.5
   */
  cx?: Fraction
  /**
   * Vertical center of the gradient circle as a fraction of the element height.
   * Pass a {@link Fraction} value between 0 and 1 to shift the focal point vertically.
   * @see {@link Fraction}
   * @default 0.5
   */
  cy?: Fraction
  /**
   * Gradient stops defining the color transition.
   * Defines the color and position values used to construct the radial gradient.
   * @see {@link GradientStop}
   */
  stops: GradientStop[]
}
/**
 * Circular gradient component.
 * Renders a radial gradient emanating outward from the configured center point.
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
 * Gradient object providing access to gradient components and View constants.
 * @see {@link GradientLinearComponent}
 * @see {@link GradientCircularComponent}
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
