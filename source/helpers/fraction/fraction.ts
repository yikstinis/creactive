// Helps to keep fraction constants better organized.
export class Fraction {
  private readonly value: number

  constructor(value: number) {
    this.value = value
  }

  toValue(): number {
    return this.value
  }
}
