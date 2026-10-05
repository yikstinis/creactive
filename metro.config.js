// Regenerates the gitignored snapshot.scenes.ts on every Metro start, since App.tsx imports it.
require('./scripts/generate-scenes')

const { getDefaultConfig } = require('expo/metro-config')

module.exports = getDefaultConfig(__dirname)
