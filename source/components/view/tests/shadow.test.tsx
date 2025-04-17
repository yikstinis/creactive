import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { ViewBoxShadow } from '../constants'
import { useViewBoxShadowCSSValue, useViewBoxShadowStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view box shadow css value', () => {
    it('returns undefined box shadow css value', () => {
      const { result } = renderHook(() => useViewBoxShadowCSSValue())
      expect(result.current).toEqual(undefined)
    })

    it('returns sm box shadow css value', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowCSSValue(ViewBoxShadow.SM)
      )
      expect(result.current).toEqual(
        '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)'
      )
    })

    it('returns md box shadow css value', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowCSSValue(ViewBoxShadow.MD)
      )
      expect(result.current).toEqual(
        '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)'
      )
    })

    it('returns lg box shadow css value', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowCSSValue(ViewBoxShadow.LG)
      )
      expect(result.current).toEqual(
        '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)'
      )
    })
  })

  describe('use view box shadow style', () => {
    it('returns undefined box shadow style', () => {
      const { result } = renderHook(() => useViewBoxShadowStyle())
      expect(result.current).toEqual(undefined)
    })

    it('returns sm box shadow style', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowStyle(ViewBoxShadow.SM)
      )
      expect(result.current).toEqual({
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)',
      })
    })

    it('returns md box shadow style', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowStyle(ViewBoxShadow.MD)
      )
      expect(result.current).toEqual({
        boxShadow:
          '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)',
      })
    })

    it('returns lg box shadow style', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowStyle(ViewBoxShadow.LG)
      )
      expect(result.current).toEqual({
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)',
      })
    })
  })

  describe('view box shadow', () => {
    it('renders with undefined box shadow', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: undefined,
      })
    })

    it('renders with sm box shadow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)',
      })
    })

    it('renders with md box shadow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow:
          '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)',
      })
    })

    it('renders with lg box shadow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)',
      })
    })
  })
})
