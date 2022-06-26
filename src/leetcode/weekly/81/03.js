/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-xor-after-operations/
 */

// TODO
var maximumXOR = function (nums) {
    let ans = 0
    for (const x of nums) {
        ans |= x
    }
    return ans
};