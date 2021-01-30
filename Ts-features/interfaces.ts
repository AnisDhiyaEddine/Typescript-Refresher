interface Reportable {
	summary(): string;
}

const person = {
	name: 'This is a person',
	summary(): string {
		return this.name;
	},
};
const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(person);
