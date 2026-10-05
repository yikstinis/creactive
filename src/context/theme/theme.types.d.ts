import type { FunctionComponent, PropsWithChildren } from 'react'
import type { ViewStyle } from 'react-native'

import type { Spacing } from '@/constants/spacing'
import type { PixelDimension } from '@/helpers/dimension/dimension.types'

export interface Theme {
  spacing: Record<Spacing, PixelDimension>
}

export interface ThemeOverride {
  spacing?: Partial<Record<Spacing, PixelDimension>>
}

export type ThemeStyleProperty =
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'

export type ThemeStyleSheet = Record<ThemeStyleProperty, Record<Spacing, ViewStyle>>

export interface ThemeContextValue {
  theme: Theme
  styleSheet: ThemeStyleSheet
}

export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: ThemeOverride
}

export type ThemeContextProviderComponent = FunctionComponent<ThemeContextProviderProps>
