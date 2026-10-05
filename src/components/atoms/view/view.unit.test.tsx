import { expect } from '@jest/globals'
import type { ReactNode } from 'react'
import { Text, View as NativeView } from 'react-native'
import TestRenderer from 'react-test-renderer'

import { View } from '@/components/atoms/view/view'
import type { ViewProps } from '@/components/atoms/view/view.types'
import {
  DEFAULT_SPACING,
  DEFAULT_SPACING_LG,
  DEFAULT_SPACING_MD,
  DEFAULT_SPACING_SM,
  DEFAULT_SPACING_X6L,
  DEFAULT_SPACING_X6S,
  Spacing,
} from '@/constants/spacing'
import { ThemeContextProvider } from '@/context/theme/theme.context'
import type { Theme } from '@/context/theme/theme.types'
import { Dimension } from '@/helpers/dimension/dimension'

const CUSTOM_THEME: Theme = {
  spacing: { ...DEFAULT_SPACING, [Spacing.MD]: new Dimension(100) },
}

function renderNativeViewProps(props: Omit<ViewProps, 'children'> & { children?: ReactNode } = {}, theme?: Theme) {
  let testRenderer: TestRenderer.ReactTestRenderer

  TestRenderer.act(() => {
    testRenderer = TestRenderer.create(
      theme === undefined ? (
        <View {...props} />
      ) : (
        <ThemeContextProvider theme={theme}>
          <View {...props} />
        </ThemeContextProvider>
      ),
    )
  })

  return testRenderer!.root.findByType(NativeView).props
}

describe('@/components/atoms/view/view', () => {
  describe('View', () => {
    describe('children', () => {
      it('renders its children', () => {
        const { children } = renderNativeViewProps({ children: <Text>Hello</Text> })

        expect(children).toEqual(<Text>Hello</Text>)
      })
    })

    describe('padding', () => {
      it('applies the X6S scale value when padding is given', () => {
        const { style } = renderNativeViewProps({ padding: Spacing.X6S })

        expect(style).toEqual([{ padding: DEFAULT_SPACING_X6S.value }, false, undefined])
      })

      it('applies the SM scale value when padding is given', () => {
        const { style } = renderNativeViewProps({ padding: Spacing.SM })

        expect(style).toEqual([{ padding: DEFAULT_SPACING_SM.value }, false, undefined])
      })

      it('applies the LG scale value when padding is given', () => {
        const { style } = renderNativeViewProps({ padding: Spacing.LG })

        expect(style).toEqual([{ padding: DEFAULT_SPACING_LG.value }, false, undefined])
      })

      it('applies the X6L scale value when padding is given', () => {
        const { style } = renderNativeViewProps({ padding: Spacing.X6L })

        expect(style).toEqual([{ padding: DEFAULT_SPACING_X6L.value }, false, undefined])
      })
    })

    describe('margin', () => {
      it('applies the X6S scale value when margin is given', () => {
        const { style } = renderNativeViewProps({ margin: Spacing.X6S })

        expect(style).toEqual([false, { margin: DEFAULT_SPACING_X6S.value }, undefined])
      })

      it('applies the SM scale value when margin is given', () => {
        const { style } = renderNativeViewProps({ margin: Spacing.SM })

        expect(style).toEqual([false, { margin: DEFAULT_SPACING_SM.value }, undefined])
      })

      it('applies the LG scale value when margin is given', () => {
        const { style } = renderNativeViewProps({ margin: Spacing.LG })

        expect(style).toEqual([false, { margin: DEFAULT_SPACING_LG.value }, undefined])
      })

      it('applies the X6L scale value when margin is given', () => {
        const { style } = renderNativeViewProps({ margin: Spacing.X6L })

        expect(style).toEqual([false, { margin: DEFAULT_SPACING_X6L.value }, undefined])
      })
    })

    describe('testID', () => {
      it('forwards it to the native view', () => {
        const { testID } = renderNativeViewProps({ testID: 'my-view' })

        expect(testID).toEqual('my-view')
      })
    })

    it('applies no padding/margin style when none is given', () => {
      const { style } = renderNativeViewProps()

      expect(style).toEqual([false, false, undefined])
    })

    it('combines padding, margin, and a custom style', () => {
      const customStyle = { backgroundColor: 'red' }
      const { style } = renderNativeViewProps({
        padding: Spacing.MD,
        margin: Spacing.SM,
        style: customStyle,
      })

      expect(style).toEqual([
        { padding: DEFAULT_SPACING_MD.value },
        { margin: DEFAULT_SPACING_SM.value },
        customStyle,
      ])
    })

    it('takes padding and margin values from the provided theme', () => {
      const { style } = renderNativeViewProps({ padding: Spacing.MD, margin: Spacing.MD }, CUSTOM_THEME)

      expect(style).toEqual([{ padding: 100 }, { margin: 100 }, undefined])
    })
  })
})
