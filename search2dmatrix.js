var searchMatrix = function(matrix, target) {
    
    const binarySearch = (row, start, end, target) => {
        if(start<=end){
            let mid = Math.floor((start+end)/2)
            if(row[mid] == target) return true
            if(row[mid] < target) return binarySearch(row, mid+1, end, target)
            if(row[mid] > target) return binarySearch(row, start, mid-1, target)
        }
        return -1;
    }
    
    
   for(let row of matrix)
       {
          if(row[row.length-1] < target) continue
          else if(row[0] <= target && row[row.length-1] >= target){
              if(binarySearch(row, 0, row.length-1, target) != -1) return true
          }
       }
   
return false
};
