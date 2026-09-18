// Regenerates snapshot.scenes.ts (gitignored) on every Metro startup - App.tsx imports it, so
// anything that bundles the app (expo start, expo export, Detox's native builds) needs it to
// already exist.
require('./scripts/generate-scenes')

const { getDefaultConfig } = require('expo/metro-config')

module.exports = getDefaultConfig(__dirname)
