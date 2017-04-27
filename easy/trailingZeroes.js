/*Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.*/

var trailingZeroes= function(n) {
    var result = 0;
    for(var i=5; n/i>=1; i *= 5){
     
        result += (n/i);
    }
    return (result);
};
trailingZeroes(20);