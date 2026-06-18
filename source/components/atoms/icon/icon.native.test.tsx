import { render, screen } from '@testing-library/react-native'
import { Icon } from '.'

describe('@/components/atoms/icon', () => {
  describe('size property', () => {
    it('renders with small size', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} size={Icon.Size.SM} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 16,
        height: 16,
      })
    })

    it('renders with medium size by default', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 24,
        height: 24,
      })
    })

    it('renders with medium size', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} size={Icon.Size.MD} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 24,
        height: 24,
      })
    })

    it('renders with large size', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} size={Icon.Size.LG} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 32,
        height: 32,
      })
    })
  })
})
