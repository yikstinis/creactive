import type { Fraction } from '@/helpers'

export const useTextOpacity = (opacity?: Fraction) => opacity?.toValue()
