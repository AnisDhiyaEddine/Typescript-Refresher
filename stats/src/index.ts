import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

let reader = new CsvFileReader('./football.csv');
reader.read();
new MatchReader(reader);
var manUnitedWins = 0;

for (let match of reader.data) {
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

console.log(manUnitedWins);
