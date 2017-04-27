/* Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.*/

var lengthOfLastWord = function(s) {
    var ary = s.split(" "); 
    console.log(ary)

    if(s.length === 0) return 0;
    if(ary.length === 0) return 0;

   
    while(ary.length > 0){
        var v = ary.pop();
        console.log(v)
        if(v.length > 0){
            return v.length;
        }

    }

    return 0;
};
lengthOfLastWord("Hello World")