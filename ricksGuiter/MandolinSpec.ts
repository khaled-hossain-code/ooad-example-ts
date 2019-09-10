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

  matches(searchSpec: MandolinSpec): boolean {
    if (
      searchSpec.getBuilder() !== this.getBuilder() &&
      !_.isEmpty(searchSpec.getBuilder()) &&
      searchSpec.getBuilder() !== null
    ) {
      return false;
    }
    if (
      searchSpec.getModel() !== this.getModel() &&
      !_.isEmpty(searchSpec.getModel()) &&
      searchSpec.getModel() !== null
    ) {
      return false;
    }
    if (
      searchSpec.getType() !== this.getType() &&
      !_.isEmpty(searchSpec.getType()) &&
      searchSpec.getType() !== null
    ) {
      return false;
    }
    if (
      searchSpec.getStyle() !== this.getStyle() &&
      !_.isEmpty(searchSpec.getStyle()) &&
      searchSpec.getStyle() !== null
    ) {
      return false;
    }
    if (
      searchSpec.getTopWood() !== this.getTopWood() &&
      !_.isEmpty(searchSpec.getTopWood()) &&
      searchSpec.getTopWood() !== null
    ) {
      return false;
    }
    if (
      searchSpec.getBackWood() !== this.getBackWood() &&
      !_.isEmpty(searchSpec.getBackWood()) &&
      searchSpec.getBackWood() !== null
    ) {
      return false;
    }
    return true;
  }
}
