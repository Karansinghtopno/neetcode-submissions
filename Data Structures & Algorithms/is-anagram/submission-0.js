class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charMap1 = new Map();
        let charMap2 = new Map();

        if (s.length !== t.length) {
            return false
        }

        //add it to the map
        for (let i = 0; i < s.length; i++) {
            if (!charMap1.has(s[i])) {
                charMap1.set(s[i], 0)
            }
            else charMap1.set(s[i], (charMap1.get(s[i]) + 1))
        }

        // store in map
        for (let j = 0; j < t.length; j++) {
            if (!charMap2.has(t[j])) {
                charMap2.set(t[j], 0)
            }
            else charMap2.set(t[j], (charMap2.get(t[j]) + 1))

        }


        for (const [key, value] of charMap1) {
            if (!charMap2.has(key) || charMap2.get(key) !== value) {
                return false
            }

        }
        return true


    }
}
