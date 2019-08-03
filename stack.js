// implement stack

var Stack = (function () {

    function Stack() {
      //The top of the Stack
      this.top = 0;
      //The array representation of the stack
      this.stack = new Array();
    }

    //Adds a value onto the end of the stack
    Stack.prototype.push = function (value) {
      this.stack[this.top] = value;
      this.top++;
    };
    return Stack;
}());

var newStack = new Stack();

newStack.push(9);
console.log(newStack);