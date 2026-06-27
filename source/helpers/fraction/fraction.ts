import type { FractionValue } from './fraction.types'

/**
 * Typed fraction value between 0 and 1.
 * Use to pass opacity, progress, or ratio values through component props without using raw numbers.
 */
export class Fraction {
  private readonly value: number

  constructor(value: number) {
    this.value = value
  }

  toValue(): FractionValue {
    return this.value
  }
}
