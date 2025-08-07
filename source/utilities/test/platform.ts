import { Platform } from 'react-native'

/**
 * Provides test-only platform-specific utilities.
 * This class is not supposed to be used in production code or exported.
 */
export const TestPlatform = new (class {
  /**
   * Converts provided value to test platform pixels.
   * This is numeric device pixels value, that is expected by native platforms.
   * For web we are expecting px string value.
   * @param value - target value to be converted.
   * @returns - numeric device pixels for native and px string for web.
   */
  toPixels(value: number) {
    return Platform.select({
      native: () => value,
      // Specifying return type to avoid default string type..
      web: () => `${value}px` as number | string,
    })()
  }
})()
