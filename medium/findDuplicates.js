/*Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]*/

var findDuplicates = function(nums) {
	var arr = []
	var k = {};
	for(var i = 0; i < nums.length; i++){
		if(nums[i] in k){
			k[nums[i]]++
		}else{
			k[nums[i]] = 1;
		}
	}
	for(var i in k){
		if(k[i] === 2){
       		arr.push(Number(i))
		}
	}
    return arr;
};

findDuplicates([4,3,2,7,8,2,3,1])