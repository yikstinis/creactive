import { readFileSync } from 'fs'
import { join } from 'path'

import { beforeAll, describe, expect, it } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'

import { VIEW_PADDING_CASES } from '@/components/atoms/view/view.visual.cases'

const SNAPSHOTS_DIR = join(__dirname, 'snapshots')

// Matches the `snapshot-test-{platform}-{device}` job naming in maintain.yml (e.g. `android-pixel-7`).
const DEVICE_SUFFIXES = {
  android: 'android-pixel-7',
  ios: 'ios-iphone-17',
}

describe('atoms/View', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it.each(VIEW_PADDING_CASES)('renders with $name padding', async ({ name }) => {
    const testID = `view-padding-${name}`

    await waitFor(element(by.id(testID))).toBeVisible().withTimeout(10000)

    const screenshotPath = await element(by.id(testID)).takeScreenshot(testID)
    const snapshotIdentifier = `${testID}-${DEVICE_SUFFIXES[device.getPlatform()]}`

    expect(readFileSync(screenshotPath)).toMatchImageSnapshot({
      customSnapshotIdentifier: snapshotIdentifier,
      customSnapshotsDir: SNAPSHOTS_DIR,
    })
  })
})
