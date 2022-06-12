
/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 * @method 动态规划
 * @link https://leetcode.cn/problems/minimum-path-cost-in-a-grid/
 */
var minPathCost = function (grid, moveCost) {
    const m = grid.length
    const n = grid[0].length
    let dp = new Array(n)
    let dp2 = new Array(n)
    for (let j = 0; j < n; j++) {
        dp[j] = grid[0][j]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let preMinCost = Number.MAX_VALUE
            for (let k = 0; k < n; k++) {
                preMinCost = Math.min(preMinCost, dp[k] + moveCost[grid[i - 1][k]][j])
            }
            dp2[j] = grid[i][j] + preMinCost
        }
        dp = dp2
        dp2 = []
    }
    return Math.min(...dp)
};
