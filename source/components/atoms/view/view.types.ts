import type {
  Dimension,
  DimensionValue,
  Fraction,
  FractionValue,
  PercentDimension,
  PixelDimension,
  PixelDimensionValue,
} from '@/helpers'
import type { ColorValue, RGBColor, TransparentColor } from '@/helpers'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type {
  BorderRadius,
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewBackgroundColor,
  ViewBorderColor,
  ViewBorderWidth,
  ViewBoxShadow,
  ViewFlexDirection,
  ViewFlexWrap,
  ViewJustifyContent,
  ViewOverflow,
  ViewPosition,
  ViewSpacing,
  ViewTag,
  ViewTransitionDuration,
} from './constants'

/**
 * Callback payload for the {@link ViewProperties.onLayout} event.
 * Contains width and height of the view after layout.
 */
export interface ViewLayoutEvent {
  width: number
  height: number
}

/**
 * Props for the {@link ViewComponent} component.
 * Controls layout, spacing, sizing, borders, colors, and transforms.
 */
export interface ViewProperties extends PropsWithChildren {
  /**
   * Allows to select view in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @see {@link ViewComponent.Tag}
   * @default {@link ViewTag.DIV}
   */
  tag?: ViewTag
  /**
   * View position property.
   * Allows to control how view is positioned in layout.
   * @see {@link ViewComponent.Position}
   * @default {@link ViewPosition.RELATIVE}
   */
  position?: ViewPosition
  /**
   * Top position.
   * @see {@link Dimension}
   * @default undefined
   */
  top?: Dimension
  /**
   * Left position.
   * @see {@link Dimension}
   * @default undefined
   */
  left?: Dimension
  /**
   * Right position.
   * @see {@link Dimension}
   * @default undefined
   */
  right?: Dimension
  /**
   * Bottom position.
   * @see {@link Dimension}
   * @default undefined
   */
  bottom?: Dimension
  /**
   * View opacity.
   * Controls the transparency of the view.
   * @see {@link Fraction}
   * @default undefined
   */
  opacity?: Fraction
  /**
   * Transition duration for opacity changes.
   * When set, opacity changes animate on native.
   * On web, a CSS transition is applied to opacity.
   * @see {@link ViewComponent.TransitionDuration}
   * @default undefined
   */
  opacityTransitionDuration?: ViewTransitionDuration
  /**
   * View scale transform.
   * @see {@link Fraction}
   * @default undefined
   */
  scale?: Fraction
  /**
   * Horizontal translation of the view.
   * @see {@link PixelDimension}
   * @default undefined
   */
  translateX?: PixelDimension
  /**
   * Vertical translation of the view.
   * @see {@link PixelDimension}
   * @default undefined
   */
  translateY?: PixelDimension
  /**
   * Transition duration for transform changes.
   * When set, scale and translate changes animate on native.
   * On web, a CSS transition is applied to transform.
   * @see {@link ViewComponent.TransitionDuration}
   * @default undefined
   */
  transformTransitionDuration?: ViewTransitionDuration
  /**
   * View overflow behavior.
   * Controls how children are measured and displayed.
   * @see {@link ViewComponent.Overflow}
   * @default {@link ViewOverflow.VISIBLE}
   */
  overflow?: ViewOverflow
  /**
   * View flex grow property.
   * Controls how much space a component should take up in the flex container.
   * @see {@link Fraction}
   * @default undefined
   */
  flexGrow?: Fraction
  /**
   * View flex shrink property.
   * Controls how much space a component should give up in the flex container.
   * @see {@link Fraction}
   * @default undefined
   */
  flexShrink?: Fraction
  /**
   * View flex basis property.
   * Controls the initial size of a component before space distribution.
   * @see {@link Dimension}
   * @default undefined
   */
  flexBasis?: Dimension
  /**
   * View flex wrap property.
   * Controls whether children should wrap onto multiple lines.
   * @see {@link ViewComponent.FlexWrap}
   * @default {@link ViewFlexWrap.NONE}
   */
  flexWrap?: ViewFlexWrap
  /**
   * Flex direction of the component.
   * Defines the main axis along which children are laid out.
   * @see {@link ViewComponent.FlexDirection}
   * @default {@link ViewFlexDirection.COLUMN}
   */
  flexDirection?: ViewFlexDirection
  /**
   * Controls spacing between and around items.
   * Defines how children are distributed along the main axis.
   * @see {@link ViewComponent.JustifyContent}
   * @default {@link ViewJustifyContent.FLEX_START}
   */
  justifyContent?: ViewJustifyContent
  /**
   * Defines how children are aligned along the cross axis.
   * Affects the alignment of items perpendicular to the main axis.
   * @see {@link ViewComponent.AlignItems}
   * @default {@link ViewAlignItems.STRETCH}
   */
  alignItems?: ViewAlignItems
  /**
   * Overrides the cross-axis alignment for a single child.
   * Takes precedence over the container's align items property value.
   * @see {@link ViewComponent.AlignSelf}
   * @default undefined
   */
  alignSelf?: ViewAlignSelf
  /**
   * Only applies when there is wrapping in the container.
   * Defines how multiple lines are spaced along the cross axis.
   * @see {@link ViewComponent.AlignContent}
   * @default undefined
   */
  alignContent?: ViewAlignContent
  /**
   * Controls the spacing between children in a flex container.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  gap?: ViewSpacing
  /**
   * Top outer spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  marginTop?: ViewSpacing
  /**
   * Top inner spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  paddingTop?: ViewSpacing
  /**
   * Left outer spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  marginLeft?: ViewSpacing
  /**
   * Left inner spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  paddingLeft?: ViewSpacing
  /**
   * Right outer spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  marginRight?: ViewSpacing
  /**
   * Right inner spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  paddingRight?: ViewSpacing
  /**
   * Bottom outer spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  marginBottom?: ViewSpacing
  /**
   * Bottom inner spacing.
   * @see {@link ViewComponent.Spacing}
   * @default undefined
   */
  paddingBottom?: ViewSpacing
  /**
   * Minimum width of the component.
   * @see {@link Dimension}
   * @default undefined
   */
  minWidth?: Dimension
  /**
   * Width of the component.
   * @see {@link Dimension}
   * @default undefined
   */
  width?: Dimension
  /**
   * Maximum width of the component.
   * @see {@link Dimension}
   * @default undefined
   */
  maxWidth?: Dimension
  /**
   * Minimum height of the component.
   * @see {@link Dimension}
   * @default undefined
   */
  minHeight?: Dimension
  /**
   * Height of the component.
   * @see {@link Dimension}
   * @default undefined
   */
  height?: Dimension
  /**
   * Maximum height of the component.
   * @see {@link Dimension}
   * @default undefined
   */
  maxHeight?: Dimension
  /**
   * View component box shadow.
   * React Native's "New Architecture" is required on native.
   * @see https://reactnative.dev/architecture/landing-page
   * @see https://docs.expo.dev/guides/new-architecture/
   * @see {@link ViewComponent.BoxShadow}
   * @default undefined
   */
  boxShadow?: ViewBoxShadow
  /**
   * View border color.
   * @see {@link ViewComponent.BorderColor}
   * @default undefined
   */
  borderColor?: ViewBorderColor
  /**
   * View border width.
   * @see {@link ViewComponent.BorderWidth}
   * @default undefined
   */
  borderWidth?: ViewBorderWidth
  /**
   * View border top width.
   * @see {@link ViewComponent.BorderWidth}
   * @default undefined
   */
  borderWidthTop?: ViewBorderWidth
  /**
   * View border left width.
   * @see {@link ViewComponent.BorderWidth}
   * @default undefined
   */
  borderWidthLeft?: ViewBorderWidth
  /**
   * View border right width.
   * @see {@link ViewComponent.BorderWidth}
   * @default undefined
   */
  borderWidthRight?: ViewBorderWidth
  /**
   * View border bottom width.
   * @see {@link ViewComponent.BorderWidth}
   * @default undefined
   */
  borderWidthBottom?: ViewBorderWidth
  /**
   * View border radius as a theme token or an arbitrary percent value.
   * @see {@link ViewComponent.BorderRadius}
   * @see {@link PercentDimension}
   * @default undefined
   */
  borderRadius?: BorderRadius | PercentDimension
  /**
   * View border top left radius as a theme token or an arbitrary percent value.
   * @see {@link ViewComponent.BorderRadius}
   * @see {@link PercentDimension}
   * @default undefined
   */
  borderRadiusTopLeft?: BorderRadius | PercentDimension
  /**
   * View border top right radius as a theme token or an arbitrary percent value.
   * @see {@link ViewComponent.BorderRadius}
   * @see {@link PercentDimension}
   * @default undefined
   */
  borderRadiusTopRight?: BorderRadius | PercentDimension
  /**
   * View border bottom left radius as a theme token or an arbitrary percent value.
   * @see {@link ViewComponent.BorderRadius}
   * @see {@link PercentDimension}
   * @default undefined
   */
  borderRadiusBottomLeft?: BorderRadius | PercentDimension
  /**
   * View border bottom right radius as a theme token or an arbitrary percent value.
   * @see {@link ViewComponent.BorderRadius}
   * @see {@link PercentDimension}
   * @default undefined
   */
  borderRadiusBottomRight?: BorderRadius | PercentDimension
  /**
   * Themed or custom background color.
   * @see {@link ViewComponent.BackgroundColor}
   * @default undefined
   */
  backgroundColor?: ViewBackgroundColor | RGBColor | TransparentColor
  /**
   * Callback function that is called when the layout of the view changes.
   * @param event Event containing the width and height of the view.
   */
  onLayout?(event: ViewLayoutEvent): void
}

/**
 * View component type with static enum maps attached for all layout and style options.
 * Renders a flex container with configurable positioning, sizing, spacing, borders, and colors.
 */
export type ViewComponent = FunctionComponent<ViewProperties> & {
  /**
   * Available HTML tag values for the {@link ViewProperties.tag} prop.
   * Controls the semantic HTML element rendered on web.
   */
  Tag: typeof ViewTag
  /**
   * Available position values for the {@link ViewProperties.position} prop.
   * Controls how the view is positioned in the layout flow.
   */
  Position: typeof ViewPosition
  /**
   * Available overflow values for the {@link ViewProperties.overflow} prop.
   * Controls how children are measured and displayed outside the view bounds.
   */
  Overflow: typeof ViewOverflow
  /**
   * Available flex wrap values for the {@link ViewProperties.flexWrap} prop.
   * Controls whether children wrap onto multiple lines.
   */
  FlexWrap: typeof ViewFlexWrap
  /**
   * Available flex direction values for the {@link ViewProperties.flexDirection} prop.
   * Defines the main axis along which children are laid out.
   */
  FlexDirection: typeof ViewFlexDirection
  /**
   * Available justify content values for the {@link ViewProperties.justifyContent} prop.
   * Controls spacing between and around children along the main axis.
   */
  JustifyContent: typeof ViewJustifyContent
  /**
   * Available align items values for the {@link ViewProperties.alignItems} prop.
   * Controls how children are aligned along the cross axis.
   */
  AlignItems: typeof ViewAlignItems
  /**
   * Available align self values for the {@link ViewProperties.alignSelf} prop.
   * Overrides the cross-axis alignment for a single child.
   */
  AlignSelf: typeof ViewAlignSelf
  /**
   * Available align content values for the {@link ViewProperties.alignContent} prop.
   * Controls spacing between lines when wrapping is active.
   */
  AlignContent: typeof ViewAlignContent
  /**
   * Available spacing values for gap, margin, and padding props.
   * Maps to theme spacing tokens.
   */
  Spacing: typeof ViewSpacing
  /**
   * Available box shadow values for the {@link ViewProperties.boxShadow} prop.
   * Maps to themed shadow tokens.
   */
  BoxShadow: typeof ViewBoxShadow
  /**
   * Available border color values for the {@link ViewProperties.borderColor} prop.
   * Maps to theme border color tokens.
   */
  BorderColor: typeof ViewBorderColor
  /**
   * Available border width values for border width props.
   * Maps to theme border width tokens.
   */
  BorderWidth: typeof ViewBorderWidth
  /**
   * Available border radius values for border radius props.
   * Maps to theme border radius tokens.
   */
  BorderRadius: typeof BorderRadius
  /**
   * Available background color values for the {@link ViewProperties.backgroundColor} prop.
   * Maps to theme background color tokens.
   */
  BackgroundColor: typeof ViewBackgroundColor
  /**
   * Available transition duration values for opacity and transform transition props.
   * Controls animation speed for opacity and transform changes.
   */
  TransitionDuration: typeof ViewTransitionDuration
  /**
   * Shorthand fill subcomponents for common layout patterns.
   */
  Fill: {
    /**
     * Fills its absolute-positioned parent by setting position absolute and all edges to zero.
     */
    Absolute: FunctionComponent<
      Omit<ViewProperties, 'position' | 'top' | 'left' | 'right' | 'bottom'>
    >
    /**
     * Fills remaining flex space by setting flexGrow to 1.
     */
    Flex: FunctionComponent<Omit<ViewProperties, 'flexGrow'>>
  }
}

/**
 * Styled view properties type.
 * Used to render view component on web.
 */
export type ViewStyledProperties = {
  css: {
    /**
     * CSS position value applied to the rendered element.
     */
    position: 'relative' | 'absolute'
    /**
     * CSS top value, omitted when not set.
     */
    top?: DimensionValue
    /**
     * CSS left value, omitted when not set.
     */
    left?: DimensionValue
    /**
     * CSS right value, omitted when not set.
     */
    right?: DimensionValue
    /**
     * CSS bottom value, omitted when not set.
     */
    bottom?: DimensionValue
    /**
     * CSS opacity value between 0 and 1, omitted when not set.
     */
    opacity?: FractionValue
    /**
     * CSS transform string combining scale and translate values, omitted when not set.
     */
    transform?: string
    /**
     * CSS transition string for animating opacity and transform, omitted when not set.
     */
    transition?: string
    /**
     * CSS overflow value applied to the rendered element.
     */
    overflow: 'visible' | 'hidden'
    /**
     * CSS flex-grow value, omitted when not set.
     */
    flexGrow?: number
    /**
     * CSS flex-shrink value, omitted when not set.
     */
    flexShrink?: number
    /**
     * CSS flex-basis value, omitted when not set.
     */
    flexBasis?: DimensionValue
    /**
     * CSS flex-wrap value applied to the rendered element.
     */
    flexWrap: 'nowrap' | 'wrap'
    /**
     * CSS flex-direction value applied to the rendered element.
     */
    flexDirection: 'column' | 'row' | 'column-reverse' | 'row-reverse'
    /**
     * CSS justify-content value applied to the rendered element.
     */
    justifyContent:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
    /**
     * CSS align-items value applied to the rendered element.
     */
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    /**
     * CSS align-self value, omitted when not set.
     */
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    /**
     * CSS align-content value, omitted when not set.
     */
    alignContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'stretch'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
    /**
     * CSS gap value in pixels, omitted when not set.
     */
    gap?: number
    /**
     * CSS margin-top value in pixels, omitted when not set.
     */
    marginTop?: number
    /**
     * CSS padding-top value in pixels, omitted when not set.
     */
    paddingTop?: number
    /**
     * CSS margin-left value in pixels, omitted when not set.
     */
    marginLeft?: number
    /**
     * CSS padding-left value in pixels, omitted when not set.
     */
    paddingLeft?: number
    /**
     * CSS margin-right value in pixels, omitted when not set.
     */
    marginRight?: number
    /**
     * CSS padding-right value in pixels, omitted when not set.
     */
    paddingRight?: number
    /**
     * CSS margin-bottom value in pixels, omitted when not set.
     */
    marginBottom?: number
    /**
     * CSS padding-bottom value in pixels, omitted when not set.
     */
    paddingBottom?: number
    /**
     * CSS min-width value, omitted when not set.
     */
    minWidth?: DimensionValue
    /**
     * CSS width value, omitted when not set.
     */
    width?: DimensionValue
    /**
     * CSS max-width value, omitted when not set.
     */
    maxWidth?: DimensionValue
    /**
     * CSS min-height value, omitted when not set.
     */
    minHeight?: DimensionValue
    /**
     * CSS height value, omitted when not set.
     */
    height?: DimensionValue
    /**
     * CSS max-height value, omitted when not set.
     */
    maxHeight?: DimensionValue
    /**
     * CSS box-shadow string, omitted when not set.
     */
    boxShadow?: string
    /**
     * CSS border-color value, omitted when not set.
     */
    borderColor?: ColorValue
    /**
     * CSS border-width value in pixels, omitted when not set.
     */
    borderWidth?: PixelDimensionValue
    /**
     * CSS border-top-width value in pixels, omitted when not set.
     */
    borderWidthTop?: PixelDimensionValue
    /**
     * CSS border-left-width value in pixels, omitted when not set.
     */
    borderWidthLeft?: PixelDimensionValue
    /**
     * CSS border-right-width value in pixels, omitted when not set.
     */
    borderWidthRight?: PixelDimensionValue
    /**
     * CSS border-bottom-width value in pixels, omitted when not set.
     */
    borderWidthBottom?: PixelDimensionValue
    /**
     * Resolved CSS border radius value, omitted when not set.
     * @see {@link ViewComponent.BorderRadius}
     */
    borderRadius?: DimensionValue
    /**
     * Resolved CSS top-left border radius value, omitted when not set.
     * @see {@link ViewComponent.BorderRadius}
     */
    borderRadiusTopLeft?: DimensionValue
    /**
     * Resolved CSS top-right border radius value, omitted when not set.
     * @see {@link ViewComponent.BorderRadius}
     */
    borderRadiusTopRight?: DimensionValue
    /**
     * Resolved CSS bottom-left border radius value, omitted when not set.
     * @see {@link ViewComponent.BorderRadius}
     */
    borderRadiusBottomLeft?: DimensionValue
    /**
     * Resolved CSS bottom-right border radius value, omitted when not set.
     * @see {@link ViewComponent.BorderRadius}
     */
    borderRadiusBottomRight?: DimensionValue
    /**
     * CSS background-color value, omitted when not set.
     */
    backgroundColor?: ColorValue
  }
}
