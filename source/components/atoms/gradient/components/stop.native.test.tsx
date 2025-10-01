import { Fraction } from '@/helpers'
import { Color } from '@/types'
import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react-native'
import { Stop } from 'react-native-svg'
import { GradientStop } from './stop'

describe('@/components/atoms/gradient', () => {
  describe('gradient stop component', () => {
    it('renders stop element with provided props', () => {
      const offset = faker.number.float({
        min: 0,
        max: 1,
      })
      const color = faker.color.rgb() as Color
      // Most props are not supported by react-native-svg Stop element..
      const { UNSAFE_getByType } = render(
        <GradientStop
          offset={new Fraction(offset)}
          color={color}
        />,
      )
      expect(UNSAFE_getByType(Stop).props.offset).toBe(offset)
      expect(UNSAFE_getByType(Stop).props.stopColor).toBe(color)
    })
  })
})
