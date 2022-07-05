Array.prototype.myMap = function(callback){
    const finalArr = [];
    if(typeof callback !== 'function'){
        throw new Error(
            `Uncaught TypeError: ${callback} is not a function`
        )
    }
    for(i=0;i<this.length;i++){
        finalArr.push(callback(this[i], i, this));
    }
    return finalArr;
}

const hasan = [2,4,6,"",null];
const custom = hasan.myMap((item, index, array)=>{
    // console.log('val : ',item, 'index: ', index, 'array: ', array)
    return item * 2;
});
console.log(custom);

// const hasan3 = hasan.map((item, index, array)=>{
//     console.log('val : ',item, 'index: ', index, 'array: ', array)
// });
