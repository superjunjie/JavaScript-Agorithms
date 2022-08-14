/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @link https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * @method 二分查找 从右上角到左下角看是一个二叉搜索树
 */
var findNumberIn2DArray = function (matrix, target) {
    let m = matrix.length
    if (m < 1) return false
    let n = matrix[0].length
    let i = 0
    let j = n - 1
    while (i < m && j >= 0) {
        let num = matrix[i][j]
        if (num === target) return true
        else if (num > target) j--
        else i++
    }
    return false
}
