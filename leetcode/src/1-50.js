/**
 * @param {string} s
 * @return {string}
 * @description 05 最长回文子串
 * @method 中心扩展法
 */
function longestPalindrome(s) {
    const expandAroundCenter = (s, left, right) => {
        while (left >= 0
            && right < s.length
            && s.charCodeAt(left) === s.charCodeAt(right)
        ) {
            --left
            ++right
        }
        return right - left - 1
    }
    let len = s.length
    if (len < 2) return s
    let start = 0, end = 0
    for (let i = 0; i < len; i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i + 1)
        let maxLen = Math.max(len1, len2)
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2)
            end = i + Math.floor(maxLen / 2)
        }
    }
    return s.substring(start, end + 1)
}

console.log(longestPalindrome('abaab'))