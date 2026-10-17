class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (freq.has(nums[i])) {
                return true;
            }
            else freq.add(nums[i])

        }
        return false

    }
}
