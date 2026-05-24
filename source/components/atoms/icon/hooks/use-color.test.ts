import { renderHook } from '@testing-library/react-native'
import { IconColor } from '../constants'
import { useIconColorValue } from './use-color'

describe('@/components/atoms/icon', () => {
  describe('hooks/use-color', () => {
    describe('icon color value hook', () => {
      it('returns base 100 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_100),
        )
        expect(result.current).toEqual('rgb(200,200,205)')
      })

      it('returns base 200 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_200),
        )
        expect(result.current).toEqual('rgb(175,175,180)')
      })

      it('returns base 300 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_300),
        )
        expect(result.current).toEqual('rgb(150,150,155)')
      })

      it('returns base 400 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_400),
        )
        expect(result.current).toEqual('rgb(125,125,130)')
      })

      it('returns base 500 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_500),
        )
        expect(result.current).toEqual('rgb(100,100,105)')
      })

      it('returns base 600 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_600),
        )
        expect(result.current).toEqual('rgb(75,75,80)')
      })

      it('returns base 700 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_700),
        )
        expect(result.current).toEqual('rgb(50,50,55)')
      })

      it('returns base 800 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_800),
        )
        expect(result.current).toEqual('rgb(25,25,30)')
      })

      it('returns base 900 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.BASE_900),
        )
        expect(result.current).toEqual('rgb(0,0,5)')
      })

      it('returns inverse 100 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_100),
        )
        expect(result.current).toEqual('rgb(50,50,55)')
      })

      it('returns inverse 200 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_200),
        )
        expect(result.current).toEqual('rgb(75,75,80)')
      })

      it('returns inverse 300 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_300),
        )
        expect(result.current).toEqual('rgb(100,100,105)')
      })

      it('returns inverse 400 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_400),
        )
        expect(result.current).toEqual('rgb(125,125,130)')
      })

      it('returns inverse 500 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_500),
        )
        expect(result.current).toEqual('rgb(150,150,155)')
      })

      it('returns inverse 600 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_600),
        )
        expect(result.current).toEqual('rgb(175,175,180)')
      })

      it('returns inverse 700 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_700),
        )
        expect(result.current).toEqual('rgb(200,200,205)')
      })

      it('returns inverse 800 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_800),
        )
        expect(result.current).toEqual('rgb(225,225,230)')
      })

      it('returns inverse 900 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.INVERSE_900),
        )
        expect(result.current).toEqual('rgb(250,250,255)')
      })

      it('returns failure 100 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_100),
        )
        expect(result.current).toEqual('rgb(225,200,200)')
      })

      it('returns failure 200 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_200),
        )
        expect(result.current).toEqual('rgb(220,175,175)')
      })

      it('returns failure 300 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_300),
        )
        expect(result.current).toEqual('rgb(215,150,150)')
      })

      it('returns failure 400 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_400),
        )
        expect(result.current).toEqual('rgb(210,125,125)')
      })

      it('returns failure 500 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_500),
        )
        expect(result.current).toEqual('rgb(205,100,100)')
      })

      it('returns failure 600 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_600),
        )
        expect(result.current).toEqual('rgb(200,75,75)')
      })

      it('returns failure 700 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_700),
        )
        expect(result.current).toEqual('rgb(195,50,50)')
      })

      it('returns failure 800 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_800),
        )
        expect(result.current).toEqual('rgb(190,25,25)')
      })

      it('returns failure 900 icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.FAILURE_900),
        )
        expect(result.current).toEqual('rgb(185,0,0)')
      })

      it('returns transparent icon color value', () => {
        const { result } = renderHook(() =>
          useIconColorValue(IconColor.TRANSPARENT),
        )
        expect(result.current).toEqual('transparent')
      })
    })
  })
})
