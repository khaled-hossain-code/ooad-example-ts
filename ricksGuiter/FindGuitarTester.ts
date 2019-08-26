import * as _ from "lodash";
import Inventory from "./Inventory";
import GuitarSpec from "./GuitarSpec";
import { Builder, Type, Wood } from "./enums";
import Guitar from "./Guitar";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new GuitarSpec(
  Builder.FENDER,
  "Stratocastor",
  Type.ELECTRIC,
  6,
  Wood.ALDER,
  Wood.ALDER
);

const guitars: Guitar[] = inventory.search(whatErinLikes);

if (_.isEmpty(guitars)) {
  console.log("Sorry, Erin, we have nothing for you.");
} else {
  for (const guitar of guitars) {
    console.log("We found");
    console.log(guitar);
  }
}

function initializeInventory(inventory: Inventory) {
  const guitarSpec1 = new GuitarSpec(
    Builder.FENDER,
    "Stratocastor",
    Type.ELECTRIC,
    6,
    Wood.ALDER,
    Wood.ALDER
  );
  inventory.addGuitar("V95693", 1499.95, guitarSpec1);
}
