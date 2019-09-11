import * as _ from "lodash";
import InstrumentSpec from "./InstrumentSpec";
import Instrument from "./Instrument";
import { Type, InstrumentType } from "./enums/enums";

export default class Inventory {
  instruments: Instrument[] = [];

  addInstrument(
    serialNumber: string,
    price: number,
    instrumentType: InstrumentType,
    spec: InstrumentSpec
  ) {
    let instrument: Instrument;

    instrument = new Instrument(serialNumber, price, instrumentType, spec);
    this.instruments.push(instrument);
  }

  getInstrument(serialNumber: string): Instrument {
    return _.find(
      this.instruments,
      (instrument: Instrument) =>
        instrument.getSpec().getProperty(serialNumber) === serialNumber
    );
  }

  search(searchSpec: InstrumentSpec): Instrument[] {
    return _.filter(this.instruments, instrument => {
      return instrument.getSpec().matches(searchSpec);
    });
  }
}
