export function maxProduct(nums: number[]): number {
	let currentMax = nums[0]; // Max product of subarray ending at current position
	let globalMax = nums[0]; // Global max product of any subarray found so far

	// Kadane's Algorithm

	for (let i = 1; i < nums.length; i++) {
		// Either start a new subarray with nums[i] or extend the existing subarray
		currentMax = Math.max(nums[i], currentMax * nums[i]);
		// Update globalMax if currentMax is greater than globalMax
		globalMax = Math.max(globalMax, currentMax);
	}

	return globalMax;
}

const case1 = maxProduct([2, 3, -2, 4]); // 6
const case2 = maxProduct([-2, 0, -1]); // 0

console.log({ case1, case2 });
