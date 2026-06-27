import { useMemo } from 'react'
import Svg from 'react-native-svg'
import { IconColor, IconSize } from './constants'
import { useIconColor, useIconSize } from './hooks'
import { IconContext } from './icon.context'
import type { IconComponent, IconProperties } from './icon.types'

export const Icon: IconComponent = ({
  testId,
  box = IconSize.MD,
  size = IconSize.MD,
  color = IconColor.BASE_800,
  children,
}: IconProperties) => {
  const boxSize = useIconSize(box)
  const iconSize = useIconSize(size)
  const iconColor = useIconColor(color)

  // SVG coordinates and attributes require raw numbers — toValue() returns "16px" on web
  const boxRaw = parseFloat(String(boxSize.toValue()))
  const iconRaw = parseFloat(String(iconSize.toValue()))

  const viewBox = useMemo(
    () => [0, 0, boxRaw, boxRaw].join(' '),
    [boxRaw],
  )

  const value = useMemo(
    () => ({
      color: iconColor,
    }),
    [iconColor],
  )

  return (
    <IconContext.Provider value={value}>
      <Svg
        testID={testId}
        viewBox={viewBox}
        width={iconRaw}
        height={iconRaw}
      >
        {children}
      </Svg>
    </IconContext.Provider>
  )
}
Icon.Size = IconSize
Icon.Color = IconColor
