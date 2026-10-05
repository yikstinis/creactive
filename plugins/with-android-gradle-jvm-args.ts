import type { ConfigPlugin } from '@expo/config-plugins'
import { withGradleProperties } from '@expo/config-plugins'
import type { PropertiesItem } from '@expo/config-plugins/build/android/Properties'

// The default -Xmx2048m OOM'd the Gradle daemon while merging dex archives on GitHub Actions.
// The single-ABI build in .detoxrc.js is the main fix; this is an extra safety margin.
const withAndroidGradleJvmArgs: ConfigPlugin = (config) => {
  return withGradleProperties(config, (config) => {
    const jvmArgs = config.modResults.find(
      (item): item is Extract<PropertiesItem, { type: 'property' }> => item.type === 'property' && item.key === 'org.gradle.jvmargs',
    )
    if (jvmArgs) {
      jvmArgs.value = '-Xmx3072m -XX:MaxMetaspaceSize=512m'
    }
    return config
  })
}

export default withAndroidGradleJvmArgs
