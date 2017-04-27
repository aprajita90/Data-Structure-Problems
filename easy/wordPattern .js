/*Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.*/


var wordPattern = function(pattern, str) {
  pattern = pattern.split("");
  str=str.split(" ");
  var mapP = {};
  var mapS={};
  for(i in pattern){
    var valueP = pattern[i]
    var valueS = str[i]
    if(!mapP[valueP]){
      mapP[valueP] = valueS
    }else if(mapP[valueP] != valueS){
      return false
    }
    if(!mapS[valueS]){
      mapP[valueS] = valueP;
    }else if(mapP[valueS] != valueP){
      return false
    }
  }
  return true;
};