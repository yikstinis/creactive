import { Dimension } from '@/helpers'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import { BorderRadius, ViewBorderColor, ViewBorderWidth } from '../constants'
import {
  useBorderBottomLeftRadiusStyle,
  useBorderBottomRightRadiusStyle,
  useBorderRadiusStyle,
  useBorderRadiusValue,
  useBorderTopLeftRadiusStyle,
  useBorderTopRightRadiusStyle,
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

    describe('border radius style hook', () => {
      it('returns undefined when border radius is not provided', () => {
        const { result } = renderHook(() => useBorderRadiusStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns extra-small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.XS),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderRadius: 28,
        })
      })

      it('returns percent border radius', () => {
        const percent = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useBorderRadiusStyle(new Dimension(percent, Dimension.Unit.PERCENT)),
        )
        expect(result.current).toEqual({
          borderRadius: `${percent}%`,
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
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopLeftRadius: 28,
        })
      })

      it('returns percent border radius', () => {
        const percent = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useBorderTopLeftRadiusStyle(
            new Dimension(percent, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toEqual({
          borderTopLeftRadius: `${percent}%`,
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
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderTopRightRadius: 28,
        })
      })

      it('returns percent border radius', () => {
        const percent = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useBorderTopRightRadiusStyle(
            new Dimension(percent, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toEqual({
          borderTopRightRadius: `${percent}%`,
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
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomLeftRadius: 28,
        })
      })

      it('returns percent border radius', () => {
        const percent = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useBorderBottomLeftRadiusStyle(
            new Dimension(percent, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toEqual({
          borderBottomLeftRadius: `${percent}%`,
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
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 2,
        })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.SM),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 4,
        })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.MD),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 6,
        })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.LG),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 8,
        })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.XL),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 10,
        })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X2L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 12,
        })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X3L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 16,
        })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X4L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 18,
        })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X5L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 20,
        })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X6L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 24,
        })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(BorderRadius.X7L),
        )
        expect(result.current).toEqualPlatformStyle({
          borderBottomRightRadius: 28,
        })
      })

      it('returns percent border radius', () => {
        const percent = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useBorderBottomRightRadiusStyle(
            new Dimension(percent, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toEqual({
          borderBottomRightRadius: `${percent}%`,
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
        expect(result.current).toEqualPlatformStyle({ web: '2px', default: 2 })
      })

      it('returns small border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.SM),
        )
        expect(result.current).toEqualPlatformStyle({ web: '4px', default: 4 })
      })

      it('returns medium border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.MD),
        )
        expect(result.current).toEqualPlatformStyle({ web: '6px', default: 6 })
      })

      it('returns large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.LG),
        )
        expect(result.current).toEqualPlatformStyle({ web: '8px', default: 8 })
      })

      it('returns extra-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.XL),
        )
        expect(result.current).toEqualPlatformStyle({ web: '10px', default: 10 })
      })

      it('returns extra-2-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X2L),
        )
        expect(result.current).toEqualPlatformStyle({ web: '12px', default: 12 })
      })

      it('returns extra-3-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X3L),
        )
        expect(result.current).toEqualPlatformStyle({ web: '16px', default: 16 })
      })

      it('returns extra-4-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X4L),
        )
        expect(result.current).toEqualPlatformStyle({ web: '18px', default: 18 })
      })

      it('returns extra-5-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X5L),
        )
        expect(result.current).toEqualPlatformStyle({ web: '20px', default: 20 })
      })

      it('returns extra-6-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X6L),
        )
        expect(result.current).toEqualPlatformStyle({ web: '24px', default: 24 })
      })

      it('returns extra-7-large border radius', () => {
        const { result } = renderHook(() =>
          useBorderRadiusValue(BorderRadius.X7L),
        )
        expect(result.current).toEqualPlatformStyle({ web: '28px', default: 28 })
      })

      it('returns percent border radius value', () => {
        const percent = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useBorderRadiusValue(new Dimension(percent, Dimension.Unit.PERCENT)),
        )
        expect(result.current).toEqual(`${percent}%`)
      })
    })
  })
})
