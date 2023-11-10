import { describe, it } from 'node:test';
import { calculateMinPriceDiff } from '../utils/difference_calculator';

import assert from 'node:assert';
import { Goodie } from '../utils/interface';

describe('calculateMinPriceDiff function', () => {
	it('Should return correct difference and goodies when employees are 2', () => {
		const goodies: Goodie[] = [
			{
				name: 'Goodie1',
				price: 10,
			},
			{
				name: 'Goodie2',
				price: 20,
			},
			{
				name: 'Goodie3',
				price: 30,
			},
		];

		const result = calculateMinPriceDiff(goodies, 2);
		assert.deepStrictEqual(result, {
			goodies: [goodies[0], goodies[1]],
			difference: 10,
		});
	});

	it('Should return a difference of 20 when valid input and zero difference', () => {
		const goodies: Goodie[] = [
			{
				name: 'Goodie1',
				price: 10,
			},
			{
				name: 'Goodie2',
				price: 20,
			},
			{
				name: 'Goodie3',
				price: 30,
			},
		];

		const result = calculateMinPriceDiff(goodies, 3);

		assert.deepStrictEqual(result, {
			goodies: goodies,
			difference: 20,
		});
	});

	it('Should return null when number_of_employees is less than 1', () => {
		const goodies: Goodie[] = [
			{
				name: 'Goodie1',
				price: 10,
			},
			{
				name: 'Goodie2',
				price: 20,
			},
			{
				name: 'Goodie3',
				price: 30,
			},
		];

		const result = calculateMinPriceDiff(goodies, 0);

		assert.strictEqual(result, null);
	});

	it('Should return null when number_of_employees greater than goodies.length', () => {
		const goodies: Goodie[] = [
			{
				name: 'Goodie1',
				price: 10,
			},
			{
				name: 'Goodie2',
				price: 20,
			},
			{
				name: 'Goodie3',
				price: 30,
			},
		];

		const result = calculateMinPriceDiff(goodies, 4);

		assert.strictEqual(result, null);
	});
});
