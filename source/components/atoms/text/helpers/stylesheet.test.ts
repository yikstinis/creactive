import { Dimension } from '@/helpers/dimension'
import { Font } from '@/helpers/font'
import { FontFamily, FontWeight } from '@/helpers/font/constants'
import { Fraction } from '@/helpers/fraction'
import { getLineHeightStyleSheet } from './stylesheet'

const makeFont = (size: number, lineHeight: number) =>
  new Font(FontFamily.SANS_SERIF, FontWeight.REGULAR, new Dimension(size), new Fraction(lineHeight))

describe('@/components/atoms/text', () => {
  describe('helpers/stylesheet', () => {
    describe('line height style sheet helper', () => {
      it('returns named styles with calculated line height', () => {
        const lineHeightStyleSheet = getLineHeightStyleSheet(makeFont(18, 1.5))
        expect(lineHeightStyleSheet).toEqual({
          textLineHeight: {
            lineHeight: 27,
            paddingVertical: 9,
            marginVertical: -9,
          },
        })
      })

      it('returns same cached styles for same font size and line height', () => {
        const lineHeightStyleSheet1 = getLineHeightStyleSheet(makeFont(18, 1.5))
        const lineHeightStyleSheet2 = getLineHeightStyleSheet(makeFont(18, 1.5))
        expect(lineHeightStyleSheet1).toBe(lineHeightStyleSheet2)
      })

      it('returns a clip margin proportional to font size when multiplier is 1', () => {
        const lineHeightStyleSheet = getLineHeightStyleSheet(makeFont(18, 1))
        expect(lineHeightStyleSheet).toEqual({
          textLineHeight: {
            lineHeight: 18,
            paddingVertical: 9,
            marginVertical: -9,
          },
        })
      })
    })
  })
})
