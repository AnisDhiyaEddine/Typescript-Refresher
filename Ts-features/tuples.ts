const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = [ 'dark', true, 40 ];
//Tuples aren't that beneficial ...
