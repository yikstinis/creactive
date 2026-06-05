import type { Dimension, Fraction } from '@/helpers'

export const useTransitionTransformValue = (
  scale?: Fraction,
  translateX?: Dimension,
  translateY?: Dimension,
): string | undefined => {
  const parts: string[] = []
  const scaleValue = scale?.toValue()
  const translateXValue = translateX?.toValue()
  const translateYValue = translateY?.toValue()
  if (scaleValue !== undefined) parts.push(`scale(${scaleValue})`)
  if (translateXValue !== undefined)
    parts.push(`translateX(${translateXValue})`)
  if (translateYValue !== undefined)
    parts.push(`translateY(${translateYValue})`)
  return parts.length > 0 ? parts.join(' ') : undefined
}

export const useTransitionTranslateNativeValue = (
  translate?: Dimension,
): number => {
  if (translate === undefined) return 0
  const value = translate.toValue()
  if (typeof value === 'number') return value
  return parseFloat(value)
}
