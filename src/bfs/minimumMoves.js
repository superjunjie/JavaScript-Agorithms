/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const n = grid.length
  // dist[row][column][status]
  const dist = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(-1)))
  dist[0][0][0] = 0
  const queue = [[0, 0, 0]]
  while(queue.length) {
    const arr = queue.shift()
    const [x, y, status] = arr
    if(status === 0) {
      // 向右移动一单元格
      if (y + 2 < n && dist[x][y + 1][0] === -1 && grid[x][y + 2] === 0) {
          dist[x][y + 1][0] = dist[x][y][0] + 1
          queue.push([x, y + 1, 0])
      }
      // 向下移动一个单元格
      if (x + 1 < n && dist[x + 1][y][0] === -1 && grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0) {
          dist[x + 1][y][0] = dist[x][y][0] + 1
          queue.push([x + 1, y, 0])
      }
      // 顺时针旋转 90 度
      if (x + 1 < n && y + 1 < n && dist[x][y][1] === -1 && grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0) {
          dist[x][y][1] = dist[x][y][0] + 1
          queue.push([x, y, 1])
      }
    } else {
        // 向右移动一个单元格
        if (y + 1 < n && dist[x][y + 1][1] === -1 && grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0) {
            dist[x][y + 1][1] = dist[x][y][1] + 1
            queue.push([x, y + 1, 1])
        }
        // 向下移动一个单元格
        if (x + 2 < n && dist[x + 1][y][1] === -1 && grid[x + 2][y] === 0) {
            dist[x + 1][y][1] = dist[x][y][1] + 1
            queue.push([x + 1, y, 1])
        }
        // 逆时针旋转 90°
        if (x + 1 < n && y + 1 < n && dist[x][y][0] === -1 && grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0) {
            dist[x][y][0] = dist[x][y][1] + 1
            queue.push([x, y, 0])
        }
    }
  }
  return dist[n - 1][n - 2][0]
}

const ans = minimumMoves(
  [
    [0,0,0,0,0,1],
    [1,1,0,0,1,0],
    [0,0,0,0,1,1],
    [0,0,1,0,1,0],
    [0,1,1,0,0,0],
    [0,1,1,0,0,0]
  ]
)

console.log(ans)