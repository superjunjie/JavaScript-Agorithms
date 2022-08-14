/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 * @description 剑指 Offer 13. 机器人的运动范围
 * @method 深度优先遍历
 */
var movingCount = function (m, n, k) {
    const visited = new Array(m).fill(false).map(() => Array(n).fill(false))
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || k < (Math.floor(i / 10) + i % 10 + Math.floor(j / 10) + j % 10) || visited[i][j]) return 0
        visited[i][j] = true
        return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1
    }
    return dfs(0, 0)
};