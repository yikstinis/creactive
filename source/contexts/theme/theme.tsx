import {
  FONT_FAMILY_BASE,
  FONT_SIZE_BASE_LG,
  FONT_SIZE_BASE_MD,
  FONT_SIZE_BASE_SM,
  FONT_SIZE_BASE_X2L,
  FONT_SIZE_BASE_X2S,
  FONT_SIZE_BASE_X3L,
  FONT_SIZE_BASE_X4L,
  FONT_SIZE_BASE_X5L,
  FONT_SIZE_BASE_XL,
  FONT_SIZE_BASE_XS,
  FONT_WEIGHT_BASE_BLACK,
  FONT_WEIGHT_BASE_BOLD,
  FONT_WEIGHT_BASE_EXTRABOLD,
  FONT_WEIGHT_BASE_EXTRALIGHT,
  FONT_WEIGHT_BASE_LIGHT,
  FONT_WEIGHT_BASE_MEDIUM,
  FONT_WEIGHT_BASE_REGULAR,
  FONT_WEIGHT_BASE_SEMIBOLD,
  FONT_WEIGHT_BASE_THIN,
  LINE_HEIGHT_BASE_LOOSE,
  LINE_HEIGHT_BASE_NONE,
  LINE_HEIGHT_BASE_NORMAL,
  LINE_HEIGHT_BASE_RELAXED,
  LINE_HEIGHT_BASE_SNUG,
  LINE_HEIGHT_BASE_TIGHT,
} from '@/constants'
import { createContext, useContext, useMemo } from 'react'
import type {
  ThemeContextProviderComponent,
  ThemeContextValue,
} from './theme.types'

// We can use context even outside provider.
// This can be helpful for testing and storybook.
const ThemeContext = createContext<ThemeContextValue>({
  fontFamilyBase: FONT_FAMILY_BASE,
  fontWeightBaseThin: FONT_WEIGHT_BASE_THIN,
  fontWeightBaseExtraLight: FONT_WEIGHT_BASE_EXTRALIGHT,
  fontWeightBaseLight: FONT_WEIGHT_BASE_LIGHT,
  fontWeightBaseRegular: FONT_WEIGHT_BASE_REGULAR,
  fontWeightBaseMedium: FONT_WEIGHT_BASE_MEDIUM,
  fontWeightBaseSemibold: FONT_WEIGHT_BASE_SEMIBOLD,
  fontWeightBaseBold: FONT_WEIGHT_BASE_BOLD,
  fontWeightBaseExtraBold: FONT_WEIGHT_BASE_EXTRABOLD,
  fontWeightBaseBlack: FONT_WEIGHT_BASE_BLACK,
  fontSizeBaseX2S: FONT_SIZE_BASE_X2S,
  fontSizeBaseXS: FONT_SIZE_BASE_XS,
  fontSizeBaseSM: FONT_SIZE_BASE_SM,
  fontSizeBaseMD: FONT_SIZE_BASE_MD,
  fontSizeBaseLG: FONT_SIZE_BASE_LG,
  fontSizeBaseXL: FONT_SIZE_BASE_XL,
  fontSizeBaseX2L: FONT_SIZE_BASE_X2L,
  fontSizeBaseX3L: FONT_SIZE_BASE_X3L,
  fontSizeBaseX4L: FONT_SIZE_BASE_X4L,
  fontSizeBaseX5L: FONT_SIZE_BASE_X5L,
  lineHeightBaseNone: LINE_HEIGHT_BASE_NONE,
  lineHeightBaseTight: LINE_HEIGHT_BASE_TIGHT,
  lineHeightBaseSnug: LINE_HEIGHT_BASE_SNUG,
  lineHeightBaseNormal: LINE_HEIGHT_BASE_NORMAL,
  lineHeightBaseRelaxed: LINE_HEIGHT_BASE_RELAXED,
  lineHeightBaseLoose: LINE_HEIGHT_BASE_LOOSE,
})

export const ThemeContextProvider: ThemeContextProviderComponent = ({
  // Font family tokens.
  fontFamilyBase,
  // Font weight tokens.
  fontWeightBaseThin,
  fontWeightBaseExtraLight,
  fontWeightBaseLight,
  fontWeightBaseRegular,
  fontWeightBaseMedium,
  fontWeightBaseSemibold,
  fontWeightBaseBold,
  fontWeightBaseExtraBold,
  fontWeightBaseBlack,
  // Font size tokens.
  fontSizeBaseX2S,
  fontSizeBaseXS,
  fontSizeBaseSM,
  fontSizeBaseMD,
  fontSizeBaseLG,
  fontSizeBaseXL,
  fontSizeBaseX2L,
  fontSizeBaseX3L,
  fontSizeBaseX4L,
  fontSizeBaseX5L,
  // Line height tokens.
  lineHeightBaseNone,
  lineHeightBaseTight,
  lineHeightBaseSnug,
  lineHeightBaseNormal,
  lineHeightBaseRelaxed,
  lineHeightBaseLoose,
  // And at least.. :)
  children,
}) => {
  // Memorizing context value.
  // Allows to avoid unnecessary re-renders.
  // Context consumers will re-render only if value changes.
  const value = useMemo(
    () => ({
      // Font family tokens.
      fontFamilyBase: fontFamilyBase ?? FONT_FAMILY_BASE,
      // Base font weight tokens.
      fontWeightBaseThin: fontWeightBaseThin ?? FONT_WEIGHT_BASE_THIN,
      fontWeightBaseExtraLight:
        fontWeightBaseExtraLight ?? FONT_WEIGHT_BASE_EXTRALIGHT,
      fontWeightBaseLight: fontWeightBaseLight ?? FONT_WEIGHT_BASE_LIGHT,
      fontWeightBaseRegular: fontWeightBaseRegular ?? FONT_WEIGHT_BASE_REGULAR,
      fontWeightBaseMedium: fontWeightBaseMedium ?? FONT_WEIGHT_BASE_MEDIUM,
      fontWeightBaseSemibold:
        fontWeightBaseSemibold ?? FONT_WEIGHT_BASE_SEMIBOLD,
      fontWeightBaseBold: fontWeightBaseBold ?? FONT_WEIGHT_BASE_BOLD,
      fontWeightBaseExtraBold:
        fontWeightBaseExtraBold ?? FONT_WEIGHT_BASE_EXTRABOLD,
      fontWeightBaseBlack: fontWeightBaseBlack ?? FONT_WEIGHT_BASE_BLACK,
      // Base font size tokens.
      fontSizeBaseX2S: fontSizeBaseX2S ?? FONT_SIZE_BASE_X2S,
      fontSizeBaseXS: fontSizeBaseXS ?? FONT_SIZE_BASE_XS,
      fontSizeBaseSM: fontSizeBaseSM ?? FONT_SIZE_BASE_SM,
      fontSizeBaseMD: fontSizeBaseMD ?? FONT_SIZE_BASE_MD,
      fontSizeBaseLG: fontSizeBaseLG ?? FONT_SIZE_BASE_LG,
      fontSizeBaseXL: fontSizeBaseXL ?? FONT_SIZE_BASE_XL,
      fontSizeBaseX2L: fontSizeBaseX2L ?? FONT_SIZE_BASE_X2L,
      fontSizeBaseX3L: fontSizeBaseX3L ?? FONT_SIZE_BASE_X3L,
      fontSizeBaseX4L: fontSizeBaseX4L ?? FONT_SIZE_BASE_X4L,
      fontSizeBaseX5L: fontSizeBaseX5L ?? FONT_SIZE_BASE_X5L,
      // Base line height tokens.
      lineHeightBaseNone: lineHeightBaseNone ?? LINE_HEIGHT_BASE_NONE,
      lineHeightBaseTight: lineHeightBaseTight ?? LINE_HEIGHT_BASE_TIGHT,
      lineHeightBaseSnug: lineHeightBaseSnug ?? LINE_HEIGHT_BASE_SNUG,
      lineHeightBaseNormal: lineHeightBaseNormal ?? LINE_HEIGHT_BASE_NORMAL,
      lineHeightBaseRelaxed: lineHeightBaseRelaxed ?? LINE_HEIGHT_BASE_RELAXED,
      lineHeightBaseLoose: lineHeightBaseLoose ?? LINE_HEIGHT_BASE_LOOSE,
    }),
    [
      fontFamilyBase,
      fontWeightBaseThin,
      fontWeightBaseExtraLight,
      fontWeightBaseLight,
      fontWeightBaseRegular,
      fontWeightBaseMedium,
      fontWeightBaseSemibold,
      fontWeightBaseBold,
      fontWeightBaseExtraBold,
      fontWeightBaseBlack,
      fontSizeBaseX2S,
      fontSizeBaseXS,
      fontSizeBaseSM,
      fontSizeBaseMD,
      fontSizeBaseLG,
      fontSizeBaseXL,
      fontSizeBaseX2L,
      fontSizeBaseX3L,
      fontSizeBaseX4L,
      fontSizeBaseX5L,
      lineHeightBaseNone,
      lineHeightBaseTight,
      lineHeightBaseSnug,
      lineHeightBaseNormal,
      lineHeightBaseRelaxed,
      lineHeightBaseLoose,
    ]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export const useThemeContext = () => useContext(ThemeContext)
