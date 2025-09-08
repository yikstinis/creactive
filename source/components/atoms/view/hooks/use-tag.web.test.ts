import { renderHook } from '@testing-library/react-native'
import { ViewTag } from '../constants'
import { useViewTagValue } from './use-tag'

describe('@/components/atoms/view', () => {
  describe('hooks/use-tag', () => {
    describe('view tag value hook', () => {
      it('returns div tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.DIV))
        expect(result.current).toBe('div')
      })

      it('returns figure tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.FIGURE))
        expect(result.current).toBe('figure')
      })

      it('returns figcaption tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.FIGCAPTION))
        expect(result.current).toBe('figcaption')
      })

      it('returns article tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.ARTICLE))
        expect(result.current).toBe('article')
      })

      it('returns section tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.SECTION))
        expect(result.current).toBe('section')
      })

      it('returns header tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.HEADER))
        expect(result.current).toBe('header')
      })

      it('returns main tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.MAIN))
        expect(result.current).toBe('main')
      })

      it('returns footer tag value', () => {
        const { result } = renderHook(() => useViewTagValue(ViewTag.FOOTER))
        expect(result.current).toBe('footer')
      })
    })
  })
})
