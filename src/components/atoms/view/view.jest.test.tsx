import { describe, expect, it } from '@jest/globals'
import type { ReactNode } from 'react'
import { Text, View as NativeView } from 'react-native'
import TestRenderer from 'react-test-renderer'

import { View } from '@/components/atoms/view/view'
import type { ViewProps } from '@/components/atoms/view/view.types'
import { DEFAULT_SPACING_MD_VALUE, DEFAULT_SPACING_SM_VALUE, DEFAULT_SPACING_VALUES, Spacing } from '@/constants/spacing'

function renderNativeViewProps(props: Omit<ViewProps, 'children'> & { children?: ReactNode } = {}) {
  let testRenderer: TestRenderer.ReactTestRenderer

  TestRenderer.act(() => {
    testRenderer = TestRenderer.create(<View {...props} />)
  })

  return testRenderer!.root.findByType(NativeView).props
}

const SPACING_CASES = Object.entries(DEFAULT_SPACING_VALUES).map(([spacing, dimension]) => ({
  spacing: Number(spacing) as Spacing,
  pixels: dimension.value,
}))

describe('@/components/atoms/view/view', () => {
  describe('View', () => {
    describe('children', () => {
      it('renders its children', () => {
        const { children } = renderNativeViewProps({ children: <Text>Hello</Text> })

        expect(children).toEqual(<Text>Hello</Text>)
      })
    })

    describe('padding', () => {
      it.each(SPACING_CASES)('applies the $pixels px scale value when padding is given', ({ spacing, pixels }) => {
        const { style } = renderNativeViewProps({ padding: spacing })

        expect(style).toEqual([{ padding: pixels }, false, undefined])
      })
    })

    describe('margin', () => {
      it.each(SPACING_CASES)('applies the $pixels px scale value when margin is given', ({ spacing, pixels }) => {
        const { style } = renderNativeViewProps({ margin: spacing })

        expect(style).toEqual([false, { margin: pixels }, undefined])
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
        { padding: DEFAULT_SPACING_MD_VALUE.value },
        { margin: DEFAULT_SPACING_SM_VALUE.value },
        customStyle,
      ])
    })
  })
})
