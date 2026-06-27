import { useThemeContext } from '@/contexts'
import { IconSize } from '../constants'

const ICON_SIZE_KEY = {
  [IconSize.SM]: 'iconSizeBaseSM',
  [IconSize.MD]: 'iconSizeBaseMD',
  [IconSize.LG]: 'iconSizeBaseLG',
} as const
export const useIconSize = (size: IconSize) =>
  useThemeContext()[ICON_SIZE_KEY[size]]
