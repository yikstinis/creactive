export default function (api) {
  const isMetro = api.caller((caller) => caller?.name === 'metro')

  return {
    presets: [isMetro ? 'babel-preset-expo' : '@react-native/babel-preset'],
    plugins: isMetro ? [['module-resolver', { alias: { '@': './src' } }]] : [],
  }
}
