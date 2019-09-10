import * as _ from "lodash";
import Guitar from "./Guitar";
import GuitarSpec from "./GuitarSpec";
import InstrumentSpec from "./InstrumentSpec";

export default class Inventory {
  guitars: Guitar[] = [];

  addInstrument(serialNumber: string, price: number, spec: InstrumentSpec) {
    const guitar = new Guitar(serialNumber, price, spec);
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: string): Guitar {
    return _.find(this.guitars, guitar => guitar.getSerialNumber() === serialNumber);
  }

  search(searchSpec: GuitarSpec): Guitar[] {
    return _.filter(this.guitars, (guitar) => {
      return guitar.getSpec().matches(searchSpec);
    });
  }
}
