Array.prototype.myFilter = function(callback){
    const filterArr = [];
    if(typeof callback !== 'function'){
        throw new Error(
            `Uncaught TypeError: ${callback} is not a function`
        )
    }
    for(i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            filterArr.push(this[i]);
        }
    }
    return filterArr;
}

const numbers = [7,8,10,40,50];
const filterNumbers = numbers.myFilter(value => value > 10);
console.log(filterNumbers);