module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.e2e.ts'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['<rootDir>/e2e/setup.ts'],
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,
}
