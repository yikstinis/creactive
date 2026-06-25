import type { IconSize } from '@/constants'
import type { Color } from '@/types/color.types'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type { IconColor } from './constants'

/**
 * Internal context value passed to child SVG path elements via React context.
 * Carries the resolved color string derived from the {@link IconColor} enum.
 */
export interface IconContextValue {
  /**
   * Resolved CSS color string used by child path elements as their fill.
   * Set by the icon component from the {@link IconProperties.color} enum prop.
   */
  colorValue: Color
}

/**
 * Props for the {@link IconComponent} component.
 * Controls the SVG viewport box, rendered size, and fill color of child path elements.
 */
export interface IconProperties extends PropsWithChildren {
  /**
   * Allows targeting the element in automated tests.
   * Pass a unique string to retrieve the element via `getByTestId`.
   * @default undefined
   */
  testId?: string
  /**
   * Size of the SVG viewBox coordinate space.
   * Use a larger value than {@link IconProperties.size} when icon paths extend beyond the default grid.
   * @see {@link IconComponent.Size}
   * @default {@link IconSize.MD}
   */
  box?: IconSize
  /**
   * Rendered width and height of the SVG element.
   * Controls the visual footprint without affecting the internal coordinate space.
   * @see {@link IconComponent.Size}
   * @default {@link IconSize.MD}
   */
  size?: IconSize
  /**
   * Fill color applied to child path elements via context.
   * Resolves the enum value to a theme color string passed down through {@link IconContextValue}.
   * @see {@link IconComponent.Color}
   * @default {@link IconColor.BASE_800}
   */
  color?: IconColor
}

/**
 * Icon component type with static {@link IconComponent.Size} and {@link IconComponent.Color} enums attached.
 * Wraps child SVG path elements in a sized, colored container and provides color via context.
 */
export type IconComponent = FunctionComponent<IconProperties> & {
  /**
   * Available size values for the {@link IconProperties.box} and {@link IconProperties.size} props.
   * Maps to theme icon size tokens.
   */
  Size: typeof IconSize
  /**
   * Available color values for the {@link IconProperties.color} prop.
   * Maps to theme foreground color tokens.
   */
  Color: typeof IconColor
}
