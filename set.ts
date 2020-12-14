export class Set {
  private values: number[];
  constructor() {
    this.values = [];
  }
  has(value: number): boolean {
    return this.values[value] === 1;
  }

  add(value: number): this {
    if (this.values[value] !== 1) this.values[value] = 1;
    return this;
  }
}
