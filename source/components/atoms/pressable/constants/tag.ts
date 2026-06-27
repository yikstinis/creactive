/**
 * Supported tag values for the Pressable component.
 * Controls which HTML element is rendered.
 * @see {@link PressableComponent.Tag}
 */
export enum PressableTag {
  /**
   * Renders a `<button>` element.
   * Use for actions that do not navigate to a different URL.
   */
  BUTTON,
  /**
   * Renders an `<a>` element.
   * Requires the `href` prop to be set.
   */
  ANCHOR,
}
