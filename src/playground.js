var checkXMatrix = function (grid) {
    const n = grid.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const diagonal = (i === j || i + j === n - 1)
            if (diagonal && grid[i][j] === 0) return false
            else if (!diagonal && grid[i][j] !== 0) return false
        }
    }
    return true
};

const ans = checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]])
console.log(ans)