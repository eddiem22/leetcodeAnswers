var subsets = function(nums) {
    
    let result = [];
    
    
    const dfs = (temp, start) => {
        result.push(temp)
        
        for(let i = start; i<nums.length; i++){
            dfs(temp.concat(nums[i]), i+1)
        }
    }
    
    dfs([], 0)
    return result
    
};
