/**
 * Supported specific text types enum.
 * Responsible for text appearance, accessibility and semantics.
 */
export enum TextType {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
}

/**
 * Types, that are considered as heading types.
 * We convert them into heading text role.
 * This types comes with aria-level attribute.
 */
export const TEXT_TYPE_HEADING = [
  TextType.H1,
  TextType.H2,
  TextType.H3,
  TextType.H4,
  TextType.H5,
  TextType.H6,
]
