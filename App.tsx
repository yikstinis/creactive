// Installs the global `test` that every case's `render()` calls (`test.renderLayout()`).
// Nothing else in App.tsx's import graph imports it, so without this every case throws `ReferenceError: test is not defined`.
import '@root/snapshot.helpers'
import { VISUAL_SCENES } from '@root/snapshot.scenes'
import { useEffect, useState } from 'react'
import { Linking, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

// A native deep link carries the first path segment in the host (`creactive://component/...`), while a web URL carries it in the path (`http://localhost:6007/component/...`).
// Plain string ops instead of `URL`, because React Native's polyfill returns empty `hostname`/`pathname` for custom-scheme URLs.
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

export default function App() {
  const [sceneId, setSceneId] = useState<string | undefined | null>(null)

  useEffect(() => {
    // A `url` event fired before `getInitialURL()` resolves means the app was already running when the deep link arrived.
    // Keep that route instead of letting the stale launch URL overwrite it.
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
          <View testID={selectedScene.id} style={styleSheet.caseFrame}>
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
