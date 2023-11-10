import { ValidationResult } from './interface';

export const validateTime = (time: string): ValidationResult => {
	const parsedNumber = parseInt(time);
	if (isNaN(parsedNumber)) {
		return { isValid: false, message: '🚨 Please enter numbers only...' };
	}
	if (time.length !== 4) {
		return { isValid: false, message: '⛔️ Invalid Time Format' };
	}
	if (time < '0900' || time > '2359') {
		return {
			isValid: false,
			message: '🚨 Please enter a number between 0900 and 2359...',
		};
	}
	if (parsedNumber < 1) {
		return {
			isValid: false,
			message: '🚨 Please enter a number greater than 0...',
		};
	}
	return { isValid: true };
};

export const validateProfit = (profit: string): ValidationResult => {
	const parsedNumber = parseInt(profit);
	if (isNaN(parsedNumber)) {
		return { isValid: false, message: '🚨 Please enter a number...' };
	}
	if (parsedNumber < 1) {
		return {
			isValid: false,
			message: '🚨 Please enter a number greater than 0...',
		};
	}
	return { isValid: true };
};

export const validateJobCount = (jobCount: string): ValidationResult => {
	const parsedNumber = parseInt(jobCount);
	if (isNaN(parsedNumber)) {
		return { isValid: false, message: '🚨 Please enter a number...' };
	}
	if (parsedNumber < 1) {
		return {
			isValid: false,
			message: '🚨 Please enter a number greater than 0...',
		};
	}
	if (parsedNumber > 100) {
		return {
			isValid: false,
			message: '🚨 Please enter a number less than 100...',
		};
	}
	return { isValid: true };
};
