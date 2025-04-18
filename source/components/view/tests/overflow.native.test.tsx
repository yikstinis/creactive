import { renderHook } from '@testing-library/react-native'
import { ViewOverflow } from '../constants'
import { useViewOverflowStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view overflow style', () => {
    it('returns visible overflow style', () => {
      const { result } = renderHook(() =>
        useViewOverflowStyle(ViewOverflow.VISIBLE)
      )
      expect(result.current).toEqual({
        overflow: 'visible',
      })
    })

    it('returns hidden overflow style', () => {
      const { result } = renderHook(() =>
        useViewOverflowStyle(ViewOverflow.HIDDEN)
      )
      expect(result.current).toEqual({
        overflow: 'hidden',
      })
    })
  })
})
