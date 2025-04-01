const { name } = require('./package.json')
const path = require('path')

const isWeb = process.env.npm_lifecycle_event.endsWith('web')

const getOutputFileName = () => {
  if (isWeb) return 'browser.js'
  return 'node.js'
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
    react: 'react',
    'react-dom': 'react-dom',
    'react-native': 'react-native',
    'react-native-web': 'react-native-web',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'source'),
    },
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
