/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * @link https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @description 这里用的是快慢指针
 */
var getKthFromEnd = function (head, k) {
    let slow = head
    let fast = head
    while (fast && k > 0) {
        fast = fast.next
        k--
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};