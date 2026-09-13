import { useEffect, useState } from 'react'
import { Linking, Pressable, StatusBar, StyleSheet, Text, View as NativeView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { parseSceneRoute } from '@/testing/route'
import { VISUAL_SCENE_ROOT_TEST_ID } from '@/testing/scene-root'
import { VISUAL_SCENES } from '@/testing/scenes'

/**
 * The example app's only screen: a nav row of every registered visual-test scene (tapped by
 * `scene-nav-<id>`, for manual browsing) plus the currently selected one's own render. A
 * Playwright/Detox test instead opens a scene's (and one of its case's) route directly - the URL
 * that launched the app (`Linking.getInitialURL()`, covering a fresh app/page load) or was later
 * sent to it while already running (the `url` event, covering Detox's `device.openURL()` against
 * a warm app) is parsed into `{ sceneId, caseName }` and used to pick the initial render, without
 * a single tap. Generic over every component under visual test - adding a component's scene to
 * VISUAL_SCENES is the only change needed here.
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
      <SafeAreaView testID={VISUAL_SCENE_ROOT_TEST_ID} style={styleSheet.mainWrapper}>
        <StatusBar hidden />

        {route === null ? null : (
          <NativeView style={{ alignItems: 'flex-start' }}>
            <NativeView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {VISUAL_SCENES.map(({ id }) => (
                <Pressable key={id} testID={`scene-nav-${id}`} onPress={() => setRoute({ sceneId: id })}>
                  <Text>{id}</Text>
                </Pressable>
              ))}
            </NativeView>
            {/*
              Keyed on the route so opening a *different* case of the same already-mounted scene
              (Detox's `device.openURL()` reaching a warm app, several times per `describe`)
              remounts it - otherwise `initialCaseName` would only ever seed its useState once, on
              first mount.
            */}
            <SelectedScene key={route.caseName} initialCaseName={route.caseName} />
          </NativeView>
        )}
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
