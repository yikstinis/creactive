import type { Size } from '@/helpers'

// Safe converting to size value.
export const useViewSizeValue = (size?: Size) => {
  if (size) return size.toValue()
}
