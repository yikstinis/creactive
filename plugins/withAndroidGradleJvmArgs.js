const { withGradleProperties } = require('@expo/config-plugins')

/**
 * The default -Xmx2048m OOM'd the Gradle daemon merging dex archives for
 * assembleAndroidTest on a GitHub Actions runner. Bumped as a safety margin
 * alongside restricting the build to a single ABI in .detoxrc.js (the bigger
 * factor — see the comment there).
 */
module.exports = function withAndroidGradleJvmArgs(config) {
  return withGradleProperties(config, (config) => {
    const jvmArgs = config.modResults.find((item) => item.type === 'property' && item.key === 'org.gradle.jvmargs')
    if (jvmArgs) {
      jvmArgs.value = '-Xmx3072m -XX:MaxMetaspaceSize=512m'
    }
    return config
  })
}
