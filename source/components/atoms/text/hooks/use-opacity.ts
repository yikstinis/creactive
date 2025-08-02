import type { Fraction } from '@/helpers'

export const useTextOpacityValue = (opacity?: Fraction) => {
  if (opacity) return opacity.toValue()
}
