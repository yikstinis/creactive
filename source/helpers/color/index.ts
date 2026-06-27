import { Color } from './color'

export type { RGBColor, TransparentColor } from './color'
export type {
  ColorValue,
  RGBColorValue,
  TransparentColorValue,
} from './color.types'
export { Color }

export const COLOR_TRANSPARENT = new Color(0, 0, 0, Color.Format.TRANSPARENT)
