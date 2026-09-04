import { readFileSync } from 'fs'
import { join } from 'path'

import { beforeAll, describe, expect, it } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'

const SNAPSHOTS_DIR = join(__dirname, '..', 'snapshots')

// Matches the `snapshot-test-{platform}-{device}` job naming in maintain.yml (e.g. `android-pixel-7`).
const DEVICE_SUFFIXES = {
  android: 'android-pixel-7',
  ios: 'ios-iphone-17',
}

describe('atoms/View', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('renders with padding', async () => {
    await waitFor(element(by.text('Hello, View'))).toBeVisible().withTimeout(10000)

    const screenshotPath = await device.takeScreenshot('view-default')
    const snapshotIdentifier = `view-default-${DEVICE_SUFFIXES[device.getPlatform()]}`

    expect(readFileSync(screenshotPath)).toMatchImageSnapshot({
      customSnapshotIdentifier: snapshotIdentifier,
      customSnapshotsDir: SNAPSHOTS_DIR,
    })
  })
})
