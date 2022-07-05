Array.prototype.myReduce = function(callback, accumulator){
    if(typeof callback !== 'function'){
        throw new Error(
            `Uncaught TypeError: ${callback} is not a function`
        )
    }else if(!accumulator && typeof this[0] === 'string'){
        accumulator = "";
    }
    else if(!accumulator && typeof this[0] === 'number'){
        accumulator = 0;
    }
    for(i=0;i<this.length;i++){
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

const numbers = [7,8,10,40,50];
const sum = numbers.myReduce((acc, value) => acc + value);
console.log(sum);