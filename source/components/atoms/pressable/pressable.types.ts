import type { BorderRadius } from '@/constants'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type { PressableTag } from './constants'

export interface PressablePressEvent {
  preventDefault: () => void
  stopPropagation: () => void
}

/**
 * Pressable context value interface.
 * Contains current pressed in state of the closest pressable.
 */
export interface PressableContextValue {
  /**
   * Whether the closest pressable is currently pressed in.
   * @default false
   */
  isPressedIn: boolean
}

interface PressableBaseProperties extends PropsWithChildren {
  /**
   * Allows to select pressable in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Whether the pressable is disabled.
   * @default undefined
   */
  isDisabled?: boolean
  /**
   * Pressable border radius.
   * @see Pressable.BorderRadius
   * @default undefined
   */
  borderRadius?: BorderRadius
  /**
   * Pressable border top left radius.
   * @see Pressable.BorderRadius
   * @default undefined
   */
  borderRadiusTopLeft?: BorderRadius
  /**
   * Pressable border top right radius.
   * @see Pressable.BorderRadius
   * @default undefined
   */
  borderRadiusTopRight?: BorderRadius
  /**
   * Pressable border bottom left radius.
   * @see Pressable.BorderRadius
   * @default undefined
   */
  borderRadiusBottomLeft?: BorderRadius
  /**
   * Pressable border bottom right radius.
   * @see Pressable.BorderRadius
   * @default undefined
   */
  borderRadiusBottomRight?: BorderRadius
  /**
   * Called when the pressable is pressed.
   * @default undefined
   */
  onPress?: (event: PressablePressEvent) => void
  /**
   * Called when the pressable is pressed in.
   * @default undefined
   */
  onPressIn?: (event: PressablePressEvent) => void
  /**
   * Called when the pressable is pressed out.
   * @default undefined
   */
  onPressOut?: (event: PressablePressEvent) => void
}

/**
 * Pressable HTML tag (web only).
 * @see Pressable.Tag
 * @default Pressable.Tag.BUTTON
 */
type PressableTagProperties =
  | {
      tag?: PressableTag.BUTTON
      /** @default undefined */
      href?: never
    }
  | {
      tag: PressableTag.ANCHOR
      /**
       * Anchor href (web only).
       * @default undefined
       */
      href?: string
    }

export type PressableProperties = PressableBaseProperties &
  PressableTagProperties

export type PressableComponent = FunctionComponent<PressableProperties> & {
  Tag: Record<keyof typeof PressableTag, PressableTag>
  BorderRadius: Record<keyof typeof BorderRadius, BorderRadius>
}
