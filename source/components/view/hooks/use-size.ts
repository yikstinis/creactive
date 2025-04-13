import type { Size } from '@/helpers'

// Safe converting to size value.
export const useViewSizeValue = (size?: Size) => size?.toValue()
