export interface Job {
	startTime: number;
	endTime: number;
	profit: number;
}

export interface ValidationResult {
	isValid: boolean;
	message?: string;
}

export interface input {}
