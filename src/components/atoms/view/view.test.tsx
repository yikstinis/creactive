import { describe, expect, it } from '@jest/globals'
import type { ReactNode } from 'react'
import { Text, View as NativeView } from 'react-native'
import TestRenderer from 'react-test-renderer'

import { View } from '@/components/atoms/view/view'
import type { ViewProps } from '@/components/atoms/view/view.types'
import { DEFAULT_SPACING_MD_VALUE, DEFAULT_SPACING_SM_VALUE, Spacing } from '@/constants/spacing'

function renderNativeViewProps(props: Omit<ViewProps, 'children'> & { children?: ReactNode } = {}) {
  let testRenderer: TestRenderer.ReactTestRenderer

  TestRenderer.act(() => {
    testRenderer = TestRenderer.create(<View {...props} />)
  })

  return testRenderer!.root.findByType(NativeView).props
}

describe('View', () => {
  it('renders its children', () => {
    const { children } = renderNativeViewProps({ children: <Text>Hello</Text> })

    expect(children).toEqual(<Text>Hello</Text>)
  })

  it('applies no padding/margin style when none is given', () => {
    const { style } = renderNativeViewProps()

    expect(style).toEqual([false, false, undefined])
  })

  it('applies the padding scale value when padding is given', () => {
    const { style } = renderNativeViewProps({ padding: Spacing.MD })

    expect(style).toEqual([{ padding: DEFAULT_SPACING_MD_VALUE.value }, false, undefined])
  })

  it('applies the margin scale value when margin is given', () => {
    const { style } = renderNativeViewProps({ margin: Spacing.SM })

    expect(style).toEqual([false, { margin: DEFAULT_SPACING_SM_VALUE.value }, undefined])
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
