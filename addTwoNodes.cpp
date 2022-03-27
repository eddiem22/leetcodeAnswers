class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* temp1 = l1;
        ListNode* temp2 = l2;
        ListNode* final = new ListNode(0);
        ListNode* finalnext = final;
        
        int sum, l1_val, l2_val = 0;
        bool carry = false;
        while(temp1 != NULL || temp2 != NULL)
        {
            sum = 0;
            if(temp1 == NULL)
            {sum += temp2->val; temp2 = temp2->next; }
            else if(temp2 == NULL)
            {sum += temp1->val; temp1 = temp1->next;}
            else
            {
            l1_val = temp1->val;
            l2_val = temp2->val;
            sum += l1_val+l2_val; 
            temp1 = temp1->next;
            temp2 = temp2->next;
            }
            if(carry == true) {sum++;}
            if(sum >= 10) {carry = true; sum %=10;}
            else if(sum < 10) {carry = false;}
            ListNode* newNode = new ListNode(sum);
            finalnext->next = newNode;
            finalnext = finalnext->next;      
        }
        if(carry == true){finalnext->next = new ListNode(1);}
        return final->next;
    }
};
