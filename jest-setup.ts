// This file is automatically executed before running tests.
// You can use it to configure or set up the testing environment.
import type { PercentDimension, PixelDimension } from '@/helpers'
import { Dimension, Fraction } from '@/helpers'
import type { Color } from '@/types'
import { faker } from '@faker-js/faker'
import { Platform } from 'react-native'

global.randomTestId = (): string => faker.string.uuid()

global.randomRgb = (): Color =>
  faker.color.rgb({ format: 'css', includeAlpha: false }) as Color

global.randomRgba = (): Color =>
  faker.color.rgb({ format: 'css', includeAlpha: true }) as Color

global.randomFraction = (): Fraction =>
  new Fraction(faker.number.float({ min: 0, max: 1, fractionDigits: 2 }))

global.randomPixelDimension = (): PixelDimension =>
  new Dimension(faker.number.int(), Dimension.Unit.PIXEL)

global.randomPercentDimension = (): PercentDimension =>
  new Dimension(faker.number.int({ min: 1, max: 100 }), Dimension.Unit.PERCENT)

type PlatformStyle = Record<string, unknown>

const PIXEL_PROPERTIES = new Set([
  'gap',
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
  'borderWidth',
  'borderTopWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
])

const normalizePlatformStyle = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(normalizePlatformStyle)
  if (value === null || typeof value !== 'object') return value

  return Object.fromEntries(
    Object.entries(value as PlatformStyle).map(([property, propertyValue]) => {
      if (
        Platform.OS === 'web' &&
        PIXEL_PROPERTIES.has(property) &&
        typeof propertyValue === 'number'
      ) {
        return [property, `${propertyValue}px`]
      }

      return [property, normalizePlatformStyle(propertyValue)]
    }),
  )
}

const resolvePlatformValue = (value: unknown, property?: string): unknown => {
  if (Array.isArray(value)) return value.map((item) => resolvePlatformValue(item))
  if (value === null || typeof value !== 'object') {
    if (typeof value === 'number' && property !== undefined && PIXEL_PROPERTIES.has(property)) {
      return Platform.OS === 'web' ? `${value}px` : value
    }
    return value
  }
  if ('default' in (value as object))
    return Platform.select(value as { default: unknown })
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
      key,
      resolvePlatformValue(entry, key),
    ]),
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
  toEqualPlatformStyle(received: unknown, expected: unknown) {
    try {
      expect(received).toEqual(resolvePlatformValue(expected))
      return {
        pass: true,
        message: () => 'Expected value not to equal platform style!',
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
      toEqualPlatformStyle(value: unknown): R
    }
  }
  function randomTestId(): string
  function randomRgb(): Color
  function randomRgba(): Color
  function randomFraction(): Fraction
  function randomPixelDimension(): PixelDimension
  function randomPercentDimension(): PercentDimension
}
