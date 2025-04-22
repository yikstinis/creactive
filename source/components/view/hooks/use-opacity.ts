import type { Fraction } from '@/helpers'

// Safe converting to opacity value.
export const useViewOpacityValue = (opacity?: Fraction) => {
  if (opacity) return opacity.toValue()
}
