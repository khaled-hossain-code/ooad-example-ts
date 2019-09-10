import { Builder, Type, Wood } from "./enums";
import * as _ from "lodash";

export default abstract class InstrumentSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private backWood: Wood,
    private topWood: Wood
  ) {}

  getBuilder(): Builder {
    return this.builder;
  }

  getModel(): String {
    return this.model;
  }

  getType(): Type {
    return this.type;
  }

  getBackWood(): Wood {
    return this.backWood;
  }

  getTopWood(): Wood {
    return this.topWood;
  }

  matches(searchSpec: InstrumentSpec): boolean {
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
