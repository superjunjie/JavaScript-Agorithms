/**
 * @param {string} s
 * @return {string[]}
 * @link https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/
 */
var permutation = function (s) {
    const n = s.length
    const used = new Array(n).fill(false)
    let str = ''
    const res = new Set()
    const backTrack = index => {
        if (index === n) {
            res.add(str)
            return
        }
        for (let i = 0; i < n; i++) {
            if (used[i]) continue
            used[i] = true
            str += s[i]
            backTrack(index + 1)
            str = str.substring(0, index)
            used[i] = false
        }
    }
    backTrack(0)
    return [...res]
}