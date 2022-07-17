/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    const n = queries.length
    const len = nums[0].length
    const ans = []
    for (let i = 0; i < n; i++) {
        const tmp = []
        for (let j = 0; j < nums.length; j++) {
            tmp.push(nums[j].substring(len - queries[i][1]))
        }
        const arr = [...tmp]
        arr.sort()
        const num = arr[queries[i][0] - 1]
        ans.push(tmp.indexOf(num))
    }
    return ans
}

const ans = smallestTrimmedNumbers(
    ["24", "37", "96", "04"],
    [[2, 1], [2, 2]])
console.log(ans)