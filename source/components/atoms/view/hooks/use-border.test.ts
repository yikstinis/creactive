import { renderHook } from '@testing-library/react-native'
import {
  ViewBorderColor,
  ViewBorderRadius,
  ViewBorderWidth,
} from '../constants'
import {
  useViewBorderBottomLeftRadiusStyle,
  useViewBorderBottomRightRadiusStyle,
  useViewBorderBottomWidthStyle,
  useViewBorderColorStyle,
  useViewBorderColorValue,
  useViewBorderLeftWidthStyle,
  useViewBorderRadiusStyle,
  useViewBorderRadiusValue,
  useViewBorderRightWidthStyle,
  useViewBorderTopLeftRadiusStyle,
  useViewBorderTopRightRadiusStyle,
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
        expect(result.current).toEqual({
          borderWidth: 0.5,
        })
      })

      it('returns medium border width style', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqual({
          borderWidth: 1,
        })
      })

      it('returns large border width style', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqual({
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
        expect(result.current).toEqual({
          borderTopWidth: 0.5,
        })
      })

      it('returns medium border top width style', () => {
        const { result } = renderHook(() =>
          useViewBorderTopWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqual({
          borderTopWidth: 1,
        })
      })

      it('returns large border top width style', () => {
        const { result } = renderHook(() =>
          useViewBorderTopWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqual({
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
        expect(result.current).toEqual({
          borderLeftWidth: 0.5,
        })
      })

      it('returns medium border left width style', () => {
        const { result } = renderHook(() =>
          useViewBorderLeftWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqual({
          borderLeftWidth: 1,
        })
      })

      it('returns large border left width style', () => {
        const { result } = renderHook(() =>
          useViewBorderLeftWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqual({
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
        expect(result.current).toEqual({
          borderRightWidth: 0.5,
        })
      })

      it('returns medium border right width style', () => {
        const { result } = renderHook(() =>
          useViewBorderRightWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqual({
          borderRightWidth: 1,
        })
      })

      it('returns large border right width style', () => {
        const { result } = renderHook(() =>
          useViewBorderRightWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqual({
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
        expect(result.current).toEqual({
          borderBottomWidth: 0.5,
        })
      })

      it('returns medium border bottom width style', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomWidthStyle(ViewBorderWidth.MD),
        )
        expect(result.current).toEqual({
          borderBottomWidth: 1,
        })
      })

      it('returns large border bottom width style', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomWidthStyle(ViewBorderWidth.LG),
        )
        expect(result.current).toEqual({
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
        expect(result.current).toEqual(0.5)
      })

      it('returns medium border width value', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthValue(ViewBorderWidth.MD),
        )
        expect(result.current).toEqual(1)
      })

      it('returns large border width value', () => {
        const { result } = renderHook(() =>
          useViewBorderWidthValue(ViewBorderWidth.LG),
        )
        expect(result.current).toEqual(1.5)
      })
    })

    describe('view border radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useViewBorderRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusStyle(ViewBorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusStyle(ViewBorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusStyle(ViewBorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusStyle(ViewBorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderRadius: 8,
        })
      })

      it('returns extra-larget border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusStyle(ViewBorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderRadius: 10,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusStyle(ViewBorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderRadius: '50%',
        })
      })
    })

    describe('view border top left radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useViewBorderTopLeftRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopLeftRadiusStyle(ViewBorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopLeftRadiusStyle(ViewBorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopLeftRadiusStyle(ViewBorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopLeftRadiusStyle(ViewBorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopLeftRadiusStyle(ViewBorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: 10,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopLeftRadiusStyle(ViewBorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: '50%',
        })
      })
    })

    describe('view border top right radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useViewBorderTopRightRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopRightRadiusStyle(ViewBorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopRightRadiusStyle(ViewBorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopRightRadiusStyle(ViewBorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopRightRadiusStyle(ViewBorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopRightRadiusStyle(ViewBorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: 10,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderTopRightRadiusStyle(ViewBorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: '50%',
        })
      })
    })

    describe('view border bottom left radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(),
        )
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(ViewBorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(ViewBorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(ViewBorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(ViewBorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(ViewBorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: 10,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomLeftRadiusStyle(ViewBorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: '50%',
        })
      })
    })

    describe('view border bottom right radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(),
        )
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(ViewBorderRadius.XS),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(ViewBorderRadius.SM),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(ViewBorderRadius.MD),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(ViewBorderRadius.LG),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(ViewBorderRadius.XL),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: 10,
        })
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderBottomRightRadiusStyle(ViewBorderRadius.MAX),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: '50%',
        })
      })
    })

    describe('view border radius value hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useViewBorderRadiusValue())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusValue(ViewBorderRadius.XS),
        )
        expect(result.current).toEqual(2)
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusValue(ViewBorderRadius.SM),
        )
        expect(result.current).toEqual(4)
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusValue(ViewBorderRadius.MD),
        )
        expect(result.current).toEqual(6)
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusValue(ViewBorderRadius.LG),
        )
        expect(result.current).toEqual(8)
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusValue(ViewBorderRadius.XL),
        )
        expect(result.current).toEqual(10)
      })

      it('returns maximum border radius', () => {
        const { result } = renderHook(() =>
          useViewBorderRadiusValue(ViewBorderRadius.MAX),
        )
        expect(result.current).toEqual('50%')
      })
    })
  })
})
