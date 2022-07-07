/********** Sum array element *********/
function recursion(arr){
    if(arr.length === 0){
        return 0;
    }
    let rest = arr.slice(1);
    return arr[0] + recursion(rest);
}
console.log(recursion([2,4,5,8]));

/********** Factorial *********/
function factorial(n){
    if(n === 0){
        console.log("hasan");
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(2));