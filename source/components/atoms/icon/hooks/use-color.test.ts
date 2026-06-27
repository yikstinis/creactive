import { renderHook } from '@testing-library/react-native'
import { IconColor } from '../constants'
import { useIconColor } from './use-color'

describe('@/components/atoms/icon', () => {
  describe('hooks/use-color', () => {
    describe('useIconColor', () => {
      it('returns base 100 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_100))
        expect(result.current).toBe('rgb(200,200,205)')
      })

      it('returns base 200 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_200))
        expect(result.current).toBe('rgb(175,175,180)')
      })

      it('returns base 300 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_300))
        expect(result.current).toBe('rgb(150,150,155)')
      })

      it('returns base 400 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_400))
        expect(result.current).toBe('rgb(125,125,130)')
      })

      it('returns base 500 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_500))
        expect(result.current).toBe('rgb(100,100,105)')
      })

      it('returns base 600 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_600))
        expect(result.current).toBe('rgb(75,75,80)')
      })

      it('returns base 700 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_700))
        expect(result.current).toBe('rgb(50,50,55)')
      })

      it('returns base 800 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_800))
        expect(result.current).toBe('rgb(25,25,30)')
      })

      it('returns base 900 icon color value', () => {
        const { result } = renderHook(() => useIconColor(IconColor.BASE_900))
        expect(result.current).toBe('rgb(0,0,5)')
      })

      it('returns inverse 100 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_100),
        )
        expect(result.current).toBe('rgb(75,75,80)')
      })

      it('returns inverse 200 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_200),
        )
        expect(result.current).toBe('rgb(100,100,105)')
      })

      it('returns inverse 300 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_300),
        )
        expect(result.current).toBe('rgb(125,125,130)')
      })

      it('returns inverse 400 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_400),
        )
        expect(result.current).toBe('rgb(150,150,155)')
      })

      it('returns inverse 500 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_500),
        )
        expect(result.current).toBe('rgb(175,175,180)')
      })

      it('returns inverse 600 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_600),
        )
        expect(result.current).toBe('rgb(200,200,205)')
      })

      it('returns inverse 700 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_700),
        )
        expect(result.current).toBe('rgb(225,225,230)')
      })

      it('returns inverse 800 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_800),
        )
        expect(result.current).toBe('rgb(250,250,255)')
      })

      it('returns inverse 900 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.INVERSE_900),
        )
        expect(result.current).toBe('rgb(255,255,255)')
      })

      it('returns failure 100 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_100),
        )
        expect(result.current).toBe('rgb(225,200,200)')
      })

      it('returns failure 200 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_200),
        )
        expect(result.current).toBe('rgb(220,175,175)')
      })

      it('returns failure 300 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_300),
        )
        expect(result.current).toBe('rgb(215,150,150)')
      })

      it('returns failure 400 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_400),
        )
        expect(result.current).toBe('rgb(210,125,125)')
      })

      it('returns failure 500 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_500),
        )
        expect(result.current).toBe('rgb(205,100,100)')
      })

      it('returns failure 600 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_600),
        )
        expect(result.current).toBe('rgb(200,75,75)')
      })

      it('returns failure 700 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_700),
        )
        expect(result.current).toBe('rgb(195,50,50)')
      })

      it('returns failure 800 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_800),
        )
        expect(result.current).toBe('rgb(190,25,25)')
      })

      it('returns failure 900 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColor(IconColor.FAILURE_900),
        )
        expect(result.current).toBe('rgb(185,0,0)')
      })
    })
  })
})
