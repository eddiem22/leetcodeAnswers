var maxDepth = function(root) {
    
    let depth = 0;
    
    let dfs = (node, value) => {
    if(!node) return
    
    depth = Math.max(depth, value)
    dfs(node.left, value+1)
    dfs(node.right, value + 1)
}
    dfs(root, 1)
    return depth
    
    
};
