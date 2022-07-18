class Queue{
    constructor(){
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(value){
        this.elements[this.tail] = value;
        this.tail++;
    }
    dequeue(){
        if(this.length){
            const element = this.elements[this.head];
            delete this.elements[this.head];
            this.head++;
            return element;
        }
        return undefined;
    }
    peek(){
        if(this.length){
            return this.elements[this.head];
        }
        return undefined;
    }
    get length(){
        return this.tail - this.head;
    }
}

const queue = new Queue();

console.log(queue.enqueue(4))
console.log(queue.enqueue(5))
console.log(queue.enqueue(8))
console.log(queue)