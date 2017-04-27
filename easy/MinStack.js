
var MinStack = function() {
    this.storage = [];
    this.count = 0;
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.storage.push(x)
    this.count++;
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  
    var remove = this.storage[(this.count - 1)];
    this.storage.splice(this.count - 1,1);
    this.count--;
    return remove
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.storage[this.count-1] 
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var num;
    for(var i = 0; i<this.storage.length; i++) {
       for(var j = 0; j<this.storage.length; j++) {
           if(this.storage[i] < this.storage[j]){
               num = this.storage[i]
           }
       }
    }
    return num
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // --> Returns -3.
console.log(minStack.pop());
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.
