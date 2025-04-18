import { renderHook } from '@testing-library/react-native'
import { ViewSpacing } from '../constants'
import { useViewSpacingCSSValue } from '../hooks'

describe('@/components/view', () => {
  describe('use view spacing css value', () => {
    it('returns undefined spacing css value', () => {
      const { result } = renderHook(() => useViewSpacingCSSValue(undefined))
      expect(result.current).toBeUndefined()
    })

    it('returns 6 times extra-small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X6S)
      )
      expect(result.current).toBe('2px')
    })

    it('returns 5 times extra-small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X5S)
      )
      expect(result.current).toBe('4px')
    })

    it('returns 4 times extra-small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X4S)
      )
      expect(result.current).toBe('6px')
    })

    it('returns 3 times extra-small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X3S)
      )
      expect(result.current).toBe('8px')
    })

    it('returns 2 times extra-small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X2S)
      )
      expect(result.current).toBe('10px')
    })

    it('returns extra-small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.XS)
      )
      expect(result.current).toBe('12px')
    })

    it('returns small spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.SM)
      )
      expect(result.current).toBe('14px')
    })

    it('returns medium spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.MD)
      )
      expect(result.current).toBe('16px')
    })

    it('returns large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.LG)
      )
      expect(result.current).toBe('18px')
    })

    it('returns extra-large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.XL)
      )
      expect(result.current).toBe('20px')
    })

    it('returns 2 times extra-large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X2L)
      )
      expect(result.current).toBe('24px')
    })

    it('returns 3 times extra-large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X3L)
      )
      expect(result.current).toBe('28px')
    })

    it('returns 4 times extra-large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X4L)
      )
      expect(result.current).toBe('32px')
    })

    it('returns 5 times extra-large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X5L)
      )
      expect(result.current).toBe('36px')
    })

    it('returns 6 times extra-large spacing css value', () => {
      const { result } = renderHook(() =>
        useViewSpacingCSSValue(ViewSpacing.X6L)
      )
      expect(result.current).toBe('40px')
    })
  })
})
