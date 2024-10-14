# Two Sum

**complexity**: easy<br/>
**topics**: array, hash table

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to_ `target`. You may assume that each input would have **_exactly one solution_**, and you may not use the _same_ element twice. You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
Output: Because nums[1] + nums[2] == 6, we return [1, 2].
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
Output: Because nums[0] + nums[1] == 6, we return [0, 1].
```

**Constraints:**

- `1 <= nums.length <= 100`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- `nums` is guaranteed to have unique elements for the problem definition.

**Follow up:** Can you figure out how to solve it without using extra memory?
