import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'visual',
  testMatch: '**/*.visual.spec.ts',
  // Written to the repo-root snapshots/ dir shared with the Detox visual tests, named to match
  // the `snapshot-test-{platform}-{browser}` job naming in maintain.yml (e.g. `linux-chromium`).
  snapshotPathTemplate: 'snapshots/{arg}{-platform}{-projectName}{ext}',
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
