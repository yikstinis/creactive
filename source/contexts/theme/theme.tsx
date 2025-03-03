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
} from '@/constants'
import { createContext, useContext, useMemo } from 'react'
import type {
  ThemeContextProviderComponent,
  ThemeContextValue,
} from './theme.types'

// We can use this context even outside provider.
// This can be helpful for testing and storybook.
const ThemeContext = createContext<ThemeContextValue>({
  fontFamilyBase: FONT_FAMILY_BASE,
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
})

export const ThemeContextProvider: ThemeContextProviderComponent = ({
  fontFamilyBase,
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
  children,
}) => {
  // Memorizing context value.
  // Allows to avoid unnecessary re-renders.
  // Context consumers will re-render only if value changes.
  const value = useMemo(
    () => ({
      fontFamilyBase: fontFamilyBase ?? FONT_FAMILY_BASE,
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
    }),
    [
      fontFamilyBase,
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
    ]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export const useThemeContext = () => useContext(ThemeContext)
