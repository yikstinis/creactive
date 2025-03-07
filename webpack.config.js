const { name } = require('./package.json')
const path = require('path')

// Saying that build "is web", we mean that we are going to compile the package:
// * for projects, that are not using react-native or expo inside
// * replacing react-native with react-native-web everywhere
const isWeb = process.env.npm_lifecycle_event === 'build:web'

const getOutputPath = () => {
  if (isWeb) return path.join(__dirname, 'build', 'web')
  return path.join(__dirname, 'build', 'default')
}

const getAlias = () => {
  const alias = {
    '@': path.resolve(__dirname, 'source'),
  }
  if (isWeb) alias['react-native$'] = 'react-native-web'
  return alias
}

module.exports = {
  entry: path.join(__dirname, 'source', 'index.ts'),
  output: {
    path: getOutputPath(),
    filename: 'index.js',
    globalObject: 'this',
    libraryTarget: 'umd',
    library: name,
    umdNamedDefine: true,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-native': 'react-native',
    'react-native-web': 'react-native-web',
  },
  resolve: {
    alias: getAlias(),
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
