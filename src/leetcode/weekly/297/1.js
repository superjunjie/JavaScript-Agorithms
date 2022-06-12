/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 * @link https://leetcode.cn/problems/calculate-amount-paid-in-taxes/
 */
var calculateTax = function (brackets, income) {
    if (income === 0) return 0
    const n = brackets.length
    let ans = Math.min(brackets[0][0], income) * brackets[0][1] * 0.01
    for (let i = 1; i < n; i++) {
        if (brackets[i - 1][0] <= income) {
            ans += (Math.min(brackets[i][0], income) - brackets[i - 1][0]) * brackets[i][1] * 0.01
        }
    }
    return ans
};
