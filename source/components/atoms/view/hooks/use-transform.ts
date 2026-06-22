import type { Fraction, PixelDimension } from '@/helpers'

export const useViewTransformValue = (
  scale?: Fraction,
  translateX?: PixelDimension,
  translateY?: PixelDimension,
): string | undefined => {
  const parts: string[] = []
  const scaleValue = scale?.toValue()
  const translateXValue = translateX?.toValue()
  const translateYValue = translateY?.toValue()
  if (scaleValue !== undefined) parts.push(`scale(${scaleValue})`)
  if (translateXValue !== undefined) parts.push(`translateX(${translateXValue})`)
  if (translateYValue !== undefined) parts.push(`translateY(${translateYValue})`)
  return parts.length > 0 ? parts.join(' ') : undefined
}

export const useViewTranslateNativeValue = (translate?: PixelDimension): number => {
  if (translate === undefined) return 0
  const value = translate.toValue()
  if (typeof value === 'number') return value
  return parseFloat(value)
}

