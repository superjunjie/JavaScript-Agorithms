/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const len = nums.length
    const res = []
    const used = new Array(len).fill(false)
    const path = []
    const dfs = depth => {
        if (depth === len) {
            res.push([...path])
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) continue
            path.push(nums[i])
            used[i] = true
            dfs(depth + 1)
            path.pop()
            used[i] = false
        }
    }
    dfs(0)
    return res
};