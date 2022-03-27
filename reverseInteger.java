public class reverseInteger
{
    public static int reverse(int x) {
        String num = Integer.toString(x);
        String temp= "";
        String neg="-";
        boolean negative = false;
        for(int i = num.length()-1; i>=0; i--)
        {
            if(Character.isDigit(num.charAt(i)))
            {
            temp+=num.charAt(i);
            }
            
            else
            {negative=true;}
        }
        if(negative==false && ((Long.parseLong(temp))<Integer.MAX_VALUE))
        {
        int answer = Integer.parseInt(temp);
        return answer;
        }
        else if(negative==true && temp.length()>0 && ((Long.parseLong(temp))<Integer.MAX_VALUE))
        {
            int answer = Integer.parseInt(temp);
            answer= 0-answer;
            return answer;
        }
        return 0;
    }
}
