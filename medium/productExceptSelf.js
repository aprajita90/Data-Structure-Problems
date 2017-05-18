/*Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].*/


var productExceptSelf = function(nums) {
  var i, tmp = 1, leftProduct = [], rightProduct = [];
    leftProduct[0] = 1;
    
    for(i = 1; i < nums.length; i++){
      leftProduct[i] = nums[i - 1] * tmp;
      tmp = leftProduct[i];
    }
    
    rightProduct[nums.length - 1] = 1; 
    tmp = 1;
    for(i = nums.length - 2; i >= 0; i--){
      rightProduct[i] = nums[i + 1] * tmp;
      tmp = rightProduct[i];
    }
    
    for(i = 0; i < nums.length; i++){
      leftProduct[i] = leftProduct[i] * rightProduct[i];
    }
    
  return leftProduct;
};
productExceptSelf([1,2,3,4])