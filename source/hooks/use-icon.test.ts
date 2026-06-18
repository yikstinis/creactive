import { IconSize } from '@/constants'
import { renderHook } from '@testing-library/react-native'
import { useIconSizeValue } from './use-icon'

describe('@/hooks', () => {
  describe('use-icon', () => {
    describe('useIconSizeValue', () => {
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
