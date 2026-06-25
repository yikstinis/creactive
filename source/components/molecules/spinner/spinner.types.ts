import type { IconSize } from '@/constants'
import type { FunctionComponent } from 'react'
import type { SpinnerColor } from './constants'

/**
 * Internal props for the SpinnerChildren component.
 * Carries the disabled state from the Spinner into its internal animated child.
 */
export type SpinnerChildrenProperties = {
  /**
   * Whether the spinner animation is paused.
   * Set by the Spinner component to stop the animated stroke without unmounting the child.
   */
  isDisabled: boolean
}

/**
 * Props for the {@link SpinnerComponent} component.
 * Controls the size, color, and animation state of the spinner.
 */
export type SpinnerProperties = {
  /**
   * Allows targeting the element in automated tests.
   * Pass a unique string to retrieve the element via `getByTestId`.
   * @default undefined
   */
  testId?: string
  /**
   * Pauses the spinner animation when true.
   * Use it to freeze the visual feedback while the component remains mounted.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Rendered width and height of the spinner.
   * Use {@link SpinnerComponent.Size} values to match the surrounding layout.
   * @see {@link SpinnerComponent.Size}
   * @default {@link IconSize.MD}
   */
  size?: IconSize
  /**
   * Color of the spinner stroke.
   * Use {@link SpinnerComponent.Color} values to match the surrounding text or background.
   * @see {@link SpinnerComponent.Color}
   * @default {@link SpinnerColor.BASE_800}
   */
  color?: SpinnerColor
}

/**
 * Spinner component type with static {@link SpinnerComponent.Size} and {@link SpinnerComponent.Color} enums attached.
 * Renders an animated circular stroke that can be paused via the disabled state.
 */
export type SpinnerComponent = FunctionComponent<SpinnerProperties> & {
  /**
   * Available size values for the {@link SpinnerProperties.size} prop.
   * Maps to theme icon size tokens.
   */
  Size: typeof IconSize
  /**
   * Available color values for the {@link SpinnerProperties.color} prop.
   * Maps to theme foreground color tokens.
   */
  Color: typeof SpinnerColor
}
