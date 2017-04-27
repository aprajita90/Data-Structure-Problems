/*Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1*/


var isHappy = function(n) {
   var x = n;
   var y = y;
   while(x>1){
       x = sumDigit(x);
       if(x===1) return true;
       y=sumDigit(sumDigit(y));
       if(y===1)return true;
       
       if(x===y) return false;
   }
   return true;
};
var sumDigit = function(){
    var sum = 0;
    while(n<0){
        var num = n%10
        num = num*num;
        sum = sum + num;
        n=n/10
    } 
    return sum
}