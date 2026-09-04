import { expect } from '@jest/globals'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

/**
 * Detox overwrites the global `expect` with its own element-assertion DSL
 * (`expect(element(...)).toBeVisible()`), so Jest's own value-matcher
 * `expect` — the one `.extend()` and `toMatchImageSnapshot` need — has to
 * be imported explicitly from `@jest/globals` rather than relying on the
 * ambient global.
 */
expect.extend({ toMatchImageSnapshot })
