const { name } = require('./package.json')
const path = require('path')

const isDefaultBuild = process.env.npm_lifecycle_event === 'build:default'
const isClassicBuild = process.env.npm_lifecycle_event === 'build:classic'
const isServerBuild = process.env.npm_lifecycle_event === 'build:server'

const getEntry = () => {
  if (isServerBuild) return path.join(__dirname, 'source', 'server.ts')
  return path.join(__dirname, 'source', 'index.ts')
}
const getOutputFileName = () => {
  if (isDefaultBuild) return 'default.js'
  if (isServerBuild) return 'server.js'
  return 'classic.js'
}

const getResolveAlias = () => {
  const alias = {
    '@': path.resolve(__dirname, 'source'),
  }
  if (isClassicBuild || isServerBuild) {
    alias['react-native'] = 'react-native-web'
    alias['react-native-svg'] = 'react-native-svg-web'
  }
  return alias
}

const getExternals = () => {
  const externals = {
    '@emotion/styled': '@emotion/styled',
    // prettier-ignore
    // eslint-disable-next-line
    'react': 'react',
    'react/jsx-runtime': 'react/jsx-runtime',
    'react/jsx-dev-runtime': 'react/jsx-dev-runtime',
    'react-dom': 'react-dom',
  }
  externals['react-native'] =
    isClassicBuild || isServerBuild ? 'react-native-web' : 'react-native'
  externals['react-native-svg'] =
    isClassicBuild || isServerBuild
      ? 'react-native-svg-web'
      : 'react-native-svg'
  // babel-plugin-react-native-web (run by babel-preset-expo) rewrites every `react-native`
  // import to a `react-native-web/dist/...` sub-path before webpack sees it.
  // The `react-native` external above never matches, so react-native-web gets bundled.
  // That creates a second Responder System with its own private responderListenersMap.
  // Pressable registers in the bundled map; mouse events dispatch through the host map.
  // No match → no responder granted → onPressIn never fires.
  if (isClassicBuild) {
    return [
      externals,
      /^react-native-web(\/.*)?$/,
      /^react-native-svg-web(\/.*)?$/,
    ]
  }
  return externals
}

module.exports = {
  entry: getEntry(),
  output: {
    path: path.join(__dirname, 'build'),
    filename: getOutputFileName(),
    globalObject: 'this',
    libraryTarget: 'umd',
    library: name,
    umdNamedDefine: true,
  },
  resolve: {
    alias: getResolveAlias(),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: getExternals(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: false,
}
