import fs from 'fs';
import { MatchResult } from './MatchResult';
import { parseDate } from './utils';

type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];
export abstract class CsvFileReader {
	abstract rowMap(row: string[]): MatchData;
	public data: MatchData[] = [];
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
