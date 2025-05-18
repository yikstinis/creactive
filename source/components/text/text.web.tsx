import { StyledText } from './components'
import {
  TEXT_HTML_TAG,
  TextAlign,
  TextColor,
  TextFontFamily,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextTag,
} from './constants'
import {
  useTextColorCSSValue,
  useTextFontSizeTokenValue,
  useTextFontWeightCSSValue,
  useTextFountFamilyCSSValue,
  useTextLineHeightTokenValue,
  useTextOpacityValue,
} from './hooks'
import type { TextComponent } from './text.types'

const Text: TextComponent = ({
  tag,
  align = TextAlign.LEFT,
  fontFamily = TextFontFamily.BASE,
  fontWeight = TextFontWeight.REGULAR,
  fontSize = TextFontSize.MD,
  lineHeight = TextLineHeight.NORMAL,
  maxLines,
  color = TextColor.BASE_800,
  opacity,
  children,
}) => {
  const fontSizeValue = useTextFontSizeTokenValue(fontSize)
  const lineHeightValue = useTextLineHeightTokenValue(lineHeight)
  return (
    <StyledText
      as={TEXT_HTML_TAG[tag]}
      align={align}
      fontFamily={useTextFountFamilyCSSValue(fontFamily)}
      fontWeight={useTextFontWeightCSSValue(fontWeight)}
      fontSize={fontSizeValue}
      lineHeight={fontSizeValue * lineHeightValue}
      maxLines={maxLines}
      color={useTextColorCSSValue(color)}
      opacity={useTextOpacityValue(opacity)}
    >
      {children}
    </StyledText>
  )
}
Text.Tag = TextTag
Text.Align = TextAlign
Text.FontFamily = TextFontFamily
Text.FontWeight = TextFontWeight
Text.FontSize = TextFontSize
Text.LineHeight = TextLineHeight
Text.Color = TextColor
export default Text
