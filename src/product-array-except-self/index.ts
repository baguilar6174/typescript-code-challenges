export function productExceptSelf(nums: number[]): number[] {
	const answer: number[] = Array(nums.length).fill(1);

	// Complexity O(n²)

	/* for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i !== j) answer[i] *= nums[j];
		}
	} */

	// Complexity O(n)

	let left = 1;
	for (let i = 0; i < nums.length; i++) {
		answer[i] = answer[i] * left;
		left = left * nums[i];
	}

	let right = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] *= right;
		right *= nums[i];
	}

	return answer;
}

const case1 = productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]
const case2 = productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]

console.log({ case1, case2 });
