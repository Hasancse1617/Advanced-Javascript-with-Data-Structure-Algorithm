class Stack{
    constructor(){
        this.database = {};
        this.count = 0;
    }
    push(value){
        this.count++;
        this.database[this.count] = value;
        return this.database;
    }
    pop(){
        const deleteItem = this.database[this.count];
        delete this.database[this.count];
        this.count--;
        return deleteItem;
    }
    lookup(){
        return this.database[this.count];
    }
}

const stack = new Stack();
console.log(stack.push("Hasan"));
console.log(stack.push("Ali"));
console.log(stack.push("Hasan"));
console.log(stack.pop());