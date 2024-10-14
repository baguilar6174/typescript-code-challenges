function twoSum(nums: number[], target: number): number[] {
	const map: Record<number, number> = {};
	// This for produces: { numsValue: numsIndex, ... }
	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = i;
	}
	for (let i = 0; i < nums.length; i++) {
		const x = target - nums[i];
		if (Boolean(map[x]) && map[x] !== i) return [map[x], i];
	}
	return [];
}

const twoSumCase1 = twoSum([2, 7, 11, 15], 9); // [1, 0]
const twoSumCase2 = twoSum([3, 2, 4], 6); // [2, 1]
const twoSumCase3 = twoSum([3, 3], 6); // [1, 0]

console.log({ twoSumCase1, twoSumCase2, twoSumCase3 });
