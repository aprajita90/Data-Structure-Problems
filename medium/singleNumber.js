/*Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?*/


var singleNumber = function(nums) {
var ones = 0, twos = 0, threes = 0;
  for(var i = 0; i < nums.length; i++){
    twos |= ones & nums[i];
    console.log(twos)
    ones ^= nums[i];
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
 }
return ones;
};

singleNumber([1,2,3,4])

