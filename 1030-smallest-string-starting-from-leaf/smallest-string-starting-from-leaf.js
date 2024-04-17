/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let list = [];
    let str = "";
    inorder(root, str);
    function inorder(root, str) {
        if(root == null) return;
        let temp = String.fromCharCode(97+root.val) + str;
        if(root.left == null && root.right==null) list.push(temp);
        inorder(root.left, temp);
        inorder(root.right, temp);
    };
    list.sort();
    return list[0];
};