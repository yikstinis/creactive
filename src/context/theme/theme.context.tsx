import { createContext, useContext, useMemo } from 'react'
import { StyleSheet } from 'react-native'

import { DEFAULT_SPACING } from '@/constants/spacing'
import type {
  Theme,
  ThemeContextProviderComponent,
  ThemeContextProviderProps,
  ThemeContextValue,
  ThemeStyleSheet,
} from '@/context/theme/theme.types'

export const DEFAULT_THEME: Theme = {
  spacing: DEFAULT_SPACING,
}

export function createThemeStyleSheet(theme: Theme): ThemeStyleSheet {
  const styles = {} as ThemeStyleSheet

  for (const [spacing, dimension] of Object.entries(theme.spacing)) {
    styles[`padding${spacing}` as keyof ThemeStyleSheet] = { padding: dimension.value }
    styles[`margin${spacing}` as keyof ThemeStyleSheet] = { margin: dimension.value }
  }

  return StyleSheet.create(styles)
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  styleSheet: createThemeStyleSheet(DEFAULT_THEME),
})

export const ThemeContextProvider: ThemeContextProviderComponent = ({ theme, children }: ThemeContextProviderProps) => {
  const value = useMemo(
    () => ({
      theme,
      styleSheet: createThemeStyleSheet(theme),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): Theme {
  return useContext(ThemeContext).theme
}

export function useThemeStyleSheet(): ThemeStyleSheet {
  return useContext(ThemeContext).styleSheet
}
