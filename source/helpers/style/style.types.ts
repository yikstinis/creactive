import type { ComponentType, JSX } from 'react'

/**
 * Rendering style node (for web platform server side rendering) helper.
 * Using this helper on native platform makes no sense and will throw an error!
 * You are supposed to use it only for server side rendering.
 *
 * @see https://necolas.github.io/react-native-web/docs/rendering/
 * @see https://docs.expo.dev/guides/using-nextjs/
 */
export type RenderStyleHelper = (
  component: ComponentType,
  key?: string
) => JSX.Element
