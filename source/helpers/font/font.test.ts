import { FontWeight } from './constants'
import { Font } from './font'

describe('@/helpers/font', () => {
  describe('Font', () => {
    it('exposes Weight static property', () => {
      expect(Font.Weight).toBe(FontWeight)
    })
  })
})
