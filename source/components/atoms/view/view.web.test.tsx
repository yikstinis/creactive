import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { View } from '.'

describe('@/components/atoms/view', () => {
  describe('tag property', () => {
    it('renders into div element by default', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId).tagName).toBe('DIV')
    })

    it('renders into figure element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.FIGURE}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('FIGURE')
    })

    it('renders into figcaption element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.FIGCAPTION}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('FIGCAPTION')
    })

    it('renders into article element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.ARTICLE}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('ARTICLE')
    })

    it('renders into section element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.SECTION}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('SECTION')
    })

    it('renders into header element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.HEADER}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('HEADER')
    })

    it('renders into main element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.MAIN}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('MAIN')
    })

    it('renders into footer element', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          tag={View.Tag.FOOTER}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('FOOTER')
    })
  })

  describe('top property', () => {
    it('renders with default top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'top',
        expect.anything(),
      )
    })
  })

  describe('left property', () => {
    it('renders with default left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'left',
        expect.anything(),
      )
    })
  })

  describe('right property', () => {
    it('renders with default right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'right',
        expect.anything(),
      )
    })
  })

  describe('bottom property', () => {
    it('renders with default bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'bottom',
        expect.anything(),
      )
    })
  })

  describe('opacity property', () => {
    it('renders with default opacity style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'opacity',
        expect.anything(),
      )
    })

    it('renders with provided fraction opacity style', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <View
          testId={testId}
          opacity={fraction}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'opacity',
        String(fraction.toValue()),
      )
    })
  })

  describe('flex grow property', () => {
    it('renders with default flex grow style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'flex-grow',
        expect.anything(),
      )
    })
  })

  describe('flex shrink property', () => {
    it('renders with default flex shrink style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'flex-shrink',
        expect.anything(),
      )
    })
  })

  describe('flex basis property', () => {
    it('renders with default flex basis style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'flex-basis',
        expect.anything(),
      )
    })
  })

  describe('align self property', () => {
    it('renders with default align self style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'align-self',
        expect.anything(),
      )
    })
  })

  describe('align content property', () => {
    it('renders with default align content style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'align-content',
        expect.anything(),
      )
    })
  })

  describe('gap property', () => {
    it('renders with default gap style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'gap',
        expect.anything(),
      )
    })
  })

  describe('margin top property', () => {
    it('renders with default margin top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'margin-top',
        expect.anything(),
      )
    })
  })

  describe('padding top property', () => {
    it('renders with default padding top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'padding-top',
        expect.anything(),
      )
    })
  })

  describe('margin left property', () => {
    it('renders with default margin left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'margin-left',
        expect.anything(),
      )
    })
  })

  describe('padding left property', () => {
    it('renders with default padding left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'padding-left',
        expect.anything(),
      )
    })
  })

  describe('margin right property', () => {
    it('renders with default margin right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'margin-right',
        expect.anything(),
      )
    })
  })

  describe('padding right property', () => {
    it('renders with default padding right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'padding-right',
        expect.anything(),
      )
    })
  })

  describe('margin bottom property', () => {
    it('renders with default margin bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'margin-bottom',
        expect.anything(),
      )
    })
  })

  describe('padding bottom property', () => {
    it('renders with default padding bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'padding-bottom',
        expect.anything(),
      )
    })
  })

  describe('min width property', () => {
    it('renders with default min width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'min-width',
        expect.anything(),
      )
    })
  })

  describe('width property', () => {
    it('renders with default width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'width',
        expect.anything(),
      )
    })
  })

  describe('max width property', () => {
    it('renders with default max width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'max-width',
        expect.anything(),
      )
    })
  })

  describe('min height property', () => {
    it('renders with default min height style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'min-height',
        expect.anything(),
      )
    })
  })

  describe('height property', () => {
    it('renders with default height style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'height',
        expect.anything(),
      )
    })
  })

  describe('max height property', () => {
    it('renders with default max height style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'max-height',
        expect.anything(),
      )
    })
  })

  describe('box shadow property', () => {
    it('renders with default box shadow style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'box-shadow',
        expect.anything(),
      )
    })
  })

  describe('border color property', () => {
    it('renders with default border color style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'border-color',
        expect.anything(),
      )
    })
  })

  describe('border width property', () => {
    it('renders with default border width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 0,
      })
    })
  })

  describe('border width top property', () => {
    it('renders with default border width top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 0,
      })
    })
  })

  describe('border width left property', () => {
    it('renders with default border width left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 0,
      })
    })
  })

  describe('border width right property', () => {
    it('renders with default border width right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 0,
      })
    })
  })

  describe('border width bottom property', () => {
    it('renders with default border width bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 0,
      })
    })
  })

  describe('border radius property', () => {
    it('renders with default border radius style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'border-radius',
        expect.anything(),
      )
    })
  })

  describe('border radius top left property', () => {
    it('renders with default border radius top left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'border-top-left-radius',
        expect.anything(),
      )
    })
  })

  describe('border radius top right property', () => {
    it('renders with default border radius top right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'border-top-right-radius',
        expect.anything(),
      )
    })
  })

  describe('border radius bottom left property', () => {
    it('renders with default border radius bottom left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'border-bottom-left-radius',
        expect.anything(),
      )
    })
  })

  describe('border radius bottom right property', () => {
    it('renders with default border radius bottom right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'border-bottom-right-radius',
        expect.anything(),
      )
    })
  })

  describe('background color property', () => {
    it('renders with default background color style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'background-color',
        expect.anything(),
      )
    })

    it('renders with transparent background color style', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          backgroundColor="transparent"
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'background-color',
        'transparent',
      )
    })

    it('renders with custom rgb background color style', () => {
      const testId = randomTestId()
      const backgroundColor = randomRgb()
      render(
        <View
          testId={testId}
          backgroundColor={backgroundColor}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'background-color',
        backgroundColor,
      )
    })

    it('renders with custom rgba background color style', () => {
      const testId = randomTestId()
      const backgroundColor = randomRgba()
      render(
        <View
          testId={testId}
          backgroundColor={backgroundColor}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'background-color',
        backgroundColor,
      )
    })
  })

  describe('layout callback property', () => {
    beforeEach(() => {
      MockResizeObserver.instances = []
    })

    it('calls provided callback when component mounted', () => {
      const testId = randomTestId()
      const handleLayout = jest.fn()
      render(
        <View
          testId={testId}
          onLayout={handleLayout}
        />,
      )
      expect(handleLayout).toHaveBeenCalled()
    })

    it('calls provided callback with element dimensions on mount', () => {
      const handleLayout = jest.fn()
      render(<View onLayout={handleLayout} />)
      expect(handleLayout).toHaveBeenCalledWith({ width: 0, height: 0 })
    })

    it('calls provided callback with new dimensions when element resizes', () => {
      const handleLayout = jest.fn()
      render(<View onLayout={handleLayout} />)
      const width = faker.number.int({ min: 1, max: 1000 })
      const height = faker.number.int({ min: 1, max: 1000 })
      MockResizeObserver.instances[0].trigger(width, height)
      expect(handleLayout).toHaveBeenLastCalledWith({ width, height })
    })

    it('does not call provided callback after component unmounts', () => {
      const handleLayout = jest.fn()
      const { unmount } = render(<View onLayout={handleLayout} />)
      const observer = MockResizeObserver.instances[0]
      unmount()
      handleLayout.mockClear()
      observer.trigger(100, 100)
      expect(handleLayout).not.toHaveBeenCalled()
    })
  })
})
