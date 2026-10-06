import { createContext, useContext, useMemo } from 'react'
import { StyleSheet } from 'react-native'

import { DEFAULT_SPACING, Spacing } from '@/constants/spacing'
import type {
  Theme,
  ThemeContextProviderComponent,
  ThemeContextProviderProps,
  ThemeContextValue,
  ThemeOverride,
  ThemeStyleSheet,
} from '@/context/theme/theme.types'

export const DEFAULT_THEME: Theme = {
  spacing: DEFAULT_SPACING,
}

export const DEFAULT_THEME_CONTEXT_VALUE: ThemeContextValue = {
  theme: DEFAULT_THEME,
  styleSheet: createThemeStyleSheet(DEFAULT_THEME),
}

export const ThemeContext = createContext<ThemeContextValue>(DEFAULT_THEME_CONTEXT_VALUE)

export const ThemeContextProvider: ThemeContextProviderComponent = ({ theme, children }: ThemeContextProviderProps) => {
  const parentTheme = useTheme()

  const value = useMemo(() => {
    const mergedTheme = mergeTheme(parentTheme, theme)

    return {
      theme: mergedTheme,
      styleSheet: createThemeStyleSheet(mergedTheme),
    }
  }, [parentTheme, theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): Theme {
  return useContext(ThemeContext).theme
}

export function useThemeStyleSheet(): ThemeStyleSheet {
  return useContext(ThemeContext).styleSheet
}

export function mergeTheme(theme: Theme, override: ThemeOverride = {}): Theme {
  return {
    spacing: { ...theme.spacing, ...override.spacing },
  }
}

export function createThemeStyleSheet(theme: Theme): ThemeStyleSheet {
  return {
    padding: StyleSheet.create({
      [Spacing.X6S]: { padding: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { padding: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { padding: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { padding: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { padding: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { padding: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { padding: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { padding: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { padding: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { padding: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { padding: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { padding: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { padding: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { padding: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { padding: theme.spacing[Spacing.X6L].value },
    }),
    paddingTop: StyleSheet.create({
      [Spacing.X6S]: { paddingTop: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { paddingTop: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { paddingTop: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { paddingTop: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { paddingTop: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { paddingTop: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { paddingTop: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { paddingTop: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { paddingTop: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { paddingTop: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { paddingTop: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { paddingTop: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { paddingTop: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { paddingTop: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { paddingTop: theme.spacing[Spacing.X6L].value },
    }),
    paddingRight: StyleSheet.create({
      [Spacing.X6S]: { paddingRight: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { paddingRight: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { paddingRight: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { paddingRight: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { paddingRight: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { paddingRight: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { paddingRight: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { paddingRight: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { paddingRight: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { paddingRight: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { paddingRight: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { paddingRight: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { paddingRight: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { paddingRight: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { paddingRight: theme.spacing[Spacing.X6L].value },
    }),
    paddingBottom: StyleSheet.create({
      [Spacing.X6S]: { paddingBottom: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { paddingBottom: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { paddingBottom: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { paddingBottom: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { paddingBottom: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { paddingBottom: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { paddingBottom: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { paddingBottom: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { paddingBottom: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { paddingBottom: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { paddingBottom: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { paddingBottom: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { paddingBottom: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { paddingBottom: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { paddingBottom: theme.spacing[Spacing.X6L].value },
    }),
    paddingLeft: StyleSheet.create({
      [Spacing.X6S]: { paddingLeft: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { paddingLeft: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { paddingLeft: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { paddingLeft: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { paddingLeft: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { paddingLeft: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { paddingLeft: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { paddingLeft: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { paddingLeft: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { paddingLeft: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { paddingLeft: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { paddingLeft: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { paddingLeft: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { paddingLeft: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { paddingLeft: theme.spacing[Spacing.X6L].value },
    }),
    margin: StyleSheet.create({
      [Spacing.X6S]: { margin: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { margin: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { margin: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { margin: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { margin: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { margin: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { margin: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { margin: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { margin: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { margin: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { margin: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { margin: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { margin: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { margin: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { margin: theme.spacing[Spacing.X6L].value },
    }),
    marginTop: StyleSheet.create({
      [Spacing.X6S]: { marginTop: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { marginTop: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { marginTop: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { marginTop: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { marginTop: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { marginTop: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { marginTop: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { marginTop: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { marginTop: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { marginTop: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { marginTop: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { marginTop: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { marginTop: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { marginTop: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { marginTop: theme.spacing[Spacing.X6L].value },
    }),
    marginRight: StyleSheet.create({
      [Spacing.X6S]: { marginRight: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { marginRight: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { marginRight: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { marginRight: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { marginRight: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { marginRight: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { marginRight: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { marginRight: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { marginRight: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { marginRight: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { marginRight: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { marginRight: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { marginRight: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { marginRight: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { marginRight: theme.spacing[Spacing.X6L].value },
    }),
    marginBottom: StyleSheet.create({
      [Spacing.X6S]: { marginBottom: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { marginBottom: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { marginBottom: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { marginBottom: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { marginBottom: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { marginBottom: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { marginBottom: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { marginBottom: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { marginBottom: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { marginBottom: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { marginBottom: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { marginBottom: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { marginBottom: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { marginBottom: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { marginBottom: theme.spacing[Spacing.X6L].value },
    }),
    marginLeft: StyleSheet.create({
      [Spacing.X6S]: { marginLeft: theme.spacing[Spacing.X6S].value },
      [Spacing.X5S]: { marginLeft: theme.spacing[Spacing.X5S].value },
      [Spacing.X4S]: { marginLeft: theme.spacing[Spacing.X4S].value },
      [Spacing.X3S]: { marginLeft: theme.spacing[Spacing.X3S].value },
      [Spacing.X2S]: { marginLeft: theme.spacing[Spacing.X2S].value },
      [Spacing.XS]: { marginLeft: theme.spacing[Spacing.XS].value },
      [Spacing.SM]: { marginLeft: theme.spacing[Spacing.SM].value },
      [Spacing.MD]: { marginLeft: theme.spacing[Spacing.MD].value },
      [Spacing.LG]: { marginLeft: theme.spacing[Spacing.LG].value },
      [Spacing.XL]: { marginLeft: theme.spacing[Spacing.XL].value },
      [Spacing.X2L]: { marginLeft: theme.spacing[Spacing.X2L].value },
      [Spacing.X3L]: { marginLeft: theme.spacing[Spacing.X3L].value },
      [Spacing.X4L]: { marginLeft: theme.spacing[Spacing.X4L].value },
      [Spacing.X5L]: { marginLeft: theme.spacing[Spacing.X5L].value },
      [Spacing.X6L]: { marginLeft: theme.spacing[Spacing.X6L].value },
    }),
  }
}
