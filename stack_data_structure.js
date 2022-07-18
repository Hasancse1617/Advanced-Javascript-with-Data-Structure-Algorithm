/*********** LIFO -> Last in First Out ***********/

class Stack{
    constructor(){
        this.arr = [];
    }
    push(value){
        this.arr.push(value);
        return this.arr;
    }

    pop(){
        this.arr.pop();
        return this.arr;
    }

    lookup(){
        return this.arr[this.arr.length - 1];
    }
}
const stack = new Stack();
stack.push(5);
stack.push(8)
stack.pop()
// console.log(stack.push(5))
// console.log(stack.push(7))
console.log(stack.lookup())