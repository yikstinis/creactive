import type { Fraction } from '@/helpers'

export const useTransitionOpacityValue = (opacity?: Fraction) =>
  opacity?.toValue()
