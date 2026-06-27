import { renderHook } from '@testing-library/react-native'
import { ViewBorderColor, ViewBorderWidth } from '../constants'
import {
  useViewBorderBottomWidthStyle,
  useViewBorderColorStyle,
  useViewBorderColorValue,
  useViewBorderLeftWidthStyle,
  useViewBorderRightWidthStyle,
  useViewBorderTopWidthStyle,
  useViewBorderWidthStyle,
  useViewBorderWidthValue,
} from './use-border'

describe('@/components/atoms/view', () => {
  describe('hooks/use-border', () => {
    describe('view border color style hook', () => {
      it('returns undefined when border color is not provided', () => {
        const { result } = renderHook(() => useViewBorderColorStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns base 100 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_100),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(235,235,240)',
        })
      })

      it('returns base 200 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_200),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(230,230,235)',
        })
      })

      it('returns base 300 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_300),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(225,225,230)',
        })
      })

      it('returns base 400 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_400),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(220,220,225)',
        })
      })

      it('returns base 500 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_500),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(215,215,220)',
        })
      })

      it('returns base 600 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_600),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(210,210,215)',
        })
      })

      it('returns base 700 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_700),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(205,205,210)',
        })
      })

      it('returns base 800 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_800),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(200,200,205)',
        })
      })

      it('returns base 900 border color style', () => {
        const { result } = renderHook(() =>
          useViewBorderColorStyle(ViewBorderColor.BASE_900),
        )
        expect(result.current).toEqual({
          borderColor: 'rgb(195,195,200)',
        })
      })
    })

    describe('view border color value hook', () => {
      it('returns undefined when border color is not provided', () => {
        const { result } = renderHook(() => useViewBorderColorValue())
        expect(result.current).toBeUndefined()
      })

      it('returns base 100 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_100),
        )
        expect(result.current).toEqual('rgb(235,235,240)')
      })

      it('returns base 200 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_200),
        )
        expect(result.current).toEqual('rgb(230,230,235)')
      })

      it('returns base 300 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_300),
        )
        expect(result.current).toEqual('rgb(225,225,230)')
      })

      it('returns base 400 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_400),
        )
        expect(result.current).toEqual('rgb(220,220,225)')
      })

      it('returns base 500 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_500),
        )
        expect(result.current).toEqual('rgb(215,215,220)')
      })

      it('returns base 600 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_600),
        )
        expect(result.current).toEqual('rgb(210,210,215)')
      })

      it('returns base 700 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_700),
        )
        expect(result.current).toEqual('rgb(205,205,210)')
      })

      it('returns base 800 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_800),
        )
        expect(result.current).toEqual('rgb(200,200,205)')
      })

      it('returns base 900 border color value', () => {
        const { result } = renderHook(() =>
          useViewBorderColorValue(ViewBorderColor.BASE_900),
        )
        expect(result.current).toEqual('rgb(195,195,200)')
      })
    })

    describe('view border width style hook', () => {
      it('returns undefined when border width is not provided', () => {
        const { result } = renderHook(() => useViewBorderWidthStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns small border width style', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthStyle(ViewBorderWidth.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderWidth: 0.5,
        })
      })

      it('returns medium border width style', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderWidth: 1,
        })
      })

      it('returns large border width style', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderWidth: 1.5,
        })
      })
    })

    describe('view border top width style hook', () => {
      it('returns undefined when border top width is not provided', () => {
        const { result } = renderHook(() => useViewBorderTopWidthStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns small border top width style', () => {
        const { result } = renderHook(() =>
          useViewBorderTopWidthStyle(ViewBorderWidth.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopWidth: 0.5,
        })
      })

      it('returns medium border top width style', () => {
        const { result } = renderHook(() =>
          useViewBorderTopWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopWidth: 1,
        })
      })

      it('returns large border top width style', () => {
        const { result } = renderHook(() =>
          useViewBorderTopWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopWidth: 1.5,
        })
      })
    })

    describe('view border left width style hook', () => {
      it('returns undefined when border left width is not provided', () => {
        const { result } = renderHook(() => useViewBorderLeftWidthStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns small border left width style', () => {
        const { result } = renderHook(() =>
          useViewBorderLeftWidthStyle(ViewBorderWidth.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderLeftWidth: 0.5,
        })
      })

      it('returns medium border left width style', () => {
        const { result } = renderHook(() =>
          useViewBorderLeftWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderLeftWidth: 1,
        })
      })

      it('returns large border left width style', () => {
        const { result } = renderHook(() =>
          useViewBorderLeftWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderLeftWidth: 1.5,
        })
      })
    })

    describe('view border right width style hook', () => {
      it('returns undefined when border right width is not provided', () => {
        const { result } = renderHook(() => useViewBorderRightWidthStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns small border right width style', () => {
        const { result } = renderHook(() =>
          useViewBorderRightWidthStyle(ViewBorderWidth.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRightWidth: 0.5,
        })
      })

      it('returns medium border right width style', () => {
        const { result } = renderHook(() =>
          useViewBorderRightWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRightWidth: 1,
        })
      })

      it('returns large border right width style', () => {
        const { result } = renderHook(() =>
          useViewBorderRightWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRightWidth: 1.5,
        })
      })
    })

    describe('view border bottom width style hook', () => {
      it('returns undefined when border bottom width is not provided', () => {
        const { result } = renderHook(() => useViewBorderBottomWidthStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns small border bottom width style', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomWidthStyle(ViewBorderWidth.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomWidth: 0.5,
        })
      })

      it('returns medium border bottom width style', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomWidth: 1,
        })
      })

      it('returns large border bottom width style', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomWidth: 1.5,
        })
      })
    })

    describe('view border width value hook', () => {
      it('returns undefined when border width is not provided', () => {
        const { result } = renderHook(() => useViewBorderWidthValue())
        expect(result.current).toBeUndefined()
      })

      it('returns small border width value', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthValue(ViewBorderWidth.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          web: '0.5px',
          default: 0.5,
        })
      })

      it('returns medium border width value', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthValue(ViewBorderWidth.MD),
        )
        expect(result.current).toEqualPlatformStyle({ web: '1px', default: 1 })
      })

      it('returns large border width value', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthValue(ViewBorderWidth.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          web: '1.5px',
          default: 1.5,
        })
      })
    })
  })
})
