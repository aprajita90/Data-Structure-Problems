/* Range Sum Query 2D - Immutable
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.*/



/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.dp = [];
    var i, j, top, rowSum;
    var rowLen = matrix[0] ? matrix[0].length : 0;
    for(i = 0; i < matrix.length; i++){
        rowSum = 0;
        for(j = 0; j < rowLen; j++){
            if(!this.dp[i]){
                this.dp[i] = [];
            }
            rowSum += matrix[i][j];
            top = this.dp[i - 1] && this.dp[i - 1][j] ? this.dp[i - 1][j] : 0;
            this.dp[i][j] = top + rowSum;
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var left = this.dp[row2][col1 - 1] ? this.dp[row2][col1 - 1] : 0;
    var top  = this.dp[row1 - 1] ? this.dp[row1 - 1][col2] : 0;
    var topLeft = this.dp[row1 - 1] && this.dp[row1 - 1][col1 - 1] ? this.dp[row1 - 1][col1 - 1] : 0;
    return this.dp[row2][col2] - left - top + topLeft;
};

matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
var test = new NumMatrix(matrix)
//NumMatrix(matrix);
//test.sumRegion(2, 1, 4, 3);// -> 8
//test.sumRegion(1, 1, 2, 2);// -> 11
test.sumRegion(1, 2, 2, 4);// -> 12