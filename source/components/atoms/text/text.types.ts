import type {
  ColorValue,
  FontWeight,
  Fraction,
  RGBColor,
  TransparentColor,
} from '@/helpers'
import type {
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import type {
  TextAlign,
  TextBackgroundColor,
  TextColor,
  TextDecoration,
  TextFontFamily,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextTag,
} from './constants'

/**
 * Callback provided to {@link TextReference.measure} that receives the component's layout position and size.
 * Pass it to {@link TextReference.measure} to be invoked with x, y, width, and height values.
 */
export type TextMeasureCallback = (
  /**
   * Horizontal position of the component relative to the parent.
   * Measured in pixels from the parent's left edge.
   */
  x: number,
  /**
   * Vertical position of the component relative to the parent.
   * Measured in pixels from the parent's top edge.
   */
  y: number,
  /**
   * Width of the component in pixels.
   * Represents the rendered layout width of the element.
   */
  width: number,
  /**
   * Height of the component in pixels.
   * Represents the rendered layout height of the element.
   */
  height: number,
) => void

/**
 * Text component reference object.
 * Allows to access text measurement method.
 */
export interface TextReference {
  /**
   * Measures the component's layout position and size.
   * Invokes the provided {@link TextMeasureCallback} with the result.
   */
  measure(callback: TextMeasureCallback): void
}

/**
 * Props for the {@link TextComponent} component.
 * Controls typography, layout, color, and rendered HTML tag.
 */
export interface TextProperties extends PropsWithChildren {
  /**
   * Allows to select text component in tests.
   * Use with {@link screen.getByTestId} to locate the rendered element.
   * @default undefined
   */
  testId?: string
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @see {@link TextComponent.Tag}
   * @default {@link TextTag.SPAN}
   */
  tag?: TextTag
  /**
   * Controls horizontal alignment of text content within the container.
   * Pass a {@link TextComponent.TextAlign} value to change from the default left alignment.
   * @see {@link TextComponent.TextAlign}
   * @default {@link TextAlign.LEFT}
   */
  textAlign?: TextAlign
  /**
   * Controls visual text decoration effects such as underlines.
   * Use {@link TextComponent.TextDecoration} values to add or remove decoration.
   * @see {@link TextComponent.TextDecoration}
   * @default {@link TextDecoration.NONE}
   */
  textDecoration?: TextDecoration
  /**
   * Selects the themed font family stack used to render text.
   * Use {@link TextComponent.FontFamily} values to switch between the available theme font stacks.
   * @see {@link TextComponent.FontFamily}
   * @default {@link TextFontFamily.DEFAULT}
   */
  fontFamily?: TextFontFamily
  /**
   * Controls the stroke thickness of rendered text via the theme font weight scale.
   * Use {@link TextComponent.FontWeight} values to select the desired weight.
   * @see {@link TextComponent.FontWeight}
   * @default {@link TextFontWeight.REGULAR}
   */
  fontWeight?: TextFontWeight
  /**
   * Controls the rendered text scale using the theme font size step.
   * Use {@link TextComponent.FontSize} values to select from eleven available size steps.
   * @see {@link TextComponent.FontSize}
   * @default {@link TextFontSize.MD}
   */
  fontSize?: TextFontSize
  /**
   * Controls vertical spacing between lines of text using a theme-based multiplier.
   * Use {@link TextComponent.LineHeight} values to adjust density from tight to loose.
   * @see {@link TextComponent.LineHeight}
   * @default {@link TextLineHeight.NORMAL}
   */
  lineHeight?: TextLineHeight
  /**
   * Limits the number of visible text lines before truncating with an ellipsis.
   * Pass a positive integer to enable line clamping; omit to display all lines.
   * @default undefined
   */
  maxLines?: number
  /**
   * Sets the foreground color of the rendered text.
   * Accept a {@link TextComponent.Color} enum value, a custom {@link Color} instance, or {@link COLOR_TRANSPARENT}.
   * @see {@link TextComponent.Color}
   * @default {@link TextColor.BASE_800}
   */
  color?: TextColor | RGBColor | TransparentColor
  /**
   * Sets the background fill color behind the rendered text.
   * Use {@link TextComponent.BackgroundColor} values to apply a theme background color.
   * @see {@link TextComponent.BackgroundColor}
   * @default undefined
   */
  backgroundColor?: TextBackgroundColor
  /**
   * Controls the transparency of the text element as a fractional value between 0 and 1.
   * Pass a {@link Fraction} instance to set partial transparency; omit to render fully opaque.
   * @see {@link Fraction}
   * @default undefined
   */
  opacity?: Fraction
}

/**
 * Text component type with static enum maps attached for all typographic and layout options.
 * Renders a text node with configurable font, color, alignment, and decoration.
 */
export type TextComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TextProperties> & RefAttributes<TextReference>
> & {
  /**
   * Available HTML tag values for the {@link TextProperties.tag} prop.
   * Switches rendering between heading and inline elements.
   */
  Tag: typeof TextTag
  /**
   * Available text alignment values for the {@link TextProperties.textAlign} prop.
   * Controls horizontal alignment of text content.
   */
  TextAlign: typeof TextAlign
  /**
   * Available text decoration values for the {@link TextProperties.textDecoration} prop.
   * Controls underline and other text decoration effects.
   */
  TextDecoration: typeof TextDecoration
  /**
   * Available font family values for the {@link TextProperties.fontFamily} prop.
   * Maps to theme font family tokens.
   */
  FontFamily: typeof TextFontFamily
  /**
   * Available font weight values for the {@link TextProperties.fontWeight} prop.
   * Maps to theme font weight tokens.
   */
  FontWeight: typeof TextFontWeight
  /**
   * Available font size values for the {@link TextProperties.fontSize} prop.
   * Maps to theme font size tokens.
   */
  FontSize: typeof TextFontSize
  /**
   * Available line height values for the {@link TextProperties.lineHeight} prop.
   * Maps to theme line height tokens.
   */
  LineHeight: typeof TextLineHeight
  /**
   * Available color values for the {@link TextProperties.color} prop.
   * Maps to theme foreground color tokens.
   */
  Color: typeof TextColor
  /**
   * Available background color values for the {@link TextProperties.backgroundColor} prop.
   * Maps to theme background color tokens.
   */
  BackgroundColor: typeof TextBackgroundColor
}

/**
 * Styled text properties type.
 * Used to render text component on web.
 */
export type TextStyledProperties = {
  /**
   * Resolved CSS property values passed to the styled element.
   * Consumed by {@link TextStyled} to set all visual styles on the underlying DOM node.
   */
  css: {
    /**
     * CSS text-align value applied to the rendered element.
     * Resolved from the {@link TextAlign} enum by the text align hook.
     */
    textAlign: 'left' | 'center' | 'right'
    /**
     * CSS text-decoration-line value applied to the rendered element.
     * Resolved from the {@link TextDecoration} enum by the text decoration hook.
     */
    textDecoration: 'none' | 'underline'
    /**
     * CSS font-family string resolved from the theme.
     * Set on the rendered element to select the correct font stack.
     */
    fontFamily: string
    /**
     * Numeric font weight resolved from the theme.
     * Applied to the rendered element to control text stroke thickness.
     */
    fontWeight: FontWeight
    /**
     * Font size in pixels resolved from the theme.
     * Used alongside lineHeight to compute the absolute line height in pixels.
     */
    fontSize: number
    /**
     * Line height in pixels resolved from the theme.
     * Computed as the product of fontSize and the resolved line height multiplier.
     */
    lineHeight: number
    /**
     * Maximum number of lines before truncation.
     * When defined, enables webkit-line-clamp truncation on the rendered element.
     * @default undefined
     */
    maxLines?: number
    /**
     * Resolved foreground color string.
     * Applied as the CSS color value on the rendered element.
     */
    color: ColorValue
    /**
     * Resolved background color string, omitted when not set.
     * When defined, sets the CSS background-color on the rendered element.
     * @default undefined
     */
    backgroundColor?: ColorValue
    /**
     * Opacity value between 0 and 1, omitted when not set.
     * When defined, applied as the CSS opacity to the rendered element.
     * @default undefined
     */
    opacity?: number
  }
}
