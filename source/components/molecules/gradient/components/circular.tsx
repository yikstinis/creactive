import { View } from '@/components/atoms/view'
import { DIMENSION_NONE, FRACTION_MAX } from '@/helpers'
import { useId } from 'react'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'
import type { GradientCircularComponent, GradientCircularProperties } from '../gradient.types'

export const GradientCircular: GradientCircularComponent = ({
  cx,
  cy,
  stops,
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
  const cxValue = cx?.toValue() ?? 0.5
  const cyValue = cy?.toValue() ?? 0.5

  return (
    <View {...viewProps}>
      <View.Fill.Absolute>
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
              {stops.map((stop, index) => (
                <Stop
                  key={[index, stop.offset.toValue(), stop.color.toValue()].join()}
                  offset={stop.offset.toValue()}
                  stopColor={stop.color.toValue()}
                />
              ))}
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

const GradientCircularFillAbsolute = ({
  children,
  ...rest
}: Omit<GradientCircularProperties, 'position' | 'top' | 'left' | 'right' | 'bottom'>) => (
  <GradientCircular
    {...rest}
    position={View.Position.ABSOLUTE}
    top={DIMENSION_NONE}
    left={DIMENSION_NONE}
    right={DIMENSION_NONE}
    bottom={DIMENSION_NONE}
  >
    {children}
  </GradientCircular>
)

const GradientCircularFillFlex = ({
  children,
  ...rest
}: Omit<GradientCircularProperties, 'flexGrow'>) => (
  <GradientCircular
    {...rest}
    flexGrow={FRACTION_MAX}
  >
    {children}
  </GradientCircular>
)

GradientCircular.Fill = {
  Absolute: GradientCircularFillAbsolute,
  Flex: GradientCircularFillFlex,
}
