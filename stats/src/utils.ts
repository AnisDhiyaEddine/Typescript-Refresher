export let parseDate = (date: string): Date => {
	'28/10/2000';
	let dateArr = date
		.split('/')
		.map((field: string): number => parseInt(field));
	return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
