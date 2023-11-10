import { Job } from '../utils/interface';

export const case1: Job[] = [
	{ startTime: 900, endTime: 1030, profit: 100 }, // 9:00 - 10:30
	{ startTime: 1000, endTime: 1200, profit: 500 }, // 10:00 - 12:00
	{ startTime: 1100, endTime: 1200, profit: 300 }, // 11:00 - 12:00
];

export const case2: Job[] = [
	{ startTime: 900, endTime: 1000, profit: 250 },
	{ startTime: 945, endTime: 1200, profit: 550 },
	{ startTime: 1130, endTime: 1500, profit: 150 },
];

// Sequential times (no overlap)
export const case4: Job[] = [
	// 16: 00 - 17:00
	{ startTime: 1600, endTime: 1700, profit: 500 },
	// 17:00 - 18:00
	{ startTime: 1700, endTime: 1800, profit: 700 },
	// 18:00 - 19:00
	{ startTime: 1800, endTime: 1900, profit: 300 },
	// 19:00 - 20:00
	{ startTime: 1900, endTime: 2000, profit: 100 },
	// 20:00 - 21:00
	{ startTime: 2000, endTime: 2100, profit: 200 },
	// 21:00 - 22:00
	{ startTime: 2100, endTime: 2200, profit: 400 },
];
