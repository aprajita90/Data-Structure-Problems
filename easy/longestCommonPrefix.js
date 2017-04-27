/**
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function(strs) {
//     if(str === null || str.length === 0){
//         return "";
//     }
//     var pre = str[0];
//     var i = 1;
//     while(i<str.length){
//         while(str[i].indexOf(pre) !== 0){
//             pre = pre.substring(0, pre.length()-1);
//             i++;
//         }
//         return pre
//     }
    
// };

// var longestCommonPrefix = function(strs) {
//     if(strs === undefined || strs.length === 0){
//         return "";
//     }
//     return strs.reduce(function(prev,next){
//       var i = 0;
//       while(prev[i] && next[i] && prev[i] === next[i]){
//           i++;
//       }
//       return prev.slice(0,i);
//     });
// };

// var longestCommonPrefix = function(strs) {
//     if(strs.length == 0) return '';
//     var result = '';
//     for(var i = 0; i < strs[0].length; i++) {
//         if (strs.every(function (item) {
//                 return strs[0][i] === item[i];
//             })) {
//             result += strs[0][i];
//         } else {
//             break;
//         }
//     }
//     return result;
// };

var longestCommonPrefix = function(strs) {
if(strs.length === 0){
    return "";
}else if(strs.length === 1){
    return strs[0];
}else if(strs.length ===2){
    for(var i = 0; strs[0][i] && strs[0][i]===strs[1][i]; i++){}
    return strs[0].slice(0,i);
}else{
    var half = (strs.length/2)>>0;
    var halfstrs = [];
    halfstrs.push(longestCommonPrefix(strs.slice(0,half)));
    halfstrs.push(longestCommonPrefix(strs.slice(half,strs.length)));
    return longestCommonPrefix(halfstrs);
}
};