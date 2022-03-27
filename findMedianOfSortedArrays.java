class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] merge = new int[nums1.length + nums2.length];
 
            int i = 0, j = 0, k = 0;
         while (i < nums1.length && j < nums2.length)
    {
        if (nums1[i] < nums2[j])
        {
            merge[k] = nums1[i];
            i++;
        }
        else
        {
            merge[k] = nums2[j];
            j++;
        }
        k++;
    }

    while (i < nums1.length)
    {
        merge[k] = nums1[i];
        i++;
        k++;
    }

    while (j < nums2.length)
    {
        merge[k] = nums2[j];
        j++;
        k++;
    } 
                   
        double median =0;
        if(merge.length%2==0)
        {
            median = (double)(merge[merge.length/2] + merge[merge.length/2 -1])/2;
            return (double)median;
        }
        
        else 
        {median = (double)merge[merge.length/2];}
        return (double)median;
    }
}
