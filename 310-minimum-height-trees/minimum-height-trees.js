/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // Special case: tree with only one node
    
    // Construct adjacency list
    const adjList = {};
    for (const [u, v] of edges) {
        if (!adjList[u]) adjList[u] = [];
        if (!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    // Initialize leaves
    let leaves = [];
    for (const node in adjList) {
        if (adjList[node].length === 1) {
            leaves.push(parseInt(node));
        }
    }

    // Iteratively remove leaves until we are left with one or two nodes
    while (n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            const neighbor = adjList[leaf].pop(); // Remove the leaf from its neighbor's adjacency list
            adjList[neighbor].splice(adjList[neighbor].indexOf(leaf), 1); // Remove the neighbor from the leaf's adjacency list
            if (adjList[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }

    // The remaining nodes are the roots of the MHTs
    return leaves;
};