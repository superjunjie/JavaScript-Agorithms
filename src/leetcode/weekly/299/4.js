/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function (nums, edges) {
    const n = nums.length
    const g = new Array(n).fill(0).map(() => [])
    let clock = 0

    for (const [x, y] of edges) {
        g[x].push(y)
        g[y].push(x)
    }

    const xor = new Array(n)
    const inn = new Array(n) // in
    const out = new Array(n)

    const dfs = (x, fa) => {
        inn[x] = ++clock
        xor[x] = nums[x]
        for (const y of g[x]) {
            if (y !== fa) {
                dfs(y, x)
                xor[x] ^= xor[y]
            }
        }
        out[x] = clock
    }

    const isParent = (x, y) => {
        return inn[x] <= inn[y] && inn[y] <= out[x]
    }

    dfs(0, -1)

    for (const temp of edges) {
        const [x, y] = temp
        if (!isParent(x, y)) {
            [temp[0], temp[1]] = [temp[1], temp[0]]
        }
    }

    let ans = Infinity

    for (let i = 0; i < edges.length; i++) {
        const [x1, y1] = edges[i]
        for (let j = 0; j < i; j++) {
            const [x2, y2] = edges[j]
            let x, y, z
            if (isParent(y1, x2)) {
                x = xor[y2]
                y = xor[y1] ^ xor[y2]
                z = xor[0] ^ xor[y1]
            } else if (isParent(y2, x1)) {
                x = xor[y1]
                y = xor[y2] ^ xor[y1]
                z = xor[0] ^ xor[y2]
            } else {
                x = xor[y1]
                y = xor[y2]
                z = xor[0] ^ xor[y1] ^ xor[y2]
            }
            ans = Math.min(
                ans,
                Math.max(Math.max(x, y), z) - Math.min(Math.min(x, y), z)
            )
        }
    }

    return ans
}
