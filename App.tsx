import { VISUAL_SCENES } from '@root/snapshot.scenes'
import { useEffect, useState } from 'react'
import { Linking, StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

/**
 * Splits a scene URL into a `sceneId` (every path segment but the last, rejoined with `/` - a
 * scene's own id is itself slash-separated, e.g. `component/view/padding`) and a `caseName` (the
 * last segment).
 *
 * A native deep link puts the first segment in the URL's host
 * (`creactive://component/view/padding/x6s`), while the web dev server's URL puts it in
 * the path (`http://localhost:6007/component/view/padding/x6s`) - so `http(s)` URLs have their
 * scheme and host stripped first, but any other scheme only has the `scheme://` prefix stripped,
 * leaving its host as the leading path segment. This is done with plain string ops rather than
 * the global `URL`: React Native's own polyfill (`Libraries/Blob/URL.js`) only recognizes
 * `http(s)` in its `hostname`/`pathname` getters, silently returning empty values for a
 * custom-scheme deep link instead of throwing.
 */
function parseSceneRoute(url: string): { sceneId?: string; caseName?: string } {
  const schemeEnd = url.indexOf('://')
  const isHttp = url.startsWith('http://') || url.startsWith('https://')
  const afterScheme = schemeEnd === -1 ? '' : url.slice(schemeEnd + 3)

  const hostEnd = afterScheme.indexOf('/')
  const pathAndQuery = isHttp ? (hostEnd === -1 ? '' : afterScheme.slice(hostEnd)) : afterScheme
  const path = pathAndQuery.split(/[?#]/)[0]

  const segments = path.split('/').filter(Boolean)
  if (segments.length === 0) return {}
  if (segments.length === 1) return { sceneId: segments[0] }

  return { sceneId: segments.slice(0, -1).join('/'), caseName: segments[segments.length - 1] }
}

/**
 * The example app's only screen: whichever registered scene its route names, rendered directly -
 * the URL that launched the app (`Linking.getInitialURL()`, covering a fresh app/page load) or was
 * later sent to it while already running (the `url` event, covering Detox's `device.openURL()`
 * against a warm app) is parsed into `{ sceneId, caseName }` and used to pick the render. Generic
 * over every component under visual test - `VISUAL_SCENES` (`snapshot.scenes.ts`, gitignored) is generated
 * from every `*.snapshot.test.tsx` file's exported scene, so a new component needs no change here.
 */
export default function App() {
  const [route, setRoute] = useState<{ sceneId?: string; caseName?: string } | null>(null)

  useEffect(() => {
    // A `url` event fired before `getInitialURL()` resolves means the app was already running
    // when the deep link arrived - keep that route rather than letting the stale launch URL (or
    // lack of one) overwrite it once the promise settles.
    let receivedUrlEvent = false

    const subscription = Linking.addEventListener('url', ({ url }) => {
      receivedUrlEvent = true
      setRoute(parseSceneRoute(url))
    })

    Linking.getInitialURL().then((url) => {
      if (!receivedUrlEvent) setRoute(url ? parseSceneRoute(url) : {})
    })

    return () => subscription.remove()
  }, [])

  const selectedScene = VISUAL_SCENES.find(({ id }) => id === route?.sceneId) ?? VISUAL_SCENES[0]
  const SelectedScene = selectedScene.Scene

  return (
    <SafeAreaProvider>
      <SafeAreaView testID="root" style={styleSheet.mainWrapper}>
        <StatusBar hidden />

        {/*
          Keyed on the route so opening a *different* case of the same already-mounted scene
          (Detox's `device.openURL()` reaching a warm app, several times per `describe`) remounts
          it - otherwise `initialCaseName` would only ever seed its useState once, on first mount.
        */}
        {route === null ? null : <SelectedScene key={route.caseName} initialCaseName={route.caseName} />}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styleSheet = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
})
