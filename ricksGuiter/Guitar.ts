import GuitarSpec from "./GuitarSpec";
import { Builder, Type, Wood } from "./enums";
import Instrument from "./Instrument";

export default class Guitar extends Instrument {
  constructor(serialNumber: string, price: number, private spec: GuitarSpec) {
    super(serialNumber, price);
  }

  getSpec() {
    return this.spec;
  }

  getNumStrings(): number {
    return this.spec.getNumStrings();
  }
}
