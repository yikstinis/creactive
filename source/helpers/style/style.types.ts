import type { ComponentType, JSX } from 'react'

/**
 * Rendering style node (for web platform server side rendering) helper.
 * Using this helper on native platform makes no sense and will throw an error!
 * You are supposed to use it only for server side rendering.
 *
 * @see https://necolas.github.io/react-native-web/docs/rendering/
 * @see https://docs.expo.dev/guides/using-nextjs/
 *
 * @param component - your root component which uses library inside
 * @param key - identifies component in the registry if you have multiple
 */
export type RenderStyleHelper = (
  component: ComponentType,
  key?: string
) => JSX.Element
