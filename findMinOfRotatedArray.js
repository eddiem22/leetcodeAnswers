var findMin = function(nums) {
    let start = 0;
    let end = nums.length-1;
    let mid = Math.floor((start+end)/2)
    if(nums[end] > nums[0]){return nums[0]}
    if(nums.length == 1) {return nums[0]}
    while(start <= end)
        {
            mid = start + Math.floor((end-start)/2);
            
            if(nums[mid] > nums[mid+1])
                {return nums[mid+1]}
            if(nums[mid] < nums[mid-1])
                {return nums[mid]}
            
            if(nums[mid] > nums[0])
                {start = mid+1}
            
            else{end = mid-1}
        }
    return -1;
};
