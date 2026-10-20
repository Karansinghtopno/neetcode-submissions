class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(1);
        let prefixProduct = 1;
        let suffixProduct = 1;

        //left product
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixProduct;  
            prefixProduct *= nums[i]; 
        }

        //right product 
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= suffixProduct; 
            suffixProduct *= nums[i];
        }

        return result;

    }
}
