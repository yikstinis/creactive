import { renderHook } from '@testing-library/react-native'
import { TextTag } from '../constants'
import { useTextTag } from './use-tag'

describe('@/components/atoms/text', () => {
  describe('hooks/use-tag', () => {
    describe('text tag value hook', () => {
      it('returns correct tag for span', () => {
        const { result } = renderHook(() => useTextTag(TextTag.SPAN))
        expect(result.current).toEqual('span')
      })

      it('returns correct tag for paragraph', () => {
        const { result } = renderHook(() => useTextTag(TextTag.P))
        expect(result.current).toEqual('p')
      })

      it('returns correct tag for h1', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H1))
        expect(result.current).toEqual('h1')
      })

      it('returns correct tag for h2', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H2))
        expect(result.current).toEqual('h2')
      })

      it('returns correct tag for h3', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H3))
        expect(result.current).toEqual('h3')
      })

      it('returns correct tag for h4', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H4))
        expect(result.current).toEqual('h4')
      })

      it('returns correct tag for h5', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H5))
        expect(result.current).toEqual('h5')
      })

      it('returns correct tag for h6', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H6))
        expect(result.current).toEqual('h6')
      })
    })
  })
})
