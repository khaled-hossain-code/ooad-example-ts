import Instrument from "./Instrument";
import MandolinSpec from "./MandolinSpec";

export default class Mandolin extends Instrument {
  constructor(serialNumber: string, price: number, spec: MandolinSpec) {
    super(serialNumber, price, spec);
  }
}
