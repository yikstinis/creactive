import type { Fraction } from '@/helpers'
import { StyleSheet } from 'react-native'

// Mirrors the web TextStyled's `overflow-clip-margin: 0.5em` (see components/styled.tsx).
// React Native has no clip-margin concept, so this approximates it.
// Padding gives the text extra room so ascenders, descenders, and diacritics aren't clipped against the lineHeight box edge.
// An equal negative margin cancels the padding's effect on the box's layout footprint, keeping height calculations unchanged.
const LINE_HEIGHT_CLIP_MARGIN_FACTOR = 0.5

const lineHeightStyleSheetCache = new Map()
export const getLineHeightStyleSheet = (
  fontSize: number,
  lineHeight: Fraction,
) => {
  const lineHeightValue = lineHeight.toValue()
  const cacheKey = [fontSize, lineHeightValue].join('-')
  if (lineHeightStyleSheetCache.has(cacheKey)) {
    return lineHeightStyleSheetCache.get(cacheKey)
  }
  const clipMargin = fontSize * LINE_HEIGHT_CLIP_MARGIN_FACTOR
  const lineHeightStyleSheet = StyleSheet.create({
    textLineHeight: {
      lineHeight: fontSize * lineHeightValue,
      paddingVertical: clipMargin,
      marginVertical: -clipMargin,
    },
  })
  lineHeightStyleSheetCache.set(cacheKey, lineHeightStyleSheet)
  return lineHeightStyleSheet
}
