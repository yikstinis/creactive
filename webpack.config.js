const { name } = require('./package.json')
const path = require('path')

const isDefaultBuild = process.env.npm_lifecycle_event === 'build:default'

const getOutputFileName = () => {
  if (isDefaultBuild) return 'default.js'
  return 'classic.js'
}

const getResolveAlias = () => {
  const alias = {
    '@': path.resolve(__dirname, 'source'),
  }
  if (isDefaultBuild) alias['react-native-svg'] = 'react-native-svg-web'
  return alias
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
  externals: {
    '@emotion/styled': '@emotion/styled',
    // prettier-ignore
    // eslint-disable-next-line
    'react': 'react',
    'react-dom': 'react-dom',
    'react-native': 'react-native',
    'react-native-web': 'react-native-web',
    'react-native-svg': 'react-native-svg',
    'react-native-svg-web': 'react-native-svg-web',
  },
  resolve: {
    alias: getResolveAlias(),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
