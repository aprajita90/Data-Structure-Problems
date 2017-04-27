/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.*/


var climbStairs = function(n){
  if(n === 1){
	  return 1
  }
  var dp = []
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++){
  	dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp;
}