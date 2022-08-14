/**
 * 
 * @param {*} board 
 * @param {*} word 
 * @returns exist
 * @link https://leetcode.cn/submissions/detail/325393928/
 * @description 很经典的深度搜索问题
 */
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length
    const len = word.length
    const dfs = (row, col, k) => {
        if (row < 0 || col < 0 || row >= m || col >= n || board[row][col] !== word[k]) return false
        if (k === len - 1) return true
        board[row][col] = '\0'
        const res = dfs(row + 1, col, k + 1) || dfs(row, col + 1, k + 1) || dfs(row - 1, col, k + 1) || dfs(row, col - 1, k + 1)
        board[row][col] = word[k]
        return res
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
}
