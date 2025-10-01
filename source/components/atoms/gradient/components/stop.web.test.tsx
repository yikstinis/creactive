import { Fraction } from '@/helpers'
import { Color } from '@/types'
import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import { GradientStop } from './stop'

describe('@/components/atoms/gradient', () => {
  describe('gradient stop component', () => {
    it('renders stop element with provided props', () => {
      const offset = faker.number.float({
        min: 0,
        max: 1,
      })
      const color = faker.color.rgb() as Color
      const { container } = render(
        <GradientStop
          offset={new Fraction(offset)}
          color={color}
        />,
      )
      const stopElement = container.querySelector('stop')
      expect(stopElement).toHaveAttribute('offset', offset.toString())
      expect(stopElement).toHaveAttribute('stop-color', color)
    })
  })
})
