import { expect } from '@jest/globals'
import { useContext } from 'react'
import { Text } from 'react-native'
import TestRenderer from 'react-test-renderer'

import {
  DEFAULT_SPACING,
  DEFAULT_SPACING_LG,
  DEFAULT_SPACING_SM,
  DEFAULT_SPACING_X6L,
  DEFAULT_SPACING_X6S,
  Spacing,
} from '@/constants/spacing'
import {
  createThemeStyleSheet,
  DEFAULT_THEME,
  DEFAULT_THEME_CONTEXT_VALUE,
  mergeTheme,
  ThemeContext,
  ThemeContextProvider,
  useTheme,
  useThemeStyleSheet,
} from '@/context/theme/theme.context'
import type { Theme, ThemeContextValue, ThemeOverride, ThemeStyleSheet } from '@/context/theme/theme.types'
import { Dimension } from '@/helpers/dimension/dimension'

const THEME_OVERRIDE: ThemeOverride = {
  spacing: { [Spacing.MD]: new Dimension(100) },
}

const CUSTOM_THEME: Theme = {
  spacing: { ...DEFAULT_SPACING, [Spacing.MD]: new Dimension(100) },
}

function renderWithConsumer(wrap: (consumer: React.JSX.Element) => React.JSX.Element) {
  const values: ThemeContextValue[] = []

  const Consumer = () => {
    values.push(useContext(ThemeContext))
    return null
  }

  let testRenderer: TestRenderer.ReactTestRenderer

  TestRenderer.act(() => {
    testRenderer = TestRenderer.create(wrap(<Consumer />))
  })

  const rerender = (next: (consumer: React.JSX.Element) => React.JSX.Element) => {
    TestRenderer.act(() => {
      testRenderer.update(next(<Consumer />))
    })
  }

  return { values, rerender }
}

function renderHook<T extends Theme | ThemeStyleSheet>(hook: () => T, theme?: ThemeOverride): T {
  let result: T | undefined

  const Consumer = () => {
    result = hook()
    return null
  }

  TestRenderer.act(() => {
    TestRenderer.create(
      theme === undefined ? (
        <Consumer />
      ) : (
        <ThemeContextProvider theme={theme}>
          <Consumer />
        </ThemeContextProvider>
      ),
    )
  })

  return result!
}

describe('@/context/theme/theme.context', () => {
  describe('DEFAULT_THEME', () => {
    describe('spacing', () => {
      it('uses the default spacing scale', () => {
        expect(DEFAULT_THEME.spacing).toBe(DEFAULT_SPACING)
      })
    })
  })

  describe('DEFAULT_THEME_CONTEXT_VALUE', () => {
    describe('theme', () => {
      it('is DEFAULT_THEME', () => {
        expect(DEFAULT_THEME_CONTEXT_VALUE.theme).toBe(DEFAULT_THEME)
      })
    })

    describe('styleSheet', () => {
      it('is built from DEFAULT_THEME', () => {
        expect(DEFAULT_THEME_CONTEXT_VALUE.styleSheet).toEqual(createThemeStyleSheet(DEFAULT_THEME))
      })
    })
  })

  describe('mergeTheme', () => {
    it('keeps the given theme values when no override is given', () => {
      expect(mergeTheme(DEFAULT_THEME)).toEqual(DEFAULT_THEME)
    })

    it('keeps the given theme values when the override has no spacing', () => {
      expect(mergeTheme(DEFAULT_THEME, {})).toEqual(DEFAULT_THEME)
    })

    it('replaces only the overridden spacing values', () => {
      expect(mergeTheme(DEFAULT_THEME, THEME_OVERRIDE)).toEqual(CUSTOM_THEME)
    })
  })

  describe('createThemeStyleSheet', () => {
    it('creates a style group for every property', () => {
      expect(Object.keys(createThemeStyleSheet(DEFAULT_THEME))).toHaveLength(10)
    })

    it('creates a style for every spacing in each group', () => {
      expect(Object.keys(createThemeStyleSheet(DEFAULT_THEME).padding)).toHaveLength(15)
    })

    it('creates the paddingTop, paddingRight, paddingBottom and paddingLeft styles', () => {
      const styleSheet = createThemeStyleSheet(DEFAULT_THEME)

      expect(styleSheet.paddingTop[Spacing.SM]).toEqual({ paddingTop: DEFAULT_SPACING_SM.value })
      expect(styleSheet.paddingRight[Spacing.SM]).toEqual({ paddingRight: DEFAULT_SPACING_SM.value })
      expect(styleSheet.paddingBottom[Spacing.SM]).toEqual({ paddingBottom: DEFAULT_SPACING_SM.value })
      expect(styleSheet.paddingLeft[Spacing.SM]).toEqual({ paddingLeft: DEFAULT_SPACING_SM.value })
    })

    it('creates the marginTop, marginRight, marginBottom and marginLeft styles', () => {
      const styleSheet = createThemeStyleSheet(DEFAULT_THEME)

      expect(styleSheet.marginTop[Spacing.SM]).toEqual({ marginTop: DEFAULT_SPACING_SM.value })
      expect(styleSheet.marginRight[Spacing.SM]).toEqual({ marginRight: DEFAULT_SPACING_SM.value })
      expect(styleSheet.marginBottom[Spacing.SM]).toEqual({ marginBottom: DEFAULT_SPACING_SM.value })
      expect(styleSheet.marginLeft[Spacing.SM]).toEqual({ marginLeft: DEFAULT_SPACING_SM.value })
    })

    it('creates the X6S padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).padding[Spacing.X6S]).toEqual({ padding: DEFAULT_SPACING_X6S.value })
    })

    it('creates the SM padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).padding[Spacing.SM]).toEqual({ padding: DEFAULT_SPACING_SM.value })
    })

    it('creates the LG padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).padding[Spacing.LG]).toEqual({ padding: DEFAULT_SPACING_LG.value })
    })

    it('creates the X6L padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).padding[Spacing.X6L]).toEqual({ padding: DEFAULT_SPACING_X6L.value })
    })

    it('creates the X6S margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).margin[Spacing.X6S]).toEqual({ margin: DEFAULT_SPACING_X6S.value })
    })

    it('creates the SM margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).margin[Spacing.SM]).toEqual({ margin: DEFAULT_SPACING_SM.value })
    })

    it('creates the LG margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).margin[Spacing.LG]).toEqual({ margin: DEFAULT_SPACING_LG.value })
    })

    it('creates the X6L margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME).margin[Spacing.X6L]).toEqual({ margin: DEFAULT_SPACING_X6L.value })
    })

    it('takes the values from the given theme', () => {
      const styleSheet = createThemeStyleSheet(CUSTOM_THEME)

      expect(styleSheet.padding[Spacing.MD]).toEqual({ padding: 100 })
      expect(styleSheet.margin[Spacing.MD]).toEqual({ margin: 100 })
    })
  })

  describe('ThemeContext', () => {
    it('provides DEFAULT_THEME_CONTEXT_VALUE when no provider is rendered', () => {
      const { values } = renderWithConsumer((consumer) => consumer)

      expect(values[0]).toBe(DEFAULT_THEME_CONTEXT_VALUE)
    })
  })

  describe('ThemeContextProvider', () => {
    it('renders its children', () => {
      let testRenderer: TestRenderer.ReactTestRenderer

      TestRenderer.act(() => {
        testRenderer = TestRenderer.create(
          <ThemeContextProvider>
            <Text>Hello</Text>
          </ThemeContextProvider>,
        )
      })

      expect(testRenderer!.root.findByType(Text).props.children).toBe('Hello')
    })

    it('provides DEFAULT_THEME and its style sheet when no theme is given', () => {
      const { values } = renderWithConsumer((consumer) => <ThemeContextProvider>{consumer}</ThemeContextProvider>)

      expect(values[0]).toEqual(DEFAULT_THEME_CONTEXT_VALUE)
    })

    it('provides DEFAULT_THEME merged with the given theme, and its style sheet', () => {
      const { values } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={THEME_OVERRIDE}>{consumer}</ThemeContextProvider>
      ))

      expect(values[0]).toEqual({ theme: CUSTOM_THEME, styleSheet: createThemeStyleSheet(CUSTOM_THEME) })
    })

    it('merges the given theme with the theme of a parent provider', () => {
      const { values } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={THEME_OVERRIDE}>
          <ThemeContextProvider theme={{ spacing: { [Spacing.SM]: new Dimension(50) } }}>{consumer}</ThemeContextProvider>
        </ThemeContextProvider>
      ))

      expect(values[0].theme).toEqual({
        spacing: { ...DEFAULT_SPACING, [Spacing.MD]: new Dimension(100), [Spacing.SM]: new Dimension(50) },
      })
    })

    it('keeps the same value while the theme is unchanged', () => {
      const { values, rerender } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={THEME_OVERRIDE}>{consumer}</ThemeContextProvider>
      ))

      rerender((consumer) => <ThemeContextProvider theme={THEME_OVERRIDE}>{consumer}</ThemeContextProvider>)

      expect(values[1]).toBe(values[0])
    })

    it('provides a new value when the theme changes', () => {
      const { values, rerender } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={THEME_OVERRIDE}>{consumer}</ThemeContextProvider>
      ))

      rerender((consumer) => <ThemeContextProvider>{consumer}</ThemeContextProvider>)

      expect(values[1]).not.toBe(values[0])
      expect(values[1]).toEqual(DEFAULT_THEME_CONTEXT_VALUE)
    })
  })

  describe('useTheme', () => {
    it('returns DEFAULT_THEME when no provider is rendered', () => {
      expect(renderHook(useTheme)).toBe(DEFAULT_THEME)
    })

    it('returns DEFAULT_THEME merged with the theme given to the provider', () => {
      expect(renderHook(useTheme, THEME_OVERRIDE)).toEqual(CUSTOM_THEME)
    })
  })

  describe('useThemeStyleSheet', () => {
    it('returns the DEFAULT_THEME style sheet when no provider is rendered', () => {
      expect(renderHook(useThemeStyleSheet)).toBe(DEFAULT_THEME_CONTEXT_VALUE.styleSheet)
    })

    it('returns the style sheet of the merged theme', () => {
      expect(renderHook(useThemeStyleSheet, THEME_OVERRIDE)).toEqual(createThemeStyleSheet(CUSTOM_THEME))
    })
  })
})
