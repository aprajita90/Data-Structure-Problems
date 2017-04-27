/*Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var results = nums[0];
    for(var i = 0; i<nums.length; i++){
        results = results ^ nums[i];
    }
    return results
};
