function preOrderTraversal(root) {
    let cur = root
    let mostRight = null
    const list = []
    while (cur) {
        mostRight = cur.left
        if (mostRight) {
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right === null) {
                mostRight.right = cur
                list.push(cur.val)
                cur = cur.left
                continue
            } else {
                mostRight.right = null
            }
        } else {
            list.push(cur.val)
        }
        cur = cur.right
    }
    return list
}

function inOrderTraversal(root) {
    let cur = root
    let mostRight = null
    const list = []
    while (cur) {
        mostRight = cur.left
        if (mostRight) {
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right === null) {
                mostRight.right = cur
                cur = cur.left
                continue
            } else {
                mostRight.right = null
            }
        }
        list.push(cur.val)
        cur = cur.right
    }
    return list
}

module.exports = {
    preOrderTraversal,
    inOrderTraversal
}