import type { FunctionComponent, PropsWithChildren } from 'react'
import type { PressableTag } from './constants'

/**
 * Cross-platform event object passed to all press handlers.
 * Provides a consistent interface across web and native environments.
 */
export interface PressablePressEvent {
  /**
   * Prevents the default browser action associated with the event.
   */
  preventDefault: () => void
  /**
   * Stops the event from bubbling up to ancestor elements.
   */
  stopPropagation: () => void
}

/**
 * Value exposed by the Pressable context to its children.
 * Read with {@link usePressableContext} to react to press state.
 */
export interface PressableContextValue {
  /**
   * Whether a press gesture is currently active on the element.
   */
  isPressedIn: boolean
}

/**
 * Base props shared across all Pressable tag variants.
 * Composed with tag-specific props to form {@link PressableProperties}.
 */
interface PressableBaseProperties extends PropsWithChildren {
  /**
   * Allows targeting the element in automated tests.
   * Pass a unique string to retrieve the element via `getByTestId`.
   * @default undefined
   */
  testId?: string
  /**
   * Suppresses all press events and blocks cursor interaction when true.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Called when the element is pressed and released.
   * Not fired when the element is disabled.
   * @default undefined
   */
  onPress?: (event: PressablePressEvent) => void
  /**
   * Called when a press gesture begins on the element.
   * @default undefined
   */
  onPressIn?: (event: PressablePressEvent) => void
  /**
   * Called when a press gesture ends on the element.
   * @default undefined
   */
  onPressOut?: (event: PressablePressEvent) => void
}

type PressableTagProperties =
  | {
      tag?: PressableTag.BUTTON
      href?: never
    }
  | {
      tag: PressableTag.ANCHOR
      href?: string
    }

/**
 * Props for the {@link PressableComponent} component.
 * Controls the rendered tag, href, press handlers, and disabled state.
 */
export type PressableProperties = PressableBaseProperties &
  PressableTagProperties

/**
 * Internal props forwarded to the underlying styled button element.
 * Not part of the public API — consumed only by the styled button wrapper.
 */
export interface PressableStyledProperties {
  css: {
    /**
     * CSS pointer-events value applied to the rendered element.
     * Set to `'none'` when the pressable is disabled to block cursor interaction.
     */
    pointerEvents?: 'auto' | 'none'
  }
}

/**
 * Pressable component type with the static {@link PressableComponent.Tag} enum attached.
 * Renders a button or anchor element that fires cross-platform press events.
 */
export type PressableComponent = FunctionComponent<PressableProperties> & {
  /**
   * Available tag values for the `tag` prop.
   * Switches rendering between a button and an anchor element.
   */
  Tag: typeof PressableTag
}
