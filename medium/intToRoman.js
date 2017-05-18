/*Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

Subscribe to see which companies asked this question.*/


var intToRoman = function(num) {
  var roman = [];
  var values =[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var str = ["M", "CM", "D", "c", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for(var i = 0; i<values.length; i++){
      while(num >= values[i]){
        num -= values[i];
        roman.push(str[i]);
      }
    }
    return roman.join('')
};

console.log(intToRoman(500))
