import { GradientLinear, GradientStop } from './components'
import type { GradientObject } from './gradient.types'

// Organize gradient into an object for cleaner import and usage.
// Part of exported components make no sense separately.
export const Gradient: GradientObject = {
  Linear: GradientLinear,
  Stop: GradientStop,
}
