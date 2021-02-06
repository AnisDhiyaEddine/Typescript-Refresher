import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharachtersCollection';
import { Sorter } from './Sort';

const numbersCollection = new NumbersCollection([
	10,
	-1,
	5,
	2,
]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

/* const charactersCollection = new CharactersCollection(
	'XaaZy',
);

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
 */
