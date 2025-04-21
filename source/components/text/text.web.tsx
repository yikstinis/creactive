import { StyledText } from './components'
import {
  TEXT_HTML_TAG,
  TextAlign,
  TextColor,
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
} from './hooks'
import type { TextComponent } from './text.types'

const Text: TextComponent = ({
  tag,
  align = TextAlign.LEFT,
  fontWeight = TextFontWeight.REGULAR,
  fontSize = TextFontSize.MD,
  lineHeight = TextLineHeight.NORMAL,
  maxLines,
  color = TextColor.BASE_800,
  children,
}) => {
  const fontSizeValue = useTextFontSizeTokenValue(fontSize)
  const lineHeightValue = useTextLineHeightTokenValue(lineHeight)
  return (
    <StyledText
      as={TEXT_HTML_TAG[tag]}
      align={align}
      fontFamily={useTextFountFamilyCSSValue()}
      fontWeight={useTextFontWeightCSSValue(fontWeight)}
      fontSize={fontSizeValue}
      lineHeight={fontSizeValue * lineHeightValue}
      color={useTextColorCSSValue(color)}
      maxLines={maxLines}
    >
      {children}
    </StyledText>
  )
}
Text.Tag = TextTag
Text.Align = TextAlign
Text.FontWeight = TextFontWeight
Text.FontSize = TextFontSize
Text.LineHeight = TextLineHeight
Text.Color = TextColor
export default Text
