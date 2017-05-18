/*Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.
Note: The length of given array won't exceed 10000.*/

var nextGreaterElements = function(nums) {
  var nextGreaterMap = {};
    var stack = [];
    console.log(nums.concat(nums))
    nums.concat(nums).forEach(function(item){
        while (stack.length > 0 && stack[stack.length - 1] < item) {
            var key = stack.pop();
            if (nextGreaterMap[key] === undefined) {
                nextGreaterMap[key] = [];
            }
            nextGreaterMap[key].push(item);
        }
        stack.push(item);
    });

    return nums.map(function(item) {
        if (nextGreaterMap[item] && nextGreaterMap[item].length > 0) {
            return nextGreaterMap[item].shift();
        } else {
            return -1;
        }
    });
};
nextGreaterElements([1,2,1])
