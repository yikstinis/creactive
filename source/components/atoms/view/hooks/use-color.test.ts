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

      it('returns accent 100 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_100),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(215,235,255)',
        })
      })

      it('returns accent 200 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_200),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(200,225,252)',
        })
      })

      it('returns accent 300 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_300),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(180,215,249)',
        })
      })

      it('returns accent 400 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_400),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(160,205,246)',
        })
      })

      it('returns accent 500 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_500),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(140,195,243)',
        })
      })

      it('returns accent 600 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_600),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(115,180,238)',
        })
      })

      it('returns accent 700 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_700),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(95,168,233)',
        })
      })

      it('returns accent 800 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_800),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(75,155,225)',
        })
      })

      it('returns accent 900 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.ACCENT_900),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(50,130,200)',
        })
      })

      it('returns subaccent 100 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_100),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(215,245,235)',
        })
      })

      it('returns subaccent 200 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_200),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(200,240,225)',
        })
      })

      it('returns subaccent 300 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_300),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(185,235,215)',
        })
      })

      it('returns subaccent 400 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_400),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(170,230,205)',
        })
      })

      it('returns subaccent 500 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_500),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(155,225,195)',
        })
      })

      it('returns subaccent 600 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_600),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(145,222,190)',
        })
      })

      it('returns subaccent 700 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_700),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(135,218,185)',
        })
      })

      it('returns subaccent 800 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_800),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(125,215,180)',
        })
      })

      it('returns subaccent 900 background color style', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorStyle(ViewBackgroundColor.SUBACCENT_900),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(100,195,160)',
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

      it('returns accent 100 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_100),
        )
        expect(result.current).toEqual('rgb(215,235,255)')
      })

      it('returns accent 200 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_200),
        )
        expect(result.current).toEqual('rgb(200,225,252)')
      })

      it('returns accent 300 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_300),
        )
        expect(result.current).toEqual('rgb(180,215,249)')
      })

      it('returns accent 400 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_400),
        )
        expect(result.current).toEqual('rgb(160,205,246)')
      })

      it('returns accent 500 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_500),
        )
        expect(result.current).toEqual('rgb(140,195,243)')
      })

      it('returns accent 600 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_600),
        )
        expect(result.current).toEqual('rgb(115,180,238)')
      })

      it('returns accent 700 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_700),
        )
        expect(result.current).toEqual('rgb(95,168,233)')
      })

      it('returns accent 800 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_800),
        )
        expect(result.current).toEqual('rgb(75,155,225)')
      })

      it('returns accent 900 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.ACCENT_900),
        )
        expect(result.current).toEqual('rgb(50,130,200)')
      })

      it('returns subaccent 100 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_100),
        )
        expect(result.current).toEqual('rgb(215,245,235)')
      })

      it('returns subaccent 200 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_200),
        )
        expect(result.current).toEqual('rgb(200,240,225)')
      })

      it('returns subaccent 300 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_300),
        )
        expect(result.current).toEqual('rgb(185,235,215)')
      })

      it('returns subaccent 400 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_400),
        )
        expect(result.current).toEqual('rgb(170,230,205)')
      })

      it('returns subaccent 500 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_500),
        )
        expect(result.current).toEqual('rgb(155,225,195)')
      })

      it('returns subaccent 600 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_600),
        )
        expect(result.current).toEqual('rgb(145,222,190)')
      })

      it('returns subaccent 700 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_700),
        )
        expect(result.current).toEqual('rgb(135,218,185)')
      })

      it('returns subaccent 800 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_800),
        )
        expect(result.current).toEqual('rgb(125,215,180)')
      })

      it('returns subaccent 900 background color value', () => {
        const { result } = renderHook(() =>
          useViewBackgroundColorValue(ViewBackgroundColor.SUBACCENT_900),
        )
        expect(result.current).toEqual('rgb(100,195,160)')
      })
    })
  })
})
