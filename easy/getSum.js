/*Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.*/

var getSum = function(a, b) {//1,2
    if(b===0){
        return a;
    }    
    var sum = 0, carry;
    sum = a^b;
    console.log("----",sum)
    carry = (a&b)<<1
    console.log(carry);
    return getSum(sum, carry);
};

getSum(2,3)

//0010
//0011
//0001

//0010
//0011
//0010<<1 = 0100

//0001
//0100
//0101

//0001
//0100
//0000



