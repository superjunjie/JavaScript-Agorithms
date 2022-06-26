/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/count-asterisks/
 */
var countAsterisks = function (s) {
    let ans = 0
    let flag = true
    for (const c of s) {
        if (c === '|') flag = !flag
        if (flag && c === '*') ans++
    }
    return ans
};