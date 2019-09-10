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

  abstract matches(searchSpec: InstrumentSpec): boolean;
}
