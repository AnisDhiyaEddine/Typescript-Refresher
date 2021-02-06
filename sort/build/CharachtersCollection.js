"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var Sort_1 = require("./Sort");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sort_1.Sorter));
exports.CharactersCollection = CharactersCollection;
