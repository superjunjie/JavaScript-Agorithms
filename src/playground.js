var movingCount = function (m, n, k) {
    const visited = new Array(m).fill(false).map(() => Array(n).fill(false))
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || k < i + j || visited[i][j]) return 0
        visited[i][j] = true
        return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1
    }
    const ans = dfs(0, 0)
    console.log(ans)
    return ans
};

movingCount(1, 2, 1)