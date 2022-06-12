/**
 * @param {number[][]} triangle
 * @return {number}
 * @description 三角形的最小路径之和
 * @link https://leetcode.cn/problems/triangle/
 * @method 动态规划
 */

var minimumTotal = function (triangle) {
    let dp = []
    for (let i = 0; i < triangle[triangle.length - 1].length; i++) {
        dp[i] = triangle[triangle.length - 1][i]
    }
    for (let j = triangle.length - 2; j >= 0; j--) {
        for (let k = 0; k < triangle[j].length; k++) {
            dp[k] = Math.min(dp[k], dp[k + 1]) + triangle[j][k]
        }
    }
    return dp[0]
};

/**
* @param {number[][]} triangle
* @return {number}
* @description 三角形的最小路径之和
* @link https://leetcode.cn/problems/triangle/
* @method 动态规划 原地DP
*/
var minimumTotal = function (triangle) {
    let dp = triangle
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j]
        }
    }
    return dp[0][0]
};