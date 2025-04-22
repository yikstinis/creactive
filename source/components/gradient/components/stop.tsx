import { Stop } from 'react-native-svg'
import type { StopComponent } from '../gradient.types'

export const GradientStop: StopComponent = ({ offset, color }) => (
  <Stop
    offset={offset.toValue()}
    stopColor={color}
  />
)
