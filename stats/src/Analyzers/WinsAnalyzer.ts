import { Analyzer } from '../Summary';
import { MatchData, MatchResult } from '../MatchData';

export class WinsAnalyzer implements Analyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0;

		for (let match of matches) {
			if (
				match[1] === this.team &&
				match[5] === MatchResult['homeWin']
			) {
				wins++;
			}
			if (
				match[2] === this.team &&
				match[5] === MatchResult['awayWin']
			) {
				wins++;
			}
		}
		return `total wins ${wins}`;
	}
}
