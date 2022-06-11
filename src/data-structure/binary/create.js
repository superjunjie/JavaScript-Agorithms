function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


function generateBinarySearchTree(arr) {
    if (arr.length < 1) return
    let root = new TreeNode(arr[0]),
        cur = root,
        queue = new Array(),
        n = 0
    queue.push(cur)
    while (queue.length > 0) {
        for (let i = 0, size = queue.length; i < size; i++) {
            cur = queue.pop()
            cur.left = arr[n + 1] ? new TreeNode(arr[n + 1]) : null
            cur.left && queue.unshift(cur.left)
            n++

            cur.right = arr[n + 1] ? new TreeNode(arr[n + 1]) : null
            cur.right && queue.unshift(cur.right)
            n++
        }
    }
    return root
}

module.exports = {
    generateBinarySearchTree
}