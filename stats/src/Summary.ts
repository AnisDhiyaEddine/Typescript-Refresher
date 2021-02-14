import { MatchData } from './MatchData';
import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { HtmlReport } from './ReportTargets/HtmlReport';
export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(
		public analyzer: Analyzer,
		public outputTarget: OutputTarget,
	) {}

	static printHtml(team: string) {
		return new Summary(
			new WinsAnalyzer(team),
			new HtmlReport(),
		);
	}

	buildAndPrintReport(matches: MatchData[]) {
		let output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
