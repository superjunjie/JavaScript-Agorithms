/**
 * @param {number} n
 * @return {number}
 * @link https://leetcode.cn/problems/number-of-distinct-roll-sequences/
 */

var distinctSequences = function (n) {
    const MOD = 1e9 + 7

    const dfs = (idx, last, last2) => {
        if (idx === n) {
            return 1
        }

        if (memo[idx][last][last2] !== -1) {
            return memo[idx][last][last2]
        }

        let res = 0
        for (let i = 1; i <= 6; i++) {
            if (gcd(i, last) === 1 && i !== last && i !== last2) {
                res = (res + dfs(idx + 1, i, last)) % MOD
            }
        }

        memo[idx][last][last2] = res
        return res
    }

    const memo = new Array(n + 1).fill(0).map(() => {
        return new Array(8).fill(0).map(() => new Array(8).fill(-1))
    })

    // 7 7 是为了保证第一次计算最大公约数的时候为 1，任意两个素数都可以(比如: 11 13)
    return dfs(0, 7, 7, memo)
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}