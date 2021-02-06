"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharachtersCollection_1 = require("./CharachtersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([
    10,
    -1,
    5,
    2,
]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharachtersCollection_1.CharactersCollection('XaaZy');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(10);
linkedList.add(-1);
linkedList.add(5);
linkedList.add(2);
linkedList.sort();
linkedList.print();
