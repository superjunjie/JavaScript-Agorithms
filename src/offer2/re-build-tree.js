/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * @link https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/
 * @description 剑指 Offer 07. 重建二叉树
 * @method 递归分治
 */
var buildTree = function (preorder, inorder) {
    const dic = new Map()
    const recur = (root, left, right) => {
        if (left > right) return null
        const node = new TreeNode(preorder[root])
        let i = dic.get(preorder[root])
        node.left = recur(root + 1, left, i - 1)
        node.right = recur(root + i - left + 1, i + 1, right)
        return node
    }
    for (let i = 0; i < inorder.length; i++) {
        dic.set(inorder[i], i)
    }
    return recur(0, 0, inorder.length - 1)
};