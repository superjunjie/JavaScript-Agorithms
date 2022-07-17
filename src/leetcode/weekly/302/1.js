/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const n = nums.length
    const used = new Array(n).fill(false)
    let count = 0
    for (let i = 0; i < n - 1; i++) {
        if (used[i]) continue
        for (let j = i + 1; j < n; j++) {
            if (used[j]) continue
            if (nums[i] === nums[j]) {
                used[i] = true
                used[j] = true
                count++
                break
            }
        }
    }
    return [count, n - count * 2]
}