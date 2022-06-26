/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-score-of-spliced-array/
 */
var maximumsSplicedArray = function (nums1, nums2) {
    const n = nums1.length
    let sum1 = nums1.reduce((a, b) => a + b)
    let sum2 = nums2.reduce((a, b) => a + b)
    let diff1 = new Array(n)
    let diff2 = new Array(n)
    for (let i = 0; i < n; i++) {
        diff1[i] = nums2[i] - nums1[i]
        diff2[i] = nums1[i] - nums2[i]
    }
    let max = 0
    let currentMax = 0
    for (let i = 0; i < n; i++) {
        currentMax += diff1[i]
        if (currentMax < 0) {
            currentMax = 0
        }
        max = Math.max(max, currentMax)
    }
    let max2 = 0
    let currentMax2 = 0
    for (let i = 0; i < n; i++) {
        currentMax2 += diff2[i]
        if (currentMax2 < 0) {
            currentMax2 = 0
        }
        max2 = Math.max(max2, currentMax2)
    }
    return Math.max(sum1 + max, sum2 + max2)
};

maximumsSplicedArray([60, 60, 60], [10, 90, 10])