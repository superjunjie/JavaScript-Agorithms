/**
 * @param {string} s
 * @return {string}
 * @link https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case/
 */
var greatestLetter = function (s) {
    let ans = ''
    let set = new Set()
    for (const c of s) {
        const asiic = c.charCodeAt()
        if (set.has(asiic + 32) || set.has(asiic - 32)) {
            if (ans === '') {
                ans = c.toUpperCase()
            } else {
                if (c.toUpperCase().charCodeAt() > ans.charCodeAt()) {
                    ans = c.toUpperCase()
                }
            }
        }
        set.add(asiic)
    }
    return ans
};