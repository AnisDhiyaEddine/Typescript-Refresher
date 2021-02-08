import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

let data = new CsvFileReader('football.csv');
data.read();
var manUnitedWins = 0;

for (let match of data.data) {
	if (
		match[1] === 'Man United' &&
		match[5] === MatchResult['homeWin']
	) {
		manUnitedWins++;
	}
	if (
		match[2] === 'Man United' &&
		match[5] === MatchResult['awayWin']
	) {
		manUnitedWins++;
	}
}
