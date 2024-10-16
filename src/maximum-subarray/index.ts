function maxSubArray(nums: number[]): number {
	let currentMax = nums[0]; // Max sum of subarray ending at current position
	let globalMax = nums[0]; // Global max sum of any subarray found so far

	for (let i = 1; i < nums.length; i++) {
		// Either start a new subarray with nums[i] or extend the existing subarray
		currentMax = Math.max(nums[i], currentMax + nums[i]);
		// Update globalMax if currentMax is greater than globalMax
		globalMax = Math.max(globalMax, currentMax);
	}

	return globalMax;
}

const maxSubArrayCase1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
const maxSubArrayCase2 = maxSubArray([1]); // 1
const maxSubArrayCase3 = maxSubArray([5, 4, -1, 7, 8]); // 23

console.log({ maxSubArrayCase1, maxSubArrayCase2, maxSubArrayCase3 });
