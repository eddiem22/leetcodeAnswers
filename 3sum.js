var threeSum = function(nums) {
    
    
    if(nums.length < 3) return [];
    nums.sort((a,b) => a - b)
    const triplets = [];
    
    
    let size = nums.length-1;
   
    if(nums > 0){
        return result;
    }
    
    for(let i = 0; i<size-1; i++) {
        if((i>0) && (nums[i] == nums[i-1])){continue}
    
        let left = i+1
        let right = size
        
        while(left < right)
            {
                var sum = (nums[i] + nums[left] + nums[right])
                if(sum == 0) 
                {
                if(!triplets.includes([nums[i], nums[left], nums[right]]))
                {
                triplets.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] == nums[left+1]) {left++}
                while(left < right && nums[right] == nums[right+1]){right--}
                left++;
                right--;
                }
                }
                else if (sum > 0) {
                    right--
            } 
                else {
                left++
            }
                
            }
    }
    
      return triplets
    
};
