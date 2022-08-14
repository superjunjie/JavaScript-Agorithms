/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * @link https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
 * @description 算是个二分
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    if (n === -1) return 1 / x
    const half = myPow(x, n / 2 | 0)
    const mod = myPow(x, n % 2)
    return half * half * mod
}