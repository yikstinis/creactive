import type { IconSize } from '@/constants'
import type { Color } from '@/types/color.types'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type { IconColor } from './constants'

/**
 * Icon context value interface.
 * Contains resolved size and color passed down to icon path children.
 */
export type IconContextValue = {
  size: number
  color: Color
}

export type IconProperties = PropsWithChildren<{
  /**
   * Allows to select icon in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Outer bounding box size of the icon container.
   * Controls the space the icon occupies in layout.
   * @see Icon.Size
   * @default undefined
   */
  box?: IconSize
  /**
   * Visual size of the icon paths rendered inside the container.
   * Falls back to box size when not provided.
   * @see Icon.Size
   * @default undefined
   */
  size?: IconSize
  /**
   * Icon color.
   * @see Icon.Color
   * @default undefined
   */
  color?: IconColor
}>

export type IconComponent = FunctionComponent<IconProperties> & {
  Size: Record<keyof typeof IconSize, IconSize>
  Color: Record<keyof typeof IconColor, IconColor>
}
