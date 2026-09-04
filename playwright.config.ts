import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'src',
  testMatch: '**/*.playwright.test.ts',
  // Written to a `snapshots/` dir next to each spec file, shared with that component's Detox
  // visual test, named to match the `snapshot-test-{platform}-{browser}` job naming in
  // maintain.yml (e.g. `linux-chromium`).
  snapshotPathTemplate: '{testDir}/{testFileDir}/snapshots/{arg}{-platform}{-projectName}{ext}',
  webServer: {
    command: 'npx http-server dist -p 6007 -s',
    url: 'http://localhost:6007',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:6007',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
})
