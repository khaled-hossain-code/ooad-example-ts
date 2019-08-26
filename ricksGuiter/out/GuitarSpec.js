"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuitarSpec = /** @class */ (function () {
    function GuitarSpec(builder, model, type, numStrings, backWood, topWood) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.numStrings = numStrings;
        this.backWood = backWood;
        this.topWood = topWood;
    }
    GuitarSpec.prototype.getBuilder = function () {
        return this.builder;
    };
    GuitarSpec.prototype.getModel = function () {
        return this.model;
    };
    GuitarSpec.prototype.getType = function () {
        return this.type;
    };
    GuitarSpec.prototype.getBackWood = function () {
        return this.backWood;
    };
    GuitarSpec.prototype.getTopWood = function () {
        return this.topWood;
    };
    GuitarSpec.prototype.getNumStrings = function () {
        return this.numStrings;
    };
    return GuitarSpec;
}());
exports.default = GuitarSpec;
//# sourceMappingURL=GuitarSpec.js.map