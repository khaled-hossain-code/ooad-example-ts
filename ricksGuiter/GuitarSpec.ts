import { Builder, Type, Wood } from "./enums";
export default class GuitarSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private numStrings: number,
    private backWood: Wood,
    private topWood: Wood
  ) {}

  getBuilder(): Builder {
    return this.builder;
  }

  getModel(): String {
    return this.model;
  }

  getType(): Type {
    return this.type;
  }

  getBackWood(): Wood {
    return this.backWood;
  }

  getTopWood(): Wood {
    return this.topWood;
  }

  getNumStrings(): number {
    return this.numStrings;
  }
}
