/* Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  var removeElements = function(head, val) {
    if(head === null){
      return null;
    }
  var node = new ListNode(0);
  var prev = node;
  node.next = head;
  while(head !== null){
    if(head.val !== val){
      prev = head;
      head = head.next;
    }else{
      prev.next = head.next;
      head = head.next;
    }
  }
  return node.next;
};