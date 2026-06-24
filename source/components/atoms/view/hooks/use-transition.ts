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
  opacityDuration?: ViewTransitionDuration,
  transformDuration?: ViewTransitionDuration,
): string | undefined => {
  const context = useThemeContext()
  if (opacityDuration === undefined && transformDuration === undefined)
    return undefined
  const parts: string[] = []
  if (opacityDuration !== undefined) {
    const ms =
      opacityDuration === ViewTransitionDuration.NONE
        ? 0
        : context[VIEW_TRANSITION_DURATION_THEME_KEY[opacityDuration]]
    parts.push(`opacity ${ms}ms ease`)
  }
  if (transformDuration !== undefined) {
    const ms =
      transformDuration === ViewTransitionDuration.NONE
        ? 0
        : context[VIEW_TRANSITION_DURATION_THEME_KEY[transformDuration]]
    parts.push(`transform ${ms}ms ease`)
  }
  return parts.join(',')
}
