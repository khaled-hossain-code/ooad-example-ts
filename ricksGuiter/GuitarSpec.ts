import { Builder, Type, Wood } from "./enums";
import * as _ from "lodash";
import InstrumentSpec from "./InstrumentSpec";

export default class GuitarSpec extends InstrumentSpec {
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    private numStrings: number,
    backWood: Wood,
    topWood: Wood
  ) {
    super(builder, model, type, backWood, topWood);
  }

  getNumStrings(): number {
    return this.numStrings;
  }

  matches(otherSpec: InstrumentSpec): boolean {
    if (!super.matches(otherSpec)) {
      return false;
    }

    if(!(otherSpec instanceof GuitarSpec)){
      return false;
    }

    const searchSpec: GuitarSpec = <GuitarSpec> otherSpec;

    if (
      searchSpec.getNumStrings() !== this.getNumStrings() &&
      !_.isEmpty(searchSpec.getNumStrings()) &&
      searchSpec.getNumStrings() !== null
    ) {
      return false;
    }

    return true;
  }
}
