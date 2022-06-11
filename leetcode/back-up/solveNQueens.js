/**
 * @param {number} n
 * @return {string[][]}
 * @description https://leetcode.cn/problems/n-queens/
 */
var solveNQueens = function (n) {
    const list = []
    const result = []
    const isOk = (row, column) => {
        let leftUp = column - 1
        let rightUp = column + 1
        for (let i = row - 1; i >= 0; i--) {
            if (result[i] === column) return false
            if (leftUp >= 0) {
                if (result[i] === leftUp) return false
            }
            if (rightUp < n) {
                if (result[i] === rightUp) return false
            }
            leftUp++
            rightUp--
        }
        return true
    }
    const setResult = () => {
        const temp = []
        for (let i = 0; i < n; i++) {
            let str = ''
            for (let j = 0; j < n; j++) {
                if (result[i] === j) {
                    str += 'Q'
                } else {
                    str += '.'
                }
            }
            list.push(temp)
        }
        list.push(temp)
    }
    const calNqueens = row => {
        if (row === n) {
            setResult(result)
        }
        for (let column = 0; column < n; column++) {
            if (isOk(row, column)) {
                result[row] = column
                calNqueens(row + 1)
            }
        }
    }
    calNqueens(0)
    return list
};