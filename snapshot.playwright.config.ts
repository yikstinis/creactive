import { defineConfig } from '@playwright/test'

// Assigns the global `test` before Playwright loads any spec file (see snapshot.playwright.setup.ts).
import '@root/snapshot.playwright.setup'

export default defineConfig({
  testDir: 'src',
  testMatch: '**/*.snapshot.test.{ts,tsx}',
  // Shares the `snapshots/` dir with Detox.
  // The suffix matches the `snapshot-test-{platform}-{browser}` job naming in maintain.yml.
  snapshotPathTemplate: '{testDir}/{testFileDir}/snapshots/{arg}.{platform}-{projectName}{ext}',
  webServer: {
    // The trailing `?` drops the request path when proxying, so unknown routes like `/component/view/padding/X6S` fall back to `index.html`.
    command: 'npx http-server dist -p 6007 -s -P http://localhost:6007?',
    url: 'http://localhost:6007',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:6007',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
})
