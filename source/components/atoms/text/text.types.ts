import type { Fraction } from '@/helpers'
import type { Color, FontWeight } from '@/types'
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
 */
export type TextMeasureCallback = (
  /**
   * Horizontal position of the component relative to the parent.
   */
  x: number,
  /**
   * Vertical position of the component relative to the parent.
   */
  y: number,
  /**
   * Width of the component in pixels.
   */
  width: number,
  /**
   * Height of the component in pixels.
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
   * @default undefined
   */
  testId?: string
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @see {@link TextComponent.Tag}
   * @default undefined - renders into SPAN element
   */
  tag?: TextTag
  /**
   * Inner text will be aligned according to this value.
   * @see {@link TextComponent.TextAlign}
   * @default {@link TextAlign.LEFT}
   */
  textAlign?: TextAlign
  /**
   * Text decoration.
   * @see {@link TextComponent.TextDecoration}
   * @default {@link TextDecoration.NONE}
   */
  textDecoration?: TextDecoration
  /**
   * Themed font family.
   * @see {@link TextComponent.FontFamily}
   * @default {@link TextFontFamily.DEFAULT}
   */
  fontFamily?: TextFontFamily
  /**
   * Themed font weight.
   * @see {@link TextComponent.FontWeight}
   * @default {@link TextFontWeight.REGULAR}
   */
  fontWeight?: TextFontWeight
  /**
   * Themed font size.
   * @see {@link TextComponent.FontSize}
   * @default {@link TextFontSize.MD}
   */
  fontSize?: TextFontSize
  /**
   * Themed line height.
   * @see {@link TextComponent.LineHeight}
   * @default {@link TextLineHeight.NORMAL}
   */
  lineHeight?: TextLineHeight
  /**
   * Maximum number of lines to display.
   * @default undefined
   */
  maxLines?: number
  /**
   * Themed, transparent, or custom color value.
   * @see {@link TextComponent.Color}
   * @default {@link TextColor.BASE_800}
   */
  color?: TextColor | Color
  /**
   * Themed background color.
   * @see {@link TextComponent.BackgroundColor}
   * @default undefined
   */
  backgroundColor?: TextBackgroundColor
  /**
   * Text opacity.
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
  css: {
    /**
     * CSS text-align value applied to the rendered element.
     */
    textAlign: 'left' | 'center' | 'right'
    /**
     * CSS text-decoration value applied to the rendered element.
     */
    textDecoration: 'none' | 'underline'
    /**
     * CSS font-family string resolved from the theme.
     */
    fontFamily: string
    /**
     * Numeric font weight resolved from the theme.
     */
    fontWeight: FontWeight
    /**
     * Font size in pixels resolved from the theme.
     */
    fontSize: number
    /**
     * Line height in pixels resolved from the theme.
     */
    lineHeight: number
    /**
     * Maximum number of lines before truncation.
     */
    maxLines?: number
    /**
     * Resolved foreground color string.
     */
    color: Color
    /**
     * Resolved background color string, omitted when not set.
     */
    backgroundColor?: Color
    /**
     * Opacity value between 0 and 1, omitted when not set.
     */
    opacity?: number
  }
}
