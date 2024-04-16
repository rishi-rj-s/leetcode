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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
     // If the depth is 1, insert a new root node with the provided value
    if (depth === 1) {
        return new TreeNode(val, root);
    }
    
    // Initialize a queue for level-order traversal with the root node and its depth
    const queue = [{node: root, nodeDepth: 1}];
    
    // Perform level-order traversal
    while (queue.length > 0) {
        // Dequeue the node and its depth from the queue
        let { node, nodeDepth } = queue.shift();
        
        // If the current node is at the depth just before the target depth
        if (nodeDepth === depth - 1) {
            // Create new nodes with the provided value and attach them as left and right children
            let newLeftNode = new TreeNode(val, node.left, null);
            node.left = newLeftNode;
            
            let newRightNode = new TreeNode(val, null, node.right);
            node.right = newRightNode;
        } else {
            // If the current node is not at the target depth, enqueue its children (if any)
            if (node.left) queue.push({node: node.left, nodeDepth: nodeDepth + 1});
            if (node.right) queue.push({node: node.right, nodeDepth: nodeDepth + 1});
        }
    }
    
    // Return the modified root after adding the new row
    return root;
};