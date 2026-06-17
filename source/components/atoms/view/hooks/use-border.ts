import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { StyleSheet } from 'react-native'
import {
  ViewBorderColor,
  ViewBorderRadius,
  ViewBorderWidth,
} from '../constants'

const VIEW_BORDER_COLOR_THEME_KEY = {
  [ViewBorderColor.BASE_100]: 'colorBorderBase100' as const,
  [ViewBorderColor.BASE_200]: 'colorBorderBase200' as const,
  [ViewBorderColor.BASE_300]: 'colorBorderBase300' as const,
  [ViewBorderColor.BASE_400]: 'colorBorderBase400' as const,
  [ViewBorderColor.BASE_500]: 'colorBorderBase500' as const,
  [ViewBorderColor.BASE_600]: 'colorBorderBase600' as const,
  [ViewBorderColor.BASE_700]: 'colorBorderBase700' as const,
  [ViewBorderColor.BASE_800]: 'colorBorderBase800' as const,
  [ViewBorderColor.BASE_900]: 'colorBorderBase900' as const,
}
export const useViewBorderColorStyle = (borderColor?: ViewBorderColor) =>
  useThemeStyleSheet()[VIEW_BORDER_COLOR_THEME_KEY[borderColor]]
export const useViewBorderColorValue = (borderColor?: ViewBorderColor) =>
  useThemeContext()[VIEW_BORDER_COLOR_THEME_KEY[borderColor]]

const VIEW_BORDER_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBaseLG' as const,
}
export const useViewBorderWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_BORDER_WIDTH_THEME_STYLE_KEY[borderWidth]]

const VIEW_BORDER_TOP_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthTopBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthTopBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthTopBaseLG' as const,
}
export const useViewBorderTopWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_BORDER_TOP_WIDTH_THEME_STYLE_KEY[borderWidth]]

const VIEW_BORDER_LEFT_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthLeftBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthLeftBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthLeftBaseLG' as const,
}
export const useViewBorderLeftWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_BORDER_LEFT_WIDTH_THEME_STYLE_KEY[borderWidth]]

const VIEW_BORDER_RIGHT_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthRightBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthRightBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthRightBaseLG' as const,
}
export const useViewBorderRightWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_BORDER_RIGHT_WIDTH_THEME_STYLE_KEY[borderWidth]]

const VIEW_BORDER_BOTTOM_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBottomBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBottomBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBottomBaseLG' as const,
}
export const useViewBorderBottomWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_BORDER_BOTTOM_WIDTH_THEME_STYLE_KEY[borderWidth]]

const VIEW_BORDER_WIDTH_THEME_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBaseLG' as const,
}
export const useViewBorderWidthValue = (borderWidth?: ViewBorderWidth) =>
  useThemeContext()[VIEW_BORDER_WIDTH_THEME_KEY[borderWidth]]

const viewBorderStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderRadius: '50%',
  },
})
const VIEW_BORDER_RADIUS_THEME_STYLE_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBaseXL' as const,
  [ViewBorderRadius.X2L]: 'borderRadiusBaseX2L' as const,
  [ViewBorderRadius.X3L]: 'borderRadiusBaseX3L' as const,
  [ViewBorderRadius.X4L]: 'borderRadiusBaseX4L' as const,
  [ViewBorderRadius.X5L]: 'borderRadiusBaseX5L' as const,
  [ViewBorderRadius.X6L]: 'borderRadiusBaseX6L' as const,
  [ViewBorderRadius.X7L]: 'borderRadiusBaseX7L' as const,
}
export const useViewBorderRadiusStyle = (borderRadius?: ViewBorderRadius) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_BORDER_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const viewBorderTopLeftStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderTopLeftRadius: '50%',
  },
})
const VIEW_BORDER_TOP_LEFT_RADIUS_THEME_STYLE_KEY = {
  [ViewBorderRadius.XS]: 'borderTopLeftRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderTopLeftRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderTopLeftRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderTopLeftRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderTopLeftRadiusBaseXL' as const,
  [ViewBorderRadius.X2L]: 'borderTopLeftRadiusBaseX2L' as const,
  [ViewBorderRadius.X3L]: 'borderTopLeftRadiusBaseX3L' as const,
  [ViewBorderRadius.X4L]: 'borderTopLeftRadiusBaseX4L' as const,
  [ViewBorderRadius.X5L]: 'borderTopLeftRadiusBaseX5L' as const,
  [ViewBorderRadius.X6L]: 'borderTopLeftRadiusBaseX6L' as const,
  [ViewBorderRadius.X7L]: 'borderTopLeftRadiusBaseX7L' as const,
}
export const useViewBorderTopLeftRadiusStyle = (
  borderRadius?: ViewBorderRadius,
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderTopLeftStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_BORDER_TOP_LEFT_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const viewBorderTopRightStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderTopRightRadius: '50%',
  },
})
const VIEW_BORDER_TOP_RIGHT_RADIUS_THEME_STYLE_KEY = {
  [ViewBorderRadius.XS]: 'borderTopRightRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderTopRightRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderTopRightRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderTopRightRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderTopRightRadiusBaseXL' as const,
  [ViewBorderRadius.X2L]: 'borderTopRightRadiusBaseX2L' as const,
  [ViewBorderRadius.X3L]: 'borderTopRightRadiusBaseX3L' as const,
  [ViewBorderRadius.X4L]: 'borderTopRightRadiusBaseX4L' as const,
  [ViewBorderRadius.X5L]: 'borderTopRightRadiusBaseX5L' as const,
  [ViewBorderRadius.X6L]: 'borderTopRightRadiusBaseX6L' as const,
  [ViewBorderRadius.X7L]: 'borderTopRightRadiusBaseX7L' as const,
}
export const useViewBorderTopRightRadiusStyle = (
  borderRadius?: ViewBorderRadius,
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderTopRightStyleSheet.borderRadiusMax
    : themeStyleSheet[
        VIEW_BORDER_TOP_RIGHT_RADIUS_THEME_STYLE_KEY[borderRadius]
      ]
}

const viewBorderBottomLeftStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderBottomLeftRadius: '50%',
  },
})
const VIEW_BORDER_BOTTOM_LEFT_RADIUS_THEME_STYLE_KEY = {
  [ViewBorderRadius.XS]: 'borderBottomLeftRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderBottomLeftRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderBottomLeftRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderBottomLeftRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderBottomLeftRadiusBaseXL' as const,
  [ViewBorderRadius.X2L]: 'borderBottomLeftRadiusBaseX2L' as const,
  [ViewBorderRadius.X3L]: 'borderBottomLeftRadiusBaseX3L' as const,
  [ViewBorderRadius.X4L]: 'borderBottomLeftRadiusBaseX4L' as const,
  [ViewBorderRadius.X5L]: 'borderBottomLeftRadiusBaseX5L' as const,
  [ViewBorderRadius.X6L]: 'borderBottomLeftRadiusBaseX6L' as const,
  [ViewBorderRadius.X7L]: 'borderBottomLeftRadiusBaseX7L' as const,
}
export const useViewBorderBottomLeftRadiusStyle = (
  borderRadius?: ViewBorderRadius,
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderBottomLeftStyleSheet.borderRadiusMax
    : themeStyleSheet[
        VIEW_BORDER_BOTTOM_LEFT_RADIUS_THEME_STYLE_KEY[borderRadius]
      ]
}

const viewBorderBottomRightStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderBottomRightRadius: '50%',
  },
})
const VIEW_BORDER_BOTTOM_RIGHT_RADIUS_THEME_STYLE_KEY = {
  [ViewBorderRadius.XS]: 'borderBottomRightRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderBottomRightRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderBottomRightRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderBottomRightRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderBottomRightRadiusBaseXL' as const,
  [ViewBorderRadius.X2L]: 'borderBottomRightRadiusBaseX2L' as const,
  [ViewBorderRadius.X3L]: 'borderBottomRightRadiusBaseX3L' as const,
  [ViewBorderRadius.X4L]: 'borderBottomRightRadiusBaseX4L' as const,
  [ViewBorderRadius.X5L]: 'borderBottomRightRadiusBaseX5L' as const,
  [ViewBorderRadius.X6L]: 'borderBottomRightRadiusBaseX6L' as const,
  [ViewBorderRadius.X7L]: 'borderBottomRightRadiusBaseX7L' as const,
}
export const useViewBorderBottomRightRadiusStyle = (
  borderRadius?: ViewBorderRadius,
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderBottomRightStyleSheet.borderRadiusMax
    : themeStyleSheet[
        VIEW_BORDER_BOTTOM_RIGHT_RADIUS_THEME_STYLE_KEY[borderRadius]
      ]
}

const VIEW_BORDER_RADIUS_THEME_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBaseXL' as const,
  [ViewBorderRadius.X2L]: 'borderRadiusBaseX2L' as const,
  [ViewBorderRadius.X3L]: 'borderRadiusBaseX3L' as const,
  [ViewBorderRadius.X4L]: 'borderRadiusBaseX4L' as const,
  [ViewBorderRadius.X5L]: 'borderRadiusBaseX5L' as const,
  [ViewBorderRadius.X6L]: 'borderRadiusBaseX6L' as const,
  [ViewBorderRadius.X7L]: 'borderRadiusBaseX7L' as const,
}
export const useViewBorderRadiusValue = (borderRadius?: ViewBorderRadius) => {
  const themeContext = useThemeContext()
  if (borderRadius === undefined) return undefined
  if (borderRadius === ViewBorderRadius.MAX) return '50%'
  return themeContext[VIEW_BORDER_RADIUS_THEME_KEY[borderRadius]]
}
