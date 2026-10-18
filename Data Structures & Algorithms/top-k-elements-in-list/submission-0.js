class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        let result = [];
        let hashMap = new Map();

        for (let num of nums) {
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        let des = [...hashMap].sort((a, b) => b[1] - a[1]);

        console.log(des);

        return des.slice(0, k).map(item => item[0]);
    }
}
