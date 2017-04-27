/*Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321*/

var reverse = function(x){
	var n, rev = 0;
	while(x>0||x<0){
		n = x%10;
		rev = 10 * rev + n;
		x = parseInt(x/10);
	}
	return rev
}