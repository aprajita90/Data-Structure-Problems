/*Generate Parentheses Add to List
DescriptionHintsSubmissionsSolutions
Total Accepted: 138981
Total Submissions: 320528
Difficulty: Medium
Contributor: LeetCode
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]*/

var generateParenthesis = function(n) {
  var res = [];
  bfs("", 0, 0);
  return res;
  
  function bfs(tmpStr, countL, countR){
    if(countL === n && countR === n){
      res.push(tmpStr);
      return;
    }
    if(countL !== n ){
      bfs(tmpStr + "(", countL + 1, countR);
    }
    if(countL > countR){
      bfs(tmpStr + ")", countL, countR + 1);
    }
  }
};

generateParenthesis(4)
  
  