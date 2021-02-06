import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharachtersCollection';
import { Sorter } from './Sort';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
	10,
	-1,
	5,
	2,
]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
	'XaaZy',
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-1);
linkedList.add(5);
linkedList.add(2);

linkedList.sort();
linkedList.print();
