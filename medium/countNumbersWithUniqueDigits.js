/*Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])

Credits:
Special thanks to @memoryless for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.

Show Tags
*/
var permutation = function( n, r)
    {
        if(r === 0)
        {
            return 1;
        }else{
            return n * permutation(n - 1, r - 1);
        }
    }

var countNumbersWithUniqueDigits = function(n) {
    var sum = 1;
        if(n > 0)
        {
           var end = (n > 10)? 10 : n;
           for(var i = 0; i < end; i++)
           {
               sum += 9 * permutation(9, i);
           }
        }
        return sum;
};
countNumbersWithUniqueDigits(2)


   