const carMakers = [ 'peugeot', 'renault', 'ford' ];
const dates = [ new Date(), new Date() ];

const carsByMaker: string[][] = []; // Array of string arrays

carsByMaker.push([ '206', '308' ]);

//Help with inference when extracting values
const aCar = carMakers[0];
const carBy = carsByMaker.pop();

//Help with map
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

//Flexible types
const importantDays: (string | Date)[] = [];
importantDays.push('heyy this is important :(');
importantDays.push(new Date());
