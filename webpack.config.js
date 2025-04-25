const { name } = require('./package.json')
const path = require('path')

const isDefaultBuild = process.env.npm_lifecycle_event === 'build:default'
const isClassicBuild = process.env.npm_lifecycle_event === 'build:classic'

const getOutputFileName = () => {
  if (isDefaultBuild) return 'default.js'
  return 'classic.js'
}

const getResolveAlias = () => {
  const alias = {
    '@': path.resolve(__dirname, 'source'),
  }
  if (isClassicBuild) {
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
  externals['react-native'] = isClassicBuild
    ? 'react-native-web'
    : 'react-native'
  externals['react-native-svg'] = isClassicBuild
    ? 'react-native-svg-web'
    : 'react-native-svg'
  return externals
}

module.exports = {
  entry: path.join(__dirname, 'source', 'index.ts'),
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
