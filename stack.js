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
    Stack.prototype.pop = function() {
        if(this.top === 0)
            return("Stack is Empty!!");
        this.top--;
        return(this.stack[this.top]);
    }
    Stack.prototype.view = function () {
        if(this.top === 0)
            return("Stack is Empty!!");
        console.log("Stack -----")
        for(i=0; i<this.top; i++)
            console.log(this.stack[i]);
    }
    return Stack;
}());

var newStack = new Stack();

newStack.push(9);
newStack.push(5);
newStack.view();
console.log(newStack.pop());
newStack.push(3);
newStack.view();
console.log(newStack.pop());
console.log(newStack.pop());
newStack.view();
console.log(newStack.pop());

