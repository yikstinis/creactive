import { renderHook } from '@testing-library/react-native'
import { ViewPosition } from '../constants'
import { useViewPositionStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view position style', () => {
    it('returns relative position style', () => {
      const { result } = renderHook(() =>
        useViewPositionStyle(ViewPosition.RELATIVE)
      )
      expect(result.current).toEqual({
        position: 'relative',
      })
    })

    it('returns absolute position style', () => {
      const { result } = renderHook(() =>
        useViewPositionStyle(ViewPosition.ABSOLUTE)
      )
      expect(result.current).toEqual({
        position: 'absolute',
      })
    })
  })
})
