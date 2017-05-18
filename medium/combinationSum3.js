/*Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]*/


var combinationSum3 = function(k, n) {
    var result = [];
    search(1, [], k, n);
    return result;

    function search(from, prefix, k, n) {
        if (k === 0 && n === 0) return result.push(prefix);
        if (from > 9) return;
        search(from + 1, prefix.concat(from), k - 1, n - from);
        search(from + 1, prefix, k, n);
    }
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 12));