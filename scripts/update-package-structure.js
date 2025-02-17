const package = require('../package.json')
const { writeFileSync, readFileSync, unlinkSync } = require('fs')

const TYPE_PREPUBLIISH = 'prepublish'
const TYPE_POSTPUBLISH = 'postpublish'

if (process.argv[2] === TYPE_PREPUBLIISH) {
  writeFileSync('package-temp.json', JSON.stringify(package, null, 2) + '\n')
  writeFileSync(
    'package.json',
    JSON.stringify(
      {
        name: package.name,
        version: package.version,
        files: package.files,
        scripts: {
          postpublish: package.scripts.postpublish,
          'postpublish:update-main': package.scripts['postpublish:update-main'],
          'postpublish:update-structure':
            package.scripts['postpublish:update-structure'],
        },
        peerDependencies: package.peerDependencies,
      },
      null,
      2
    ) + '\n'
  )
}

if (process.argv[2] === TYPE_POSTPUBLISH) {
  const tempPackage = JSON.parse(readFileSync('package-temp.json'))
  writeFileSync('package.json', JSON.stringify(tempPackage, null, 2) + '\n')
  unlinkSync('package-temp.json')
}
