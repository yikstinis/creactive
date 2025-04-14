// Helps to keep opactiy constants better organized.
export class Opacity {
  private readonly value: number

  constructor(value: number) {
    this.value = value
  }

  toValue(): number {
    return this.value
  }
}
