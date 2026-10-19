class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoding = ''
        for (let str of strs) {
            encoding += str.length + "#" + str
        }

        return encoding;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
     decode(str) {

        let result = [];
        let start = 0;
        let end = str.length;

        while (start < end) {

            // read the length
            let len = ''
            while (str[start] !== '#') {
                len += str[start];
                start++;
            }

            len = Number(len);

            // skip delimter
            start++;

            // extrract the manay Character
            let word = str.slice(start, start + len);

            result.push(word);

            //move pointer
            start = start + len;
        }

        return result;

    }
}
