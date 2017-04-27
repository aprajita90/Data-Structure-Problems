/*Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.*/

var romanToInt = function(s) {
    var sum = 0; 
    var obj = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    if(s.length<0){
        return 0;
    }
    if(s === s.toLowerCase() && s.length!==0){
    return "null"
    }
    for(var i = 0; i < s.length; i++){
        if(obj[s[i]] < obj[s[i+1]]){
            sum -= obj[s[i]]
        }else{
            sum += obj[s[i]]
        }
    }
    return sum;
};