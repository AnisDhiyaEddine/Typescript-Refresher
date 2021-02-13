import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HtmlReport implements OutputTarget {
	print(report: string) {
		let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Report</title>
</head>
<body>
   <h1> Analysis report </h1>
    <div> ${report} </div>
</body>
</html>
    `;

		fs.writeFileSync('report.html', html);
	}
}
