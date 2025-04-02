const isDefaultBuild = process.env.npm_lifecycle_event === 'build:default'

const getPresets = () => {
  if (isDefaultBuild) {
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
  return ['babel-preset-expo']
}

module.exports = {
  presets: getPresets(),
}
