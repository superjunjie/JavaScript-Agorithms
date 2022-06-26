/**
 * @param {number[][]} grid
 * @return {boolean}
 */
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
