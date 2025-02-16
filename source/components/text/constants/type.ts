/**
 * Supported specific text types enum.
 * Responsible for text appearance, accessibility and semantics.
 * This enum is not exported, use Text.Type to access available types.
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
 * With This types we also use aria-levels
 */
export const TEXT_TYPE_HEADING = [
  TextType.H1,
  TextType.H2,
  TextType.H3,
  TextType.H4,
  TextType.H5,
  TextType.H6,
]
