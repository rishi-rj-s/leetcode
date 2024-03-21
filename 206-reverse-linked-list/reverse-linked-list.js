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
 */
var reverseList = function(head) {
    let c = head;
    let p = null;
    while(c!=null){
        let next = c.next;
        c.next = p;
        p = c;
        c = next;
    }
    return p;
};