import type { FunctionComponent, PropsWithChildren } from 'react'

interface TextProps extends PropsWithChildren {
  isActive?: boolean
}
export type TextComponent = FunctionComponent<TextProps>
