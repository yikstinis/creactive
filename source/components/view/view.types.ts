import type {
  Opacity,
  Position,
  PositionValue,
  Size,
  SizeValue,
} from '@/helpers'
import type { Color } from '@/types'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBackgroundColor,
  ViewBorderColor,
  ViewBorderRadius,
  ViewBorderWidth,
  ViewBoxShadow,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
  ViewSpacing,
  ViewTag,
} from './constants'

export interface ViewProps extends PropsWithChildren {
  /**
   * Allows to select view in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @see View.Tag
   * @default View.Tag.DIV
   */
  tag?: ViewTag
  /**
   * View position property.
   * Allows to controle how view is positioned in layout.
   * @see View.Position
   * @default View.Position.RELATIVE
   */
  position?: ViewPosition
  /**
   * Top position.
   * @see Position
   * @default undefined
   */
  top?: Position
  /**
   * Left position.
   * @see Position
   * @default undefined
   */
  left?: Position
  /**
   * Right position.
   * @see Position
   * @default undefined
   */
  right?: Position
  /**
   * Bottom position.
   * @see Position
   * @default undefined
   */
  bottom?: Position
  /**
   * View opacity.
   * Controls the transparency of the view.
   * @see Opacity
   * @default undefined
   */
  opacity?: Opacity
  /**
   * View overflow behavior.
   * Controls how children are measured and displayed.
   * @see View.Overflow
   * @default View.Overflow.VISIBLE
   */
  overflow?: ViewOverflow
  /**
   * Flex direction of the component.
   * Defines the main axis along which children are laid out.
   * @see View.FlexDirection
   * @default View.FlexDirection.COLUMN
   */
  flexDirection?: ViewFlexDirection
  /**
   * Controls spacing between and around items.
   * Defines how children are distributed along the main axis.
   * @see View.JustifyContent
   * @default View.JustifyContent.FLEX_START
   */
  justifyContent?: ViewJustifyContent
  /**
   * Defines how children are aligned along the cross axis.
   * Affects the alignment of items perpendicular to the main axis.
   * @see View.AlignItems
   * @default View.AlignItems.STRETCH
   */
  alignItems?: ViewAlignItems
  /**
   * Overrides the cross-axis alignment for a single child.
   * Takes precedence over the container's align items property value.
   * @see View.AlignItems
   * @default undefined
   */
  alignSelf?: ViewAlignSelf
  /**
   * Only applies when there is wrapping in the container.
   * Defines how multiple lines are spaced along the cross axis.
   * @see View.AlignContent
   * @default View.AlignContent.FLEX_START
   */
  alignContent?: ViewAlignContent
  /**
   * Top outer spacing.
   * @see View.Spacing
   * @default undefined
   */
  marginTop?: ViewSpacing
  /**
   * Top inner spacing.
   * @see View.Spacing
   * @default undefined
   */
  paddingTop?: ViewSpacing
  /**
   * Left outer spacing.
   * @see View.Spacing
   * @default undefined
   */
  marginLeft?: ViewSpacing
  /**
   * Left inner spacing.
   * @see View.Spacing
   * @default undefined
   */
  paddingLeft?: ViewSpacing
  /**
   * Right outer spacing.
   * @see View.Spacing
   * @default undefined
   */
  marginRight?: ViewSpacing
  /**
   * Right inner spacing.
   * @see View.Spacing
   * @default undefined
   */
  paddingRight?: ViewSpacing
  /**
   * Bottom outer spacing.
   * @see View.Spacing
   * @default undefined
   */
  marginBottom?: ViewSpacing
  /**
   * Bottom inner spacing.
   * @see View.Spacing
   * @default undefined
   */
  paddingBottom?: ViewSpacing
  /**
   * Minimum width of the component.
   * @see Size
   * @default undefined
   */
  minWidth?: Size
  /**
   * Width of the component.
   * @see Size
   * @default undefined
   */
  width?: Size
  /**
   * Maximum width of the component.
   * @see Size
   * @default undefined
   */
  maxWidth?: Size
  /**
   * Minimum height of the component.
   * @see Size
   * @default undefined
   */
  minHeight?: Size
  /**
   * Height of the component.
   * @see Size
   * @default undefined
   */
  height?: Size
  /**
   * Maximum height of the component.
   * @see Size
   * @default undefined
   */
  maxHeight?: Size
  /**
   * View component box shadow.
   * React Native's "New Architecture" is required on native.
   * @see https://reactnative.dev/architecture/landing-page
   * @see https://docs.expo.dev/guides/new-architecture/
   * @see View.BoxShadow
   * @default undefined
   */
  boxShadow?: ViewBoxShadow
  /**
   * View border color.
   * @see View.BorderColor
   * @default undefined
   */
  borderColor?: ViewBorderColor
  /**
   * View border width.
   * @see View.BorderWidth
   * @default undefined
   */
  borderWidth?: ViewBorderWidth
  /**
   * View border top width.
   * @see View.BorderWidth
   * @default undefined
   */
  borderWidthTop?: ViewBorderWidth
  /**
   * View border left width.
   * @see View.BorderWidth
   * @default undefined
   */
  borderWidthLeft?: ViewBorderWidth
  /**
   * View border right width.
   * @see View.BorderWidth
   * @default undefined
   */
  borderWidthRight?: ViewBorderWidth
  /**
   * View border bottom width.
   * @see View.BorderWidth
   * @default undefined
   */
  borderWidthBottom?: ViewBorderWidth
  /**
   * View border radius.
   * @see View.BorderRadius
   * @default undefined
   */
  borderRadius?: ViewBorderRadius
  /**
   * View background color.
   * @see View.BackgroundColor
   * @default View.BackgroundColor.TRANSPARENT
   */
  backgroundColor?: ViewBackgroundColor | Color
}
export type ViewComponent = FunctionComponent<ViewProps> & {
  Tag: Record<keyof typeof ViewTag, ViewTag>
  Position: Record<keyof typeof ViewPosition, ViewPosition>
  Overflow: Record<keyof typeof ViewOverflow, ViewOverflow>
  FlexDirection: Record<keyof typeof ViewFlexDirection, ViewFlexDirection>
  JustifyContent: Record<keyof typeof ViewJustifyContent, ViewJustifyContent>
  AlignItems: Record<keyof typeof ViewAlignItems, ViewAlignItems>
  AlignSelf: Record<keyof typeof ViewAlignSelf, ViewAlignSelf>
  AlignContent: Record<keyof typeof ViewAlignContent, ViewAlignContent>
  Spacing: Record<keyof typeof ViewSpacing, ViewSpacing>
  BoxShadow: Record<keyof typeof ViewBoxShadow, ViewBoxShadow>
  BorderColor: Record<keyof typeof ViewBorderColor, ViewBorderColor>
  BorderWidth: Record<keyof typeof ViewBorderWidth, ViewBorderWidth>
  BorderRadius: Record<keyof typeof ViewBorderRadius, ViewBorderRadius>
  BackgroundColor: Record<keyof typeof ViewBackgroundColor, ViewBackgroundColor>
}
// For web version styled component.
export type StyledViewProps = Pick<
  ViewProps,
  | 'position'
  | 'overflow'
  | 'flexDirection'
  | 'justifyContent'
  | 'alignItems'
  | 'alignSelf'
  | 'alignContent'
> & {
  // Position.
  top?: PositionValue
  left?: PositionValue
  right?: PositionValue
  bottom?: PositionValue
  // Opacity.
  opacity?: number
  // Spacing.
  marginTop?: string
  paddingTop?: string
  marginLeft?: string
  paddingLeft?: string
  marginRight?: string
  paddingRight?: string
  marginBottom?: string
  paddingBottom?: string
  // Size.
  minWidth?: SizeValue
  width?: SizeValue
  maxWidth?: SizeValue
  minHeight?: SizeValue
  height?: SizeValue
  maxHeight?: SizeValue
  // Shadow.
  boxShadow?: string
  // Border.
  borderColor?: Color
  borderWidth: string
  borderWidthTop?: string
  borderWidthLeft?: string
  borderWidthRight?: string
  borderWidthBottom?: string
  borderRadius?: `${number}px` | '50%'
  // Color.
  backgroundColor?: Color
}
