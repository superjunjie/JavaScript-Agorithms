/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function (n) {
    if (n === 1) return 4
    const mod = BigInt(1e9 + 7)
    let f1 = 2n
    let f2 = 3n
    for (let i = 3; i <= n; i++) {
        const tmp = f1
        f1 = f2
        f2 = (tmp + f2) % mod
    }
    return f2 * f2 % mod
};