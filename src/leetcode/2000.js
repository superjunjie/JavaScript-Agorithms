/**
 * @param {number[][]} nums
 * @return {number[]}
 * @description https://leetcode-cn.com/problems/intersection-of-multiple-arrays/
 */
var intersection = function (nums) {
    const res = []
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            map.set(nums[i][j], (map.get(nums[i][j]) || 0) + 1)
        }
    }
    console.log(map)
    for (const [key, val] of map) {
        if (val === nums.length) {
            res.push(key)
        }
    }
    return res
};

/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function (rectangles, points) {
    for (let i = 0; i < points.length; i++) {
        let temp = 0
        for (let j = 0; j < rectangles.length; j++) {
            if (rectangles[j][0] >= points[i][0] && rectangles[j][1] >= points[i][1]) {
                temp++
            }
        }
        points[i] = temp
    }
    return points
};

var smallestRangeI = function (nums, k) {
    let min = nums[0], max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i]
        if (nums[i] > max) max = nums[i]
    }
    console.log(min, max)
    return max - min <= (2 * k) ? 0 : ((max - min) - 2 * k)
};


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    while (s.length > k) {
        let temp = ''
        for (let i = 0; i < s.length / k; i++) {
            temp += s.substring(k * i, (i + 1) * k).split('').reduce((a, b) => +a + +b)
        }
        s = temp
    }
    return s
};


/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    let count = 0
    let map = new Map()
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) || 0) + 1)
    }
    for (let i = 1; i <= s.length; i++) {
        let ss = s.substring(0, i)
        if (map.has(ss)) {
            count += map.get(ss)
        }
    }
    return count
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
    let min = Number.MAX_VALUE
    let index = 0
    let len = nums.length
    for (let i = 0; i < nums.length; i++) {
        const left = getMean(nums, 0, i)
        const right = i === len - 1 ? 0 : getMean(nums, i + 1, len - 1)
        if (Math.abs(left - right) < min) {
            min = Math.abs(left - right)
            index = i
        }
    }
    return index
};
function getMean(nums, low, high) {
    const len = high - low + 1
    let sum = 0
    for (let i = low; i <= high; i++) {
        sum += nums[i]
    }
    return Math.floor(sum / len)
}

const res = minimumAverageDifference([4, 2, 0])
console.log(res)