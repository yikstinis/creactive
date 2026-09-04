const { withAppBuildGradle } = require('@expo/config-plugins')
const { mergeContents } = require('@expo/config-plugins/build/utils/generateCode')

/**
 * Detox's Espresso test APK and the app's own native libs both bundle
 * libc++_shared.so and duplicate META-INF license files, which fails
 * `assembleAndroidTest` packaging unless the first one found is picked.
 * See Detox's own test app: https://github.com/wix/Detox/blob/master/detox/test/android/app/build.gradle
 */
module.exports = function withAndroidPackagingOptions(config) {
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
