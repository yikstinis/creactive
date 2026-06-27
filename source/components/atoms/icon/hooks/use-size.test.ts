import { renderHook } from '@testing-library/react-native'
import { IconSize } from '../constants'
import { useIconSize } from './use-size'

describe('@/components/atoms/icon', () => {
  describe('hooks/use-size', () => {
    describe('useIconSize', () => {
      it('returns small icon size value', () => {
        const { result } = renderHook(() => useIconSize(IconSize.SM))
        expect(result.current.toValue()).toEqualPlatformStyle({ web: '16px', default: 16 })
      })

      it('returns medium icon size value', () => {
        const { result } = renderHook(() => useIconSize(IconSize.MD))
        expect(result.current.toValue()).toEqualPlatformStyle({ web: '24px', default: 24 })
      })

      it('returns large icon size value', () => {
        const { result } = renderHook(() => useIconSize(IconSize.LG))
        expect(result.current.toValue()).toEqualPlatformStyle({ web: '32px', default: 32 })
      })
    })
  })
})
