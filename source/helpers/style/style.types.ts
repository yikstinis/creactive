import type { ComponentType, JSX } from 'react'

/**
 * Rendering initial react native style node helper.
 * You are supposed to use it only during server side rendering.
 * Return only initial and only react native styles!
 *
 * @see https://necolas.github.io/react-native-web/docs/rendering/
 * @see https://docs.expo.dev/guides/using-nextjs/
 *
 * @param component - your root component using creactive
 * @param key - identifies component in the registry if you have multiple
 */
export type RenderReactNativeInitialStyleHelper = (
  component: ComponentType,
  key?: string
) => JSX.Element
