import { faker } from '@faker-js/faker'
import { Color } from './color'
import type { RGBColorValue } from './color.types'
import { ColorFormat } from './constants'

describe('@/helpers/color', () => {
  describe('Color', () => {
    it('exposes Format static property', () => {
      expect(Color.Format).toBe(ColorFormat)
    })

    it('defaults to rgb format', () => {
      const r = faker.number.int({ min: 0, max: 255 })
      const g = faker.number.int({ min: 0, max: 255 })
      const b = faker.number.int({ min: 0, max: 255 })
      const color = new Color(r, g, b)
      expect(color.toValue()).toBe(`rgb(${r},${g},${b})`)
    })

    describe('rgb format', () => {
      it('returns rgb color string', () => {
        const r = faker.number.int({ min: 0, max: 255 })
        const g = faker.number.int({ min: 0, max: 255 })
        const b = faker.number.int({ min: 0, max: 255 })
        const color = new Color(r, g, b, ColorFormat.RGB)
        expect(color.toValue()).toBe(`rgb(${r},${g},${b})`)
      })

      it('handles zero components', () => {
        const color = new Color(0, 0, 0)
        expect(color.toValue()).toBe('rgb(0,0,0)')
      })
    })

    describe('transparent format', () => {
      it('returns transparent string', () => {
        const color = new Color(0, 0, 0, ColorFormat.TRANSPARENT)
        expect(color.toValue()).toBe('transparent')
      })
    })

    describe('format', () => {
      it('exposes rgb format by default', () => {
        const color = new Color(0, 0, 0)
        expect(color.format).toBe(ColorFormat.RGB)
      })

      it('exposes the configured format', () => {
        const color = new Color(0, 0, 0, ColorFormat.TRANSPARENT)
        expect(color.format).toBe(ColorFormat.TRANSPARENT)
      })
    })

    describe('r', () => {
      it('exposes the configured red component', () => {
        const r = faker.number.int({ min: 0, max: 255 })
        const color = new Color(r, 0, 0)
        expect(color.r).toBe(r)
      })
    })

    describe('g', () => {
      it('exposes the configured green component', () => {
        const g = faker.number.int({ min: 0, max: 255 })
        const color = new Color(0, g, 0)
        expect(color.g).toBe(g)
      })
    })

    describe('b', () => {
      it('exposes the configured blue component', () => {
        const b = faker.number.int({ min: 0, max: 255 })
        const color = new Color(0, 0, b)
        expect(color.b).toBe(b)
      })
    })

    describe('from', () => {
      it('creates rgb color from rgb string', () => {
        const r = faker.number.int({ min: 0, max: 255 })
        const g = faker.number.int({ min: 0, max: 255 })
        const b = faker.number.int({ min: 0, max: 255 })
        const value = `rgb(${r},${g},${b})` as RGBColorValue
        const color = Color.from(value)
        expect(color.toValue()).toBe(value)
      })

      it('creates transparent color from transparent string', () => {
        const color = Color.from('transparent')
        expect(color.toValue()).toBe('transparent')
      })
    })
  })
})
