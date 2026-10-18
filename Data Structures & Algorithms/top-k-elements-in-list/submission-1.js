class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

      topKFrequent(nums, k) {
        let result = [];
        let hashMap = new Map();
        const buckets = new Array(nums.length + 1)

        for (let num of nums) {
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        for (let [nums, freq] of hashMap) {
            if (!buckets[freq]) {
                buckets[freq] = []
            }

            buckets[freq].push(nums)
        }


        for (let i = buckets.length - 1; i >= 1; i--) {
            if (buckets[i]) {
                for (let num of buckets[i]) {
                    result.push(num)
                }

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
