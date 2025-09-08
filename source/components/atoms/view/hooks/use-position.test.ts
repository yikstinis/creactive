import { Dimension } from '@/helpers'
import { TestPlatform } from '@/utilities'
import { faker } from '@faker-js/faker/.'
import { renderHook } from '@testing-library/react-native'
import { ViewPosition } from '../constants'
import {
  useViewPositionDimensionValue,
  useViewPositionStyle,
  useViewPositionValue,
} from './use-position'

describe('@/components/atoms/view', () => {
  describe('hooks/use-position', () => {
    describe('view position style hook', () => {
      it('returns undefined when position is not provided', () => {
        const { result } = renderHook(() => useViewPositionStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns relative position style', () => {
        const { result } = renderHook(() =>
          useViewPositionStyle(ViewPosition.RELATIVE),
        )
        expect(result.current).toEqual({
          position: 'relative',
        })
      })

      it('returns absolute position style', () => {
        const { result } = renderHook(() =>
          useViewPositionStyle(ViewPosition.ABSOLUTE),
        )
        expect(result.current).toEqual({
          position: 'absolute',
        })
      })
    })

    describe('view position value hook', () => {
      it('returns undefined when position is not provided', () => {
        const { result } = renderHook(() => useViewPositionValue())
        expect(result.current).toBeUndefined()
      })

      it('returns relative position value', () => {
        const { result } = renderHook(() =>
          useViewPositionValue(ViewPosition.RELATIVE),
        )
        expect(result.current).toEqual('relative')
      })

      it('returns absolute position value', () => {
        const { result } = renderHook(() =>
          useViewPositionValue(ViewPosition.ABSOLUTE),
        )
        expect(result.current).toEqual('absolute')
      })
    })

    describe('view position dimension value hook', () => {
      it('returns undefined when position dimension is not provided', () => {
        const { result } = renderHook(() => useViewPositionDimensionValue())
        expect(result.current).toBeUndefined()
      })

      it('returns position dimension when pixel dimension provided', () => {
        const positionDimension = faker.number.float()
        const { result } = renderHook(() =>
          useViewPositionDimensionValue(
            new Dimension(positionDimension, Dimension.Unit.PIXEL),
          ),
        )
        expect(result.current).toEqual(TestPlatform.toPixels(positionDimension))
      })

      it('returns position dimension when percent dimension provided', () => {
        const positionDimension = faker.number.int({
          min: 0,
          max: 100,
        })
        const { result } = renderHook(() =>
          useViewPositionDimensionValue(
            new Dimension(positionDimension, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toEqual(`${positionDimension}%`)
      })
    })
  })
})
