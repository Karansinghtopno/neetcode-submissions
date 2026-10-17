class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hashmap.has(diff)) {
                return [hashmap.get(diff), i]
            }
            else hashmap.set(nums[i], i)
        }
        return [];
    }
}
