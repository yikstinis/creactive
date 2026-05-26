import type { ComponentType, JSX } from 'react'

/**
 * Rendering initial react native style node helper.
 * You are supposed to use it only during server side rendering.
 * Return only initial and only react native styles!
 *
 * @see https://necolas.github.io/react-native-web/docs/rendering/
 * @param component - your root component using creactive
 * @param key - identifies component in the registry if you have multiple
 *
 *
 * Next.js usage example:
 *
 * // next.config.js
 * const nextConfig: NextConfig = {
 *   serverExternalPackages: ["creactive/server"],
 * };
 *
 * // layout.tsx
 * export default function Layout({ children }: PropsWithChildren) {
 *   return (
 *     <html lang="en">
 *       <head>{renderReactNativeInitialStyle(() => children)}</head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 */
export type RenderReactNativeInitialStyleHelper = (
  component: ComponentType,
  key?: string,
) => JSX.Element
