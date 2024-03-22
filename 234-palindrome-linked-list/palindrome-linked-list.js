/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let string1=""
    let string2=""
    let node=head
    
    while(node!=null){
        
        string1=`${string1}${node.val}`
        string2=`${node.val}${string2}`
       
        node=node.next
    }

return string1===string2
    
};