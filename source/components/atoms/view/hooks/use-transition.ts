import { useThemeContext } from '@/contexts'
import { ViewTransitionDuration } from '../constants'

const VIEW_TRANSITION_DURATION_THEME_KEY = {
  [ViewTransitionDuration.SM]: 'durationBaseSM' as const,
  [ViewTransitionDuration.MD]: 'durationBaseMD' as const,
  [ViewTransitionDuration.LG]: 'durationBaseLG' as const,
}

export const useViewTransitionDurationValue = (
  duration: ViewTransitionDuration,
): number => {
  const context = useThemeContext()
  if (duration === ViewTransitionDuration.NONE) return 0
  return context[VIEW_TRANSITION_DURATION_THEME_KEY[duration]]
}

export const useViewTransitionValue = (
  duration?: ViewTransitionDuration,
): string | undefined => {
  const context = useThemeContext()
  if (duration === undefined) return undefined
  const ms =
    duration === ViewTransitionDuration.NONE
      ? 0
      : context[VIEW_TRANSITION_DURATION_THEME_KEY[duration]]
  return `opacity ${ms}ms ease,transform ${ms}ms ease`
}
