/*Given an integer, write a function to determine if it is a power of two.*/

var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    return !(n&(n-1));
};