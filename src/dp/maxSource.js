/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-score-after-splitting-a-string/
 * @method 动态规划
 */
var maxScore = function (s) {
    let len = s.length
    let res = new Array(len).fill(0)
    let sumZero = 0
    let sumOne = 0
    for (let i = 0; i < len; i++) {
        res[i] += sumZero
        if (s[i] === '0') sumZero++
        if (s[len - i - 1] === '1') sumOne++
        res[len - i - 1] += sumOne
    }
    return Math.max(...res)
}
