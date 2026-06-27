import { COLOR_TRANSPARENT } from '@/helpers'
import { renderHook } from '@testing-library/react-native'
import { TextBackgroundColor, TextColor } from '../constants'
import {
  useTextBackgroundColor,
  useTextBackgroundColorStyle,
  useTextColor,
  useTextColorStyle,
} from './use-color'

describe('@/components/atoms/text', () => {
  describe('hooks/use-color', () => {
    describe('text color style hook', () => {
      it('returns base 100 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_100),
        )
        expect(result.current).toEqual({
          color: 'rgb(200,200,205)',
        })
      })

      it('returns base 200 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_200),
        )
        expect(result.current).toEqual({
          color: 'rgb(175,175,180)',
        })
      })

      it('returns base 300 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_300),
        )
        expect(result.current).toEqual({
          color: 'rgb(150,150,155)',
        })
      })

      it('returns base 400 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_400),
        )
        expect(result.current).toEqual({
          color: 'rgb(125,125,130)',
        })
      })

      it('returns base 500 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_500),
        )
        expect(result.current).toEqual({
          color: 'rgb(100,100,105)',
        })
      })

      it('returns base 600 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_600),
        )
        expect(result.current).toEqual({
          color: 'rgb(75,75,80)',
        })
      })

      it('returns base 700 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_700),
        )
        expect(result.current).toEqual({
          color: 'rgb(50,50,55)',
        })
      })

      it('returns base 800 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_800),
        )
        expect(result.current).toEqual({
          color: 'rgb(25,25,30)',
        })
      })

      it('returns base 900 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.BASE_900),
        )
        expect(result.current).toEqual({
          color: 'rgb(0,0,5)',
        })
      })

      it('returns inverse 100 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_100),
        )
        expect(result.current).toEqual({
          color: 'rgb(75,75,80)',
        })
      })

      it('returns inverse 200 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_200),
        )
        expect(result.current).toEqual({
          color: 'rgb(100,100,105)',
        })
      })

      it('returns inverse 300 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_300),
        )
        expect(result.current).toEqual({
          color: 'rgb(125,125,130)',
        })
      })

      it('returns inverse 400 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_400),
        )
        expect(result.current).toEqual({
          color: 'rgb(150,150,155)',
        })
      })

      it('returns inverse 500 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_500),
        )
        expect(result.current).toEqual({
          color: 'rgb(175,175,180)',
        })
      })

      it('returns inverse 600 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_600),
        )
        expect(result.current).toEqual({
          color: 'rgb(200,200,205)',
        })
      })

      it('returns inverse 700 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_700),
        )
        expect(result.current).toEqual({
          color: 'rgb(225,225,230)',
        })
      })

      it('returns inverse 800 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_800),
        )
        expect(result.current).toEqual({
          color: 'rgb(250,250,255)',
        })
      })

      it('returns inverse 900 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.INVERSE_900),
        )
        expect(result.current).toEqual({
          color: 'rgb(255,255,255)',
        })
      })

      it('returns failure 100 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_100),
        )
        expect(result.current).toEqual({
          color: 'rgb(225,200,200)',
        })
      })

      it('returns failure 200 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_200),
        )
        expect(result.current).toEqual({
          color: 'rgb(220,175,175)',
        })
      })

      it('returns failure 300 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_300),
        )
        expect(result.current).toEqual({
          color: 'rgb(215,150,150)',
        })
      })

      it('returns failure 400 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_400),
        )
        expect(result.current).toEqual({
          color: 'rgb(210,125,125)',
        })
      })

      it('returns failure 500 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_500),
        )
        expect(result.current).toEqual({
          color: 'rgb(205,100,100)',
        })
      })

      it('returns failure 600 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_600),
        )
        expect(result.current).toEqual({
          color: 'rgb(200,75,75)',
        })
      })

      it('returns failure 700 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_700),
        )
        expect(result.current).toEqual({
          color: 'rgb(195,50,50)',
        })
      })

      it('returns failure 800 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_800),
        )
        expect(result.current).toEqual({
          color: 'rgb(190,25,25)',
        })
      })

      it('returns failure 900 text color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(TextColor.FAILURE_900),
        )
        expect(result.current).toEqual({
          color: 'rgb(185,0,0)',
        })
      })

      it('returns custom rgb color style', () => {
        const color = randomRgb()
        const { result } = renderHook(() => useTextColorStyle(color))
        expect(result.current).toEqual({ color: color.toValue() })
      })

      it('returns custom transparent color style', () => {
        const { result } = renderHook(() =>
          useTextColorStyle(COLOR_TRANSPARENT),
        )
        expect(result.current).toEqual({ color: 'transparent' })
      })
    })

    describe('text color value hook', () => {
      it('returns base 100 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_100),
        )
        expect(result.current).toEqual('rgb(200,200,205)')
      })

      it('returns base 200 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_200),
        )
        expect(result.current).toEqual('rgb(175,175,180)')
      })

      it('returns base 300 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_300),
        )
        expect(result.current).toEqual('rgb(150,150,155)')
      })

      it('returns base 400 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_400),
        )
        expect(result.current).toEqual('rgb(125,125,130)')
      })

      it('returns base 500 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_500),
        )
        expect(result.current).toEqual('rgb(100,100,105)')
      })

      it('returns base 600 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_600),
        )
        expect(result.current).toEqual('rgb(75,75,80)')
      })

      it('returns base 700 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_700),
        )
        expect(result.current).toEqual('rgb(50,50,55)')
      })

      it('returns base 800 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_800),
        )
        expect(result.current).toEqual('rgb(25,25,30)')
      })

      it('returns base 900 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.BASE_900),
        )
        expect(result.current).toEqual('rgb(0,0,5)')
      })

      it('returns inverse 100 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_100),
        )
        expect(result.current).toEqual('rgb(75,75,80)')
      })

      it('returns inverse 200 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_200),
        )
        expect(result.current).toEqual('rgb(100,100,105)')
      })

      it('returns inverse 300 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_300),
        )
        expect(result.current).toEqual('rgb(125,125,130)')
      })

      it('returns inverse 400 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_400),
        )
        expect(result.current).toEqual('rgb(150,150,155)')
      })

      it('returns inverse 500 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_500),
        )
        expect(result.current).toEqual('rgb(175,175,180)')
      })

      it('returns inverse 600 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_600),
        )
        expect(result.current).toEqual('rgb(200,200,205)')
      })

      it('returns inverse 700 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_700),
        )
        expect(result.current).toEqual('rgb(225,225,230)')
      })

      it('returns inverse 800 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_800),
        )
        expect(result.current).toEqual('rgb(250,250,255)')
      })

      it('returns inverse 900 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.INVERSE_900),
        )
        expect(result.current).toEqual('rgb(255,255,255)')
      })

      it('returns failure 100 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_100),
        )
        expect(result.current).toEqual('rgb(225,200,200)')
      })

      it('returns failure 200 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_200),
        )
        expect(result.current).toEqual('rgb(220,175,175)')
      })

      it('returns failure 300 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_300),
        )
        expect(result.current).toEqual('rgb(215,150,150)')
      })

      it('returns failure 400 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_400),
        )
        expect(result.current).toEqual('rgb(210,125,125)')
      })

      it('returns failure 500 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_500),
        )
        expect(result.current).toEqual('rgb(205,100,100)')
      })

      it('returns failure 600 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_600),
        )
        expect(result.current).toEqual('rgb(200,75,75)')
      })

      it('returns failure 700 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_700),
        )
        expect(result.current).toEqual('rgb(195,50,50)')
      })

      it('returns failure 800 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_800),
        )
        expect(result.current).toEqual('rgb(190,25,25)')
      })

      it('returns failure 900 text color value', () => {
        const { result } = renderHook(() =>
          useTextColor(TextColor.FAILURE_900),
        )
        expect(result.current).toEqual('rgb(185,0,0)')
      })

      it('returns custom rgb color value', () => {
        const color = randomRgb()
        const { result } = renderHook(() => useTextColor(color))
        expect(result.current).toEqual(color.toValue())
      })

      it('returns custom transparent color value', () => {
        const { result } = renderHook(() =>
          useTextColor(COLOR_TRANSPARENT),
        )
        expect(result.current).toEqual('transparent')
      })
    })

    describe('text background color style hook', () => {
      it('returns undefined when background color is not provided', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(undefined),
        )
        expect(result.current).toBeUndefined()
      })

      it('returns base 100 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_100),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(215,215,220)',
        })
      })

      it('returns base 200 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_200),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(220,220,225)',
        })
      })

      it('returns base 300 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_300),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(225,225,230)',
        })
      })

      it('returns base 400 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_400),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(230,230,235)',
        })
      })

      it('returns base 500 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_500),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(235,235,240)',
        })
      })

      it('returns base 600 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_600),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(240,240,245)',
        })
      })

      it('returns base 700 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_700),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(245,245,250)',
        })
      })

      it('returns base 800 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_800),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(250,250,255)',
        })
      })

      it('returns base 900 background color style', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColorStyle(TextBackgroundColor.BASE_900),
        )
        expect(result.current).toEqual({
          backgroundColor: 'rgb(255,255,255)',
        })
      })
    })

    describe('text background color value hook', () => {
      it('returns undefined when background color is not provided', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(undefined),
        )
        expect(result.current).toBeUndefined()
      })

      it('returns base 100 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_100),
        )
        expect(result.current).toEqual('rgb(215,215,220)')
      })

      it('returns base 200 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_200),
        )
        expect(result.current).toEqual('rgb(220,220,225)')
      })

      it('returns base 300 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_300),
        )
        expect(result.current).toEqual('rgb(225,225,230)')
      })

      it('returns base 400 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_400),
        )
        expect(result.current).toEqual('rgb(230,230,235)')
      })

      it('returns base 500 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_500),
        )
        expect(result.current).toEqual('rgb(235,235,240)')
      })

      it('returns base 600 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_600),
        )
        expect(result.current).toEqual('rgb(240,240,245)')
      })

      it('returns base 700 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_700),
        )
        expect(result.current).toEqual('rgb(245,245,250)')
      })

      it('returns base 800 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_800),
        )
        expect(result.current).toEqual('rgb(250,250,255)')
      })

      it('returns base 900 background color value', () => {
        const { result } = renderHook(() =>
          useTextBackgroundColor(TextBackgroundColor.BASE_900),
        )
        expect(result.current).toEqual('rgb(255,255,255)')
      })
    })
  })
})
