import { Dimension, Fraction } from '@/helpers'
import { TestPlatform } from '@/utilities'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewFlexWrap,
  ViewJustifyContent,
} from '../constants'
import {
  useViewAlignContentStyle,
  useViewAlignContentValue,
  useViewAlignItemsStyle,
  useViewAlignItemsValue,
  useViewAlignSelfStyle,
  useViewAlignSelfValue,
  useViewFlexBasisValue,
  useViewFlexDirectionStyle,
  useViewFlexDirectionValue,
  useViewFlexGrowValue,
  useViewFlexShrinkValue,
  useViewFlexWrapStyle,
  useViewFlexWrapValue,
  useViewJustifyContentStyle,
  useViewJustifyContentValue,
} from './use-flex'

describe('@/components/atoms/view', () => {
  describe('hooks/use-flex', () => {
    describe('view flex grow value hook', () => {
      it('returns undefined when flex grow is not provided', () => {
        const { result } = renderHook(() => useViewFlexGrowValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex grow value when fraction provided', () => {
        const flexGrow = faker.number.int()
        const { result } = renderHook(() =>
          useViewFlexGrowValue(new Fraction(flexGrow)),
        )
        expect(result.current).toBe(flexGrow)
      })
    })

    describe('view flex shrink value hook', () => {
      it('returns undefined when flex shrink is not provided', () => {
        const { result } = renderHook(() => useViewFlexShrinkValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex shrink value when fraction provided', () => {
        const flexShrink = faker.number.int()
        const { result } = renderHook(() =>
          useViewFlexShrinkValue(new Fraction(flexShrink)),
        )
        expect(result.current).toBe(flexShrink)
      })
    })

    describe('view flex basis value hook', () => {
      it('returns undefined when flex basis is not provided', () => {
        const { result } = renderHook(() => useViewFlexBasisValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex basis value when pixel dimension provided', () => {
        const flexBasis = faker.number.int()
        const { result } = renderHook(() =>
          useViewFlexBasisValue(new Dimension(flexBasis, Dimension.Unit.PIXEL)),
        )
        expect(result.current).toBe(TestPlatform.toPixels(flexBasis))
      })

      it('returns flex basis value when percent dimension provided', () => {
        const flexBasis = faker.number.int({
          min: 0,
          max: 100,
        })
        const { result } = renderHook(() =>
          useViewFlexBasisValue(
            new Dimension(flexBasis, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toBe(`${flexBasis}%`)
      })
    })

    describe('view flex wrap style hook', () => {
      it('returns undefined when flex wrap is not provided', () => {
        const { result } = renderHook(() => useViewFlexWrapStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns none flex wrap style', () => {
        const { result } = renderHook(() =>
          useViewFlexWrapStyle(ViewFlexWrap.NONE),
        )
        expect(result.current).toEqual({
          flexWrap: 'nowrap',
        })
      })

      it('returns flex wrap style', () => {
        const { result } = renderHook(() =>
          useViewFlexWrapStyle(ViewFlexWrap.WRAP),
        )
        expect(result.current).toEqual({
          flexWrap: 'wrap',
        })
      })
    })

    describe('view flex wrap value hook', () => {
      it('returns undefined when flex wrap is not provided', () => {
        const { result } = renderHook(() => useViewFlexWrapValue())
        expect(result.current).toBeUndefined()
      })

      it('returns none flex wrap value', () => {
        const { result } = renderHook(() =>
          useViewFlexWrapValue(ViewFlexWrap.NONE),
        )
        expect(result.current).toBe('nowrap')
      })

      it('returns flex wrap value', () => {
        const { result } = renderHook(() =>
          useViewFlexWrapValue(ViewFlexWrap.WRAP),
        )
        expect(result.current).toBe('wrap')
      })
    })

    describe('view flex direction style hook', () => {
      it('returns undefined when flex direction is not provided', () => {
        const { result } = renderHook(() => useViewFlexDirectionStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns column flex direction style', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionStyle(ViewFlexDirection.COLUMN),
        )
        expect(result.current).toEqual({
          flexDirection: 'column',
        })
      })

      it('returns row flex direction style', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionStyle(ViewFlexDirection.ROW),
        )
        expect(result.current).toEqual({
          flexDirection: 'row',
        })
      })

      it('returns column reverse flex direction style', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionStyle(ViewFlexDirection.COLUMN_REVERSE),
        )
        expect(result.current).toEqual({
          flexDirection: 'column-reverse',
        })
      })

      it('returns row reverse flex direction style', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionStyle(ViewFlexDirection.ROW_REVERSE),
        )
        expect(result.current).toEqual({
          flexDirection: 'row-reverse',
        })
      })
    })

    describe('view flex direction value hook', () => {
      it('returns undefined when flex direction is not provided', () => {
        const { result } = renderHook(() => useViewFlexDirectionValue())
        expect(result.current).toBeUndefined()
      })

      it('returns column flex direction value', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionValue(ViewFlexDirection.COLUMN),
        )
        expect(result.current).toBe('column')
      })

      it('returns row flex direction value', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionValue(ViewFlexDirection.ROW),
        )
        expect(result.current).toBe('row')
      })

      it('returns column reverse flex direction value', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionValue(ViewFlexDirection.COLUMN_REVERSE),
        )
        expect(result.current).toBe('column-reverse')
      })

      it('returns row reverse flex direction value', () => {
        const { result } = renderHook(() =>
          useViewFlexDirectionValue(ViewFlexDirection.ROW_REVERSE),
        )
        expect(result.current).toBe('row-reverse')
      })
    })

    describe('view justify content style hook', () => {
      it('returns undefined when justify content is not provided', () => {
        const { result } = renderHook(() => useViewJustifyContentStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start justify content style', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentStyle(ViewJustifyContent.FLEX_START),
        )
        expect(result.current).toEqual({
          justifyContent: 'flex-start',
        })
      })

      it('returns center justify content style', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentStyle(ViewJustifyContent.CENTER),
        )
        expect(result.current).toEqual({
          justifyContent: 'center',
        })
      })

      it('returns flex end justify content style', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentStyle(ViewJustifyContent.FLEX_END),
        )
        expect(result.current).toEqual({
          justifyContent: 'flex-end',
        })
      })

      it('returns space between justify content style', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentStyle(ViewJustifyContent.SPACE_BETWEEN),
        )
        expect(result.current).toEqual({
          justifyContent: 'space-between',
        })
      })

      it('returns space around justify content style', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentStyle(ViewJustifyContent.SPACE_AROUND),
        )
        expect(result.current).toEqual({
          justifyContent: 'space-around',
        })
      })

      it('returns space evenly justify content style', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentStyle(ViewJustifyContent.SPACE_EVENLY),
        )
        expect(result.current).toEqual({
          justifyContent: 'space-evenly',
        })
      })
    })

    describe('view justify content value hook', () => {
      it('returns undefined when justify content is not provided', () => {
        const { result } = renderHook(() => useViewJustifyContentValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start justify content value', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentValue(ViewJustifyContent.FLEX_START),
        )
        expect(result.current).toBe('flex-start')
      })

      it('returns center justify content value', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentValue(ViewJustifyContent.CENTER),
        )
        expect(result.current).toBe('center')
      })

      it('returns flex end justify content value', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentValue(ViewJustifyContent.FLEX_END),
        )
        expect(result.current).toBe('flex-end')
      })

      it('returns space between justify content value', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentValue(ViewJustifyContent.SPACE_BETWEEN),
        )
        expect(result.current).toBe('space-between')
      })

      it('returns space around justify content value', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentValue(ViewJustifyContent.SPACE_AROUND),
        )
        expect(result.current).toBe('space-around')
      })

      it('returns space evenly justify content value', () => {
        const { result } = renderHook(() =>
          useViewJustifyContentValue(ViewJustifyContent.SPACE_EVENLY),
        )
        expect(result.current).toBe('space-evenly')
      })
    })

    describe('view align items style hook', () => {
      it('returns undefined when align items is not provided', () => {
        const { result } = renderHook(() => useViewAlignItemsStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start align items style', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsStyle(ViewAlignItems.FLEX_START),
        )
        expect(result.current).toEqual({
          alignItems: 'flex-start',
        })
      })

      it('returns center align items style', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsStyle(ViewAlignItems.CENTER),
        )
        expect(result.current).toEqual({
          alignItems: 'center',
        })
      })

      it('returns flex end align items style', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsStyle(ViewAlignItems.FLEX_END),
        )
        expect(result.current).toEqual({
          alignItems: 'flex-end',
        })
      })

      it('returns stretch align items style', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsStyle(ViewAlignItems.STRETCH),
        )
        expect(result.current).toEqual({
          alignItems: 'stretch',
        })
      })

      it('returns baseline align items style', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsStyle(ViewAlignItems.BASELINE),
        )
        expect(result.current).toEqual({
          alignItems: 'baseline',
        })
      })
    })

    describe('view align items value hook', () => {
      it('returns undefined when align items is not provided', () => {
        const { result } = renderHook(() => useViewAlignItemsValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start align items value', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsValue(ViewAlignItems.FLEX_START),
        )
        expect(result.current).toBe('flex-start')
      })

      it('returns center align items value', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsValue(ViewAlignItems.CENTER),
        )
        expect(result.current).toBe('center')
      })

      it('returns flex end align items value', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsValue(ViewAlignItems.FLEX_END),
        )
        expect(result.current).toBe('flex-end')
      })

      it('returns stretch align items value', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsValue(ViewAlignItems.STRETCH),
        )
        expect(result.current).toBe('stretch')
      })

      it('returns baseline align items value', () => {
        const { result } = renderHook(() =>
          useViewAlignItemsValue(ViewAlignItems.BASELINE),
        )
        expect(result.current).toBe('baseline')
      })
    })

    describe('view align self style hook', () => {
      it('returns undefined when align self is not provided', () => {
        const { result } = renderHook(() => useViewAlignSelfStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start align self style', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfStyle(ViewAlignSelf.FLEX_START),
        )
        expect(result.current).toEqual({
          alignSelf: 'flex-start',
        })
      })

      it('returns center align self style', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfStyle(ViewAlignSelf.CENTER),
        )
        expect(result.current).toEqual({
          alignSelf: 'center',
        })
      })

      it('returns flex end align self style', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfStyle(ViewAlignSelf.FLEX_END),
        )
        expect(result.current).toEqual({
          alignSelf: 'flex-end',
        })
      })

      it('returns stretch align self style', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfStyle(ViewAlignSelf.STRETCH),
        )
        expect(result.current).toEqual({
          alignSelf: 'stretch',
        })
      })

      it('returns baseline align self style', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfStyle(ViewAlignSelf.BASELINE),
        )
        expect(result.current).toEqual({
          alignSelf: 'baseline',
        })
      })
    })

    describe('view align self value hook', () => {
      it('returns undefined when align self is not provided', () => {
        const { result } = renderHook(() => useViewAlignSelfValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start align self value', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfValue(ViewAlignSelf.FLEX_START),
        )
        expect(result.current).toBe('flex-start')
      })

      it('returns center align self value', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfValue(ViewAlignSelf.CENTER),
        )
        expect(result.current).toBe('center')
      })

      it('returns flex end align self value', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfValue(ViewAlignSelf.FLEX_END),
        )
        expect(result.current).toBe('flex-end')
      })

      it('returns stretch align self value', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfValue(ViewAlignSelf.STRETCH),
        )
        expect(result.current).toBe('stretch')
      })

      it('returns baseline align self value', () => {
        const { result } = renderHook(() =>
          useViewAlignSelfValue(ViewAlignSelf.BASELINE),
        )
        expect(result.current).toBe('baseline')
      })
    })

    describe('view flex align content style hook', () => {
      it('returns undefined when align content is not provided', () => {
        const { result } = renderHook(() => useViewAlignContentStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.FLEX_START),
        )
        expect(result.current).toEqual({
          alignContent: 'flex-start',
        })
      })

      it('returns center align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.CENTER),
        )
        expect(result.current).toEqual({
          alignContent: 'center',
        })
      })

      it('returns flex end align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.FLEX_END),
        )
        expect(result.current).toEqual({
          alignContent: 'flex-end',
        })
      })

      it('returns stretch align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.STRETCH),
        )
        expect(result.current).toEqual({
          alignContent: 'stretch',
        })
      })

      it('returns space between align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.SPACE_BETWEEN),
        )
        expect(result.current).toEqual({
          alignContent: 'space-between',
        })
      })

      it('returns space around align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.SPACE_AROUND),
        )
        expect(result.current).toEqual({
          alignContent: 'space-around',
        })
      })

      it('returns space evenly align content style', () => {
        const { result } = renderHook(() =>
          useViewAlignContentStyle(ViewAlignContent.SPACE_EVENLY),
        )
        expect(result.current).toEqual({
          alignContent: 'space-evenly',
        })
      })
    })

    describe('view flex align content value hook', () => {
      it('returns undefined when align content is not provided', () => {
        const { result } = renderHook(() => useViewAlignContentValue())
        expect(result.current).toBeUndefined()
      })

      it('returns flex start align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.FLEX_START),
        )
        expect(result.current).toBe('flex-start')
      })

      it('returns center align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.CENTER),
        )
        expect(result.current).toBe('center')
      })

      it('returns flex end align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.FLEX_END),
        )
        expect(result.current).toBe('flex-end')
      })

      it('returns stretch align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.STRETCH),
        )
        expect(result.current).toBe('stretch')
      })

      it('returns space between align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.SPACE_BETWEEN),
        )
        expect(result.current).toBe('space-between')
      })

      it('returns space around align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.SPACE_AROUND),
        )
        expect(result.current).toBe('space-around')
      })

      it('returns space evenly align content value', () => {
        const { result } = renderHook(() =>
          useViewAlignContentValue(ViewAlignContent.SPACE_EVENLY),
        )
        expect(result.current).toBe('space-evenly')
      })
    })
  })
})
