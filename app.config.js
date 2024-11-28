const { name, version } = require('./package.json')

module.exports = {
  expo: {
    name,
    version,
    slug: name,
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
  },
}
