Array.prototype.myMap = function(callback){
    const finalArr = [];
    if(typeof callback !== 'function'){
        throw new Error(
            `Uncaught TypeError: ${callback} is not a function`
        )
    }
    for(i=0;i<this.length;i++){
        finalArr[i] = callback(this[i]);
    }
    return finalArr;
}

const hasan = [2,4,6,"",null];
const hasan2 = hasan.myMap(item=>item + 2);


const hasan3 = hasan.map(item=>item + 2);
console.log(hasan2);
console.log(hasan3);