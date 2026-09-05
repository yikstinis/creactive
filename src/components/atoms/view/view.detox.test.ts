import { join } from 'path'

import { beforeAll, describe, expect, it } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'
import { Jimp } from 'jimp'

import { VIEW_PADDING_CASES, VIEW_VISUAL_CASES_ROOT_TEST_ID } from '@/components/atoms/view/view.visual.cases'

const SNAPSHOTS_DIR = join(__dirname, 'snapshots')

// Matches the `snapshot-test-{platform}-{device}` job naming in maintain.yml (e.g. `android-pixel-7`).
const DEVICE_SUFFIXES = {
  android: 'android-pixel-7',
  ios: 'ios-iphone-17',
}

async function getElementFrame(testID: string): Promise<{ x: number; y: number; width: number; height: number }> {
  const attributes = (await element(by.id(testID)).getAttributes()) as {
    frame: { x: number; y: number; width: number; height: number }
  }

  return attributes.frame
}

describe('atoms/View', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it.each(VIEW_PADDING_CASES)('renders with $name padding', async ({ name }) => {
    const testID = `view-padding-${name}`

    await element(by.id(`view-padding-nav-${name}`)).tap()
    await waitFor(element(by.id(testID))).toBeVisible().withTimeout(10000)

    const screenshotPath = await device.takeScreenshot(testID)
    const screenshot = await Jimp.read(screenshotPath)

    // device.takeScreenshot() returns raw device pixels, but getAttributes().frame comes back in
    // points on iOS (and, empirically, already in pixels on Android) - deriving the scale from
    // the full-screen root's own frame works on both, rather than assuming either unit.
    const rootFrame = await getElementFrame(VIEW_VISUAL_CASES_ROOT_TEST_ID)
    const scale = screenshot.bitmap.width / rootFrame.width

    const caseFrame = await getElementFrame(testID)

    screenshot.crop({
      x: Math.round(caseFrame.x * scale),
      y: Math.round(caseFrame.y * scale),
      w: Math.round(caseFrame.width * scale),
      h: Math.round(caseFrame.height * scale),
    })

    const snapshotIdentifier = `padding/${name}.${DEVICE_SUFFIXES[device.getPlatform()]}`

    expect(await screenshot.getBuffer('image/png')).toMatchImageSnapshot({
      customSnapshotIdentifier: snapshotIdentifier,
      customSnapshotsDir: SNAPSHOTS_DIR,
    })
  })
})
