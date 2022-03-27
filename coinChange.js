var coinChange = function(coins, amount) {
    let max = amount  + 1;
    var arr = new Array(max).fill(max);
    arr[0]= 0
    
    for(let coin of coins)
    {
        for(let i = coin; i<=amount; ++i)
            {
                arr[i] = Math.min(1 + arr[i-coin], arr[i])
            }
    }
    return arr[amount] < amount + 1 ?  arr[amount] : -1
};
