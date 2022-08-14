/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 链表反插法
 */
var reverseList = function (head) {
    const root = new ListNode()
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = root.next
        root.next = cur
        cur = next
    }
    return root.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * @link https://leetcode.cn/problems/reverse-linked-list-ii/
 */
var reverseBetween = function (head, left, right) {
    const dummy = new ListNode()
    dummy.next = head
    let pre = dummy
    for (let i = 1; i < left; i++) {
        pre = pre.next
    }
    head = pre.next
    for (let i = 0; i < right - left; i++) {
        const next = head.next
        head.next = next.next
        next.next = pre.next
        pre.next = next
    }
    return dummy.next
};