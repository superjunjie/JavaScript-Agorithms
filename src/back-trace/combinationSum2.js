/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @link https://leetcode.cn/problems/combination-sum-ii/
 * @method 回溯 + 剪枝 
 */
function combinationSum2(nums, target) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const used = new Array(n)
    const path = []
    const res = []
    const backTrack = index => {
        if (target <= 0) {
            if (target === 0) {
                res.push([...path])
            }
            return
        }
        for (let i = index; i < n; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue
            path.push(nums[i])
            target -= nums[i]
            used[i] = true
            backTrack(i)
            path.pop()
            used[i] = false
            target += nums[i]
        }
    }
    backTrack(0)
    return res
}