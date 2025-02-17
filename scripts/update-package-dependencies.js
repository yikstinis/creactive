const package = require('../package.json')
const { writeFileSync } = require('fs')

const DEPENDENCIES_FIELD = 'dependencies'
const PEER_DEPENDENCIES_FIELD = 'peerDependencies'

const currentDependencies = {
  ...package[DEPENDENCIES_FIELD],
  ...package[PEER_DEPENDENCIES_FIELD],
}
const newDependenciesField = process.argv[2] || PEER_DEPENDENCIES_FIELD

package[DEPENDENCIES_FIELD] = {}
package[PEER_DEPENDENCIES_FIELD] = {}

package[newDependenciesField] = currentDependencies

writeFileSync('package.json', JSON.stringify(package, null, 2) + '\n')
