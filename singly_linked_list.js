
//********* Linked List = 10->4->8->23->97 *********/

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
    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
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
    deleteAt(pos){
        if(!this.head){
            return null;
        }
        if(this.length === 1){
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;
        }
        let first = this.head;
        // let second = first.next;
        let position = 1;
        while(first && pos <= this.length){
            if(pos === 1){
                let currentNode = this.head;
                this.head = currentNode.next;
                this.length--;
                return currentNode;
            }
            else if(position === this.length-1 && pos === this.length){
                let newLastNode = first;
                let removeNode = first.next;
                first.next = null;
                this.tail = newLastNode;
                this.length--;
                // console.log(first);
                return removeNode;
            }
            else if(position === pos - 1){
                const removeNode = first.next;
                const second = removeNode.next;
                first.next = second;
                // console.log(first,second);
                this.length--;
                return removeNode;
            }
            // console.log(first, position);
            first = first.next;
            position++;
        }
    }
    pushAt(value, pos){
       let newNode = new Node(value);
       if(this.isEmpty() && pos === 1){
           this.head = newNode;
           this.tail = newNode;
       }
       else{
            let first = this.head;
            let second = first.next;
            let position = 1;
            while(first && pos >= position){
                if(pos === 1){// add first position
                    this.head = newNode;
                    this.head.next = first;
                    // console.log(first);
                    this.length++;
                }
                else if(position === this.length + 1){//add last position
                    first.next = newNode;
                    this.tail = newNode;
                    this.length++;
                }
                else if(position === pos-1){//add middle position
                    second = first.next;
                    // console.log(second);
                    first.next = newNode;
                    newNode.next = second;
                    this.length++;
                }
                // console.log(first, position);
                first = first.next;
                position++;//loop increment
            }
       }
       
    }
}

const list = new Singly_Linked_List();

list.push(6);
list.push(3);
list.push(2);
list.push(8);
list.push(9);
list.unshift("Hasan");
list.unshift("Humaira");
console.log(list.showList());
// 6->3->2->8->9
// console.log(list.reverse());
// console.log(list.showList());
// list.pushAt(4, 1);
console.log(list.deleteAt(2));
console.log(list.showList());
console.log(list);



// trial program of object reference check

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
