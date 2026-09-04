const fs = require('fs')
const path = require('path')

const { withDangerousMod } = require('@expo/config-plugins')

/**
 * Xcode's "Bundle React Native code and images" build phase sets SKIP_BUNDLING=1
 * for any Debug configuration, assuming a Metro dev server will serve the JS at
 * runtime instead — the same assumption that broke the Android debug build until
 * debuggableVariants was emptied. Nothing starts Metro in CI, so unset it via the
 * officially supported .xcode.env.updates override hook, which the generated
 * build phase script sources specifically to allow this.
 */
module.exports = function withIosForceBundling(config) {
  return withDangerousMod(config, [
    'ios',
    (config) => {
      const envUpdatesPath = path.join(config.modRequest.platformProjectRoot, '.xcode.env.updates')
      fs.writeFileSync(envUpdatesPath, 'unset SKIP_BUNDLING\n')
      return config
    },
  ])
}
