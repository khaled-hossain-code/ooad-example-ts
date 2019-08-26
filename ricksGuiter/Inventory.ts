import * as _ from "lodash";
import Guitar from "./Guitar";
import GuitarSpec from "./GuitarSpec";

export default class Inventory {
  guitars: Guitar[] = [];

  addGuitar(serialNumber: string, price: number, spec: GuitarSpec) {
    const guitar = new Guitar(serialNumber, price, spec);
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: string): Guitar {
    return _.find(this.guitars, guitar => guitar.getSerialNumber() === serialNumber);
  }

  search(spec: GuitarSpec): Guitar[] {
    return _.filter(this.guitars, (guitar) => {
      if (spec.getBuilder() !== guitar.getBuilder() && !_.isEmpty(spec.getBuilder()) && spec.getBuilder() !== null) { return false; }
      if (spec.getModel() !== guitar.getModel() && !_.isEmpty(spec.getModel()) && spec.getModel() !== null) { return false; }
      if (spec.getType() !== guitar.getType() && !_.isEmpty(spec.getType()) && spec.getType() !== null) { return false; }
      if (spec.getTopWood() !== guitar.getTopWood() && !_.isEmpty(spec.getTopWood()) && spec.getTopWood() !== null) { return false; }
      if (spec.getBackWood() !== guitar.getBackWood() && !_.isEmpty(spec.getBackWood()) && spec.getBackWood() !== null) { return false; }
      return true;
    });
  }
}
