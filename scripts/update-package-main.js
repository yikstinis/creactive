const package = require('../package.json')
const { writeFileSync } = require('fs')

/**
 * Updating package main field.
 * We are having a conflict with this field now..
 * Expo uses this value as the entry point for the application.
 * NPM expects package entry point to be the main file of the package.
 * We have to update this field to the correct value during lifecycle events.
 * @see package.json scripts section for more information.
 */
package.main = process.argv[2] || package.main || '.storybook'
writeFileSync('package.json', JSON.stringify(package, null, 2))
