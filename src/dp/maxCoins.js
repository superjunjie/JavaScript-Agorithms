/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/burst-balloons/
 */
var maxCoins = function (nums) {
    nums.unshift(1)
    nums.push(1)
    const len = nums.length
    const store = new Array(len).fill(false).map(() => new Array(len).fill(0))
    const rangeBest = (i, j) => {
        let max = 0
        for (let k = i + 1; k < j; k++) {
            const left = store[i][k]
            const right = store[k][j]
            const total = left + nums[i] * nums[k] * nums[j] + right
            max = Math.max(max, total)
        }
        store[i][j] = max
    }
    for (let n = 2; n < len; n++) {
        for (let i = 0; i < len - n; i++) {
            rangeBest(i, i + n)
        }
    }
    return store[0][len - 1]
};

console.log(maxCoins([3, 1, 5, 8]));