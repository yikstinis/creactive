import { faker } from '@faker-js/faker'
import { DimensionUnit } from './constants'
import { Dimension } from './dimension'

describe('@/helpers/dimension', () => {
  describe('Dimension', () => {
    it('exposes Unit static property', () => {
      expect(Dimension.Unit).toBe(DimensionUnit)
    })

    it('defaults to pixel unit', () => {
      const value = faker.number.int({ min: 1, max: 100 })
      const dimension = new Dimension(value)
      expect(dimension.toValue()).toBe(value)
    })

    describe('pixel unit', () => {
      it('returns numeric value on native', () => {
        const value = faker.number.int({ min: 1, max: 100 })
        const dimension = new Dimension(value, DimensionUnit.PIXEL)
        expect(dimension.toValue()).toBe(value)
      })

      it('handles zero', () => {
        const dimension = new Dimension(0, DimensionUnit.PIXEL)
        expect(dimension.toValue()).toBe(0)
      })
    })

    describe('percent unit', () => {
      it('returns percentage string', () => {
        const value = faker.number.int({ min: 1, max: 100 })
        const dimension = new Dimension(value, DimensionUnit.PERCENT)
        expect(dimension.toValue()).toBe(`${value}%`)
      })

      it('handles zero', () => {
        const dimension = new Dimension(0, DimensionUnit.PERCENT)
        expect(dimension.toValue()).toBe('0%')
      })
    })
  })
})
