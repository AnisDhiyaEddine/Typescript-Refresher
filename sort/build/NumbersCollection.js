"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.swap = function (leftHand, rightHand) {
        var temp = this.data[leftHand];
        this.data[leftHand] = this.data[rightHand];
        this.data[rightHand] = temp;
    };
    NumbersCollection.prototype.compare = function (leftHand, rightHand) {
        return this.data[leftHand] > this.data[rightHand];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
