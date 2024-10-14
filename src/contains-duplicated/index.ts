function containsDuplicate(nums: number[]): boolean {
	const numSet = new Set();
	for (const n of nums) {
		if (numSet.has(n)) return true;
		numSet.add(n);
	}
	return false;
}

const containsDuplicateCase1 = containsDuplicate([1, 2, 3, 1]); // true
const containsDuplicateCase2 = containsDuplicate([1, 2, 3, 4]); // false
const containsDuplicateCase3 = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true

console.log({ containsDuplicateCase1, containsDuplicateCase2, containsDuplicateCase3 });
