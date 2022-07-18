/*********** FIFO -> First in First Out ***********/
//as a bluprint
class Queue{
    constructor(){
        this.arr = [];
    }
    push(value){
        this.arr.push(value);
    }

    pop(){
        if(this.arr.length > 0){
            return this.arr.shift();
        }
        else{
            return 'Underflow situation';
        }
    }
    peek(){
        if(this.arr.length > 0) {
            return this.arr[0];
        } else {
            return "The Queue is empty!";
        }
    }
    print(){
        return this.arr;
    }
}
const queue = new Queue();//object instance of Queue
queue.push(5);
queue.push(8)
queue.push(7)
queue.push(4)
// queue.pop()
// console.log(queue.push(5))
// console.log(queue.push(7))
console.log(queue.pop())
console.log(queue.print())