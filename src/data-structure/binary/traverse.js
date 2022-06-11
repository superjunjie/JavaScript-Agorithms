function inOrderTraversal(root) {
    let list = []
    let stack = []
    let cur = root
    while (cur !== null || stack.length !== 0) {
        if (cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            list.push(cur.val)
            cur = cur.right
        }
    }
    return list
}

function preOrderTraversal(root) {
    let list = []
    let stack = []
    let cur = root
    while (cur !== null || stack.length !== 0) {
        if (cur !== null) {
            list.push(cur.val)
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            cur = cur.right
        }
    }
    return list
}

function postOrderTraversal(root) {
    const list = []
    let stack = []
    let lastView = root
    let cur = root
    while (cur !== null || stack.length !== 0) {
        while (cur !== null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack[stack.length - 1]
        if (cur.right === null || cur.right === lastView) {
            list.push(cur.val)
            stack.pop()
            lastView = cur
            cur = null
        } else {
            cur = cur.right
        }
    }
    return list
}

module.exports = {
    preOrderTraversal,
    inOrderTraversal,
    postOrderTraversal
}