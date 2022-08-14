/**
 * @param {number} n
 * @return {number}
 * @description 斐波那契数列微调优实现
 */
var fib = function (n) {
    const inner = (n, current, next) => {
        if (n === 1) return next
        if (n === 0) return 0
        return inner(n - 1, next % 1000000007, (current + next) % 1000000007)
    }
    return inner(n, 0, 1)
};