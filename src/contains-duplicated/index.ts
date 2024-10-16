export function containsDuplicate(nums: number[]): boolean {
	const numSet = new Set();
	for (const n of nums) {
		if (numSet.has(n)) return true;
		numSet.add(n);
	}
	return false;
}

const case1 = containsDuplicate([1, 2, 3, 1]); // true
const case2 = containsDuplicate([1, 2, 3, 4]); // false
const case3 = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true

console.log({ case1, case2, case3 });
