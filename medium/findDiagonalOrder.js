/*498. Diagonal Traverse Add to List
DescriptionHintsSubmissionsSolutions
Total Accepted: 5843
Total Submissions: 12590
Difficulty: Medium
Contributors:
nberserk
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]
Explanation:

Note:
The total number of elements of the given matrix will not exceed 10,000.*/

var findDiagonalOrder = function(matrix){
  if(matrix.length < 0 || matrix[0].length < 0){
    return [];
  }
  var r = 0,c = 0, k = 0,  h = matrix.length, l = matrix[0].length;
  var res = [];
  for(let k = 0; k<h+l-1; ++k){
    var delta = 1 - 2 * (k % 2 === 0);
    var ii = (h - 1) * (k % 2 === 0);
    var jj = (l - 1) * (k % 2 === 0);
    for(var i = ii; i>=0 && i<h; i+=delta){
      for(var j = jj; j>=0 && j<l; j+=delta){
        if(i + j === k){
          res.push(matrix[i][j]);
        }
      }
    }
  }
  return res;
}
var array = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];
findDiagonalOrder(array)
