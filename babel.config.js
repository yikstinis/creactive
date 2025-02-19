// Checking build:web or test:web environments.
// Babel configuration may differ between web and native.
const isWeb = process.env.npm_lifecycle_event.endsWith(':web')

/**
 * We need to add react-native-web plugin for web environment.
 * Looks like test environment works without it (while still need it for build).
 *
 * @returns {Array<string>} - array of babel plugins
 */
const resolvePlugins = () => {
  if (isWeb) return ['react-native-web']
  return []
}

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: resolvePlugins(),
}
