import { expect } from '@jest/globals'
import { StyleSheet, Text, View as NativeView } from 'react-native'
import TestRenderer from 'react-test-renderer'

import { View } from '@/components/atoms/view/view'
import type { ViewProps } from '@/components/atoms/view/view.types'
import {
  DEFAULT_SPACING_LG,
  DEFAULT_SPACING_MD,
  DEFAULT_SPACING_SM,
  DEFAULT_SPACING_X6L,
  DEFAULT_SPACING_X6S,
  DEFAULT_SPACING_XL,
  Spacing,
} from '@/constants/spacing'
import { ThemeContextProvider } from '@/context/theme/theme.context'
import type { ThemeOverride } from '@/context/theme/theme.types'
import { Dimension } from '@/helpers/dimension/dimension'

const THEME_OVERRIDE: ThemeOverride = {
  spacing: { [Spacing.MD]: new Dimension(100) },
}

function renderNativeViewProps(props: ViewProps = {}, theme?: ThemeOverride) {
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

function renderStyle(props: ViewProps, theme?: ThemeOverride) {
  return StyleSheet.flatten(renderNativeViewProps(props, theme).style)
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
      it('applies the X6S scale value to every side', () => {
        expect(renderStyle({ padding: Spacing.X6S })).toEqual({ padding: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value to every side', () => {
        expect(renderStyle({ padding: Spacing.SM })).toEqual({ padding: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value to every side', () => {
        expect(renderStyle({ padding: Spacing.LG })).toEqual({ padding: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value to every side', () => {
        expect(renderStyle({ padding: Spacing.X6L })).toEqual({ padding: DEFAULT_SPACING_X6L.value })
      })

      it('applies [vertical, horizontal]', () => {
        expect(renderStyle({ padding: [Spacing.SM, Spacing.MD] })).toEqual({
          paddingTop: DEFAULT_SPACING_SM.value,
          paddingRight: DEFAULT_SPACING_MD.value,
          paddingBottom: DEFAULT_SPACING_SM.value,
          paddingLeft: DEFAULT_SPACING_MD.value,
        })
      })

      it('applies [top, horizontal, bottom]', () => {
        expect(renderStyle({ padding: [Spacing.SM, Spacing.MD, Spacing.LG] })).toEqual({
          paddingTop: DEFAULT_SPACING_SM.value,
          paddingRight: DEFAULT_SPACING_MD.value,
          paddingBottom: DEFAULT_SPACING_LG.value,
          paddingLeft: DEFAULT_SPACING_MD.value,
        })
      })

      it('applies [top, right, bottom, left]', () => {
        expect(renderStyle({ padding: [Spacing.SM, Spacing.MD, Spacing.LG, Spacing.XL] })).toEqual({
          paddingTop: DEFAULT_SPACING_SM.value,
          paddingRight: DEFAULT_SPACING_MD.value,
          paddingBottom: DEFAULT_SPACING_LG.value,
          paddingLeft: DEFAULT_SPACING_XL.value,
        })
      })

      it('applies X6S inside an array', () => {
        expect(renderStyle({ padding: [Spacing.X6S, Spacing.X6L] })).toEqual({
          paddingTop: DEFAULT_SPACING_X6S.value,
          paddingRight: DEFAULT_SPACING_X6L.value,
          paddingBottom: DEFAULT_SPACING_X6S.value,
          paddingLeft: DEFAULT_SPACING_X6L.value,
        })
      })

      it('cannot be combined with a padding side prop', () => {
        // @ts-expect-error the shorthand and the side props are mutually exclusive
        expect(renderStyle({ padding: Spacing.SM, paddingTop: Spacing.MD })).toEqual({ padding: DEFAULT_SPACING_SM.value })
      })
    })

    describe('paddingTop', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ paddingTop: Spacing.X6S })).toEqual({ paddingTop: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ paddingTop: Spacing.SM })).toEqual({ paddingTop: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ paddingTop: Spacing.LG })).toEqual({ paddingTop: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ paddingTop: Spacing.X6L })).toEqual({ paddingTop: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('paddingRight', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ paddingRight: Spacing.X6S })).toEqual({ paddingRight: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ paddingRight: Spacing.SM })).toEqual({ paddingRight: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ paddingRight: Spacing.LG })).toEqual({ paddingRight: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ paddingRight: Spacing.X6L })).toEqual({ paddingRight: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('paddingBottom', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ paddingBottom: Spacing.X6S })).toEqual({ paddingBottom: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ paddingBottom: Spacing.SM })).toEqual({ paddingBottom: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ paddingBottom: Spacing.LG })).toEqual({ paddingBottom: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ paddingBottom: Spacing.X6L })).toEqual({ paddingBottom: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('paddingLeft', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ paddingLeft: Spacing.X6S })).toEqual({ paddingLeft: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ paddingLeft: Spacing.SM })).toEqual({ paddingLeft: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ paddingLeft: Spacing.LG })).toEqual({ paddingLeft: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ paddingLeft: Spacing.X6L })).toEqual({ paddingLeft: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('margin', () => {
      it('applies the X6S scale value to every side', () => {
        expect(renderStyle({ margin: Spacing.X6S })).toEqual({ margin: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value to every side', () => {
        expect(renderStyle({ margin: Spacing.SM })).toEqual({ margin: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value to every side', () => {
        expect(renderStyle({ margin: Spacing.LG })).toEqual({ margin: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value to every side', () => {
        expect(renderStyle({ margin: Spacing.X6L })).toEqual({ margin: DEFAULT_SPACING_X6L.value })
      })

      it('applies [vertical, horizontal]', () => {
        expect(renderStyle({ margin: [Spacing.SM, Spacing.MD] })).toEqual({
          marginTop: DEFAULT_SPACING_SM.value,
          marginRight: DEFAULT_SPACING_MD.value,
          marginBottom: DEFAULT_SPACING_SM.value,
          marginLeft: DEFAULT_SPACING_MD.value,
        })
      })

      it('applies [top, horizontal, bottom]', () => {
        expect(renderStyle({ margin: [Spacing.SM, Spacing.MD, Spacing.LG] })).toEqual({
          marginTop: DEFAULT_SPACING_SM.value,
          marginRight: DEFAULT_SPACING_MD.value,
          marginBottom: DEFAULT_SPACING_LG.value,
          marginLeft: DEFAULT_SPACING_MD.value,
        })
      })

      it('applies [top, right, bottom, left]', () => {
        expect(renderStyle({ margin: [Spacing.SM, Spacing.MD, Spacing.LG, Spacing.XL] })).toEqual({
          marginTop: DEFAULT_SPACING_SM.value,
          marginRight: DEFAULT_SPACING_MD.value,
          marginBottom: DEFAULT_SPACING_LG.value,
          marginLeft: DEFAULT_SPACING_XL.value,
        })
      })

      it('applies X6S inside an array', () => {
        expect(renderStyle({ margin: [Spacing.X6S, Spacing.X6L] })).toEqual({
          marginTop: DEFAULT_SPACING_X6S.value,
          marginRight: DEFAULT_SPACING_X6L.value,
          marginBottom: DEFAULT_SPACING_X6S.value,
          marginLeft: DEFAULT_SPACING_X6L.value,
        })
      })

      it('cannot be combined with a margin side prop', () => {
        // @ts-expect-error the shorthand and the side props are mutually exclusive
        expect(renderStyle({ margin: Spacing.SM, marginTop: Spacing.MD })).toEqual({ margin: DEFAULT_SPACING_SM.value })
      })
    })

    describe('marginTop', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ marginTop: Spacing.X6S })).toEqual({ marginTop: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ marginTop: Spacing.SM })).toEqual({ marginTop: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ marginTop: Spacing.LG })).toEqual({ marginTop: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ marginTop: Spacing.X6L })).toEqual({ marginTop: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('marginRight', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ marginRight: Spacing.X6S })).toEqual({ marginRight: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ marginRight: Spacing.SM })).toEqual({ marginRight: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ marginRight: Spacing.LG })).toEqual({ marginRight: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ marginRight: Spacing.X6L })).toEqual({ marginRight: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('marginBottom', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ marginBottom: Spacing.X6S })).toEqual({ marginBottom: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ marginBottom: Spacing.SM })).toEqual({ marginBottom: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ marginBottom: Spacing.LG })).toEqual({ marginBottom: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ marginBottom: Spacing.X6L })).toEqual({ marginBottom: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('marginLeft', () => {
      it('applies the X6S scale value', () => {
        expect(renderStyle({ marginLeft: Spacing.X6S })).toEqual({ marginLeft: DEFAULT_SPACING_X6S.value })
      })

      it('applies the SM scale value', () => {
        expect(renderStyle({ marginLeft: Spacing.SM })).toEqual({ marginLeft: DEFAULT_SPACING_SM.value })
      })

      it('applies the LG scale value', () => {
        expect(renderStyle({ marginLeft: Spacing.LG })).toEqual({ marginLeft: DEFAULT_SPACING_LG.value })
      })

      it('applies the X6L scale value', () => {
        expect(renderStyle({ marginLeft: Spacing.X6L })).toEqual({ marginLeft: DEFAULT_SPACING_X6L.value })
      })
    })

    describe('testID', () => {
      it('forwards it to the native view', () => {
        const { testID } = renderNativeViewProps({ testID: 'my-view' })

        expect(testID).toEqual('my-view')
      })
    })

    it('applies no padding/margin style when none is given', () => {
      expect(renderStyle({})).toEqual({})
    })

    it('combines several sides and margin', () => {
      expect(
        renderStyle({
          paddingTop: Spacing.SM,
          paddingLeft: Spacing.MD,
          margin: Spacing.LG,
        }),
      ).toEqual({
        paddingTop: DEFAULT_SPACING_SM.value,
        paddingLeft: DEFAULT_SPACING_MD.value,
        margin: DEFAULT_SPACING_LG.value,
      })
    })

    it('takes padding and margin values from the provided theme', () => {
      expect(renderStyle({ padding: [Spacing.MD, Spacing.SM], marginTop: Spacing.MD }, THEME_OVERRIDE)).toEqual({
        paddingTop: 100,
        paddingRight: DEFAULT_SPACING_SM.value,
        paddingBottom: 100,
        paddingLeft: DEFAULT_SPACING_SM.value,
        marginTop: 100,
      })
    })
  })
})
