import type { ConfigPlugin } from '@expo/config-plugins'
import { withAppBuildGradle } from '@expo/config-plugins'
import { mergeContents } from '@expo/config-plugins/build/utils/generateCode'

// Detox's test APK and the app both bundle libc++_shared.so and the same META-INF files, which breaks `assembleAndroidTest` packaging.
// Same setup as Detox's own test app: https://github.com/wix/Detox/blob/master/detox/test/android/app/build.gradle
const withAndroidPackagingOptions: ConfigPlugin = (config) => {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        newSrc: `    packagingOptions {
        pickFirst '**/libc++_shared.so'
        exclude 'META-INF/DEPENDENCIES'
        exclude 'META-INF/NOTICE'
        exclude 'META-INF/LICENSE'
        exclude 'META-INF/LICENSE.txt'
        exclude 'META-INF/NOTICE.txt'
    }`,
        tag: 'detox-packaging-options',
        anchor: /^android\s*\{/,
        offset: 1,
        comment: '//',
      }).contents
    }
    return config
  })
}

export default withAndroidPackagingOptions
