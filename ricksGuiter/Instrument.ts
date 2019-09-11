import InstrumentSpec from "./InstrumentSpec";
import { InstrumentType } from "./enums/enums";

export default class Instrument {
  constructor(
    private serialNumber: string,
    private price: number,
    private type: InstrumentType,
    private spec: InstrumentSpec
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

  getSpec(): InstrumentSpec {
    return this.spec;
  }
}
