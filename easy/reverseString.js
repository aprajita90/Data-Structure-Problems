/*Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

*/

var reverseString = function(s) {
    var temp;
    s = s.split('')
    for(var i = 0; i<s.length/2; i++){
        temp = s[i];
        s[i] = s[s.length-1 - i];
        s[s.length-1 - i] = temp;
    }
    return s.join('')
};
reverseString("aprajita")