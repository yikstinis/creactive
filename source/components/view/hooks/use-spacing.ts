import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import {
  VIEW_SPACING_THEME_TOKEN_KEY,
  VIEW_THEME_MARGIN_BOTTOM_SPACING_STYLE_KEY,
  VIEW_THEME_MARGIN_LEFT_SPACING_STYLE_KEY,
  VIEW_THEME_MARGIN_RIGHT_SPACING_STYLE_KEY,
  VIEW_THEME_MARGIN_TOP_SPACING_STYLE_KEY,
  VIEW_THEME_PADDING_BOTTOM_SPACING_STYLE_KEY,
  VIEW_THEME_PADDING_LEFT_SPACING_STYLE_KEY,
  VIEW_THEME_PADDING_RIGHT_SPACING_STYLE_KEY,
  VIEW_THEME_PADDING_TOP_SPACING_STYLE_KEY,
  ViewSpacing,
} from '../constants'

// Margin top.
export const useViewMarginTopStyle = (marginTop?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_MARGIN_TOP_SPACING_STYLE_KEY[marginTop]]
// Padding top.
export const useViewPaddingTopStyle = (paddingTop?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_PADDING_TOP_SPACING_STYLE_KEY[paddingTop]]
// Margin left.
export const useViewMarginLeftStyle = (marginLeft?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_MARGIN_LEFT_SPACING_STYLE_KEY[marginLeft]]
// Padding left.
export const useViewPaddingLeftStyle = (paddingLeft?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_PADDING_LEFT_SPACING_STYLE_KEY[paddingLeft]]
// Margin right.
export const useViewMarginRightStyle = (marginRight?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_MARGIN_RIGHT_SPACING_STYLE_KEY[marginRight]]
// Padding right.
export const useViewPaddingRightStyle = (paddingRight?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_PADDING_RIGHT_SPACING_STYLE_KEY[paddingRight]]
// Margin bottom.
export const useViewMarginBottomStyle = (marginBottom?: ViewSpacing) =>
  // Return undefined value for undefined argument.
  useThemeStyleSheet()[VIEW_THEME_MARGIN_BOTTOM_SPACING_STYLE_KEY[marginBottom]]
// Padding bottom.
export const useViewPaddingBottomStyle = (paddingBottom?: ViewSpacing) =>
  useThemeStyleSheet()[
    VIEW_THEME_PADDING_BOTTOM_SPACING_STYLE_KEY[paddingBottom]
  ]
// Spacing token value.
export const useViewSpacingCSSValue = (viewSpacing?: ViewSpacing) => {
  const themeContext = useThemeContext()
  if (themeContext[VIEW_SPACING_THEME_TOKEN_KEY[viewSpacing]] !== undefined) {
    return `${themeContext[VIEW_SPACING_THEME_TOKEN_KEY[viewSpacing]]}px`
  }
}
