/*  Intersection of Two Linked Lists


Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
Credits:
Special thanks to @stellari for adding this problem and creating all test cases.*/

var node = function(val){
  this.val = val
  this.next = null
}
var getItenterSectionNode = function(headA, headB){
  
  var diff = getDiff(headA, headB);
  if(diff > 0){
    while(diff>0){
      headA = headA.next;
      diff--;
    }
  }else{
    while(diff<0){
      headB = neadB.next;
      diff++;
    }
  }
  while(headA !== null){
    id(headA === headB){
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
   return null;
  function getDihff(nodeA,nodeB){
    var aLength = 0;
    var bLength = 0;
    while(nodeA !== null){
      aLength++;
      nodeA = nodeA.next;
    }
    while(nodeB !== null){
      bLength++;
      nodeB = nodeB.next;
    }
  return aLength - bLength;
  }