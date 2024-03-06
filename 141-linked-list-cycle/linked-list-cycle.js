/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let f = head;
    while(f && f.next){
        head = head.next;
        f = f.next.next;
        if(head === f) return true;
    }
    return false;
};