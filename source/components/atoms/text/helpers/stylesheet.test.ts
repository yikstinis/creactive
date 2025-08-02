import { getLineHeightStyleSheet } from './stylesheet'

describe('@/components/atoms/text', () => {
  describe('helpers/stylesheet', () => {
    describe('line height style sheet helper', () => {
      it('returns named styles with calculated line height', () => {
        const lineHeightStyleSheet = getLineHeightStyleSheet(18, 1.5)
        expect(lineHeightStyleSheet).toEqual({
          textLineHeight: {
            lineHeight: 27,
          },
        })
      })

      it('returns same cached styles for same arguments', () => {
        const lineHeightStyleSheet1 = getLineHeightStyleSheet(18, 1.5)
        const lineHeightStyleSheet2 = getLineHeightStyleSheet(18, 1.5)
        expect(lineHeightStyleSheet1).toBe(lineHeightStyleSheet2)
      })
    })
  })
})
