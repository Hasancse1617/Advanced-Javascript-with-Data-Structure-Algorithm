/********** Sum array element *********/
function recursion(arr, index=0){
    if(arr.length === index){
        return 0;
    }
    return arr[index] + recursion(arr, ++index);
}
console.log(recursion([2,4,5,8]));

/********** Factorial *********/
function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));

/********** Find Odd Number *********/
function findOddNumber(arr, index=0, finalArr=[]){
     if(arr.length === index){
        return finalArr;
     }
     if(arr[index]%2 === 0){
        finalArr.push(arr[index]);
        return findOddNumber(arr, ++index, finalArr);
     }
     if(arr[index]%2 !== 0){
        return findOddNumber(arr, ++index, finalArr);
     }
}
console.log(findOddNumber([2,4,5,7,6,8]));