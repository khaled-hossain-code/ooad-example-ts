import GuitarSpec from "./GuitarSpec";
import Instrument from "./Instrument";

export default class Guitar extends Instrument {
  constructor(serialNumber: string, price: number, spec: GuitarSpec) {
    super(serialNumber, price, spec);
  }
}
