/**
 * 
 * @param {string} s 
 * @returns s
 */

function longestPalindrome(s) {
  let len = s.length
  // 如果字符串长度小于2，那么最长回文子串就是自身
  if (len < 2) {
    return s
  }
  // 初始化最大回文子串长度为1，也就是一个字符
  let maxLen = 1
  // 回文子串的起始位置
  let begin = 0
  // 定义二维数组，用来记录字符串任意两个字符间是不是回文子串
  let dp = new Array(len).fill(false).map(i => new Array(len).fill(false))
  // 初始化dp数组，单个字符一定是回文子串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }
  // 从长度为2的回文子串开始找，到长度为字符串长度结束
  for (let L = 2; L <= len; L++) {
    // i为子串的起始位置
    for (let i = 0; i < len; i++) {
      // 长度为L，起始位置为i，确定结束位置
      let j = L + i - 1
      // 确定边界值
      if (j >= len) break
      // 判断两个字符是否相同
      if (s.charCodeAt(i) !== s.charCodeAt(j)) {
        // 字符串不相同，表示字符串i到j的子串不是回文子串
        dp[i][j] = false
      } else {
        // 相邻的两个字符一样，那它们一定是回文子串
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          // 是不是子串取决于子串内部是不是回文
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
}
console.log(longestPalindrome('abaab'))