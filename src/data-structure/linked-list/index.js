class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }
    // 添加
    append(val) {
        const list = Array.isArray(val) ? val : [val]
        let cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        for (let i = 0; i < list.length; i++) {
            const newNode = new Node(list[i])
            cur.next = newNode
            cur = cur.next
        }
    }
    // 检测环
    checkCircle() {
        let fast = this.head.next
        let slow = this.head
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
            if (slow === fast) return true
        }
        return false
    }
    // 根据值查找
    findByValue(val) {
        if (this.checkCircle()) return
        let cur = this.head
        while (cur !== null && cur.val !== val) {
            cur = cur.next
        }
        return cur
    }
    // 根据索引查找
    findByIndex(index) {
        let pos = 0
        let cur = this.head.next
        while (cur !== null && pos !== index) {
            cur = cur.next
            pos++
        }
        return cur
    }
    // 查找前一个
    findPrev(val) {
        let cur = this.head
        while (cur.next !== null && cur.next.val !== val) {
            cur = cur.next
        }
        if (cur.next === null) {
            return -1
        }
        return cur
    }
    findMid() {
        let fast = this.head
        let slow = this.head
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
    // 指定位置插入一个
    insert(val, target) {
        const cur = this.findByValue(target)
        if (!cur) return false
        const list = Array.isArray(val) ? val : [val]
        for (let i = 0; i < list.length; i++) {
            const newNode = new Node(val)
            newNode.next = cur.next
            cur.next = newNode
        }
    }
    // 根据值删除
    remove(val) {
        const desNode = this.findByValue(val)
        if (desNode === -1) {
            return
        }
        const prevNode = this.findPrev(val)
        prevNode.next = desNode.next
    }
    reverseList() {
        const root = new Node('head')
        let cur = this.head.next
        while (cur) {
            const next = cur.next
            cur.next = root.next
            root.next = cur
            cur = next
        }
        this.head = root
    }
    // 转list
    toList() {
        if (this.checkCircle()) return false
        const list = []
        let cur = this.head.next
        while (cur !== null) {
            list.push(cur.val)
            cur = cur.next
        }
        return list
    }
}


const linkList = new LinkedList()
linkList.append([1, 2, 3, 4])
linkList.append([5, 6, 7, 8])
linkList.insert(10, 7)
linkList.remove(7)
linkList.reverseList()
console.log(linkList.findMid())
console.log(linkList.toList())