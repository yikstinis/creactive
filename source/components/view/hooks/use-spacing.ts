import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import {
  VIEW_MARGIN_BOTTOM_SPACING_STYLE_KEY,
  VIEW_MARGIN_LEFT_SPACING_STYLE_KEY,
  VIEW_MARGIN_RIGHT_SPACING_STYLE_KEY,
  VIEW_MARGIN_TOP_SPACING_STYLE_KEY,
  VIEW_PADDING_BOTTOM_SPACING_STYLE_KEY,
  VIEW_PADDING_LEFT_SPACING_STYLE_KEY,
  VIEW_PADDING_RIGHT_SPACING_STYLE_KEY,
  VIEW_PADDING_TOP_SPACING_STYLE_KEY,
  VIEW_SPACING_THEME_TOKEN_KEY,
  ViewSpacing,
} from '../constants'

// Margin top.
export const useViewMarginTopStyle = (marginTop?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_TOP_SPACING_STYLE_KEY[marginTop]]
// Padding top.
export const useViewPaddingTopStyle = (paddingTop?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_TOP_SPACING_STYLE_KEY[paddingTop]]
// Margin left.
export const useViewMarginLeftStyle = (marginLeft?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_LEFT_SPACING_STYLE_KEY[marginLeft]]
// Padding left.
export const useViewPaddingLeftStyle = (paddingLeft?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_LEFT_SPACING_STYLE_KEY[paddingLeft]]
// Margin right.
export const useViewMarginRightStyle = (marginRight?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_RIGHT_SPACING_STYLE_KEY[marginRight]]
// Padding right.
export const useViewPaddingRightStyle = (paddingRight?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_RIGHT_SPACING_STYLE_KEY[paddingRight]]
// Margin bottom.
export const useViewMarginBottomStyle = (marginBottom?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_BOTTOM_SPACING_STYLE_KEY[marginBottom]]
// Padding bottom.
export const useViewPaddingBottomStyle = (paddingBottom?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_BOTTOM_SPACING_STYLE_KEY[paddingBottom]]
// Spacing token value.
export const useViewSpacingTokenValue = (viewSpacing?: ViewSpacing) =>
  useThemeContext()[VIEW_SPACING_THEME_TOKEN_KEY[viewSpacing]] ?? 0
