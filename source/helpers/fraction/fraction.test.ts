import { faker } from '@faker-js/faker'
import { Fraction } from './fraction'

describe('@/helpers/fraction', () => {
  describe('Fraction', () => {
    it('returns the value', () => {
      const value = faker.number.float({ min: 0, max: 1 })
      const fraction = new Fraction(value)
      expect(fraction.toValue()).toBe(value)
    })
  })
})
