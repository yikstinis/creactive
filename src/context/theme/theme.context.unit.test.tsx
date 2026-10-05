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
  ThemeContext,
  ThemeContextProvider,
  useTheme,
  useThemeStyleSheet,
} from '@/context/theme/theme.context'
import type { Theme, ThemeContextValue, ThemeStyleSheet } from '@/context/theme/theme.types'
import { Dimension } from '@/helpers/dimension/dimension'

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

function renderHook<T extends Theme | ThemeStyleSheet>(hook: () => T, theme?: Theme): T {
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

  describe('createThemeStyleSheet', () => {
    it('creates a padding and a margin style for every spacing', () => {
      expect(Object.keys(createThemeStyleSheet(DEFAULT_THEME))).toHaveLength(Object.keys(DEFAULT_SPACING).length * 2)
    })

    it('creates the X6S padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`padding${Spacing.X6S}`]).toEqual({ padding: DEFAULT_SPACING_X6S.value })
    })

    it('creates the SM padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`padding${Spacing.SM}`]).toEqual({ padding: DEFAULT_SPACING_SM.value })
    })

    it('creates the LG padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`padding${Spacing.LG}`]).toEqual({ padding: DEFAULT_SPACING_LG.value })
    })

    it('creates the X6L padding style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`padding${Spacing.X6L}`]).toEqual({ padding: DEFAULT_SPACING_X6L.value })
    })

    it('creates the X6S margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`margin${Spacing.X6S}`]).toEqual({ margin: DEFAULT_SPACING_X6S.value })
    })

    it('creates the SM margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`margin${Spacing.SM}`]).toEqual({ margin: DEFAULT_SPACING_SM.value })
    })

    it('creates the LG margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`margin${Spacing.LG}`]).toEqual({ margin: DEFAULT_SPACING_LG.value })
    })

    it('creates the X6L margin style', () => {
      expect(createThemeStyleSheet(DEFAULT_THEME)[`margin${Spacing.X6L}`]).toEqual({ margin: DEFAULT_SPACING_X6L.value })
    })

    it('takes the values from the given theme', () => {
      const styleSheet = createThemeStyleSheet(CUSTOM_THEME)

      expect(styleSheet[`padding${Spacing.MD}`]).toEqual({ padding: 100 })
      expect(styleSheet[`margin${Spacing.MD}`]).toEqual({ margin: 100 })
    })
  })

  describe('ThemeContext', () => {
    it('provides DEFAULT_THEME and its style sheet when no provider is rendered', () => {
      const { values } = renderWithConsumer((consumer) => consumer)

      expect(values[0]).toEqual({ theme: DEFAULT_THEME, styleSheet: createThemeStyleSheet(DEFAULT_THEME) })
    })
  })

  describe('ThemeContextProvider', () => {
    it('renders its children', () => {
      let testRenderer: TestRenderer.ReactTestRenderer

      TestRenderer.act(() => {
        testRenderer = TestRenderer.create(
          <ThemeContextProvider theme={DEFAULT_THEME}>
            <Text>Hello</Text>
          </ThemeContextProvider>,
        )
      })

      expect(testRenderer!.root.findByType(Text).props.children).toBe('Hello')
    })

    it('provides the given theme and its style sheet', () => {
      const { values } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={CUSTOM_THEME}>{consumer}</ThemeContextProvider>
      ))

      expect(values[0]).toEqual({ theme: CUSTOM_THEME, styleSheet: createThemeStyleSheet(CUSTOM_THEME) })
      expect(values[0].theme).toBe(CUSTOM_THEME)
    })

    it('keeps the same value while the theme is unchanged', () => {
      const { values, rerender } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={CUSTOM_THEME}>{consumer}</ThemeContextProvider>
      ))

      rerender((consumer) => <ThemeContextProvider theme={CUSTOM_THEME}>{consumer}</ThemeContextProvider>)

      expect(values[1]).toBe(values[0])
    })

    it('provides a new value when the theme changes', () => {
      const { values, rerender } = renderWithConsumer((consumer) => (
        <ThemeContextProvider theme={CUSTOM_THEME}>{consumer}</ThemeContextProvider>
      ))

      rerender((consumer) => <ThemeContextProvider theme={DEFAULT_THEME}>{consumer}</ThemeContextProvider>)

      expect(values[1]).not.toBe(values[0])
      expect(values[1]).toEqual({ theme: DEFAULT_THEME, styleSheet: createThemeStyleSheet(DEFAULT_THEME) })
    })
  })

  describe('useTheme', () => {
    it('returns DEFAULT_THEME when no provider is rendered', () => {
      expect(renderHook(useTheme)).toBe(DEFAULT_THEME)
    })

    it('returns the theme given to the provider', () => {
      expect(renderHook(useTheme, CUSTOM_THEME)).toBe(CUSTOM_THEME)
    })
  })

  describe('useThemeStyleSheet', () => {
    it('returns the DEFAULT_THEME style sheet when no provider is rendered', () => {
      expect(renderHook(useThemeStyleSheet)).toEqual(createThemeStyleSheet(DEFAULT_THEME))
    })

    it('returns the style sheet of the theme given to the provider', () => {
      expect(renderHook(useThemeStyleSheet, CUSTOM_THEME)).toEqual(createThemeStyleSheet(CUSTOM_THEME))
    })
  })
})
