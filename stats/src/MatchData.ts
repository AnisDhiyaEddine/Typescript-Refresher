export enum MatchResult {
	homeWin = 'H',
	awayWin = 'A',
	draw = 'D',
}

export type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];
