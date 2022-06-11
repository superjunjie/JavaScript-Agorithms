/**
 * @param {number[]} nums
 * @return {boolean}
 * @description https://leetcode.cn/problems/jump-game/
 */
var canJump = function (nums) {
    let n = nums.length, mostRight = 0
    for (let i = 0; i < n; i++) {
        if (i <= mostRight) {
            mostRight = Math.max(mostRight, i + nums[i])
            if (mostRight >= n - 1) {
                return true
            }
        }
    }
    return false
};
