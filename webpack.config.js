const { name } = require('./package.json')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'source', 'index.ts'),
  output: {
    path: path.join(__dirname, 'build'),
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
