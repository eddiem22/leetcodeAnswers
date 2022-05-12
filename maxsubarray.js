var maxSubArray = function(nums) {
    
    if(nums.length===0) return;
    if(nums.length===1) return nums[0];
    let max = nums[0];
    let acc = nums[0];
    
    for(let i = 1; i< nums.length; i++)
        {
            let temp = Math.max(nums[i], acc + nums[i])
            if(temp > max) max = temp;
            
            acc = temp;
        }
    return max
};
