import InstrumentSpec from "./InstrumentSpec";

export default abstract class Instrument {
  constructor(private serialNumber: string, private price: number) {}

  getSerialNumber(): string {
    return this.serialNumber;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  abstract getSpec(): InstrumentSpec;
}
