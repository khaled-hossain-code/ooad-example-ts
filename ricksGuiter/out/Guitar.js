"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guitar = /** @class */ (function () {
    function Guitar(serialNumber, price, spec) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = spec;
    }
    Guitar.prototype.getSerialNumber = function () {
        return this.serialNumber;
    };
    Guitar.prototype.getPrice = function () {
        return this.price;
    };
    Guitar.prototype.setPrice = function (price) {
        this.price = price;
    };
    Guitar.prototype.getSpec = function () {
        return this.spec;
    };
    Guitar.prototype.getBuilder = function () {
        return this.spec.getBuilder();
    };
    Guitar.prototype.getModel = function () {
        return this.spec.getModel();
    };
    Guitar.prototype.getType = function () {
        return this.spec.getType();
    };
    Guitar.prototype.getBackWood = function () {
        return this.spec.getBackWood();
    };
    Guitar.prototype.getTopWood = function () {
        return this.spec.getTopWood();
    };
    Guitar.prototype.getNumStrings = function () {
        return this.spec.getNumStrings();
    };
    return Guitar;
}());
exports.default = Guitar;
//# sourceMappingURL=Guitar.js.map