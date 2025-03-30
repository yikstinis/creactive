const isWeb = process.env.npm_lifecycle_event.endsWith('web')

const getPresets = () => {
  if (isWeb) {
    return ['babel-preset-expo']
  }
  return [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ]
}

module.exports = {
  presets: getPresets(),
}
