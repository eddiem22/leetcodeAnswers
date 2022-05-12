var topKFrequent = function(nums, k) {
    let freq = new Map();

    for(let num of nums){
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    
    let arr = [...freq.entries()].sort((a,b) => (a[1] - b[1]))
    let ans = []
    
     let n = arr.length-1;
    
    while(k-- > 0) 
        {   
           
            ans.push(arr[n][0])
            n--;
        }

    return ans
    
};
