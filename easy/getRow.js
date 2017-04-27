/*Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?*/

var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1,1];

    var ary = [1];

    for(var i = 1 ; i <= rowIndex ; i++){
       
        var prev = ary[i-1];
        for(var j = 1 ; j < i ; j++ ){
            
            var cur = ary[j] ?　ary[j] : 0;

            ary[j] = prev + cur;

            prev = cur;
        }
        ary.push(1);
    }
    return ary;
};
getRow(4);

//output-[ 1, 4, 6, 4, 1 ]
