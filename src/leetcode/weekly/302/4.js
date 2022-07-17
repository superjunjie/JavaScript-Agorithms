/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function (nums, numsDivide) {
    nums.sort((a, b) => a - b)
    let ms = new Set()
    for (let i = 0; i < nums.length; ++i) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        if (ms.size && dvd(nums[i])) continue
        let flag = 1
        for (let j = 0; j < numsDivide.length; ++j) {
            if (numsDivide[j] % nums[i] != 0) {
                flag = 0
                break
            }
        }
        if (flag) return i
    }
    return -1
    function dvd(a) {
        for (let m of ms) if (a % m == 0) return true
    }
}