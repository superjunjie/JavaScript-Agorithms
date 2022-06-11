/**
 * @param {number[]} height
 * @return {number}
 * @description 接雨水
 * @link https://leetcode.cn/problems/trapping-rain-water/
 * @method 动态规划
 */
var trap = function (height) {
    const n = height.length
    const leftMax = new Array(n)
    const rightMax = new Array(n)
    leftMax[0] = height[0]
    rightMax[n - 1] = height[n - 1]
    let ans = 0
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    for (let i = 0; i < n; i++) {
        ans += (Math.min(leftMax[i], rightMax[i]) - height[i])
    }
    return ans
};

/**
 * @param {number[]} height
 * @return {number}
 * @description 接雨水 动态规划优化版本
 * @link https://leetcode.cn/problems/trapping-rain-water/
 * @method 双指针
 */
var trap = function (height) {
    const n = height.length
    let leftMax = 0
    let rightMax = 0
    let left = 0
    let right = n - 1
    let ans = 0
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (height[left] < height[right]) {
            ans += leftMax - height[left]
            left++
        } else {
            ans += rightMax - height[right]
            --right
        }
    }
    return ans
};
