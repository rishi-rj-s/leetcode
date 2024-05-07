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
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    
    return prev; // New head of the reversed list
};

var doubleIt = function(head) {
     // Reverse the input list
    let reversedHead = reverseList(head);
    let result = new ListNode(); // Dummy node for result
    let temp = result;
    let carry = 0;

    // Traverse through the reversed list
    while (reversedHead !== null) {
        // Calculate the doubled sum and carry
        let sumVal = reversedHead.val * 2 + carry;
        let tempVal = sumVal % 10;
        carry = Math.floor(sumVal / 10);

        // Create a new node with the calculated value
        temp.next = new ListNode(tempVal);
        temp = temp.next;

        // Move to the next node in the reversed list
        reversedHead = reversedHead.next;
    }

    // If there's a remaining carry, add a new node for it
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }

    // Reverse the result list and return its head
    return reverseList(result.next);
};