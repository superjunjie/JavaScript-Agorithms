/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/fair-distribution-of-cookies/
 * @method 回溯
 */
var distributeCookies = function (cookies, k) {
    let ans = Infinity
    function backtrack(start, cur) {
        if (start >= cookies.length) {
            ans = Math.min(ans, Math.max(...cur))
            return
        }
        for (let i = 0; i < k; i++) {
            cur[i] += cookies[start]
            backtrack(start + 1, cur)
            cur[i] -= cookies[start]
        }
    }
    backtrack(0, new Array(k).fill(0))
    return ans
};