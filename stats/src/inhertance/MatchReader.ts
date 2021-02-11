import { CsvFileReader } from './CsvFileReader';
import { parseDate } from '../utils';
import { MatchResult, MatchData } from '../MatchData';

export class MatchReader extends CsvFileReader<MatchData> {
	constructor(public path: string) {
		super(path);
	}
	rowMap(row: string[]): MatchData {
		return [
			parseDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResult,
			row[6],
		];
	}
}
