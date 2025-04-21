import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import {
  TEXT_THEME_FONT_SIZE_KEY,
  TEXT_THEME_FONT_WEIGHT_KEY,
  TextFontSize,
  TextFontWeight,
} from '../constants'

// Font family native style.
export const useTextFountFamilyStyle = () => useThemeStyleSheet().fontFamilyBase
// Font family CSS value.
export const useTextFountFamilyCSSValue = () => useThemeContext().fontFamilyBase

// Font weight native style.
export const useTextFontWeightStyle = (fontWeight: TextFontWeight) =>
  useThemeStyleSheet()[TEXT_THEME_FONT_WEIGHT_KEY[fontWeight]]
// Font weight CSS value.
export const useTextFontWeightCSSValue = (fontWeight: TextFontWeight) =>
  useThemeContext()[TEXT_THEME_FONT_WEIGHT_KEY[fontWeight]]

// Font size native style.
export const useTextFontSizeStyle = (fontSize: TextFontSize) =>
  useThemeStyleSheet()[TEXT_THEME_FONT_SIZE_KEY[fontSize]]
// Font size CSS value.
export const useTextFontSizeTokenValue = (fontSize: TextFontSize) =>
  useThemeContext()[TEXT_THEME_FONT_SIZE_KEY[fontSize]]
