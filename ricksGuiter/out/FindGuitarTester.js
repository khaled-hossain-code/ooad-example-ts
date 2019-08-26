"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Inventory_1 = require("./Inventory");
var GuitarSpec_1 = require("./GuitarSpec");
var enums_1 = require("./enums");
var inventory = new Inventory_1.default();
initializeInventory(inventory);
var whatErinLikes = new GuitarSpec_1.default(enums_1.Builder.FENDER, "Stratocastor", enums_1.Type.ELECTRIC, 6, enums_1.Wood.ALDER, enums_1.Wood.ALDER);
var guitars = inventory.search(whatErinLikes);
if (lodash_1.default.isEmpty(guitars)) {
    console.log("Sorry, Erin, we have nothing for you.");
}
else {
    for (var _i = 0, guitars_1 = guitars; _i < guitars_1.length; _i++) {
        var guitar = guitars_1[_i];
        console.log("We found");
        console.log(guitar);
    }
}
function initializeInventory(inventory) {
    var guitarSpec1 = new GuitarSpec_1.default(enums_1.Builder.FENDER, "Stratocastor", enums_1.Type.ELECTRIC, 6, enums_1.Wood.ALDER, enums_1.Wood.ALDER);
    inventory.addGuitar("V95693", 1499.95, guitarSpec1);
}
//# sourceMappingURL=FindGuitarTester.js.map