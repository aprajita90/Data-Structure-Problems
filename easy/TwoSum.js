/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/

var twoSum = function(nums, target){
	var result = [];
	for(var i = 0; i < nums.length; i++){
		for(var j = 1+i; j < nums.length; j++){
			if(nums[i]+num[j] === target){
				return ([i,j])
			}
		}
	}
}
//------------second method liner complexcity
var twoSum = function(nums, target){
	var obj = {};
	for(var i = 0; i<nums.length; i++){
		if(nums[i] in obj){
			//obj[nums[i]]++;
			return(obj[nums[i], i])
		}else{
			obj[target-nums[i]] = i
		}
	}
}

//constant = o(1)
//logarithmic = o(log n)
//linear = o(n)
//quadratic  = o(n^2);
//exponential = o(c^n)