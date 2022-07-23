
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Singly_Linked_List{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    push(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;//pass object reference in head
            this.tail = newNode;//pass object reference in tail
        }else{
            this.tail.next = newNode;//pass object reference in tail.next
            //same reference -> this.tail.next & this.head.next
            this.tail = newNode;//pass object reference of new node in tail
        }
        this.length++;
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(this.length==1){
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;
        }
        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode;

        while(currentNode){
            if(currentNode.next == this.tail){
                newLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;
        return lastNode;
    }
    shift(){
        if(!this.head){
            return null;
        }
        if(this.length==1){
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;
        }
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        return currentNode;
    }
    unshift(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;//pass object reference in head
            this.tail = newNode;//pass object reference in tail
        }else{
            let node = this.head;
            this.head = newNode;
            this.head.next = node;
        }
        this.length++;
    }
    showList(){
        let arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const list = new Singly_Linked_List();

console.log(list.push(6));
console.log(list.push(3));
console.log(list.push(2));
console.log(list.push(8));
console.log(list.push(9));
console.log(list.unshift("Hasan"));
console.log(list.unshift("Humaira"));
// 6->3->2->8->9
console.log(list.showList());


// trial program

// let a = null;
// let b = null;
// let obj = {
//     name: "hasan",
//     next: null
// }
// let arr = [1,3,5];
// let arr2 = [2,4,6];
// let obj2 = {
//     name: "hasan",
//     next: null
// }
// a = obj;
// b = obj;
//b.next = obj2;   a.next->obj2 & b.next->obj2 jabe because same reference

// console.log(a===b);
// console.log(b);
