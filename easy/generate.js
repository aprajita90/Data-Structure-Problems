var generate = function(numRows) {
    if(numRows === 0) return [];

    
    var trigle = [[1]];

    for(var i = 1 ; i < numRows ; i++){
        var prevRow = trigle[i-1]; 
        var curRow  = [1];         

        for(var j = 1 ; j <= i; j++){
            
            var pre =  prevRow[j-1];
            var cur =  prevRow[j] ?  prevRow[j] : 0;
            curRow.push(pre+cur);  
        }
        trigle.push(curRow);
    }

    return trigle;
};

generate(2)