import fs from 'fs';

export abstract class CsvFileReader<T> {
	abstract rowMap(row: string[]): T;
	public data: T[] = [];
	constructor(public filename: string) {}
	read() {
		this.data = fs
			.readFileSync('football.csv', {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			})
			.map(this.rowMap);
	}
}
