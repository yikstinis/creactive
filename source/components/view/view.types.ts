import type { FunctionComponent, PropsWithChildren } from 'react'
import type {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewTag,
} from './constants'

export interface ViewProps extends PropsWithChildren {
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @default View.Tag.DIV
   */
  tag?: ViewTag
  /**
   * Flex direction of the component.
   * Defines the main axis along which children are laid out.
   * @default View.FlexDirection.COLUMN
   */
  flexDirection?: ViewFlexDirection
  /**
   * Controls spacing between and around items.
   * Defines how children are distributed along the main axis.
   * @default View.JustifyContent.FLEX_START
   */
  justifyContent?: ViewJustifyContent
  /**
   * Defines how children are aligned along the cross axis.
   * Affects the alignment of items perpendicular to the main axis.
   * @default View.AlignItems.STRETCH
   */
  alignItems?: ViewAlignItems
  /**
   * Overrides the cross-axis alignment for a single child.
   * Takes precedence over the container's align items property value.
   * @default undefined
   */
  alignSelf?: ViewAlignSelf
  /**
   * Only applies when there is wrapping in the container.
   * Defines how multiple lines are spaced along the cross axis.
   * @default View.AlignContent.FLEX_START
   */
  alignContent?: ViewAlignContent
}
export type StyledViewProps = Pick<
  ViewProps,
  | 'flexDirection'
  | 'justifyContent'
  | 'alignItems'
  | 'alignSelf'
  | 'alignContent'
>
export type ViewComponent = FunctionComponent<ViewProps> & {
  Tag: Record<keyof typeof ViewTag, ViewTag>
  FlexDirection: Record<keyof typeof ViewFlexDirection, ViewFlexDirection>
  JustifyContent: Record<keyof typeof ViewJustifyContent, ViewJustifyContent>
  AlignItems: Record<keyof typeof ViewAlignItems, ViewAlignItems>
  AlignSelf: Record<keyof typeof ViewAlignSelf, ViewAlignSelf>
  AlignContent: Record<keyof typeof ViewAlignContent, ViewAlignContent>
}
