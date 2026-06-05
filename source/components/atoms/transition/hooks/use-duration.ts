import { useThemeContext } from '@/contexts/theme'
import { TransitionDuration } from '../constants'

const TRANSITION_DURATION_THEME_KEY = {
  [TransitionDuration.SM]: 'durationBaseSM' as const,
  [TransitionDuration.MD]: 'durationBaseMD' as const,
  [TransitionDuration.LG]: 'durationBaseLG' as const,
}
export const useTransitionDurationValue = (
  duration: TransitionDuration,
): number => {
  const context = useThemeContext()
  return context[TRANSITION_DURATION_THEME_KEY[duration]]
}
