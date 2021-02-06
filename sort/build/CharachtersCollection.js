"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftHand, rightHand) {
        return (this.data[leftHand].toLowerCase() >
            this.data[rightHand].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftHand, rightHand) {
        var chars = this.data.split('');
        var tempo = chars[leftHand];
        chars[leftHand] = chars[rightHand];
        chars[rightHand] = tempo;
        this.data = chars.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
