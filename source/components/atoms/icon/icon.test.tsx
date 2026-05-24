import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Icon } from '.'
import { IconColor, IconName, IconSize } from './constants'

type RenderedIcon = {
  props?: Record<string, unknown>
  getAttribute?: (attributeName: string) => string | null
}

const getRenderedIconValue = (
  icon: RenderedIcon,
  key: 'width' | 'height' | 'fill' | 'stroke',
) => {
  if (icon.props && key in icon.props) {
    return icon.props[key]
  }

  return icon.getAttribute?.(key)
}

const expectRenderedIconSize = (testId: string, expectedSize: number) => {
  const renderedIcon = screen.getByTestId(testId) as RenderedIcon
  expect(Number(getRenderedIconValue(renderedIcon, 'width'))).toBe(expectedSize)
  expect(Number(getRenderedIconValue(renderedIcon, 'height'))).toBe(
    expectedSize,
  )
}

const expectRenderedIconColor = (testId: string, expectedColor: string) => {
  const renderedIcon = screen.getByTestId(testId) as RenderedIcon
  expect(getRenderedIconValue(renderedIcon, 'fill')).toBe(expectedColor)
  expect(getRenderedIconValue(renderedIcon, 'stroke')).toBe(expectedColor)
}

describe('@/components/atoms/icon', () => {
  describe('icon component', () => {
    it('renders icon component with provided test identifier', () => {
      const testId = faker.string.uuid()

      render(
        <Icon
          testId={testId}
          name={IconName.AUTO_RENEW}
          size={IconSize.SM}
        />,
      )

      expect(screen.getByTestId(testId)).toBeTruthy()
    })

    it('renders icon with small size', () => {
      const testId = faker.string.uuid()

      render(
        <Icon
          testId={testId}
          name={IconName.AUTO_RENEW}
          size={IconSize.SM}
        />,
      )

      expectRenderedIconSize(testId, 16)
    })

    it('renders icon with medium size', () => {
      const testId = faker.string.uuid()

      render(
        <Icon
          testId={testId}
          name={IconName.AUTO_RENEW}
          size={IconSize.MD}
        />,
      )

      expectRenderedIconSize(testId, 24)
    })

    it('renders icon with large size', () => {
      const testId = faker.string.uuid()

      render(
        <Icon
          testId={testId}
          name={IconName.AUTO_RENEW}
          size={IconSize.LG}
        />,
      )

      expectRenderedIconSize(testId, 32)
    })
  })

  describe('color property', () => {
    it('renders with base 800 color by default', () => {
      const testId = faker.string.uuid()

      render(
        <Icon
          testId={testId}
          name={IconName.AUTO_RENEW}
          size={IconSize.MD}
        />,
      )

      expectRenderedIconColor(testId, 'rgb(25,25,30)')
    })

    it('renders with transparent color', () => {
      const testId = faker.string.uuid()

      render(
        <Icon
          testId={testId}
          name={IconName.AUTO_RENEW}
          size={IconSize.MD}
          color={IconColor.TRANSPARENT}
        />,
      )

      expectRenderedIconColor(testId, 'transparent')
    })

    describe('base colors', () => {
      const baseColors: readonly (readonly [IconColor, string])[] = [
        [IconColor.BASE_100, 'rgb(200,200,205)'],
        [IconColor.BASE_200, 'rgb(175,175,180)'],
        [IconColor.BASE_300, 'rgb(150,150,155)'],
        [IconColor.BASE_400, 'rgb(125,125,130)'],
        [IconColor.BASE_500, 'rgb(100,100,105)'],
        [IconColor.BASE_600, 'rgb(75,75,80)'],
        [IconColor.BASE_700, 'rgb(50,50,55)'],
        [IconColor.BASE_800, 'rgb(25,25,30)'],
        [IconColor.BASE_900, 'rgb(0,0,5)'],
      ]

      baseColors.forEach(([color, expectedColor]) => {
        it(`renders with ${color} color`, () => {
          const testId = faker.string.uuid()

          render(
            <Icon
              testId={testId}
              name={IconName.AUTO_RENEW}
              size={IconSize.MD}
              color={color}
            />,
          )

          expectRenderedIconColor(testId, expectedColor)
        })
      })
    })

    describe('inverse colors', () => {
      const inverseColors: readonly (readonly [IconColor, string])[] = [
        [IconColor.INVERSE_100, 'rgb(50,50,55)'],
        [IconColor.INVERSE_200, 'rgb(75,75,80)'],
        [IconColor.INVERSE_300, 'rgb(100,100,105)'],
        [IconColor.INVERSE_400, 'rgb(125,125,130)'],
        [IconColor.INVERSE_500, 'rgb(150,150,155)'],
        [IconColor.INVERSE_600, 'rgb(175,175,180)'],
        [IconColor.INVERSE_700, 'rgb(200,200,205)'],
        [IconColor.INVERSE_800, 'rgb(225,225,230)'],
        [IconColor.INVERSE_900, 'rgb(250,250,255)'],
      ]

      inverseColors.forEach(([color, expectedColor]) => {
        it(`renders with ${color} color`, () => {
          const testId = faker.string.uuid()

          render(
            <Icon
              testId={testId}
              name={IconName.AUTO_RENEW}
              size={IconSize.MD}
              color={color as IconColor}
            />,
          )

          expectRenderedIconColor(testId, expectedColor)
        })
      })
    })

    describe('failure colors', () => {
      const failureColors: readonly (readonly [IconColor, string])[] = [
        [IconColor.FAILURE_100, 'rgb(225,200,200)'],
        [IconColor.FAILURE_200, 'rgb(220,175,175)'],
        [IconColor.FAILURE_300, 'rgb(215,150,150)'],
        [IconColor.FAILURE_400, 'rgb(210,125,125)'],
        [IconColor.FAILURE_500, 'rgb(205,100,100)'],
        [IconColor.FAILURE_600, 'rgb(200,75,75)'],
        [IconColor.FAILURE_700, 'rgb(195,50,50)'],
        [IconColor.FAILURE_800, 'rgb(190,25,25)'],
        [IconColor.FAILURE_900, 'rgb(185,0,0)'],
      ]

      failureColors.forEach(([color, expectedColor]) => {
        it(`renders with ${color} color`, () => {
          const testId = faker.string.uuid()

          render(
            <Icon
              testId={testId}
              name={IconName.AUTO_RENEW}
              size={IconSize.MD}
              color={color as IconColor}
            />,
          )

          expectRenderedIconColor(testId, expectedColor)
        })
      })
    })
  })
})
