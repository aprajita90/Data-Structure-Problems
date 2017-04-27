/*Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.*/



var isIsomorphic = function(s, t) {

    var mapS = {};
    var mapT = {};

    for(var i in s){
   
        var valueS = s[i];
        var valueT = t[i];
        if(!mapS[valueS]){
            mapS[valueS] = valueT;
        } else if(mapS[valueS] != valueT) { 
            return false;
        }
        if(!mapT[valueT]){
            mapT[valueT] = valueS;
        } else if(mapT[valueT] != valueS) { 
            return false;
        }
    }
    
    return true;
};

//isIsomorphic("egg", "add")
//isIsomorphic("foo", "bar")
isIsomorphic("paper", "titll");