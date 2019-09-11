import * as _ from "lodash";
import Inventory from "../Inventory";
import { Builder, Type, Wood, InstrumentType } from "../enums/enums";
import InstrumentSpec from "../InstrumentSpec";
import Instrument from "../Instrument";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const properties = {
  builder: Builder.FENDER,
  model: "Stratocastor",
  type: Type.ELECTRIC,
  numOfString: 6,
  frontWood: Wood.ALDER,
  backwood: Wood.ALDER
};
const whatErinLikes = new InstrumentSpec(properties);
const guitars: Instrument[] = inventory.search(whatErinLikes);

if (_.isEmpty(guitars)) {
  console.log("Sorry, Erin, we have nothing for you.");
} else {
  for (const guitar of guitars) {
    console.log("We found");
    console.log(guitar);
  }
}

function initializeInventory(inventory: Inventory) {
  const guitarSpec1 = new InstrumentSpec({
    builder: Builder.FENDER,
    model: "Stratocastor",
    type: Type.ELECTRIC,
    numOfString: 6,
    frontWood: Wood.ALDER,
    backwood: Wood.ALDER
  });

  inventory.addInstrument(
    "V95693",
    1499.95,
    InstrumentType.GUITAR,
    guitarSpec1
  );
}
