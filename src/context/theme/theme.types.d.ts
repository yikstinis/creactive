import type { FunctionComponent, PropsWithChildren } from 'react'
import type { ViewStyle } from 'react-native'

import type { Spacing } from '@/constants/spacing'
import type { PixelDimension } from '@/helpers/dimension/dimension.types'

export interface Theme {
  spacing: Record<Spacing, PixelDimension>
}

export type ThemeStyleName = `padding${Spacing}` | `margin${Spacing}`

export type ThemeStyleSheet = Record<ThemeStyleName, ViewStyle>

export interface ThemeContextValue {
  theme: Theme
  styleSheet: ThemeStyleSheet
}

export interface ThemeContextProviderProps extends PropsWithChildren {
  theme: Theme
}

export type ThemeContextProviderComponent = FunctionComponent<ThemeContextProviderProps>
