import { isMetro } from '.'

describe('@/helpers/environment', () => {
  describe('is metro', () => {
    it('returns false in web environment', () => {
      expect(isMetro).toBe(false)
    })
  })
})
