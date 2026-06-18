import { render } from '@testing-library/react'
import { Spinner } from '.'

describe('@/components/molecules/spinner', () => {
  describe('size property', () => {
    it('renders with small size', () => {
      const { container } = render(<Spinner size={Spinner.Size.SM} />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('width', '16')
      expect(svg).toHaveAttribute('height', '16')
    })

    it('renders with medium size by default', () => {
      const { container } = render(<Spinner />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })

    it('renders with medium size', () => {
      const { container } = render(<Spinner size={Spinner.Size.MD} />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })

    it('renders with large size', () => {
      const { container } = render(<Spinner size={Spinner.Size.LG} />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('width', '32')
      expect(svg).toHaveAttribute('height', '32')
    })
  })

  describe('color property', () => {
    it('renders with base 800 color by default', () => {
      const { container } = render(<Spinner />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(25,25,30)',
      )
    })

    it('renders with base 100 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_100} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(200,200,205)',
      )
    })

    it('renders with base 200 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_200} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(175,175,180)',
      )
    })

    it('renders with base 300 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_300} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(150,150,155)',
      )
    })

    it('renders with base 400 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_400} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(125,125,130)',
      )
    })

    it('renders with base 500 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_500} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(100,100,105)',
      )
    })

    it('renders with base 600 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_600} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(75,75,80)',
      )
    })

    it('renders with base 700 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_700} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(50,50,55)',
      )
    })

    it('renders with base 800 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_800} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(25,25,30)',
      )
    })

    it('renders with base 900 color', () => {
      const { container } = render(<Spinner color={Spinner.Color.BASE_900} />)
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(0,0,5)',
      )
    })

    it('renders with inverse 100 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_100} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(75,75,80)',
      )
    })

    it('renders with inverse 200 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_200} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(100,100,105)',
      )
    })

    it('renders with inverse 300 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_300} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(125,125,130)',
      )
    })

    it('renders with inverse 400 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_400} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(150,150,155)',
      )
    })

    it('renders with inverse 500 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_500} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(175,175,180)',
      )
    })

    it('renders with inverse 600 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_600} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(200,200,205)',
      )
    })

    it('renders with inverse 700 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_700} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(225,225,230)',
      )
    })

    it('renders with inverse 800 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_800} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(250,250,255)',
      )
    })

    it('renders with inverse 900 color', () => {
      const { container } = render(
        <Spinner color={Spinner.Color.INVERSE_900} />,
      )
      expect(container.querySelector('path')).toHaveAttribute(
        'fill',
        'rgb(255,255,255)',
      )
    })
  })
})
