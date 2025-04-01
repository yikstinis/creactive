const isWeb = process.env.npm_lifecycle_event.endsWith('web')
const isTest = process.env.npm_lifecycle_event.startsWith('test')

const getPresets = () => {
  if (isWeb || isTest) {
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
