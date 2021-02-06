"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sort_1 = require("./Sort");
var numbersCollection = new NumbersCollection_1.NumbersCollection([
    10,
    -1,
    5,
    2,
]);
var sorter = new Sort_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
/* const charactersCollection = new CharactersCollection(
    'XaaZy',
);

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
 */
