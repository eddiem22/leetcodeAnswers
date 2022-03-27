class Solution {
public:
    bool isValid(string s) {
        if(s.length()%2 != 0) {return false;}
        stack<char> check;
        for(int i = 0; i< s.length(); i++)
        {
            if(s[i] == '(' || (s[i] == '{') || (s[i] == '['))
            {check.push(s[i]);}
            else if( s[i] == ')' && (!check.empty()) && (check.top() == '('))
            {check.pop();}
            else if( s[i] == '}' && (!check.empty()) && (check.top() == '{'))
            {check.pop();}
            else if( s[i] == ']' && (!check.empty()) && (check.top() == '['))
            {check.pop();}
            else {check.push(s[i]);}
        }
            return check.empty();
    }
};
