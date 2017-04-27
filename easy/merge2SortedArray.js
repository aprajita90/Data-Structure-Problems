/*Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

Subscribe to see which companies asked this question.*/

var merge = function(nums1, m, nums2, n) {

    var index = 0;
   
    for(var i = m ; i < m+n ; i++){
            nums1[i] = nums2[index];
            index++;
    }

    
    for(var j = 0 ; j < nums1.length - 1 ; j++){
        for(var k = j + 1 ; k < nums1.length ; k++){
            if(nums1[j] > nums1[k]){
                var temp = nums1[j];
                nums1[j] = nums1[k];
                nums1[k] = temp;
            }
        }
    }
};