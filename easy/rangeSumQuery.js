/*Range Sum Query - Immutable

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:

Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:

You may assume that the array does not change.
There are many calls to sumRange function.*/

var NumArray = function(nums) {
 this.num = [];
  var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        this.num.push(sum);
        
    }
    console.log(this.num)
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0){
      console.log(this.num[j])
        return this.num[j];
    }
    console.log(this.num[j] - this.num[i-1])
    return (this.num[j] - this.num[i-1]);
};
// var obj = Object.create(NumArray).createNew(nums)

// var param_1 = obj.sumRange(i,j)
nums = [-2, 0, 3, -5, 2, -1];
var react = new NumArray(nums);

//react.NumArray([-2, 0, 3, -5, 2, -1])
//react.sumRange(0,2)
react.sumRange(2,5)
//react.sumRange(0,5)


//sumRange(0, 2);