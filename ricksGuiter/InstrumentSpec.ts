import { Builder, Type, Wood } from "./enums/enums";
import * as _ from "lodash";

export default class InstrumentSpec {
  constructor(private properties:{} = {}) {}

  getProperty(property) {
    return this.properties[property];
  }

  getProperties() {
    return this.properties;
  }

  matches(searchSpec: InstrumentSpec): boolean {
    const properties = searchSpec.getProperties();

    for (let property in properties) {
      if (
        searchSpec.getProperty(property) !== this.getProperty(property) &&
        !_.isEmpty(searchSpec.getProperty(property)) &&
        searchSpec.getProperty(property) !== null
      ) {
        return false;
      }
    }
    return true;
  }
}
