/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 * @link https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
 * @method 深度优先搜素
 */
var pathSum = function (root, target) {
    if (root === null) return []
    const res = []
    const path = []
    let ret = 0
    const dfs = cur => {
        path.push(cur.val)
        ret += cur.val
        if (cur.left === null && cur.right === null) {
            if (ret === target) {
                res.push([...path])
            }
        }
        if (cur.left) dfs(cur.left)
        if (cur.right) dfs(cur.right)
        path.pop()
        ret -= cur.val
    }
    dfs(root)
    return res
}
