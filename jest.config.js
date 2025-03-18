// Configuration may differ between web and native.
const isWeb = process.env.npm_lifecycle_event === 'test:web'

/**
 * Resolving preset, based on the npm lifecycle event.
 * We have specific presets for android, ios and web.
 * By default we are using default expo preset.
 *
 * @returns {string} - jest preset
 */
const resolvePreset = () => {
  switch (process.env.npm_lifecycle_event) {
    case 'test:android':
      return 'jest-expo/android'
    case 'test:ios':
      return 'jest-expo/ios'
    case 'test:web':
      return 'jest-expo/web'
    default:
      return 'jest-expo'
  }
}

/**
 * Resolving module name mapper helper.
 * In web environment we need to map react-native to react.
 * In native (default) environment we need to map react to react-native.
 *
 * @returns {Record<string, string>} - module name mapper
 */
const resolveModulenameMapper = () => {
  if (isWeb) {
    return {
      '^@testing-library/react-native$': '@testing-library/react',
    }
  }
  return {
    '^@testing-library/react$': '@testing-library/react-native',
  }
}

/**
 * Resolving setup files after env helper.
 * We need to have setup files for both web and native.
 * In web environment we need to have setup file for web.
 * In native (default) environment we need to have setup file for native.
 *
 * @returns {Array<string>} - setup files after env
 */
const resolveSetupFilesAfterEnv = () => {
  const result = ['<rootDir>/jest-setup.ts']
  if (isWeb) result.push('<rootDir>/jest-setup.web.ts')
  else result.push('<rootDir>/jest-setup.native.ts')
  return result
}

/**
 * Resolving test match pattern helper.
 * In web environment we need to have additional pattern for web tests.
 * In native (default) environment we need only one pattern.
 *
 * @returns {Array<string>} - test match pattern
 */
const resolveTestMatch = () => {
  if (isWeb) {
    return ['**/?(*.)+(spec).(ts|tsx)', '**/?(*.)+(spec).web.(ts|tsx)']
  }
  return ['**/?(*.)+(spec).(ts|tsx)', '**/?(*.)+(spec).native.(ts|tsx)']
}

/**
 * Resolving test environment helper.
 * In web environment we need to use jsdom environment.
 * In native (default) environment we need to use node environment.
 *
 * @returns {string} - test environment
 */
const resolveEnvironment = () => {
  if (isWeb) return 'jsdom'
  return 'node'
}

module.exports = {
  preset: resolvePreset(),
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: resolveModulenameMapper(),
  setupFilesAfterEnv: resolveSetupFilesAfterEnv(),
  testMatch: resolveTestMatch(),
  testEnvironment: resolveEnvironment(),
}
