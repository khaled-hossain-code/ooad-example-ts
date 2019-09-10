import { Builder, Type, Wood, Style } from "./enums";
import * as _ from "lodash";
import InstrumentSpec from "./InstrumentSpec";

export default class MandolinSpec extends InstrumentSpec {
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    private style: Style,
    backWood: Wood,
    topWood: Wood
  ) {
    super(builder, model, type, backWood, topWood);
  }

  getStyle(): Style {
    return this.style;
  }

  matches(otherSpec: InstrumentSpec): boolean {
    if (!super.matches(otherSpec)) {
      return false;
    }

    if(!(otherSpec instanceof MandolinSpec)){
      return false;
    }

    const searchSpec: MandolinSpec = <MandolinSpec> otherSpec;

    if (
      searchSpec.getStyle() !== this.getStyle() &&
      !_.isEmpty(searchSpec.getStyle()) &&
      searchSpec.getStyle() !== null
    ) {
      return false;
    }

    return true;
  }
}
