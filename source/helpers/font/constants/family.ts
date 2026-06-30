import { Platform } from 'react-native'
import { FontWeight } from './weight'

/**
 * Font family enum identifying the two default cross-platform font families.
 * Use with {@link Font.Family} to specify the family when constructing a {@link Font}.
 */
export enum FontFamily {
  /**
   * Default sans-serif system font family.
   * Use as the general-purpose body and UI text family.
   */
  SANS_SERIF,
  /**
   * Default typographic serif font family.
   * Use for long-form reading or editorial text contexts.
   */
  SERIF,
}

export const FONT_FAMILY_SANS_SERIF = Platform.select({
  web: [
    'ui-sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(','),
  android: 'sans-serif',
  default: 'System',
}) as string

export const FONT_FAMILY_SERIF = Platform.select({
  web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
  ios: 'Times New Roman',
  default: 'serif',
}) as string

// Android only resolves system fonts to a "normal" or "bold" face, with a cutoff at weight 700.
// Numeric weights below that are silently collapsed to "normal".
// There is no named system family for 600, so SEMIBOLD reuses the closest distinct face (sans-serif-medium).
// Without this it would be indistinguishable from REGULAR.
export const FONT_FAMILY_SANS_SERIF_ANDROID_BY_WEIGHT: Record<
  FontWeight,
  string
> = {
  [FontWeight.THIN]: 'sans-serif-thin',
  [FontWeight.EXTRALIGHT]: 'sans-serif-thin',
  [FontWeight.LIGHT]: 'sans-serif-light',
  [FontWeight.REGULAR]: 'sans-serif',
  [FontWeight.MEDIUM]: 'sans-serif-medium',
  [FontWeight.SEMIBOLD]: 'sans-serif-medium',
  [FontWeight.BOLD]: 'sans-serif',
  [FontWeight.EXTRABOLD]: 'sans-serif-black',
  [FontWeight.BLACK]: 'sans-serif-black',
}

