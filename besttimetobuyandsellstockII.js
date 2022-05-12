var maxProfit = function(prices) {
      
   let profit = 0;
    let n = prices.length;
    
    for(let i = 1; i<n ;i++ )
        {
            if(prices[i-1] < prices[i])
                {
                    profit+= prices[i] - prices[i-1]
                }
        }
                
    
    return profit;
};
