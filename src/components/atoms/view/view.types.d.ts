import type { FunctionComponent, PropsWithChildren } from 'react'

import type { Spacing } from '@/constants/spacing'

export type ViewSpacingShorthand =
  | Spacing
  | [vertical: Spacing, horizontal: Spacing]
  | [top: Spacing, horizontal: Spacing, bottom: Spacing]
  | [top: Spacing, right: Spacing, bottom: Spacing, left: Spacing]

export type ViewSpacingSides = [top?: Spacing, right?: Spacing, bottom?: Spacing, left?: Spacing]

export interface ViewPaddingShorthandProps {
  padding?: ViewSpacingShorthand
  paddingTop?: never
  paddingRight?: never
  paddingBottom?: never
  paddingLeft?: never
}

export interface ViewPaddingSideProps {
  padding?: never
  paddingTop?: Spacing
  paddingRight?: Spacing
  paddingBottom?: Spacing
  paddingLeft?: Spacing
}

export type ViewPaddingProps = ViewPaddingShorthandProps | ViewPaddingSideProps

export interface ViewMarginShorthandProps {
  margin?: ViewSpacingShorthand
  marginTop?: never
  marginRight?: never
  marginBottom?: never
  marginLeft?: never
}

export interface ViewMarginSideProps {
  margin?: never
  marginTop?: Spacing
  marginRight?: Spacing
  marginBottom?: Spacing
  marginLeft?: Spacing
}

export type ViewMarginProps = ViewMarginShorthandProps | ViewMarginSideProps

export interface ViewBaseProps extends PropsWithChildren {
  testID?: string
}

export type ViewProps = ViewBaseProps & ViewPaddingProps & ViewMarginProps

export type ViewComponent = FunctionComponent<ViewProps>
