import { renderHook } from '@testing-library/react-native'
import {
  TextAlign,
  TextDecoration,
  TextLineHeight,
  TextTag,
} from '../constants'
import {
  useTextAlignStyle,
  useTextAlignValue,
  useTextDecorationStyle,
  useTextDecorationValue,
  useTextLineHeightValue,
  useTextTag,
} from './use-text'

describe('@/components/text', () => {
  describe('hooks/use-text', () => {
    describe('text decoration style hook', () => {
      it('returns correct style for no decoration', () => {
        const { result } = renderHook(() =>
          useTextDecorationStyle(TextDecoration.NONE)
        )
        expect(result.current).toEqual({ textDecorationLine: 'none' })
      })

      it('returns correct style for underline decoration', () => {
        const { result } = renderHook(() =>
          useTextDecorationStyle(TextDecoration.UNDERLINE)
        )
        expect(result.current).toEqual({ textDecorationLine: 'underline' })
      })
    })

    describe('text decoration value hook', () => {
      it('returns none decoration value', () => {
        const { result } = renderHook(() =>
          useTextDecorationValue(TextDecoration.NONE)
        )
        expect(result.current).toEqual('none')
      })

      it('returns underline decoration value', () => {
        const { result } = renderHook(() =>
          useTextDecorationValue(TextDecoration.UNDERLINE)
        )
        expect(result.current).toEqual('underline')
      })
    })

    describe('text align value hook', () => {
      it('returns left alignment value', () => {
        const { result } = renderHook(() => useTextAlignValue(TextAlign.LEFT))
        expect(result.current).toEqual('left')
      })

      it('returns center alignment value', () => {
        const { result } = renderHook(() => useTextAlignValue(TextAlign.CENTER))
        expect(result.current).toEqual('center')
      })

      it('returns right alignment value', () => {
        const { result } = renderHook(() => useTextAlignValue(TextAlign.RIGHT))
        expect(result.current).toEqual('right')
      })
    })

    describe('text align style hook', () => {
      it('returns correct style for left alignment', () => {
        const { result } = renderHook(() => useTextAlignStyle(TextAlign.LEFT))
        expect(result.current).toEqual({ textAlign: 'left' })
      })

      it('returns correct style for center alignment', () => {
        const { result } = renderHook(() => useTextAlignStyle(TextAlign.CENTER))
        expect(result.current).toEqual({ textAlign: 'center' })
      })

      it('returns correct style for right alignment', () => {
        const { result } = renderHook(() => useTextAlignStyle(TextAlign.RIGHT))
        expect(result.current).toEqual({ textAlign: 'right' })
      })
    })

    describe('text line height value hook', () => {
      it('returns none line height style', () => {
        const { result } = renderHook(() =>
          useTextLineHeightValue(TextLineHeight.NONE)
        )
        expect(result.current).toEqual(1)
      })

      it('returns tight line height style', () => {
        const { result } = renderHook(() =>
          useTextLineHeightValue(TextLineHeight.TIGHT)
        )
        expect(result.current).toEqual(1.25)
      })

      it('returns snug line height style', () => {
        const { result } = renderHook(() =>
          useTextLineHeightValue(TextLineHeight.SNUG)
        )
        expect(result.current).toEqual(1.375)
      })

      it('returns normal line height style', () => {
        const { result } = renderHook(() =>
          useTextLineHeightValue(TextLineHeight.NORMAL)
        )
        expect(result.current).toEqual(1.5)
      })

      it('returns relaxed line height style', () => {
        const { result } = renderHook(() =>
          useTextLineHeightValue(TextLineHeight.RELAXED)
        )
        expect(result.current).toEqual(1.625)
      })

      it('returns loose line height style', () => {
        const { result } = renderHook(() =>
          useTextLineHeightValue(TextLineHeight.LOOSE)
        )
        expect(result.current).toEqual(2)
      })
    })

    describe('text tag hook', () => {
      it('returns correct tag for span', () => {
        const { result } = renderHook(() => useTextTag(TextTag.SPAN))
        expect(result.current).toEqual('span')
      })

      it('returns correct tag for paragraph', () => {
        const { result } = renderHook(() => useTextTag(TextTag.P))
        expect(result.current).toEqual('p')
      })

      it('returns correct tag for h1', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H1))
        expect(result.current).toEqual('h1')
      })

      it('returns correct tag for h2', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H2))
        expect(result.current).toEqual('h2')
      })

      it('returns correct tag for h3', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H3))
        expect(result.current).toEqual('h3')
      })

      it('returns correct tag for h4', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H4))
        expect(result.current).toEqual('h4')
      })

      it('returns correct tag for h5', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H5))
        expect(result.current).toEqual('h5')
      })

      it('returns correct tag for h6', () => {
        const { result } = renderHook(() => useTextTag(TextTag.H6))
        expect(result.current).toEqual('h6')
      })
    })
  })
})
