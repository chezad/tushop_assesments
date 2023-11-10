import { Goodie } from './interface';

/**
 *
 * @param goodies Array of goodies
 * @param number_of_employees Number of employees to be distributed to
 * @returns Object containing the selected goodies and the difference between the highest and lowest price
 */
export const calculateMinPriceDiff = (
	goodies: Goodie[],
	number_of_employees: number
): { goodies: Goodie[]; difference: number } | null => {
	if (number_of_employees < 1 || number_of_employees > goodies.length) {
		return null;
	}

	goodies.sort((a, b) => a.price - b.price);

	let minDifference = Infinity;
	let selectedGoodies: Goodie[] = [];

	for (let i = 0; i <= goodies.length - number_of_employees; i++) {
		const difference =
			goodies[i + number_of_employees - 1].price - goodies[i].price;
		if (difference < minDifference) {
			minDifference = difference;
			selectedGoodies = goodies.slice(i, i + number_of_employees);
		}
	}

	return { goodies: selectedGoodies, difference: minDifference };
};
