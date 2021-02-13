import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { HtmlReport } from './ReportTargets/HtmlReport';

let reader = new CsvFileReader('./football.csv');
reader.read();

let matchReader = new MatchReader(reader);

let summary = new Summary(
	new WinsAnalyzer('Man United'),
	new HtmlReport(),
);

summary.buildAndPrintReport(matchReader.load());
