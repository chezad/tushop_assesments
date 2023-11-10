import assert from 'node:assert';
import { describe, it } from 'node:test';
import { calculateEarnings } from '../utils/earnings_calculator';
import { ValidationResult } from '../utils/interface';
import {
	validateJobCount,
	validateProfit,
	validateTime,
} from '../utils/validator';
import { case1, case2, case4 } from './stub_data';

describe('The calculate earning funciton', () => {
	it('Should return 2 remaing tasks and 400 remaining earnings given overlaps', () => {
		const result = calculateEarnings(case1);
		assert.strictEqual(result[0], 2);
		assert.strictEqual(result[1], 400);
	});

	it('Should return 2 remaing tasks and 400 remaining earnings given overlaps', () => {
		const result = calculateEarnings(case2);
		assert.strictEqual(result[0], 2);
		assert.strictEqual(result[1], 400);
	});

	it('Should return 0 remaining tasks and 0 earnings given no overlaps', () => {
		const result = calculateEarnings(case4);
		assert.strictEqual(result[0], 0);
		assert.strictEqual(result[1], 0);
	});
});

describe('validateTime function', () => {
	it('Should return isValid as true for a correct time formate', () => {
		const result: ValidationResult = validateTime('1200');
		assert.strictEqual(result.isValid, true);
	});

	it('Should return invalid time format error for incorrect entries', () => {
		const result: ValidationResult = validateTime('12345');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '⛔️ Invalid Time Format');
	});

	it('Should return invalid time range error for errors outside of working time range', () => {
		const result: ValidationResult = validateTime('0800');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(
			result.message,
			'🚨 Please enter a number between 0900 and 2359...'
		);
	});

	it('Should return "please enter numbers only" for non integer entries', () => {
		const result: ValidationResult = validateTime('abcd');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '🚨 Please enter numbers only...');
	});
});

describe('validateProfit', () => {
	it('Should return isValid profit for correct entry', () => {
		const result: ValidationResult = validateProfit('100');
		assert.strictEqual(result.isValid, true);
	});

	it('Should return "Please enter a number..." for non integer inputs', () => {
		const result: ValidationResult = validateProfit('abc');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '🚨 Please enter a number...');
	});
});

describe('validateJobCount', () => {
	it('valid job count', () => {
		const result: ValidationResult = validateJobCount('50');
		assert.strictEqual(result.isValid, true);
	});

	it('invalid job count - not a number', () => {
		const result: ValidationResult = validateJobCount('abc');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '🚨 Please enter a number...');
	});

	it('invalid job count - less than 1', () => {
		const result: ValidationResult = validateJobCount('0');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(
			result.message,
			'🚨 Please enter a number greater than 0...'
		);
	});

	it('invalid job count - greater than 100', () => {
		const result: ValidationResult = validateJobCount('150');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(
			result.message,
			'🚨 Please enter a number less than 100...'
		);
	});
});
