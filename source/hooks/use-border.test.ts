import { BorderRadius } from '@/constants'
import { renderHook } from '@testing-library/react-native'
import {
  useBorderBottomLeftRadiusStyle,
  useBorderBottomRightRadiusStyle,
  useBorderRadiusStyle,
  useBorderRadiusValue,
  useBorderTopLeftRadiusStyle,
  useBorderTopRightRadiusStyle,
} from './use-border'

describe('@/hooks', () => {
  describe('use-border', () => {
    describe('border radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqual({
          borderRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqual({
          borderRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqual({
          borderRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqual({
          borderRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqual({
          borderRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqual({
          borderRadius: 28,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderRadius: '50%',
        })
      })
    })

    describe('border top left radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderTopLeftRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 28,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: '50%',
        })
      })
    })

    describe('border top right radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderTopRightRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 28,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: '50%',
        })
      })
    })

    describe('border bottom left radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderBottomLeftRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 28,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: '50%',
        })
      })
    })

    describe('border bottom right radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderBottomRightRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 28,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: '50%',
        })
      })
    })

    describe('border radius value hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderRadiusValue())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.XS),
        )
        expect(result.current).toEqual(2)
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.SM),
        )
        expect(result.current).toEqual(4)
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.MD),
        )
        expect(result.current).toEqual(6)
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.LG),
        )
        expect(result.current).toEqual(8)
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.XL),
        )
        expect(result.current).toEqual(10)
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X2L),
        )
        expect(result.current).toEqual(12)
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X3L),
        )
        expect(result.current).toEqual(16)
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X4L),
        )
        expect(result.current).toEqual(18)
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X5L),
        )
        expect(result.current).toEqual(20)
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X6L),
        )
        expect(result.current).toEqual(24)
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X7L),
        )
        expect(result.current).toEqual(28)
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.MAX),
        )
        expect(result.current).toEqual('50%')
      })
    })
  })
})
