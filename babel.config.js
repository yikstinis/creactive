const isBuild = process.env.npm_lifecycle_event.startsWith('build:')

const getPlugins = () => {
  if (isBuild) return ['react-native-web']
  return []
}

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: getPlugins(),
}
