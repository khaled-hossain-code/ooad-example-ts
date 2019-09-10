import GuitarSpec from "./GuitarSpec";
import Instrument from "./Instrument";
import MandolinSpec from "./MandolinSpec";

export default class Mandolin extends Instrument {
  constructor(serialNumber: string, price: number, private spec: MandolinSpec) {
    super(serialNumber, price);
  }

  getSpec(): MandolinSpec {
    return this.spec;
  }
}
