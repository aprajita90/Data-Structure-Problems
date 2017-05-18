/*You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    var number=[];
    var queue=Array();
    var max=0;
    if(root===null) return number;
    queue.push(root);
    while(queue.length!==0) {
        var size=queue.length;
        var max=queue[0].val;
        for(var i=0;i<size;i++) {
            var node=queue[0];
            queue.splice(0,1);
            var max=Math.max(max,node.val);
            if(node.left!==null) {
                queue.push(node.left);
            }
            if(node.right!==null) {
                queue.push(node.right);
            }
        }
        number.push(max);
    }
    return number;
};

// var root = {
//   1:{
//     2:{
//       9:null
//     },
//     3:{
//       5:null,
//       3:null
//     }
//   }
// }
// largestValues(root)

 
