/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/sum-of-numbers-with-units-digit-k/
 */
var minimumNumbers = function (num, k) {
    if (num === 0) return 0
    for (let i = 1; i <= 10; i++) {
        let cur = k * i
        if (cur > num) {
            break
        }
        if (num % 10 === cur % 10) {
            return i
        }
    }
    return -1
};