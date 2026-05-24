import { isMetro } from '.'

describe('@/helpers/environment', () => {
  describe('is metro', () => {
    it('returns true in metro native environment', () => {
      expect(isMetro).toBe(true)
    })
  })
})
