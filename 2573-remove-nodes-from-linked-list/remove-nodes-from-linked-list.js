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
var removeNodes = function(head) {
    const reversedHead = reverseList(head);
    let previousValidNode = null;
    let currentNode = reversedHead;
    let maxValue = -Infinity;
    while (currentNode) {
        const nextNode = currentNode.next;
        if (currentNode.val >= maxValue) {
            currentNode.next = previousValidNode;
            previousValidNode = currentNode;
        }
        maxValue = Math.max(currentNode.val, maxValue);
        currentNode = nextNode;
    }
    return previousValidNode;
};

function reverseList(head) {
    let previousNode = null;
    let currentNode = head;
    while (currentNode) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
};