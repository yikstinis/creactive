import { name, version } from './package.json'

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
