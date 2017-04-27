/*Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Subscribe to see which companies asked this question.*/


var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;

    
    var map = {};

    for(var i in nums){
      
        var v = nums[i];
        
       console.log(map)
        if(map[v] && (i - map[v] <= k)){
           
            return true;
        }
        map[v] = i;
    }
    return false;
};

containsNearbyDuplicate([1,5,3,4,3], 3)


////OR//////

var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;

    
    var map = {};

   for(var i = 0; i<nums.length; i++){
     if(nums[i] in map){
       map[nums[i]]++
     }else{
       map[nums[i]]=1
     }
   }
   console.log(map)
   for(var i in map){
     //console.log(map[i])
     if(map[i] === 2){
       i = Number(i);
       if(i === k){
         return true
       }
     }
   }
   return false
};

containsNearbyDuplicate([1,5,3,4,3,7,7], 7)