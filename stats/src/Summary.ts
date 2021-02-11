import { MatchData } from './MatchData';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarger {
	print(report: string): void;
}

export class summary {
	constructor(
		public analyzer: Analyzer,
		public outputTarger: OutputTarger,
	) {}
}
