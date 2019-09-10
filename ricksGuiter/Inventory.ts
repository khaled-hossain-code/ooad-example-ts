import * as _ from "lodash";
import Guitar from "./Guitar";
import Mandolin from "./Mandolin";
import GuitarSpec from "./GuitarSpec";
import MandolinSpec from "./MandolinSpec";
import InstrumentSpec from "./InstrumentSpec";
import Instrument from "./Instrument";

export default class Inventory {
  instruments: Instrument[] = [];

  addInstrument(serialNumber: string, price: number, spec: InstrumentSpec) {
    let instrument: Instrument;

    if(spec instanceof GuitarSpec){
      instrument = new Guitar(serialNumber, price, <GuitarSpec> spec);
    }

    if(spec instanceof MandolinSpec){
      instrument = new Mandolin(serialNumber, price, <MandolinSpec> spec);
    }

    this.instruments.push(instrument);
  }

  getInstrument(serialNumber: string): Instrument {
    return _.find(this.instruments, instrument => instrument.getSerialNumber() === serialNumber);
  }

  search(searchSpec: InstrumentSpec): Instrument[] {
    return _.filter(this.instruments, (instrument) => {
      return instrument.getSpec().matches(searchSpec);
    });
  }
}
