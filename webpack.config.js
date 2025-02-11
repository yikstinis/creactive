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
  if (isWeb) {
    return {
      'react-native$': 'react-native-web',
    }
  }
}

const getBabelPlugins = () => {
  if (isWeb) {
    return ['react-native-web']
  }
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
            plugins: getBabelPlugins(),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
}
