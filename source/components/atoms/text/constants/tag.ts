/**
 * Enumerated text tag constants.
 * Allows to control HTML tag to render.
 * Makes no sense on native platforms.
 * @see {@link TextComponent.Tag}
 */
export enum TextTag {
  /**
   * Renders an `<h1>` element.
   */
  H1,
  /**
   * Renders an `<h2>` element.
   */
  H2,
  /**
   * Renders an `<h3>` element.
   */
  H3,
  /**
   * Renders an `<h4>` element.
   */
  H4,
  /**
   * Renders an `<h5>` element.
   */
  H5,
  /**
   * Renders an `<h6>` element.
   */
  H6,
  /**
   * Renders a `<p>` element.
   */
  P,
  /**
   * Renders a `<span>` element.
   * Used by default when no `tag` prop is provided.
   */
  SPAN,
}
