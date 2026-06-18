import { useMemo } from 'react'
import Svg from 'react-native-svg'
import { IconColor, IconSize } from './constants'
import { useIconColorValue, useIconSizeValue } from './hooks'
import { IconContext } from './icon.context'
import type { IconComponent, IconProperties } from './icon.types'

export const Icon: IconComponent = ({
  testId,
  box = IconSize.MD,
  size = IconSize.MD,
  color = IconColor.BASE_800,
  children,
}: IconProperties) => {
  const boxSizeValue = useIconSizeValue(box)
  const sizeValue = useIconSizeValue(size)
  const viewBox = [0, 0, boxSizeValue, boxSizeValue].join(' ')
  const colorValue = useIconColorValue(color)
  const value = useMemo(() => ({ color: colorValue }), [colorValue])

  return (
    <IconContext.Provider value={value}>
      <Svg
        testID={testId}
        viewBox={viewBox}
        width={sizeValue}
        height={sizeValue}
      >
        {children}
      </Svg>
    </IconContext.Provider>
  )
}
Icon.Size = IconSize
Icon.Color = IconColor
