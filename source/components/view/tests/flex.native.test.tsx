import { renderHook } from '@testing-library/react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
} from '../constants'
import {
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewFlexDirectionStyle,
  useViewJustifyContentStyle,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view flex direction style', () => {
    it('returns undefined flex direction style', () => {
      const { result } = renderHook(() => useViewFlexDirectionStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns column flex direction style', () => {
      const { result } = renderHook(() =>
        useViewFlexDirectionStyle(ViewFlexDirection.COLUMN)
      )
      expect(result.current).toEqual({
        flexDirection: 'column',
      })
    })

    it('returns row flex direction style', () => {
      const { result } = renderHook(() =>
        useViewFlexDirectionStyle(ViewFlexDirection.ROW)
      )
      expect(result.current).toEqual({
        flexDirection: 'row',
      })
    })
  })

  describe('use view justify content style', () => {
    it('returns undefined justify content style', () => {
      const { result } = renderHook(() => useViewJustifyContentStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flext start justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.FLEX_START)
      )
      expect(result.current).toEqual({
        justifyContent: 'flex-start',
      })
    })

    it('returns flex end justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.FLEX_END)
      )
      expect(result.current).toEqual({
        justifyContent: 'flex-end',
      })
    })

    it('returns CENTER justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.CENTER)
      )
      expect(result.current).toEqual({
        justifyContent: 'center',
      })
    })

    it('returns space between justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.SPACE_BETWEEN)
      )
      expect(result.current).toEqual({
        justifyContent: 'space-between',
      })
    })

    it('returns space around justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.SPACE_AROUND)
      )
      expect(result.current).toEqual({
        justifyContent: 'space-around',
      })
    })

    it('returns space evenly justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.SPACE_EVENLY)
      )
      expect(result.current).toEqual({
        justifyContent: 'space-evenly',
      })
    })
  })

  describe('use view align items style', () => {
    it('returns undefined align items style', () => {
      const { result } = renderHook(() => useViewAlignItemsStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flex start align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.FLEX_START)
      )
      expect(result.current).toEqual({
        alignItems: 'flex-start',
      })
    })

    it('returns flex end align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.FLEX_END)
      )
      expect(result.current).toEqual({
        alignItems: 'flex-end',
      })
    })

    it('returns center align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.CENTER)
      )
      expect(result.current).toEqual({
        alignItems: 'center',
      })
    })

    it('returns stretch align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.STRETCH)
      )
      expect(result.current).toEqual({
        alignItems: 'stretch',
      })
    })

    it('returns baseline align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.BASELINE)
      )
      expect(result.current).toEqual({
        alignItems: 'baseline',
      })
    })
  })

  describe('use view align self style', () => {
    it('returns undefined align self style', () => {
      const { result } = renderHook(() => useViewAlignSelfStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flex start align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.FLEX_START)
      )
      expect(result.current).toEqual({
        alignSelf: 'flex-start',
      })
    })

    it('returns flex end align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.FLEX_END)
      )
      expect(result.current).toEqual({
        alignSelf: 'flex-end',
      })
    })

    it('returns center align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.CENTER)
      )
      expect(result.current).toEqual({
        alignSelf: 'center',
      })
    })

    it('returns stretch align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.STRETCH)
      )
      expect(result.current).toEqual({
        alignSelf: 'stretch',
      })
    })

    it('returns baseline align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.BASELINE)
      )
      expect(result.current).toEqual({
        alignSelf: 'baseline',
      })
    })
  })

  describe('use view align content style', () => {
    it('returns undefined align content style', () => {
      const { result } = renderHook(() => useViewAlignContentStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flex start align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.FLEX_START)
      )
      expect(result.current).toEqual({
        alignContent: 'flex-start',
      })
    })

    it('returns flex end align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.FLEX_END)
      )
      expect(result.current).toEqual({
        alignContent: 'flex-end',
      })
    })

    it('returns center align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.CENTER)
      )
      expect(result.current).toEqual({
        alignContent: 'center',
      })
    })

    it('returns stretch align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.STRETCH)
      )
      expect(result.current).toEqual({
        alignContent: 'stretch',
      })
    })

    it('returns space between align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.SPACE_BETWEEN)
      )
      expect(result.current).toEqual({
        alignContent: 'space-between',
      })
    })

    it('returns space around align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.SPACE_AROUND)
      )
      expect(result.current).toEqual({
        alignContent: 'space-around',
      })
    })
  })
})
