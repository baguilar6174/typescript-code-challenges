export function maxSubArray(nums: number[]): number {
	let currentMax = nums[0]; // Max sum of subarray ending at current position
	let globalMax = nums[0]; // Global max sum of any subarray found so far

	// Kadane's Algorithm

	for (let i = 1; i < nums.length; i++) {
		// Either start a new subarray with nums[i] or extend the existing subarray
		currentMax = Math.max(nums[i], currentMax + nums[i]);
		// Update globalMax if currentMax is greater than globalMax
		globalMax = Math.max(globalMax, currentMax);
	}

	return globalMax;
}

const case1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
const case2 = maxSubArray([1]); // 1
const case3 = maxSubArray([5, 4, -1, 7, 8]); // 23

console.log({ case1, case2, case3 });
