import { useThemeContext } from '@/contexts'
import { IconSize } from '../constants'

const ICON_SIZE_THEME_KEY = {
  [IconSize.SM]: 'iconSizeBaseSM' as const,
  [IconSize.MD]: 'iconSizeBaseMD' as const,
  [IconSize.LG]: 'iconSizeBaseLG' as const,
}
export const useIconSizeValue = (size: IconSize) =>
  useThemeContext()[ICON_SIZE_THEME_KEY[size]]
