/*Description:

Count the number of prime numbers less than a non-negative number, n.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Hint:

Let's start with a isPrime function. To determine if a number is prime, we need to check if it is not divisible by any number less than n. The runtime complexity of isPrime function would be O(n) and hence counting the total prime numbers up to n would be O(n2). Could we do better?

Show More Hint 
*/


var countPrimes = function(n) {
   var count = 0, i, j, dict = [],
     len = Math.floor(Math.sqrt(n));
     console.log(len)
     for(i = 2; i <= len; i++)
         for(j = 2; i * j <= n; j++)
             dict[i * j] = false;
     for(i = 2; i < n; i++)
     if(dict[i] === undefined) count++;
     return count;
};

countPrimes(36);