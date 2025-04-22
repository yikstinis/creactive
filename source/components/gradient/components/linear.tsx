import { StyleSheet, View } from 'react-native'
import Svg, { Defs, LinearGradient, Rect } from 'react-native-svg'
import { GradientDirection } from '../constants'
import type { GradientLinearComponent } from '../gradient.types'

// Mapping gradient direction to its second coordinates.
const DIRECTION_X2 = {
  [GradientDirection.RIGHT]: 1,
  [GradientDirection.BOTTOM]: 0,
}
const DIRECTION_Y2 = {
  [GradientDirection.RIGHT]: 0,
  [GradientDirection.BOTTOM]: 1,
}

export const GradientLinear: GradientLinearComponent = ({
  direction = GradientDirection.BOTTOM,
  children,
}) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Svg
        width='100%'
        height='100%'
      >
        <Defs>
          <LinearGradient
            // Lol, be careful.. Identifier 'gradient' does not work!
            id='gradient-linear'
            x1={0}
            y1={0}
            x2={DIRECTION_X2[direction]}
            y2={DIRECTION_Y2[direction]}
          >
            {children}
          </LinearGradient>
        </Defs>

        <Rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='url(#gradient-linear)'
        />
      </Svg>
    </View>
  )
}
GradientLinear.Direction = GradientDirection
