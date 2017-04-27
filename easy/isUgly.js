/*Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.*/



var isUgly = function(num) {
   for (var p of [2, 3, 5])
    while (num && num % p == 0)
        num /= p;
return num == 1;
};



////OR////

function isUgly(num) {
    if (num <= 0) {return false;}
    if (num == 1) {return true;}
    if (num % 2 == 0) {
        return isUgly(num/2);
    }
    if (num % 3 == 0) {
        return isUgly(num/3);
    }
    if (num % 5 == 0) {
        return isUgly(num/5);
    }
    return false;
}


isUgly(1)


//subset question

// function subset_sum(numbers, target, array) {
//     var s = array.reduce(function(a,b){return a + b}, 0);

//     if(s == target) { 
//         console.log(array, target)
//     }
//     if(s >= target)
//         return;

//     for (i= 0; i<6; i++) {
//     	var n = numbers[i];
//     	var remaining = numbers.slice(i+1);
//     	var k = array.slice();
//     	subset_sum(remaining, target, k.concat(n));

//     }
// }
        



