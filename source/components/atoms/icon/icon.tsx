import { useMemo } from 'react'
import { AutoRenewIcon } from './components'
import { IconColor, IconName, IconSize } from './constants'
import { useIconColorValue, useIconSizeValue } from './hooks'
import type { IconComponent } from './icon.types'

const ICON_COMPONENT = {
  [IconName.AUTO_RENEW]: AutoRenewIcon,
}
export const Icon: IconComponent = ({
  testId,
  name,
  size,
  color = IconColor.BASE_800,
}) => {
  const IconComponent = useMemo(() => ICON_COMPONENT[name], [name])

  return (
    <IconComponent
      testId={testId}
      size={useIconSizeValue(size)}
      color={useIconColorValue(color)}
    />
  )
}
Icon.Name = IconName
Icon.Size = IconSize
Icon.Color = IconColor
