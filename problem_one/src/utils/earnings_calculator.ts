import { Job } from './interface';

export function calculateEarnings(jobs: Job[]): [number, number] {
	let johnsJobs: Job[] = [];
	jobs.sort((a, b) => b.profit - a.profit); // Sort jobs by profit
	johnsJobs.push(jobs.shift()!);
	jobs.sort((a, b) => a.endTime - b.endTime);
	const remainingJobs: Job[] = [];
	for (let i = 0; i < jobs.length; i++) {
		for (let j = 0; j < johnsJobs.length; j++) {
			if (
				jobs[i].startTime >= johnsJobs[j].endTime ||
				jobs[i].endTime <= johnsJobs[j].startTime
			) {
				johnsJobs.push(jobs[i]);
				break;
			}
			if (j === johnsJobs.length - 1) {
				remainingJobs.push(jobs[i]);
			}
		}
	}
	const remainingJobsEarnings = remainingJobs.reduce(
		(sum, job) => sum + job.profit,
		0
	);
	return [remainingJobs.length, remainingJobsEarnings];
}
