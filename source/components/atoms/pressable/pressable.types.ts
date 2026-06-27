import type { FunctionComponent, PropsWithChildren } from 'react'
import type { PressableTag } from './constants'

/**
 * Cross-platform event object passed to all press handlers.
 * Provides a consistent interface across web and native environments.
 */
export interface PressablePressEvent {
  /**
   * Prevents the default browser action associated with the event.
   * Use inside a press handler to stop form submission or link navigation.
   */
  preventDefault: () => void
  /**
   * Stops the event from bubbling up to ancestor elements.
   * Use inside a press handler to isolate the interaction from parent handlers.
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
   * Use with {@link usePressableContext} to apply pressed state styling in children.
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
   * Use when the action is unavailable to prevent unintended interactions.
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
   * Use to start animations or visual feedback when a press starts.
   * @default undefined
   */
  onPressIn?: (event: PressablePressEvent) => void
  /**
   * Called when a press gesture ends on the element.
   * Use to reset animations or visual feedback when a press ends.
   * @default undefined
   */
  onPressOut?: (event: PressablePressEvent) => void
}

type PressableTagProperties =
  | {
      /**
       * Selects the rendered HTML element type.
       * Defaults to {@link PressableTag.BUTTON} when omitted.
       * @default {@link PressableTag.BUTTON}
       */
      tag?: PressableTag.BUTTON
      href?: never
    }
  | {
      /**
       * Selects the rendered HTML element type.
       * Set to {@link PressableTag.ANCHOR} to render an anchor element.
       */
      tag: PressableTag.ANCHOR
      /**
       * URL the anchor navigates to when clicked.
       * Only valid when {@link PressableTag.ANCHOR} tag is used.
       * @default undefined
       */
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
  /**
   * CSS overrides applied to the underlying styled element.
   * Contains the pointer-events value to conditionally disable cursor interaction.
   */
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
