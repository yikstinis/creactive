import { FONT_FAMILY_BASE } from '@/constants'
import { createContext, useContext, useMemo } from 'react'
import type {
  ThemeContextProviderComponent,
  ThemeContextValue,
} from './theme.types'

// We can use this context even outside provider.
// This can be helpful for testing and storybook.
const ThemeContext = createContext<ThemeContextValue>({
  fontFamilyBase: FONT_FAMILY_BASE,
})

export const ThemeContextProvider: ThemeContextProviderComponent = ({
  fontFamilyBase,
  children,
}) => {
  // Memorizing context value.
  // Allows to avoid unnecessary re-renders.
  // Context consumers will re-render only if value changes.
  const value = useMemo(
    () => ({
      fontFamilyBase: fontFamilyBase ?? FONT_FAMILY_BASE,
    }),
    [fontFamilyBase]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export const useThemeContext = () => useContext(ThemeContext)
