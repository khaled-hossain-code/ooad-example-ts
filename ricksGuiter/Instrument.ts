import InstrumentSpec from "./InstrumentSpec";

export default abstract class Instrument {
  constructor(
    private serialNumber: string,
    private price: number,
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
