class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let hashMap = new Map();
        for(let str of strs){

            let freq = new Array(26).fill(0)

            for(let char of str){
                freq[char.charCodeAt(0)-97]++
            }

            const key = freq.join("#");

            if(!hashMap.has(key)){
                hashMap.set(key, [])
            }

            hashMap.get(key).push(str)
        }

    //    return Array.from(hashMap.values())
        return [...hashMap.values()]

    }
}
