/*Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

*/


var isPalindrome = function(s) {
    s = s.split(' ').join('').split(',').join('').split(':').join('');
    s= s.toLowerCase();
    var rev =''
    for(var i = s.length-1; i >= 0; i--){
      rev = rev + s[i];
    }
    console.log(rev)
    if(s === rev){
      return true;
    }else{
      return false
    }
};

isPalindrome("A man, a plan, a canal: Panama");