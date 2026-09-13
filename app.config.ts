import type { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'creactive',
  slug: 'creactive',
  scheme: 'creactive',
  version: '0.0.1',
  orientation: 'portrait',
  ios: {
    bundleIdentifier: 'com.creactive',
    supportsTablet: false,
  },
  android: {
    package: 'com.creactive',
  },
  plugins: [
    './plugins/with-android-packaging-options',
    './plugins/with-android-gradle-jvm-args',
    './plugins/with-detox-android-test',
  ],
}

export default config
