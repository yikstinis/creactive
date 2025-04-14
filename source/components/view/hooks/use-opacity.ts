import type { Opacity } from '@/helpers'

// Safe converting to opacity value.
export const useViewOpacityValue = (opacity?: Opacity) => opacity?.toValue()
