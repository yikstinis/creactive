const withStorybook = require('@storybook/react-native/metro/withStorybook')
const { getDefaultConfig } = require('expo/metro-config')
const { resolve } = require('path')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

module.exports = withStorybook(config, {
  enabled: true,
  configPath: resolve(__dirname, '.storybook'),
})
