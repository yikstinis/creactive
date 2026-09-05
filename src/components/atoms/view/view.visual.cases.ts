import { Spacing } from '@/constants/spacing'

/**
 * testID of the root view in App.tsx, spanning the full screen. The Detox visual test measures
 * it via getAttributes() to derive the screen's point-to-pixel scale (`device.takeScreenshot()`
 * returns raw pixels, but element frames come back in points on iOS), needed to crop a case's
 * device-wide screenshot down to just its own element.
 */
export const VIEW_VISUAL_CASES_ROOT_TEST_ID = 'view-visual-cases-root'

/**
 * Every Spacing scale member, named for use in testIDs and visual-test snapshot identifiers.
 * The visual-test host screen and the Playwright/Detox visual tests all derive their cases from
 * this list, so covering a new Spacing member is a single line here.
 */
export const VIEW_PADDING_CASES = [
  { spacing: Spacing.X6S, name: 'x6s' },
  { spacing: Spacing.X5S, name: 'x5s' },
  { spacing: Spacing.X4S, name: 'x4s' },
  { spacing: Spacing.X3S, name: 'x3s' },
  { spacing: Spacing.X2S, name: 'x2s' },
  { spacing: Spacing.XS, name: 'xs' },
  { spacing: Spacing.SM, name: 'sm' },
  { spacing: Spacing.MD, name: 'md' },
  { spacing: Spacing.LG, name: 'lg' },
  { spacing: Spacing.XL, name: 'xl' },
  { spacing: Spacing.X2L, name: 'x2l' },
  { spacing: Spacing.X3L, name: 'x3l' },
  { spacing: Spacing.X4L, name: 'x4l' },
  { spacing: Spacing.X5L, name: 'x5l' },
  { spacing: Spacing.X6L, name: 'x6l' },
] as const
