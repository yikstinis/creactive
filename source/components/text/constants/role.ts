/**
 * Text role enum (for inner usage).
 * A part of react-native role type, used by text.
 */
export const enum TextRole {
  HEADING = 'heading',
  /**
   * There is no paragraph role in react-native types.
   * But thats how we render text to paragraph tag in react-native-web.
   */
  PARAGRAPH = 'paragraph',
}
