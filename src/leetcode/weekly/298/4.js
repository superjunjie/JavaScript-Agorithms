/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 * @link https://leetcode.cn/problems/selling-pieces-of-wood/
 */
var sellingWood = function (m, n, prices) {
    let map = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(0))
    for (const arr of prices) {
        map[arr[0]][arr[1]] = arr[2]
    }
    let dp = new Array(m + 1).fill(false).map(() => new Array(n + 1))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = map[i][j]
            for (let k = 1; k < i; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j])
            }
            for (let k = 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k])
            }
        }
    }
    return dp[m][n]
};