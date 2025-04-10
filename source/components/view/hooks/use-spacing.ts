import { useThemeContext } from '@/contexts'
import { useThemeStyleSheet } from '@/hooks'
import {
  ViewMarginBottomThemeStyleSheetKey,
  ViewMarginLeftThemeStyleSheetKey,
  ViewMarginRightThemeStyleSheetKey,
  ViewMarginTopThemeStyleSheetKey,
  ViewPaddingBottomThemeStyleSheetKey,
  ViewPaddingLeftThemeStyleSheetKey,
  ViewPaddingRightThemeStyleSheetKey,
  ViewPaddingTopThemeStyleSheetKey,
  ViewSpacing,
  ViewSpacingThemeTokenKey,
} from '../constants'

// View component spacing hooks.
// Native versions return native styles.
// Web version returns theme spacing token value.

// Margin top.
export const useViewMarginTopStyle = (marginTop?: ViewSpacing) =>
  useThemeStyleSheet()[ViewMarginTopThemeStyleSheetKey[marginTop]]
// Padding top.
export const useViewPaddingTopStyle = (paddingTop?: ViewSpacing) =>
  useThemeStyleSheet()[ViewPaddingTopThemeStyleSheetKey[paddingTop]]
// Margin left.
export const useViewMarginLeftStyle = (marginLeft?: ViewSpacing) =>
  useThemeStyleSheet()[ViewMarginLeftThemeStyleSheetKey[marginLeft]]
// Padding left.
export const useViewPaddingLeftStyle = (paddingLeft?: ViewSpacing) =>
  useThemeStyleSheet()[ViewPaddingLeftThemeStyleSheetKey[paddingLeft]]
// Margin right.
export const useViewMarginRightStyle = (marginRight?: ViewSpacing) =>
  useThemeStyleSheet()[ViewMarginRightThemeStyleSheetKey[marginRight]]
// Padding right.
export const useViewPaddingRightStyle = (paddingRight?: ViewSpacing) =>
  useThemeStyleSheet()[ViewPaddingRightThemeStyleSheetKey[paddingRight]]
// Margin bottom.
export const useViewMarginBottomStyle = (marginBottom?: ViewSpacing) =>
  useThemeStyleSheet()[ViewMarginBottomThemeStyleSheetKey[marginBottom]]
// Padding Bottom.
export const useViewPaddingBottomStyle = (paddingBottom?: ViewSpacing) =>
  useThemeStyleSheet()[ViewPaddingBottomThemeStyleSheetKey[paddingBottom]]

// Spacing token value.
export const useViewSpacingTokenValue = (viewSpacing?: ViewSpacing) =>
  useThemeContext()[ViewSpacingThemeTokenKey[viewSpacing]] ?? 0
