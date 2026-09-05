import { expect } from '@jest/globals'

import { Dimension, DimensionUnit } from '@/helpers/dimension/dimension'

describe('@/helpers/dimension/dimension', () => {
  describe('Dimension', () => {
    it('defaults to the pixel unit', () => {
      const dimension = new Dimension(16)

      expect(dimension.value).toBe(16)
      expect(dimension.unit).toBe(DimensionUnit.PIXEL)
    })

    it('accepts an explicit unit', () => {
      const dimension = new Dimension(50, DimensionUnit.PERCENT)

      expect(dimension.value).toBe(50)
      expect(dimension.unit).toBe(DimensionUnit.PERCENT)
    })

    describe('Unit', () => {
      it('exposes DimensionUnit as its static Unit', () => {
        expect(Dimension.Unit).toBe(DimensionUnit)
      })
    })
  })
})
