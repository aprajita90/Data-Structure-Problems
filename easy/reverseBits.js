/*Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer

Credits:
Special thanks to @ts for adding this problem and creating all test cases.*/


var reverseBits = function(n) {
 if(n == 0) return 0;
    var list = [];

    for(var i = 0 ; i < 32 ; i++){
        if(n > 0){
            list.push(parseInt(n%2));
            n = parseInt(n/2);
        } else {
            list.push(0);
        }
        console.log(list)
    }
   console.log(list.join(''))
    return parseInt(list.join(""),2);
    
};
reverseBits(43261596)