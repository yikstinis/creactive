const { name } = require('./package.json')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'source', 'index.ts'),
  output: {
    path: path.join(__dirname, 'build', 'web'),
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
      'react-native$': 'react-native-web',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts?x$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
            plugins: ['react-native-web'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
}
