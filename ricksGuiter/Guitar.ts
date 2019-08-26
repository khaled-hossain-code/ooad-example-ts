import GuitarSpec from "./GuitarSpec";
import {Builder, Type, Wood} from "./enums";

export default class Guitar {
  constructor(
    private serialNumber: string,
    private price: number,
    private spec: GuitarSpec
  ) {}

  getSerialNumber(): string {
    return this.serialNumber;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getSpec(): GuitarSpec {
    return this.spec;
  }

  getBuilder(): Builder {
    return this.spec.getBuilder();
  }

  getModel(): String {
    return this.spec.getModel();
  }

  getType(): Type {
    return this.spec.getType();
  }

  getBackWood(): Wood {
    return this.spec.getBackWood();
  }

  getTopWood(): Wood {
    return this.spec.getTopWood();
  }

  getNumStrings(): number {
    return this.spec.getNumStrings();
  }
}
