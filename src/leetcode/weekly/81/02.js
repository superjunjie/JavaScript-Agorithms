/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * @link https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/
 * @method 并查集
 */

// TODO
var countPairs = function (n, edges) {
    const uf = new UnionFind(n)
    let rest = n
    let ans = 0
    const visitedRoots = new Set()

    for (const [u, v] of edges) {
        uf.union(u, v)
    }

    for (let i = 0; i < n; i++) {
        const root = uf.find(i)
        if (visitedRoots.has(root)) {
            continue
        }
        visitedRoots.add(root)
        let count = uf.getChunkCount(root)
        ans += (rest - count) * count
        rest -= count
    }

    return ans
}

class UnionFind {
    constructor(n) {
        this.parent = [...new Array(n).keys()]
        this.size = new Array(n).fill(1)
        this._count = 0
    }
    union(p, q) {
        const { parent, size } = this
        const rootP = this.find(p)
        const rootQ = this.find(q)
        if (rootP === rootQ) {
            return
        }
        if (size[rootP] > size[rootQ]) {
            parent[rootQ] = rootP
            size[rootP] += size[rootQ]
        } else {
            parent[rootP] = rootQ
            size[rootQ] += size[rootP]
        }
        this._count--
    }
    find(x) {
        const parent = this.parent
        while (x !== parent[x]) {
            parent[x] = parent[parent[x]]
            x = parent[x]
        }
        return x
    }
    getChunkCount(x) {
        return this.size[this.find(x)]
    }
}