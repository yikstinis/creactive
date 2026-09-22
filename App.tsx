import { deriveTestId } from '@root/snapshot.helpers'
import { VISUAL_SCENES } from '@root/snapshot.scenes'
import { useEffect, useState } from 'react'
import { Linking, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

/**
 * A scene URL's full slash-separated path, e.g. `component/view/padding/x6s` - always one
 * `VisualScene.id` in full, since every case has its own route (see `snapshot.scenes.ts`).
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
function parseSceneId(url: string): string | undefined {
  const schemeEnd = url.indexOf('://')
  const isHttp = url.startsWith('http://') || url.startsWith('https://')
  const afterScheme = schemeEnd === -1 ? '' : url.slice(schemeEnd + 3)

  const hostEnd = afterScheme.indexOf('/')
  const pathAndQuery = isHttp ? (hostEnd === -1 ? '' : afterScheme.slice(hostEnd)) : afterScheme
  const path = pathAndQuery.split(/[?#]/)[0]

  const segments = path.split('/').filter(Boolean)
  return segments.length === 0 ? undefined : segments.join('/')
}

/**
 * The example app's only screen: whichever case its route names, rendered directly inside the
 * frame (padding, testID) every case shares - the URL that launched the app
 * (`Linking.getInitialURL()`, covering a fresh app/page load) or was later sent to it while
 * already running (the `url` event, covering Detox's `device.openURL()` against a warm app) is
 * parsed into a scene id and used to pick the case. Generic over every component under visual
 * test - `VISUAL_SCENES` (`snapshot.scenes.ts`, gitignored) is generated from every
 * `*.snapshot.test.tsx` file's exported cases, so a new component needs no change here.
 */
export default function App() {
  const [sceneId, setSceneId] = useState<string | undefined | null>(null)

  useEffect(() => {
    // A `url` event fired before `getInitialURL()` resolves means the app was already running
    // when the deep link arrived - keep that route rather than letting the stale launch URL (or
    // lack of one) overwrite it once the promise settles.
    let receivedUrlEvent = false

    const subscription = Linking.addEventListener('url', ({ url }) => {
      receivedUrlEvent = true
      setSceneId(parseSceneId(url))
    })

    Linking.getInitialURL().then((url) => {
      if (!receivedUrlEvent) setSceneId(url ? parseSceneId(url) : undefined)
    })

    return () => subscription.remove()
  }, [])

  const selectedScene = VISUAL_SCENES.find(({ id }) => id === sceneId) ?? VISUAL_SCENES[0]

  return (
    <SafeAreaProvider>
      <SafeAreaView testID="root" style={styleSheet.mainWrapper}>
        <StatusBar hidden />

        {sceneId === null ? null : (
          <View testID={deriveTestId(selectedScene.id)} style={styleSheet.caseFrame}>
            {selectedScene.render()}
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styleSheet = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
  },
  caseFrame: {
    alignSelf: 'flex-start',
    padding: 80,
  },
})
