import { isValidElement, useId } from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'
import type {
  GradientCircularComponent,
  GradientStopProperties,
} from '../gradient.types'
import { GradientStop } from './stop'

export const GradientCircular: GradientCircularComponent = ({
  testId,
  cx,
  cy,
  children,
}) => {
  const id = useId()
  const cxValue = cx?.toValue() ?? 0.5
  const cyValue = cy?.toValue() ?? 0.5

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
          <RadialGradient
            id={id}
            cx={cxValue}
            cy={cyValue}
            r='50%'
            fx={cxValue}
            fy={cyValue}
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
          </RadialGradient>
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
