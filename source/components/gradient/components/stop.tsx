import { Stop } from 'react-native-svg'
import type { GradientStopComponent } from '../gradient.types'

export const GradientStop: GradientStopComponent = ({ offset, color }) => {
  return (
    <Stop
      offset={offset.toValue()}
      stopColor={color}
    />
  )
}
