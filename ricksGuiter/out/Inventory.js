"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Guitar_1 = require("./Guitar");
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.guitars = [];
    }
    Inventory.prototype.addGuitar = function (serialNumber, price, spec) {
        var guitar = new Guitar_1.default(serialNumber, price, spec);
        this.guitars.push(guitar);
    };
    Inventory.prototype.getGuitar = function (serialNumber) {
        return lodash_1.default.find(this.guitars, function (guitar) { return guitar.serialNumber === serialNumber; });
    };
    Inventory.prototype.search = function (spec) {
        return lodash_1.default.filter(this.guitars, function (g) {
            if (spec.getBuilder() !== g.getBuilder() && !lodash_1.default.isEmpty(spec.getBuilder()) && spec.getBuilder() !== null) {
                return false;
            }
            if (spec.getModel() !== g.getModel() && !lodash_1.default.isEmpty(spec.getModel()) && spec.getModel() !== null) {
                return false;
            }
            if (spec.getType() !== g.getType() && !lodash_1.default.isEmpty(spec.getType()) && spec.getType() !== null) {
                return false;
            }
            if (spec.getTopWood() !== g.getTopWood() && !lodash_1.default.isEmpty(spec.getTopWood()) && spec.getTopWood() !== null) {
                return false;
            }
            if (spec.getBackWood() !== g.getBackWood() && !lodash_1.default.isEmpty(spec.getBackWood()) && spec.getBackWood() !== null) {
                return false;
            }
            return true;
        });
    };
    return Inventory;
}());
exports.default = Inventory;
//# sourceMappingURL=Inventory.js.map