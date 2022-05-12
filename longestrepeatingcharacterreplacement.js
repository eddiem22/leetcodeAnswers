var characterReplacement = function(s, k) {
    let maxLength = 0;
    let maxFreq = 0;
    let l = 0;
    let freq = {}
    
    for(let r =0; r<s.length; r++)
        {
            freq[s[r]] ? freq[s[r]]++ : freq[s[r]] = 1
            maxFreq = Math.max(freq[s[r]], maxFreq)
            
            while((r-l + 1) - maxFreq > k)
                {
                    freq[s[l]]--;
                    l++;
                }
            
            maxLength = Math.max((r-l+1), maxLength)
 
        }
    
    return maxLength;
};
