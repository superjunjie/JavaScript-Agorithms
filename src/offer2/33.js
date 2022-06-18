/**
 * @param {number[]} postorder
 * @return {boolean}
 * @link https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 * @description 剑指offers第33题，二叉搜索树的后序遍历序列
 * @method 递归分治
 */
var verifyPostorder = function (postorder) {
    const recur = (i, j) => {
        if (i >= j) return true
        let p = i
        while (postorder[p] < postorder[j]) p++
        const m = p
        while (postorder[p] > postorder[j]) p++
        return p === j && recur(i, m - 1) && recur(m, j - 1)
    }
    return recur(0, postorder.length - 1)
}
