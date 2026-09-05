import { readFileSync } from 'fs'
import { dirname, join } from 'path'

import { expect } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { PNG } from 'pngjs'

import { VISUAL_SCENE_ROOT_TEST_ID } from '@/testing/scenes'
import type { SnapshotTest, VisualDriver } from '@/testing/visual.types'

/**
 * Detox overwrites the global `expect` with its own element-assertion DSL
 * (`expect(element(...)).toBeVisible()`), so Jest's own value-matcher
 * `expect` — the one `.extend()` and `toMatchImageSnapshot` need — has to
 * be imported explicitly from `@jest/globals` rather than relying on the
 * ambient global.
 */
expect.extend({ toMatchImageSnapshot })

// Matches the `snapshot-test-{platform}-{device}` job naming in maintain.yml (e.g. `android-pixel-7`).
const DEVICE_SUFFIXES = {
  android: 'android-pixel-7',
  ios: 'ios-iphone-17',
}

async function getElementFrame(testId: string): Promise<{ x: number; y: number; width: number; height: number }> {
  const attributes = (await element(by.id(testId)).getAttributes()) as {
    frame: { x: number; y: number; width: number; height: number }
  }

  return attributes.frame
}

function cropPng(source: PNG, rect: { x: number; y: number; width: number; height: number }): PNG {
  const cropped = new PNG({ width: rect.width, height: rect.height })

  for (let row = 0; row < rect.height; row += 1) {
    const sourceStart = ((rect.y + row) * source.width + rect.x) * 4
    const destStart = row * rect.width * 4

    source.data.copy(cropped.data, destStart, sourceStart, sourceStart + rect.width * 4)
  }

  return cropped
}

// Averages each `factor`x`factor` block of source pixels into one destination pixel, downsampling
// a retina simulator's crop (e.g. 3x on the iPhone 17) back to the same point-resolution Android
// and Playwright already produce, so all three platforms' baselines are directly comparable in size.
function downsamplePng(source: PNG, factor: number): PNG {
  const width = Math.floor(source.width / factor)
  const height = Math.floor(source.height / factor)
  const downsampled = new PNG({ width, height })
  const samples = factor * factor

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let r = 0
      let g = 0
      let b = 0
      let a = 0

      for (let dy = 0; dy < factor; dy += 1) {
        for (let dx = 0; dx < factor; dx += 1) {
          const sourceIndex = ((y * factor + dy) * source.width + (x * factor + dx)) * 4

          r += source.data[sourceIndex]
          g += source.data[sourceIndex + 1]
          b += source.data[sourceIndex + 2]
          a += source.data[sourceIndex + 3]
        }
      }

      const destIndex = (y * width + x) * 4
      downsampled.data[destIndex] = Math.round(r / samples)
      downsampled.data[destIndex + 1] = Math.round(g / samples)
      downsampled.data[destIndex + 2] = Math.round(b / samples)
      downsampled.data[destIndex + 3] = Math.round(a / samples)
    }
  }

  return downsampled
}

async function initialize(sceneId: string): Promise<void> {
  await device.launchApp()

  const sceneNav = element(by.id(`scene-nav-${sceneId}`))
  await waitFor(sceneNav).toBeVisible().withTimeout(10000)
  await sceneNav.tap()
}

async function enable(navTestId: string, targetTestId: string): Promise<void> {
  await element(by.id(navTestId)).tap()
  await waitFor(element(by.id(targetTestId))).toBeVisible().withTimeout(10000)
}

async function match(targetTestId: string, group: string, name: string): Promise<void> {
  const screenshotPath = await device.takeScreenshot(targetTestId)
  const screenshot = PNG.sync.read(readFileSync(screenshotPath))

  // device.takeScreenshot() returns raw device pixels, but getAttributes().frame comes back in
  // points on iOS (and, empirically, already in pixels on Android) - deriving the scale from
  // the full-screen root's own frame works on both, rather than assuming either unit.
  const rootFrame = await getElementFrame(VISUAL_SCENE_ROOT_TEST_ID)
  const scale = screenshot.width / rootFrame.width

  const targetFrame = await getElementFrame(targetTestId)

  const croppedScreenshot = cropPng(screenshot, {
    x: Math.round(targetFrame.x * scale),
    y: Math.round(targetFrame.y * scale),
    width: Math.round(targetFrame.width * scale),
    height: Math.round(targetFrame.height * scale),
  })

  const roundedScale = Math.round(scale)
  const normalizedScreenshot = roundedScale > 1 ? downsamplePng(croppedScreenshot, roundedScale) : croppedScreenshot

  const testPath = expect.getState().testPath as string
  const snapshotsDir = join(dirname(testPath), 'snapshots')

  expect(PNG.sync.write(normalizedScreenshot)).toMatchImageSnapshot({
    customSnapshotIdentifier: `${group}/${name}.${DEVICE_SUFFIXES[device.getPlatform()]}`,
    customSnapshotsDir: snapshotsDir,
  })
}

function getFixtures(): Pick<VisualDriver, 'initialize' | 'enable' | 'match'> {
  return { initialize, enable, match }
}

// `setup` runs once per `describe` (Jest's `beforeAll`), not per test - relaunching the app
// (`device.launchApp()`, inside `initialize`) before every case would be far slower than the
// single `beforeEach` fresh-page cost `playwright.setup.ts`'s `test.setup` pays instead.
export const test: SnapshotTest = Object.assign(
  (name: string, fn: (fixtures: Pick<VisualDriver, 'initialize' | 'enable' | 'match'>) => Promise<void>) => {
    it(name, () => fn(getFixtures()))
  },
  {
    describe,
    setup: (fn: (fixtures: Pick<VisualDriver, 'initialize' | 'enable' | 'match'>) => Promise<void>) => {
      beforeAll(() => fn(getFixtures()))
    },
  },
)
