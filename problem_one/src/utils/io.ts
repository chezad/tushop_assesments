import { Job, ValidationResult } from './interface';
import { validateJobCount, validateProfit, validateTime } from './validator';

/**
 *
 * @param query The question to ask the user
 * @param validator A function that validates the user input
 * @returns The validation result. If the input is valid, isValid will be true, the input data is available and message will be empty. If the input is invalid, isValid will be false and message will contain the error message.
 */
const getUserInput = (
	query: string,
	validator: (T: string) => ValidationResult
): Promise<{ data: string; validation: ValidationResult }> => {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) => {
		readline.question(query, (data: string) => {
			readline.close();
			const validation = validator(data);
			resolve({ data, validation });
		});
	});
};

export const getJobCount = async (): Promise<number> => {
	const jobCount: number = await new Promise(async (resolve) => {
		const input = await getUserInput(
			'Enter number of jobs: ',
			validateJobCount
		);
		if (!input.validation.isValid) {
			console.log(input.validation.message);
			getJobCount();
			return;
		}
		resolve(parseInt(input.data));
	});
	return jobCount;
};

export const getJobDetails = async (jobNumber: number): Promise<Job> => {
	console.log(`Job ${jobNumber}:`);
	const startTime: number = await getStartTime();
	const endTime: number = await getEndTime(startTime);
	const profit: number = await getProfit();
	return { startTime, endTime, profit };
};

const getStartTime = async (): Promise<number> => {
	const input = await getUserInput(
		'Enter start time in 24 hour format (e.g. 9:00 AM = 0900): ',
		validateTime
	);
	if (!input.validation.isValid) {
		console.log(input.validation.message);
		getStartTime();
	}
	return parseInt(input.data);
};

const getEndTime = async (startTime: number): Promise<number> => {
	const input = await getUserInput(
		'Enter end time in 24 hour format (e.g. 9:00 AM = 0900): ',
		validateTime
	);
	if (!input.validation.isValid) {
		console.log(input.validation.message);
		getEndTime(startTime);
	}
	const endTimeAsInteger = parseInt(input.data);
	if (startTime >= endTimeAsInteger) {
		console.log('End time must be after the start time...');
		getEndTime(startTime);
	}
	return parseInt(input.data);
};

const getProfit = async (): Promise<number> => {
	const input = await getUserInput('Enter profit: ', validateProfit);
	if (!input.validation.isValid) {
		console.log(input.validation.message);
		getProfit();
	}
	return parseInt(input.data);
};
