import type { FractionValue } from './fraction.types'

// Helps to keep fraction constants better organized.
export class Fraction {
  private readonly value: number

  constructor(value: number) {
    this.value = value
  }

  toValue(): FractionValue {
    return this.value
  }
}
