/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @description https://leetcode.cn/problems/combination-sum/
 */
var combinationSum = function (candidates, target) {
    const res = []
    const path = []
    const n = candidates.length
    candidates.sort()
    const dfs = (begin) => {
        if (target <= 0) {
            if (target === 0) {
                res.push([...path])
            }
            return
        }
        for (let i = begin; i < n; i++) {
            path.push(candidates[i])
            target -= candidates[i]
            dfs(i)
            target += path.pop()
        }
    }
    dfs(0)
    return res
};

const ans = combinationSum([2, 3, 6, 7], 7)
console.log(ans)