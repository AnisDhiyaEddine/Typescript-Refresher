import { MatchData, MatchResult } from './MatchData';
import { parseDate } from './utils';

interface DataReader {
	read(): void;
	data: string[][];
}

export class MatchReader {
	constructor(public reader: DataReader) {}
	load(): MatchData[] {
		return this.reader.data.map(
			(row: string[]): MatchData => {
				return [
					parseDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6],
				];
			},
		);
	}
}
