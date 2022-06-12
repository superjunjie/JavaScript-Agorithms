/**
 * @param {number} n
 * @return {number}
 * @description 爬楼梯
 * @link https://leetcode.cn/problems/climbing-stairs/
 * @method 动态规划
 */
var climbStairs = function (n) {
    if (n <= 1) return 1
    let a = 1
    let b = 2
    for (let i = 2; i < n; i++) {
        let temp = b
        b = a + b
        a = temp
    }
    return b
};