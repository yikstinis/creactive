import { useThemeContext } from '@/contexts'
import type { Role } from 'react-native'
import { Text as ReactNativeText, StyleSheet } from 'react-native'
import { TEXT_TYPE_HEADING, TextRole, TextType } from './constants'
import type { BaseStyleSheetParameters, TextComponent } from './text.types'

/**
 * Creates optimized static stylesheet for component.
 * We should put here as much styles as possible to improve performance.
 * Syles, created here can't be changed during component lifecycle.
 */
const createBaseStyleSheet = ({ fontFamilyBase }: BaseStyleSheetParameters) =>
  StyleSheet.create({
    fontFamilyBase: {
      fontFamily: fontFamilyBase,
    },
  })

export const Text: TextComponent = ({ type, children }) => {
  const themeContext = useThemeContext()

  const getRole = () => {
    // Casting paragraph role type because it is supported by react-native-web.
    // As a result - text would be rendered to paragraph tag...
    if (TextType.P === type) return TextRole.PARAGRAPH as Role
    if (TEXT_TYPE_HEADING.includes(type)) return TextRole.HEADING
  }

  const getAriaLevel = () => {
    if (TEXT_TYPE_HEADING.includes(type)) {
      if (type === TextType.H1) return 1
      if (type === TextType.H2) return 2
      if (type === TextType.H3) return 3
      if (type === TextType.H4) return 4
      if (type === TextType.H5) return 5
      if (type === TextType.H6) return 6
    }
  }

  const baseStyleSheet = createBaseStyleSheet({
    fontFamilyBase: themeContext.fontFamilyBase,
  })

  return (
    <ReactNativeText
      role={getRole()}
      aria-level={getAriaLevel()}
      style={[baseStyleSheet.fontFamilyBase]}
    >
      {children}
    </ReactNativeText>
  )
}
Text.Type = TextType
