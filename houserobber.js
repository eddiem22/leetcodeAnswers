var rob = function(nums) {
    let size = nums.length
    if(!size) {return 0}
    if(size <= 2) {return Math.max(...nums)}
    
    const dp = Array(size).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    dp[2] = Math.max(nums[0], nums[1], nums[2], nums[0] + nums[2])

    for(let i = 3; i<size; i++)
        {
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
        }
    
    return Math.max(...dp)
    
};
