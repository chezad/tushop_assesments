import * as fs from 'fs';
import { calculateMinPriceDiff } from './utils/difference_calculator';
import { Goodie } from './utils/interface';

/**
 *
 *
 * @param inputFile The name of the input file
 * @param outputFile The name of the output file
 * @returns void
 */
const runApp = async (inputFile: string, outputFile: string) => {
	const inputText = fs.readFileSync(`src/files/input/${inputFile}`, 'utf8');
	const lines = inputText.split('\n');
	const numberOfEmployeesLine = parseInt(lines[0].split(':')[1]);

	const goodies: Goodie[] = [];
	for (let i = 2; i < lines.length; i++) {
		const [name, priceString] = lines[i].split(':');
		const price = parseInt(priceString.trim(), 10);
		goodies.push({ name: name.trim(), price });
	}

	const result = calculateMinPriceDiff(goodies, numberOfEmployeesLine);

	if (result) {
		let output = 'The goodies selected for distribution are:\n';
		for (const goodie of result.goodies) {
			output += `${goodie.name}: ${goodie.price}\n`;
		}
		output += `And the difference between the chosen goodie with highest price and the lowest price is ${result.difference}\n`;
		// create the output directory if it doesn't exist
		fs.mkdirSync('src/files/output', { recursive: true });
		fs.writeFileSync(`src/files/output/${outputFile}`, output, 'utf8');
	} else {
		console.error('Invalid input for the number of employees.');
	}
};

runApp('sample_input.txt', 'sample_output.txt');
