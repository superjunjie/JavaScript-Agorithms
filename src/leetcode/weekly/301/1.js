/**
 * @param {number[]} amount
 * @return {number}
 */
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let count = 0
    while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
        let idx = 0
        let min = Number.MAX_VALUE
        for (let i = 0; i < 3; i++) {
            if (amount[i] < min) {
                min = amount[i]
                idx = i
            }
        }
        const idx1 = (idx + 1) % 3
        const idx2 = (idx + 2) % 3
        amount[idx1]--
        amount[idx2]--
        count++
    }
    return count
};