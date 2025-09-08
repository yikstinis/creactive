import { renderHook } from '@testing-library/react-native'
import { ViewBackgroundColor } from '../constants'
import {
  useViewBackgroundColorStyle,
  useViewBackgroundColorValue,
} from './use-color'

describe('@/components/atoms/view', () => {
  describe('hooks/use-color', () => {
    describe('view background color style hook', () => {
      it('returns undefined when background color is not provided', () => {
        const { result } = renderHook(() => useViewBackgroundColorStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns base 100 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_100),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(215,215,220)',
        })
      })

      it('returns base 200 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_200),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(220,220,225)',
        })
      })

      it('returns base 300 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_300),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(225,225,230)',
        })
      })

      it('returns base 400 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_400),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(230,230,235)',
        })
      })

      it('returns base 500 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_500),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(235,235,240)',
        })
      })

      it('returns base 600 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_600),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(240,240,245)',
        })
      })

      it('returns base 700 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_700),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(245,245,250)',
        })
      })

      it('returns base 800 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_800),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(250,250,255)',
        })
      })

      it('returns base 900 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.BASE_900),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(255,255,255)',
        })
      })

      it('returns primary 100 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_100),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(40,40,45)',
        })
      })

      it('returns primary 200 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_200),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(35,35,40)',
        })
      })

      it('returns primary 300 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_300),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(30,30,35)',
        })
      })

      it('returns primary 400 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_400),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(25,25,30)',
        })
      })

      it('returns primary 500 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_500),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(20,20,25)',
        })
      })

      it('returns primary 600 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_600),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(15,15,20)',
        })
      })

      it('returns primary 700 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_700),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(10,10,15)',
        })
      })

      it('returns primary 800 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_800),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(5,5,10)',
        })
      })

      it('returns primary 900 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.PRIMARY_900),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(0,0,5)',
        })
      })
    })

    describe('view background color value hook', () => {
      it('returns undefined when background color is not provided', () => {
        const { result } = renderHook(() => useViewBackgroundColorValue())
        expect(result.current).toBeUndefined()
      })

      it('returns base 100 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_100),
        )
        expect(result.current).toEqual('rgb(215,215,220)')
      })

      it('returns base 200 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_200),
        )
        expect(result.current).toEqual('rgb(220,220,225)')
      })

      it('returns base 300 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_300),
        )
        expect(result.current).toEqual('rgb(225,225,230)')
      })

      it('returns base 400 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_400),
        )
        expect(result.current).toEqual('rgb(230,230,235)')
      })

      it('returns base 500 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_500),
        )
        expect(result.current).toEqual('rgb(235,235,240)')
      })

      it('returns base 600 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_600),
        )
        expect(result.current).toEqual('rgb(240,240,245)')
      })

      it('returns base 700 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_700),
        )
        expect(result.current).toEqual('rgb(245,245,250)')
      })

      it('returns base 800 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_800),
        )
        expect(result.current).toEqual('rgb(250,250,255)')
      })

      it('returns base 900 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.BASE_900),
        )
        expect(result.current).toEqual('rgb(255,255,255)')
      })

      it('returns primary 100 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_100),
        )
        expect(result.current).toEqual('rgb(40,40,45)')
      })

      it('returns primary 200 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_200),
        )
        expect(result.current).toEqual('rgb(35,35,40)')
      })

      it('returns primary 300 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_300),
        )
        expect(result.current).toEqual('rgb(30,30,35)')
      })

      it('returns primary 400 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_400),
        )
        expect(result.current).toEqual('rgb(25,25,30)')
      })

      it('returns primary 500 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_500),
        )
        expect(result.current).toEqual('rgb(20,20,25)')
      })

      it('returns primary 600 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_600),
        )
        expect(result.current).toEqual('rgb(15,15,20)')
      })

      it('returns primary 700 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_700),
        )
        expect(result.current).toEqual('rgb(10,10,15)')
      })

      it('returns primary 800 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_800),
        )
        expect(result.current).toEqual('rgb(5,5,10)')
      })

      it('returns primary 900 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.PRIMARY_900),
        )
        expect(result.current).toEqual('rgb(0,0,5)')
      })
    })
  })
})
