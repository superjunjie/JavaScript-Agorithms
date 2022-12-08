/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0
  let right = matrix.length - 1
  while (left <= right) {
    let top = left
    let bottom = right
    while (top !== right) {
      const temp = matrix[left][top] // 左上
      matrix[left][top] = matrix[bottom][left] // 左下换左上
      matrix[bottom][left] = matrix[right][bottom] // 右下换左下
      matrix[right][bottom] = matrix[top][right] // 右上换右下
      matrix[top][right] = temp // 左上换右上
      top += 1
      bottom -= 1
    }
    left += 1
    right -= 1
  }
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])