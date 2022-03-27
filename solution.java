public class jumpGameII {
    public static void jump(int[] nums) {
        int[] dp= new int[nums.length];
        int end = nums.length-1;
        int curr = -1, next = 0, ans = 0;
        for(int i=0; next<nums.length-1; i++)
        {
            if (i > curr) {
                ans++;
                curr = next;
            };
            next = Math.max(next, nums[i] + i);
            
        }
        system.out.println(ans);
    }


public static void main(String[] args){
    int[] test = new int[100];
    while(i++<test.length-1)
    {
        test[i] = Math.random((int)(1000));
    }
    jump(test);
}}

