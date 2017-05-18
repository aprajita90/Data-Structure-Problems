/*Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var obj = {}
  var freq = [];
  for(var i = 0; i < nums.length; i++){
    if(nums[i] in obj){
      obj[nums[i]]++;
    }else{
      obj[nums[i]] = 1;
    }
  }
  for(var i in obj){
    if(obj[i] >= k){
      freq.push(Number(i))
    }
  }
  return freq  
};
topKFrequent([1,1,1,2,2,3],2)