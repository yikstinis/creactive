import { isValidElement, useId } from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import {
  GRADIENT_LINEAR_DIRECTION_COORDINATES,
  GradientLinearDirection,
} from '../constants'
import type {
  GradientLinearComponent,
  GradientStopProperties,
} from '../gradient.types'
import { GradientStop } from './stop'

export const GradientLinear: GradientLinearComponent = ({
  testId,
  direction,
  children,
}) => {
  const id = useId()

  return (
    <View
      testID={testId}
      style={StyleSheet.absoluteFill}
    >
      <Svg
        width='100%'
        height='100%'
      >
        <Defs>
          <LinearGradient
            id={id}
            x1={GRADIENT_LINEAR_DIRECTION_COORDINATES[direction].x1}
            y1={GRADIENT_LINEAR_DIRECTION_COORDINATES[direction].y1}
            x2={GRADIENT_LINEAR_DIRECTION_COORDINATES[direction].x2}
            y2={GRADIENT_LINEAR_DIRECTION_COORDINATES[direction].y2}
          >
            {children
              .map((child, index) => {
                if (isValidElement(child) && child.type === GradientStop) {
                  const props = child.props as GradientStopProperties
                  return (
                    <Stop
                      key={[index, props.offset.toValue(), props.color].join()}
                      offset={props.offset.toValue()}
                      stopColor={props.color}
                    />
                  )
                }
              })
              .filter((child) => child !== undefined)}
          </LinearGradient>
        </Defs>

        <Rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill={`url(#${id})`}
        />
      </Svg>
    </View>
  )
}
GradientLinear.Direction = GradientLinearDirection
