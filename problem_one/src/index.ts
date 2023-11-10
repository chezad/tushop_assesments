import { calculateEarnings } from './utils/earnings_calculator';
import { Job } from './utils/interface';
import { getJobCount, getJobDetails } from './utils/io';

const runApp = async () => {
	let jobCount: number = await getJobCount();
	let jobs: Job[] = [];
	let i = 1;
	while (i <= jobCount) {
		const jobDetails = await getJobDetails(i);
		jobs = [...jobs, jobDetails];
		i++;
	}
	const earnings = calculateEarnings(jobs);
	console.log('Tasks: ', earnings[0]);
	console.log('Earnings: ', earnings[1]);
	process.exit();
};

runApp();
