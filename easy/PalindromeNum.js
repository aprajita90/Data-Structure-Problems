/*Determine whether an integer is a palindrome. Do this without extra space.*/
var isPalindrome = function(x){
	var a = x
	var n, rev = 0;
	while(x>0||x<0){
		n = x%10;
		rev = 10 * rev + n;
		x = parseInt(x/10);
	}
	if(a === rev){
		return true;
	}
	return false
}