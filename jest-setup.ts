// This file is automatically executed before running tests.
// You can use it to configure or set up the testing environment.
import { Platform } from 'react-native'

type PlatformStyle = Record<string, unknown>

const normalizePlatformStyle = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(normalizePlatformStyle)
  if (value === null || typeof value !== 'object') return value

  return Object.fromEntries(
    Object.entries(value as PlatformStyle).map(([property, propertyValue]) => {
      if (
        Platform.OS === 'web' &&
        new Set([
          'top',
          'left',
          'right',
          'bottom',
          'width',
          'height',
          'minWidth',
          'maxWidth',
          'minHeight',
          'maxHeight',
          'flexBasis',
          'lineHeight',
          'borderRadius',
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
        ]).has(property) &&
        typeof propertyValue === 'number'
      ) {
        return [property, `${propertyValue}px`]
      }

      return [property, normalizePlatformStyle(propertyValue)]
    }),
  )
}

expect.extend({
  toHavePlatformStyle(received: unknown, expected: unknown) {
    try {
      expect(received).toHaveStyle(normalizePlatformStyle(expected) as never)
      return {
        pass: true,
        message: () => 'Expected element not to match platform style!',
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      return {
        pass: false,
        message: () => message,
      }
    }
  },
})

declare global {
  namespace jest {
    interface Matchers<R> {
      toHavePlatformStyle(style: unknown): R
    }
  }
}
