import { StyleSheet } from 'react-native'

const lineHeightStyleSheetCache = new Map()
export const getLineHeightStyleSheet = (
  fontSize: number,
  lineHeight: number,
) => {
  const cacheKey = [fontSize, lineHeight].join('-')
  if (lineHeightStyleSheetCache.has(cacheKey)) {
    return lineHeightStyleSheetCache.get(cacheKey)
  }
  const lineHeightStyleSheet = StyleSheet.create({
    textLineHeight: {
      lineHeight: fontSize * lineHeight,
    },
  })
  lineHeightStyleSheetCache.set(cacheKey, lineHeightStyleSheet)
  return lineHeightStyleSheet
}
