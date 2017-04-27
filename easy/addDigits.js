/*
For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
Hint:

A naive implementation of the above process is trivial. Could you come up with other methods? */


var addDigits = function(num) {
    var sum = 0;
    if(num === 0){
        return sum
    }
    return sum + parseInt(sum + num%10 + addDigits(parseInt(num/10)))%10 + addDigits(parseInt(sum + num%10 + addDigits(parseInt(num/10)))/10);
};

addDigits(38)