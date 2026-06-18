import { renderHook } from '@testing-library/react-native'
import { IconSize } from '../constants'
import { useIconSizeValue } from './use-size'

describe('@/components/atoms/icon', () => {
  describe('hooks/use-size', () => {
    describe('icon size value hook', () => {
      it('returns small icon size value', () => {
        const { result } = renderHook(() => useIconSizeValue(IconSize.SM))
        expect(result.current).toBe(16)
      })

      it('returns medium icon size value', () => {
        const { result } = renderHook(() => useIconSizeValue(IconSize.MD))
        expect(result.current).toBe(24)
      })

      it('returns large icon size value', () => {
        const { result } = renderHook(() => useIconSizeValue(IconSize.LG))
        expect(result.current).toBe(32)
      })
    })
  })
})
