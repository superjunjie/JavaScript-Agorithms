/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/longest-binary-subsequence-less-than-or-equal-to-k/
 */
var longestSubsequence = function (s, k) {
    let n = 0
    for (let i = 0; i < s.length; i++) {
        const bStr = s.substr(i)
        if (parseInt(bStr, 2) <= k) {
            return n + s.length - i
        }
        if (s[i] === '0') {
            n += 1
        }
    }
    return 0
};