import { View } from '@/components/atoms/view'
import { DIMENSION_NONE, FRACTION_MAX } from '@/helpers'
import { useId } from 'react'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import {
  GRADIENT_LINEAR_DIRECTION_COORDINATES,
  GradientLinearDirection,
} from '../constants'
import type { GradientLinearComponent, GradientLinearProperties } from '../gradient.types'

export const GradientLinear: GradientLinearComponent = ({
  direction,
  config,
  children,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  ...viewProps
}) => {
  const id = useId()

  return (
    <View {...viewProps}>
      <View.Fill.Absolute>
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
              {config.map((stop, index) => (
                <Stop
                  key={[index, stop.offset.toValue(), stop.color].join()}
                  offset={stop.offset.toValue()}
                  stopColor={stop.color}
                />
              ))}
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
      </View.Fill.Absolute>

      <View.Fill.Flex
        flexWrap={flexWrap}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignContent={alignContent}
        gap={gap}
        paddingTop={paddingTop}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
      >
        {children}
      </View.Fill.Flex>
    </View>
  )
}
GradientLinear.Direction = GradientLinearDirection

const GradientLinearFillAbsolute = ({
  children,
  ...rest
}: Omit<GradientLinearProperties, 'position' | 'top' | 'left' | 'right' | 'bottom'>) => (
  <GradientLinear
    {...rest}
    position={View.Position.ABSOLUTE}
    top={DIMENSION_NONE}
    left={DIMENSION_NONE}
    right={DIMENSION_NONE}
    bottom={DIMENSION_NONE}
  >
    {children}
  </GradientLinear>
)

const GradientLinearFillFlex = ({
  children,
  ...rest
}: Omit<GradientLinearProperties, 'flexGrow'>) => (
  <GradientLinear
    {...rest}
    flexGrow={FRACTION_MAX}
  >
    {children}
  </GradientLinear>
)

GradientLinear.Fill = {
  Absolute: GradientLinearFillAbsolute,
  Flex: GradientLinearFillFlex,
}
