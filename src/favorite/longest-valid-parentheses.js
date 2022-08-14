/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/longest-valid-parentheses/
 * @description 巧妙的运用数组解决问题
 */
var longestValidParentheses = function (s) {
    const stack = []
    const n = s.length
    const mark = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') stack.push(i)
        else {
            if (stack.length === 0) mark[i] = 1
            else stack.pop()
        }
    }
    while (stack.length) {
        mark[stack.pop()] = 1
    }
    let len = 0
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (mark[i]) {
            len = 0
            continue
        }
        len++
        ans = Math.max(ans, len)
    }
    return ans
}