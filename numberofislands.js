var numIslands = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    let counter = 0;
    
    const erase = (grid, i, j) =>
    {
        if(i<0 || j<0 || i>=m || j>=n || grid[i][j] === "0") return;
        
        grid[i][j] = "0"
        
        erase(grid, i+1, j) 
        erase(grid, i-1, j)
        erase(grid, i, j+1)
        erase(grid, i, j-1)
    } 
    
    for(let i = 0; i<m; i++)
        {
            for(let j = 0; j<n; j++)
                {
                    if(grid[i][j] == "1")
                    {
                        erase(grid, i, j)
                        counter++
                    }
                }
        }
    return counter;
};
