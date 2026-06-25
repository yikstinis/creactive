import { render, screen } from '@testing-library/react-native'
import { Icon } from '.'

describe('@/components/atoms/icon', () => {
  describe('size property', () => {
    it('renders with small size', () => {
      const testId = randomTestId()
      render(
        <Icon
          testId={testId}
          size={Icon.Size.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '16')
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '16')
    })

    it('renders with medium size by default', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '24')
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '24')
    })

    it('renders with medium size', () => {
      const testId = randomTestId()
      render(
        <Icon
          testId={testId}
          size={Icon.Size.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '24')
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '24')
    })

    it('renders with large size', () => {
      const testId = randomTestId()
      render(
        <Icon
          testId={testId}
          size={Icon.Size.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '32')
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '32')
    })
  })

  describe('box property', () => {
    it('renders with medium view box by default', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveAttribute('viewBox', '0 0 24 24')
    })

    it('renders with small view box', () => {
      const testId = randomTestId()
      render(
        <Icon
          testId={testId}
          box={Icon.Size.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('viewBox', '0 0 16 16')
    })

    it('renders with medium view box', () => {
      const testId = randomTestId()
      render(
        <Icon
          testId={testId}
          box={Icon.Size.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('viewBox', '0 0 24 24')
    })

    it('renders with large view box', () => {
      const testId = randomTestId()
      render(
        <Icon
          testId={testId}
          box={Icon.Size.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('viewBox', '0 0 32 32')
    })
  })
})
